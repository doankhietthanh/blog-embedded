import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to learn",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Giới thiệu các khái niệm cơ bản, cách sử dụng các tools và hướng dẫn
        thực hiện các bài tập từ đơn giản đến phức tạp
      </>
    ),
  },
  {
    title: "Support for projects",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Là nguồn tài liệu tham khảo cho các dự án thực tế, các đồ án môn học về
        lập trình nhúng, điện tử và IoT
      </>
    ),
  },
  {
    title: "Focus on product",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Tìm hiểu chi tiết về các công nghệ và thiết bị sử dụng, tập trung vào
        việc thiết kế và thi công phát triển sản phẩm.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
