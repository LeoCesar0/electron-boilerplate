import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ padding: "2rem 0" }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard. This is a protected page.</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
