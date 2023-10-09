import React, { useState } from "react";
import "./index.css";
import { Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineReport, MdSecurity, MdBrowserUpdated } from "react-icons/md";
import { useNavigate } from "react-router";
import { Footer } from "../../../common/page/Footer";

const Dashboard: React.FC = () => {
  const [selected, setselected] = useState("/");

  const navigate = useNavigate();
  const onClick = (e: { key: string }) => {
    console.log(e.key, "element");
    setselected(e.key);
    navigate(`${e.key}`);
  };

  return (
    <div>
      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className="dash-logo-main ">
            <p className="dash-logo">Logo</p>
          </div>
          <div className="menus">
            <Menu
              onClick={onClick}
              selectedKeys={[selected]}
              items={[
                { label: "Dashboard", key: "/", icon: <DashboardOutlined /> },
                {
                  label: "Activities",
                  key: "/activites",
                  icon: <TbActivityHeartbeat />,
                },
                {
                  label: "Reports",
                  key: "/reports",
                  icon: <MdOutlineReport />,
                },
                {
                  label: "Security Status",
                  key: "/securitystatus",
                  icon: <MdSecurity />,
                },
                {
                  label: "Products Updates",
                  key: "/productsUpdates",
                  icon: <MdBrowserUpdated />,
                },
                {
                  label: "Settings",
                  key: "/productsUpdates",
                  icon: <MdBrowserUpdated />,
                },
                {
                  label: "Logout",
                  key: "/productsUpdates",
                  icon: <MdBrowserUpdated />,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="footer-bg">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
