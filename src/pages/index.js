import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>This is the Gatsby Tutorial.</p>
      <StaticImage  alt="My top nine on Instagram 2020"
        src="../images/topnine2020.jpg" />
    </Layout>
  );
}

export default IndexPage;