# Setting Up CircleCI

1. Open a new browser window to CircleCI and login

2. Click on Add Projects from the left hand sidebar menu

3. Search for the name of your repository (or create one)

4. Click Set Up Project

5. Follow the prompts until the project is setup

6. Click on the settings cog in the top right corner of the project overview screen

7. Click on Environment Variables under the Build Settings section

8. Now add the following variables with respect to your {org}'s project:
 * PAGEBUILDER_VERSION latest
 * DEVELOPMENT_DEPLOYER_ENDPOINT api.sandbox.{org}.arcpublishing.com
 * DEVELOPMENT_DEPLOYER_USERNAME {sandbox_username}
 * DEVELOPMENT_DEPLOYER_PASSWORD {sandbox_password}
 * PRODUCTION_DEPLOYER_ENDPOINT api.{org}.arcpublishing.com
 * PRODUCTION_DEPLOYER_USERNAME {prod_username}
 * PRODUCTION_DEPLOYER_PASSWORD {prod_password}


9. Now in the Advanced Settings section make sure the following are turned on:
 * GitHub Status updates
 * Build forked pull requests
 * Pass secrets to builds from forked pull requests
 * Auto-cancel redundant builds
 * Enable build processing (preview)


10. Now we need to configure CircleCI in your github repository, go to your repository's github settings tab

11. Click on branches

12. Click on add Rule

13. Enter your default branch name into the input box (typically dev)

14. Click on require status checks to pass before merging

15. Click on require branches to be up to date before merging

16. If you see options for circleCI, click on the deploy option (you may not see them if circleCi hasn't run on any branches yet. If that's the case you can come back to this step later)

17. Click on webhooks

18. Click the Edit button next to [hooks](https://circleci.com/hooks/github) (this will only show up if you've added CircleCI to the repository using steps above).

22. Make sure the following options are checked:
 * Enable SSL verification
 * Which events would you like to trigger this webhook? => Let me select individual events
 * Commit comments
 * Branch or tag creation
 * Branch or tag deletion
 * Forks
 * Wiki
 * Issue comments
 * Issues
 * Collaborator add, remove, or changed
 * Pull requests
 * Visibility changes
 * Pull request review comments
 * Pushes
 * Releases
 * Statuses
 * Team adds
 * Watches
 * Active


23. Click on update webhook

24. Now test merging something into the dev branch to see if the bundle is uploaded to your environment
