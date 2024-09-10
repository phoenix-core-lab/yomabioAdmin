import React from "react";
import logo from "../assets/Logo (3).svg";
import "./styles.sass";
import { Layout, theme } from "antd";
import MainTable from "../table";
const { Header, Content } = Layout;

const MainPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='mainPage'>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#11c417",
        }}
      >
        <div className='headerLogo'>
          <img
            src={logo}
            alt=''
          />
        </div>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MainTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainPage;
