import React, { ReactNode } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const { Header, Content, Footer: PageFooter } = Layout;

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
      <PageFooter>
        <Footer />
      </PageFooter>
    </Layout>
  );
};

export default Page;

// import React from "react";
// import './Page.css'
// import { Layout, Menu } from "antd";
// import twitter from "../../../images/landingpage/X.jpg";
// import youtube from "../../../images/landingpage/Youtube.jpg";
// import instagram from "../../../images/landingpage/Instagram logo.png";

// export default function Page () {

//   const { Navbar, Footer, Content } = Layout;

//   return (
//     <Layout>
//       <Navbar>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           {/* <Menu.Item key="1">About As</Menu.Item>
//           <Menu.Item key="2">Products</Menu.Item>
//           <Menu.Item key="3">Solutions</Menu.Item>
//           <Menu.Item key="3">Resources</Menu.Item>
//           <Menu.Item key="3">Dashboard</Menu.Item>
//           <Menu.Item key="3">Prices & Plans</Menu.Item> */}
//           <div className="top-navbar flex-space-between-center">
//             <div>
//               <p className="nav-bar-logo">logo</p>
//             </div>
//             <div className="flex-flex-start-center">
//               <Menu.Item key="1">About As</Menu.Item>
//               <Menu.Item key="2">Products</Menu.Item>
//               <Menu.Item key="3">Solutions</Menu.Item>
//               <Menu.Item key="3">Resources</Menu.Item>
//               <Menu.Item key="3">Dashboard</Menu.Item>
//               <Menu.Item key="3">Prices & Plans</Menu.Item>
//             </div>
//             <div className="flex-flex-start-center">
//               <div className="get-demo-btn mr-8px">Get a Demo</div>
//               <di className="contact-us-btn">Contact Us</di>
//             </div>
//           </div>
//         </Menu>
//       </Navbar>
//       <Content>{/* main content goes here */}</Content>
//       <Footer style={{ textAlign: "center" }}>
//         <div>
//           <div className="top-head">
//             <p>Logo</p>
//             <p> 2018 - 2023 CompanyName Inc.</p>
//             <div className="flex-flex-start-center gap">
//               <img src={twitter} alt="" className="x mr-10px" />
//               <img src={youtube} alt="" className="tube mr-10px" />
//               <img src={instagram} alt=" " className="insta mr-10px" />
//             </div>
//           </div>

//           <div
//             style={{ padding: "0px 10%", marginTop: "30px", cursor: "pointer" }}
//             className="flex-flex-start-flex-start"
//           >
//             <div className="footer-first " style={{ marginRight: "42px" }}>
//               <p className="main-heading1">Company</p>
//               <p className="main-subheading">About us</p>
//               <p className="main-subheading">Careers</p>
//               <p className="main-subheading">Get Demo</p>
//             </div>

//             <div className="footer-first " style={{ marginRight: "42px" }}>
//               <p className="main-heading1">Resource</p>
//               <p className="main-subheading">Documentation</p>
//               <p className="main-subheading">Testimonials</p>
//               <p className="main-subheading">Blogs</p>
//             </div>

//             <div className="footer-first " style={{ marginRight: "42px" }}>
//               <p className="main-heading1">Solution</p>
//               <p className="main-subheading">Data Management</p>
//               <p className="main-subheading">No code Solution</p>
//               <p className="main-subheading">Integration</p>
//             </div>
//           </div>
//         </div>
//       </Footer>
//     </Layout>
//   );
// }
