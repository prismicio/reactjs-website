import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "your-repo-name";
const endpoint = prismic.getEndpoint(repositoryName);

export const client = prismic.createClient(endpoint, {
  // If your repo is private, add an access token.
  accessToken: "",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  routes: [
    {
      type: "homepage",
      path: "/",
    },
    {
      type: "page",
      path: "/:uid",
    },
  ],
});
