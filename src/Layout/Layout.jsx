import { Navbar, Header} from "../components";

const Layout = ({ isLayout, children }) => {
  return (
    <>
      {isLayout && <Header />}
      {children}
    </>
  );
};

export default Layout;
