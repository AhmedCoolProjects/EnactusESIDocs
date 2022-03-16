import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { EnactusGoals, HomepageBoardMemebers } from "../components";
import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tageline"
            description="Tageline for the homepage">
            Business Innovation Students to Create a Better and More Sustainable
            World
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.linkButton.checkLastProjects">
              Check Our Last Projects
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        message: "WELCOME",
        description: "The homepage title",
      })}
      description={translate({
        message: "ENACTUS ESI, The ENACTUS club for ESI innovative students",
        description: "The homepage description",
      })}>
      <HomepageHeader />
      <main>
        <HomepageBoardMemebers
          title="ENACTUS ESI BOARD"
          ids={["1", "2", "3", "4"]}
        />
        <EnactusGoals />
      </main>
    </Layout>
  );
}
