import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Default site layout component
 */
export const Layout = ({ wrapperClass, menuDoc, children }) => {
  return (
    <div className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer />
    </div>
  );
};
