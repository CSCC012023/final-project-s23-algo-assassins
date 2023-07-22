# FitBook


 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.




## Iteration 03


 * Start date: July 10, 2023
 * End date: July 21, 2023


## Process


Quick Introduction to the process


#### Changes from previous iteration


List the most significant changes you made to your process (if any).


 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)


 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.


As a team, we have made the change to reevaluate story points at the end of each sprint. This decision was made to ensure that the points assigned to each story more accurately reflect its actual complexity and difficulty. By doing so, we have gained a clearer understanding of the work completed during the last sprint, allowing us to make more informed predictions about the workload for the upcoming sprints.


#### Roles & responsibilities


Describe the different roles on the team and the responsibilities associated with each role.


7 team members
Henry: front-end team leader, implement user profiles functionality
Jeremy: back-end team leader, implement various endpoints
Aliel: full-stack developer, implement routines functionality
Jerry: full-stack developer, implement user settings functionality
Kenny: full-stack developer, implement routines functionality
Ethan: full-stack developer, implement following functionality
Eric: full-stack developer, implement posts functionality


#### Events
Sprint Retrospective
This meeting will be held online, and will be used to review the velocity of the team for this sprint, and give us a better understanding of the project’s progression. We will determine what worked well, what did not, and any changes we may need to make in our approach. We may also reevaluate story points as needed.


Sprint Reviews
At the end of each sprint, we will schedule a longer online synchronous meeting to conduct a sprint review. During this meeting, we will assess the progress made throughout the sprint and consider factors such as the completion of user stories, maintaining deadlines, and any potential challenges encountered. We will then determine whether any adjustments are necessary for the upcoming sprint. This includes evaluating the workload in terms of user stories, ensuring a balanced distribution of tasks, and any other improvements that would improve the team's efficiency.


Semi-Daily Synchronous Meetings
We conduct regular team meetings consisting of 3 synchronous online sessions per week and 2 asynchronous sessions per week. During these meetings, we review individual progress, discuss tasks we intend to complete, and address any challenges or blockers we encounter. This allows everyone to be up-to-date about ongoing activities, avoids any work overlap, and offers solutions to challenges as needed. The details regarding each meeting (synchronous and  asynchronous) is shared through our Slack channel. 


#### Artifacts


For task prioritization and task assignment, we will use Jira user stories. Jira offers the ability to create user stories, child stories, and sprints. By leveraging these features, we will effectively organize our project. Task allocation will be determined through discussions considering each team member's strengths, experiences, and preferences.


To determine the team’s velocity of the sprint, we will assign story points and burndown charts according to them, which will be assigned following a thorough discussion in a synchronous meeting. This will aid in decisions regarding whether to include certain features or not, as we will be able to gauge how many more user stories we can include in the project's final scope. 


In order to improve efficiency, we will continue to generate back-end documentation. This documentation will provide team members with quick access to information about endpoints and back-end resources when working on front-end development. This will help cut down time spent on back-end development.


Finally, we will also prepare front-end documentation to enable better collaboration and coordination within the team. This documentation will contain information about new screens, their functionalities, and interactions with other components. This also ensures that everyone on the team has a clear understanding of the pages and their dependencies, by providing a roadmap of which pages need to be created or developed to enable the functionality of other dependent pages. Additionally, we will update any already existing documents to help organize the workflow.


#### Git / GitHub workflow


Git Flow:
We maintain a stable branch for release in main and create sub-branches for each feature we like to develop. These added features are merged into main via pull requests.


Pull Requests:
These will be made in the following format: [ticket number]branch_name, and will include information such as a description and type of change and visual aids. Pull Requests can be reviewed by any team member, although a front or back end team leader must be the one to approve the merge of the branch into main. Afterwards, the individual who created the pull request will merge it into main.

As our team follows the agile development method for our software development life cycle, we needed a branch maintaining a working application with regular releases. Thus, git flow workflow met our requirements the best, with promotion of regular stable releases and minimization of merge conflicts.


## Product




#### Goals and tasks


 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.


We plan to focus more on necessary features that will define our app as a fitness tracking app, as well as finalizing a few features that were not completed from the previous iteration. This will include the following features:
* Routines
   * We will implement an endpoint in our back-end to store routine objects, which will store the information necessary to create a robust workout routine, including but not limited to the name of the routine, and exercises within it.
   * We will then need to implement a front-end screen for creating a routine. We will implement a path to the AddExercisesScreen, from which the user is able to select and add exercises to the routine.We will then implement a post functionality within the API to save the routine.
   * We will implement a page for fetching all of the user’s routines. We will implement the functionality where when a user selects a routine, they will be taken to the StartWorkoutScreen, with the exercises in that routine pre-loaded.
* FitBook user profile
   * We will continue implementing the features of the user profile interface where the user can see their personal profile and be able to edit their information such as their name, username, biography, and profile picture. The user should be able to see the change real-time when they save the changes after editing their profile information in the edit profile component through multiple endpoints to fetch the updated data.
* FitBook settings
   * We will implement a front end user interface to the user settings where the user can access their preferences, personal information, and metrics such as height, age, weight, etc. and be able to modify them.
* FitBook friends
   * We will implement front-end capabilities for the users to be able to see their friends, being able to follow them and for them to be able to follow you.
* FitBook posts
   * We will implement front-end capabilities for the users to choose photos from their gallery or take a picture from their camera to prepare to post to their profile.
   * We will implement back-end endpoints to allow users to create new posts, delete existing posts, or edit existing posts. Editing will include captions but will exclude the photo itself.
   * Related user stories will include display of posts in the user profile, or exposing the post to following users. 


#### Artifacts


List/describe the artifacts you will produce in order to present your project idea.


 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.


We will build a Settings screen, which will be accessible through the Home screen. On this screen, users will be able to change metrics such as their age, weight, and height.


We will be implementing functionality that allows users to create posts on FitBook. A user post will consist of an image, caption, and comments. They will appear on a user’s profile, and can be viewed by other users who visit the original user’s profile, or if it appears in another user’s user feed.


We will implement friends functionality. Within FitBook, a "friend" is defined as a mutual connection where both users follow each other, which will enable direct messaging and interaction with each other's posts. This feature is significant for FitBook's identity as a social platform, allowing users to easily share their workouts, progress, and achievements with friends. 


We will implement the functionality of being able to create a routine. In Fitbook, a routine is defined as a set of workouts that the user wants to group together, to be completed in a single workout. By defining and creating a routine, the user is able to add the defined exercises in the routine that are required for his workout without needing to search within the add exercises screen, enhancing the user’s experience within the application.