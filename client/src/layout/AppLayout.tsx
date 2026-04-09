import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const LayoutContent = () => {
    return (
        <>
        <div>
            <AppSidebar />
        </div>
        <div>
            <AppHeader />
        </div>
        <div className="p-20 -mml-14 sm:ml-52">
          <Outlet />
        </div>
        </>
    );
};

const AppLayout = () => {
  return (
    <>
    <LayoutContent />
    </>
  );
};

export default AppLayout;
