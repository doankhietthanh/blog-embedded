import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Project() {
  return (
    <Layout title="Project">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>This is project page</p>
        <Link to="/projects/markdown-page">
          <p>Tap tap</p>
        </Link>
      </div>
    </Layout>
  );
}
