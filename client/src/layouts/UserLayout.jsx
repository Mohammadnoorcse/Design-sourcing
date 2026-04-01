import { Outlet } from "react-router-dom";
import UserHeader from "../global/User/UserHeader";
import Footer from "../global/User/Footer";

export default function UserLayout() {
  return (
    <div>
      <UserHeader/>

      <Outlet />

      <Footer/>
    </div>
  );
}