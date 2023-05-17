import { Navbar } from "../components";

const Layout = ({ isLayout, children }) => {
  return (
    <>
      {isLayout && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
