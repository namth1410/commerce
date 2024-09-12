import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

function MasterLayout() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default MasterLayout;
