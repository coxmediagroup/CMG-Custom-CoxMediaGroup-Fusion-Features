# What is the StarterPack Repo?

The StarterPack Repo is the place to start out Fusion projects with the base structure and build processes set up by the ARC Professional Services team.

Documentation in this repo will walk you through site-specific tasks, such as adding styles and fonts to your sites, and how to use certain features.

#### What you'll be doing in the attached documentation

The recipes and documents contained in this repo will focus on helping you set up a single page within PageBuilder, and getting it to work across multiple sites.

It is designed to teach you the important principles of setting up your organization's repo: Interacting with styles and javascript, and getting a feeling for how feature code should be organized.

> **Please note:**
> If you are someone who has a Content API, and you would like to know how to hook up your Fusion project to your organization's content, please [follow the excellent Fusion Recipes for all the information you could possibly need](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/). In fact, we highly recommend going through every word available to you before starting your project.
>
> In particular, you will need to create a `.env` file, with credentials, to use the content sources included within the repo.
> **Please note:**
>
> If you get a Docker error while running the repo locally, try adding the `FUSION_RELEASE` variable into your `.env` file.
>
> **None of the content sources included within the repo will work without a `.env` file that has the credentials to your Content API.**

### **🚧 Still under construction**

Please note that the repo is still under active development, and is subject to change frequently.

## System requirements

Before going further, [make sure you're up to speed with hardware requirements](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/user-documentation/announcing-the-new-pagebuilder-fusion-engine-2/).

You also need to have Node > 8 installed, so you can use `npx` listed in these commands (There may be ways around this, but for consistency, `npx` will be used in these docs).

# If you want to get a feel for how Fusion works, and explore ARC best practices (recommended for these docs):

[Check out the fusion recipes](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/).

# If you are starting a brand-new project for your org:

1. Go ahead and copy this repo. Clone it down, change the origin, and update all the values to be your own, then push it up. We're working on a way to streamline this process better, but for now the following will work:

```bash
git clone git@github.com:wapopartners/StarterPack-PageBuilder-Fusion-Features.git MyFusionFeaturesDirectory
# replace MyFusionFeaturesDirectory with a meaningful name for your copy of the repository

git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
# replace USERNAME and REPOSITORY with your username and repo name set up on github (or other git remote)

git push -u origin master
```

You now have your own copy of this repository from which you can build new fusion features! Continue with the rest of the documentation to learn more about fusion.

2. Follow the [PageBuilder Fusion Recipes](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md) -- mentioned earlier, and mentioned again because they're so good.

## Starting from a Database

If you're starting with the repo for the very first time, it is recommended that you start it up with a small database to get a feel for how the pieces work together.

After you start up fusion on the repo, take the folder called `GettingStartedDBDump.tar.gz` within `/documentation/artifacts` folder and drag (or copy/paste) it into your `/data/restore` folder. This will trigger PageBuilder Fusion to take the Getting Started database and import it locally. You'll wind up with a single PageBuilder page called `sample-page`.

Alternatively, you can set up your own pages by following the Fusion recipes.

Next: [Follow along with the documentation.](./documentation/README.md)

## Tests

### Unit tests

Run `npm run test` and any jest tests will run

### Cypress

Start the app using `npm run start` (see above) and run `npx cypress open` to open the cypress test runner.

# Guide on the ARC-Subs Identity and Sales SDKs installation and use with Fusion

**Please note:**

> The following implementation must take place after following the instructions above, also posted on the dev branch of this repo regarding `cloning`, `installation`, adding the `.tar.gz` file to the `data/restore`, populating the `.env` file, running `Docker at 6GB memory` etc.

> At this point, by running the `npm run dev` and `npx fusion start` in separate terminal tabs, you should be able to access the [http://localhost/pf/admin/](http://localhost/pf/admin/) preview and see your PageBuilder environment setup.

#### The following steps were taken to import the ARC-Subs Identity/SDK and Sales/SDK functionality in to the current project

1. In the `default` output-type (components/output-types/default.jsx) file which serves as the root html, to the `<head>` section, the following scripts were added:

   ```
   <script src='https://s3.amazonaws.com/arc-subs-test/sdk/sdk-sales.min.js'/>
   <script src='https://s3.amazonaws.com/arc-subs-test/sdk/sdk-identity.min.js'/>
   ```

   This form of implementation is best to be used with versions of Fusion 2.3 and earlier.

2. New `features` and `layouts` files/components were created in order to demonstrate the basic functionality of the ARC's SDKs in combination with Fusion PageBuilder. The SDK methods are used in the `ManualSignUp`, `ManualSignIn` and `addToCart` files located in the `components/features/arc-subs` folder. They represent basic class or functional React components which either take the user input and use it in performing the api call or simply trigger the hardcoded api call (Sales-SDK).

3. Before you can interact with an Identity-SDK or Sales-SDK endpoints you must set the apiOrigin:
   `window.Identity.apiOrigin = apiOrigin`.
   The value of the `apiOrigin` is stored in `root/properties/index.json`. This allows us to import the value of `apiOrigin` into our component from the fusion:properties namespace by using the `getProperties` function.

   > **Please note:**
   >
   > Contact your account manager or ARC delivery manager to receive the proper apiOrigin URL and ensure your Subs instance is provisioned. The apiOrigin should be stored as a site property in the /properties directory.

4. The triggering of the api call returns either an `APIErrorResponse` error or a `response object`, both being logged in your browsers devtools.
   > **Please note:**
   > Make sure to replace the `console` statements in the code with the appropriate logic once you start development.

#### In order to see the components and api calls in action you must add one or more ARC-subs components to a page in PageBuilder -> [http://localhost/pf/admin/](http://localhost/pf/admin/) is required.

### To build the Sign In page:

1. Access the [http://localhost/pf/admin/](http://localhost/pf/admin/)
2. Select the `Pages` tab from the navigation bar.
3. Tap the `new page` green button on the top right of the page.
4. Enter a `page name` eg. 'Sign In'
5. Enter a `page URI` eg. 'signin'
6. Tap `Create new page`
   if the Pagebuilder Admin didn't open: Select the `Pages` tab. Select the newly created page by clicking on the name of the page right under the edit icon.
7. The `PageBuilder` editor will be opened.
8. On the top, select the `default` output-type (if not selected).
9. Navigate to the `layout` tab, on the menu on the left of the page.
10. Click on the edit icon.
11. Select the `Centered UI` from the dropdown.
12. In the `main` section click `+ADD TO MAIN`
13. Select the `Arc-subs ManualSignIn` option
14. Fill in the fields and Tap `Sign In`. A response will be logged in the browser's Dev tools.

#### Repeat the above steps for the `ManualSignUp` and `addToCart`, either by creating new pages or by adding the components to the already created one.

#### To see the pages live, select `preview commit` and then `STAGE AND PUBLISH`. Now you will be able to access the updated page on the: `http://localhost/pf/YOUR_PAGE_NAME/?_website=YOUR_WEBSITE`
