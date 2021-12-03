import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  SliceZone,
  usePrismicDocumentByUID,
  useSinglePrismicDocument,
} from "@prismicio/react";

import { components } from "../slices";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";

/**
 * Website page component
 */
export const Page = () => {
  const { uid } = useParams();

  const [page, pageState] = usePrismicDocumentByUID("page", uid);
  const [menu, menuState] = useSinglePrismicDocument("menu");

  const notFound = pageState.state === "failed" || menuState.state === "failed";

  useEffect(() => {
    if (pageState.state === "failed") {
      console.warn(
        "Page document was not found. Make sure it exists in your Prismic repository"
      );
    }
  }, []);

  // Return the page if a document was retrieved from Prismic
  if (page && menu) {
    return (
      <Layout wrapperClass="page" menuDoc={menu}>
        <SliceZone slices={page.data.page_content} components={components} />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }

  return null;
};
