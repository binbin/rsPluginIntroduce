import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "经办助手",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <div>适合场景：业务经办</div>
        <div>要求：内网环境+win7及以上64位系统</div>
        <a href="./赤峰人社业务经办助手_1.0.0.zip">下载</a>
      </>
    ),
  },
  {
    title: "自助服务",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <div>适合场景：大厅自助、乡镇、街道、苏木</div>
        <div>要求：内网环境+win7及以上64位系统</div>
        <a href="./赤峰人社自助服务_1.0.0.zip">下载</a>
      </>
    ),
  },
  {
    title: "档案调阅",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <div>适合场景：业务经办</div>
        <div>
          要求：日常使用的PC机即可，docker一键安装，需要掌握基本的linux操作，自行配置好网络，档案需要在原系统导出
        </div>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
