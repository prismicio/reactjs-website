import { useEffect } from "react";
import { SliceZone, useSinglePrismicDocument } from "@prismicio/react";

import { components } from "../slices";
import { Layout } from "../components/Layout";
import { HomepageBanner } from "../components/HomepageBanner";
import { NotFound } from "./NotFound";

/**
 * Website homepage component
 */
export const HomePage = () => {
  const [home, homeState] = useSinglePrismicDocument("homepage");
  const [menu, menuState] = useSinglePrismicDocument("menu");

  const notFound = homeState.state === "failed" || menuState.state === "failed";

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn(
        "Homepage document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [homeState.state]);

  // Return the page if a document was retrieved from Prismic
  if (home && menu) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu}>
        <HomepageBanner banner={home.data.homepage_banner[0]} />
        <SliceZone slices={home.data.page_content} components={components} />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }

  return null;
};
