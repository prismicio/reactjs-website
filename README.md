# Prismic & ReactJS Example Multi-Page Site
> [ReactJS](https://reactjs.org/) example Multi-Page Site with content managed in [Prismic](https://prismic.io)
## Check out the dedicated article to get this project up and running
> [Prismic project guide](https://intercom.help/prismicio/en/articles/2731304-sample-multi-page-site-with-navigation-in-reactjs)

### 1. Install the prismic-cli

```
npm install -g prismic-cli
```

### 2. Run the theme command
This will create a new Prismic content repository, setup the custom types, and install the project code
```
prismic theme --theme-url https://github.com/prismicio/reactjs-website --conf src/prismic-configuration.js
```
### 3. Run the project
```
npm start
```
Then you can access it at [http://localhost:3000](http://localhost:3000).

### Deploys made easy with Vercel
[Sign up to Vercel](https://vercel.com/login) and follow the [deployment documentation](https://vercel.com/docs/platform/deployments) to quickly deploy your project.

## Learn more about using Prismic with React.js

[Prismic + React.js documentation](https://prismic.io/docs/technologies/reactjs).

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2020 Prismic (http://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
