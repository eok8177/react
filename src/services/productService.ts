import { ProductType } from "@/types/ProductType";

export function createResource<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let suspender = promise
    .then(data => {
      status = 'success';
      result = data;
    })
    .catch(error => {
      status = 'error';
      result = error;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else {
        return result;
      }
    }
  };
}

interface CacheEntry {
  resource: ReturnType<typeof createResource<ProductType>>;
  timestamp: number;
}

// Cache for product resources
const productCache = new Map<string, CacheEntry>();

// Products list cache
const productsListCache = createResource<ProductType[]>(
  fetch("https://fakestoreapi.com/products?limit=18")
    .then(res => res.json())
);

export function fetchProducts() {
  return productsListCache;
}

export function fetchProduct(id: string) {
  const now = Date.now();
  const cached = productCache.get(id);
  const CACHE_DURATION = 30000; // 30 seconds

  // Use cached version if it exists and is fresh
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.resource;
  }

  // Create new resource and update cache
  const resource = createResource<ProductType>(
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
  );

  productCache.set(id, { resource, timestamp: now });
  return resource;
}
