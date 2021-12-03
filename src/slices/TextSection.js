import { PrismicRichText } from "@prismicio/react";

/**
 * Text section slice component
 */
export const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label
    ? `text-section-${slice.slice_label}`
    : "text-section-1col";

  return (
    <section className={`content-section ${sectionClass}`}>
      <PrismicRichText field={slice.primary.rich_text} />
    </section>
  );
};
