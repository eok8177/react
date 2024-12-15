import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "@/assets/index.scss";
import Layout from "@/Layout";
import Product from "@/components/Product";
import Products from "@/components/Products";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
