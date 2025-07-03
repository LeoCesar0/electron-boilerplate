import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      <div style={{ padding: "2rem 0" }}>
        <h1>Welcome to Electron React App</h1>
        <p>This is a simple Hello World page built with Electron and React.</p>
        <p className="text-red-500"> Tailwind Works</p>
        <Button>Shadcn Button</Button>
      </div>
    </Layout>
  );
};

export default Home;
