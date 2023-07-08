# FitBook

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 02

 * Start date: 26/06/23
 * End date: 07/07/23


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

To improve the process of resolving merge conflicts, we have created dedicated channels to pull requests and merge conflicts. These channels allow us to track the progress of PRs and address conflicts in a more efficient manner. Instead of GitHub's pull request review section, our channels promote the sharing of screenshots, discussing code changes, and engaging in voice chats in a more casual manner, resulting in improved collaboration and better resolutions. 
This change will be considered successful if the team members can agree that resolutions to any merge conflicts went more smoothly and with improved communication compared to last sprint. It is difficult to define any concrete success metric, as each individual pull request will have vastly differing issues, ranging from none to severe.
During the previous iteration, we made a successful decision to use MongoDB as our database for storing user data. This choice has proven to be effective as we have not had any issues with adaptability when making changes to the user schema. MongoDB has accommodated these modifications without imposing any limitations or needing any tricky workarounds. This indicates that our selection of MongoDB as the back-end database was the correct decision.

#### Roles & responsibilities

7 team members
Henry: front-end team leader, create Home Page
Jeremy: back-end team leader, implement various endpoints
Aliel: full-stack developer, image picking functionality
Jerry: full-stack developer, FitBook profile
Kenny: full-stack developer, workout posting functionality
Ethan: full-stack developer, create sign up introduction
Eric: full-stack developer, finalize login reset functionality


#### Events

Describe meetings (and other events) you are planning to have:


Sprint-02 Retrospective
This meeting will be held online, and will be used to review the velocity of the team for this sprint, and give us a better understanding of the project’s progression. We will determine what worked well, what did not, and any changes we may need to make in our approach.

Sprint Reviews
At the end of each sprint, we will schedule a longer online synchronous meeting to conduct a sprint review. During this meeting, we will assess the progress made throughout the sprint and consider factors such as the completion of user stories, maintaining deadlines, and any potential challenges encountered. We will then determine whether any adjustments are necessary for the upcoming sprint. This includes evaluating the workload in terms of user stories, ensuring a balanced distribution of tasks, and any other improvements that would improve the team's efficiency.

Daily Synchronous Meetings
We conduct regular team meetings consisting of 3 synchronous online sessions per week and 2 asynchronous sessions per week. During these meetings, we review individual progress, discuss tasks we intend to complete, and address any challenges or blockers we encounter. This allows everyone to be up-to-date about ongoing activities, avoids any work overlap, and offers solutions to challenges as needed. The details regarding each meeting (synchronous and  asynchronous) is shared through our Slack channel. 


#### Artifacts for organizing the team

For task prioritization and task assignment, we will use Jira user stories. Jira offers the ability to create user stories, child stories, and sprints. By leveraging these features, we will effectively organize our project. Task allocation will be determined through discussions considering each team member's strengths, experiences, and preferences.

To determine the team’s velocity of the sprint, we will assign story points and burndown charts according to them, which will be assigned following a thorough discussion in a synchronous meeting. This will aid in decisions regarding whether to include certain features or not, as we will be able to gauge how many more user stories we can include in the project's final scope. 

In order to improve efficiency, we will also generate back-end documentation. This documentation will provide team members with quick access to information about endpoints and back-end resources when working on front-end development. This will help cut down time spent on back-end development.

Finally, we will also prepare front-end documentation to enable better collaboration and coordination within the team. This documentation will contain information about new screens, their functionalities, and interactions with other components. This also ensures that everyone on the team has a clear understanding of the pages and their dependencies, by providing a roadmap of which pages need to be created or developed to enable the functionality of other dependent pages.


#### Git / GitHub workflow

Git Flow:
We maintain a stable branch for release in main and create sub-branches for each feature we like to develop. These added features are merged into main via pull requests.

Pull Requests:
These will be made in the following format: [ticket number]branch_name, and will include information such as a description and type of change and visual aids. Pull Requests can be reviewed by any team member, although a front or back end team leader must be the one to approve the merge of the branch into main. Afterwards, the individual who created the pull request will merge it into main.

As our team follows the agile development method for our software development life cycle, we needed a branch maintaining a working application with regular releases. Thus, git flow workflow met our requirements the best, with promotion of regular stable releases and minimization of merge conflicts.


## Product

_This entire section is mandatory._


#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

Goals
Home Page
We will need to create a tab navigator for navigation between different screens on the Home page. This would include the User Feed Page, the Workout Page and the Profile Page according to the Figma design documents. 
There will also need to be several components that will need to be created such as the following component where new users get a list of suggestions of followers. 
Then we will need to implement back-end support for posts from popular users if we are able to set that up in time. If not, that is planned for another sprint as it is far ahead of us.
Fitbook Profile
We will need to create an interface where the user can access their profile settings through an ‘edit profile’ button where they can change their name, username, biography, and update/upload a profile picture. 
We will need to create a settings interface where the user can update their physical measurements, privacy settings, and preferences on the application. For this sprint, we will mostly focus on the user being able to update their weight, height, and age.
Forgot Password Functionality
We will need to create a button in the existing login screen to direct users to a screen where they are able to enter their email associated with their account. Once the email is entered, we will then need to check that the user exists on the database and send a randomly generated string to verify.
We will need to create another screen in which the user may enter their verification code, a new password, and confirmation of the new password. If all fields are valid, the password of the associated user will be updated with the new password.
Image Picker Functionality
We will need to find a dependency that allows users to select images from their library or from their camera. The dependency must work on both Android and iOS.
We will create a shared component that gives users the options to take a picture on their phone’s camera and select images from their library. The component will then allow screens to handle the image taken/selected.
Initial Sign Up App Intro
We will need to create a sign up introduction screen that provides users the option to input their age, weight, and height. We also need to create a brief description of the purpose and motivation of FitBook.
Keep Me Logged In
If the user was previously logged in in the app, then a new instance of the app will already have the user authenticated.
Logging Workouts
We will implement a back-end schema that keeps and maintains the data for each workout that a user logs, and implement the front-end in react native to be able to submit the workouts from user’s local machines to the database seamlessly.

Tasks

#### Artifacts for presenting project idea

We will be building a sign up introduction page, which will come immediately after the initial sign up, that serves as a starting point for both new and existing users. This page will provide an overview of our application and its key features, and also optionally offer users to input their age, weight, and height to better track their progress.

Furthermore, we will create a profile screen where users can enter their information and upload relevant data, such as profile pictures and biographies, which will be converted and stored in our database. They will be able to easily navigate through their activity history and view their personalized statistics, while also viewing any posts they may have made.

We will also build a workouts page, where users will have the ability to initiate workouts at any time and access our dynamic workout screen, which enables them to record and track their workout progress. Additionally, users can add exercises to their workouts by either creating custom exercises or searching for specific exercises using keywords.

Finally, we will also create a page for resetting the user’s password. We will send a new verification code to the email associated with the user’s account. By inputting this verification code, they will be able to create a new password for their FitBook account.
