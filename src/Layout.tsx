import { Link } from "react-router";
import reactLogo from "/assets/react.svg";
import viteLogo from "/assets/vite.svg";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <div className="header">
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <Link to="/">Products</Link>
      </div>

      {children}

    </>
  );
}

export default Layout;
