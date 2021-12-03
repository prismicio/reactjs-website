import React from "react";
import { PrismicText } from "@prismicio/react";

/**
 * Quote slice component
 */
export const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>
      <PrismicText field={slice.primary.quote_text} />
    </blockquote>
  </section>
);
