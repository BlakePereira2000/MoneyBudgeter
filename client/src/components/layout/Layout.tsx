import Header from "./Header";
import Footer from "./Footer";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: ComponentProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
