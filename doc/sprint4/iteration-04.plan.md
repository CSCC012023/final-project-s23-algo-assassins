# FitBook

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 03

 * Start date: July 24, 2023
 * End date: August 4, 2023

## Process

Quick Introduction to the process

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

Because of the deadline constraints and potential challenges with content moderation, modifications were made to the user stories for content posting. We opted to remove the features of uploading images, posting comments, and adding likes. Instead, our solution involves presenting a user's workouts exclusively to their approved followers. This adjustment restricts the type of content to workouts, and ensures the content users see are relevant to the platform. Furthermore, by using pre-existing endpoints and components associated with the user workouts, we will be able to reduce the time needed to accomplish this task. We will consider this change successful if we are able to implement user posts before the next sprint demo.


#### Roles & responsibilities

7 team members
Henry: front-end team leader, implement user profiles functionality
Jeremy: back-end team leader, implement various endpoints
Aliel: full-stack developer, implement routines functionality
Jerry: full-stack developer, implement user settings functionality
Kenny: full-stack developer, implement routines and posts functionality
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

We plan to focus more on necessary features that will define our app as a social media fitness tracking app, as well as finalizing a few features that were not completed from the previous iteration. This will include the following features:
- FitBook posts
We will utilize previously existing endpoints to aid with creation and retrieval of workouts from the database
We will implement new endpoints to aid with gathering of posts from other users that the logged-in user follows. 
We will continue implementation of the home page by integrating the user feed, adding a scrollable interface to showcase the workouts created by others in a user’s following list.

- Following and Friends
- We will implement a friends screen that displays a list of all of a user’s friends. A friend on FitBook is defined as when two users follow each other, this relationship is referred to as a friend.
- We will also allow users to search up the profile of other users from the Home page. Here, they will be able to navigate to the other user’s profile, and either follow or unfollow them.

- Workout progression chart
We will implement endpoints to retrieve all the workouts of a user to create a comprehensive visual aid for the workout progress
We will also implement a screen which displays the progression chart to the user

- Overall UI Improvement
We will refactor some of the UI components such as workout flow, signup, login, and user profile to improve consistency and overall simplicity and aesthetics.

#### Artifacts 

User Profiles:
Our focus is on individualizing user profiles, removing the placeholders to create unique profiles for each user. This will allow users to access their own posts, navigate to the Friends Screen, and display their achievements through badges. Visual indications will showcase a user's follower and following count, as well as the number of posts they have made.
We will continue implementing the features of the user profile interface where the user can see their personal profile and be able to edit their information such as their name, username, biography, and profile picture. The user should be able to see the change real-time when they save the changes after editing their profile information in the edit profile component through multiple endpoints to fetch the updated data.

FitBook Posts:
We will be expanding on the existing user feed screen by implementing workout posts. Once logged in, users will be able to post their own workouts, with information regarding the exercise, number of reps, weight, and duration, for other users to see.

Friends Screen:
The Friends Screen will be implemented to enable users to see their list of friends.  A friend will be defined as when two users follow each other. This screen will display a list of user emails, and will provide a straightforward way to access profiles with a simple click on the respective user's email.

Workout Progress:
We will create a comprehensive chart that showcases a users' fitness progress with metrics such as volume, reps, and duration. This chart will track daily progress to visually display the progress of the user over time.
