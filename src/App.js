import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { client, repositoryName } from "./prismic";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { Page } from "./pages/Page";
import { Preview } from "./pages/Preview";

export const App = () => {
  return (
    <PrismicProvider
      client={client}
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/:uid" element={<Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
};
