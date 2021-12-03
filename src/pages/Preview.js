import { useEffect } from "react";
import { usePrismicPreviewResolver } from "@prismicio/react";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader";

/**
 * Prismic preview component
 */
export const Preview = () => {
  const navigate = useNavigate();
  const [previewURL, previewState] = usePrismicPreviewResolver({ navigate });

  useEffect(() => {
    if (previewState.state === "failed") {
      return console.warn(
        `Unable to resolve a preview from the current URL.\nCheck https://prismic.io/docs/reactjs/beyond-the-api/in-website-preview for more info`
      );
    }
  }, [previewURL]);

  return <Loader />;
};
