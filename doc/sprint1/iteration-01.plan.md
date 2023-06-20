# FitBook
## Iteration 1

 * Start date: June 5, 2023
 * End date: June 16, 2023


## Process


#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.
Henry: front-end team leader
Jeremy: back-end team leader
Aliel: full-stack developer
Jerry: full-stack developer
Kenny: full-stack developer
Ethan: full-stack developer
Eric: full-stack developer

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

_Sprint Reviews_

At the end of each sprint, we will schedule a longer online synchronous meeting to conduct a sprint review. During this meeting, we will assess the progress made throughout the sprint and consider factors such as the completion of user stories, maintaining deadlines, and any potential challenges encountered. We will then determine whether any adjustments are necessary for the upcoming sprint. This includes evaluating the workload in terms of user stories, ensuring a balanced distribution of tasks., and any other improvements that would improve the team's efficiency.

_Daily sync meetings_

We conduct regular team meetings consisting of 3 synchronous online sessions per week and 2 asynchronous sessions per week. During these meetings, we review individual progress, discuss tasks we intend to complete, and address any challenges or blockers we encounter. This allows everyone to be up-to-date about ongoing activities, avoids any work overlap, and offers solutions to challenges as needed. The details regarding each meeting (synchronous and  asynchronous) is shared through our Slack channel. 


#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

For task prioritization and task assignment, we will use Jira user stories. Jira offers the ability to create user stories, child stories, and sprints. By leveraging these features, we will effectively organize our project. Task allocation will be determined through discussions considering each team member's strengths, experiences, and preferences.

To visually represent each screen and user scenario of FitBook, we will utilize Figma. We will create mock-ups displaying the visual design of our project. Creating these mock-ups early on was a top priority on our to-do list. They act as a baseline for the front-end development, giving the team a clear idea of the application's appearance.

In order to improve efficiency, we will also generate backend documentation. This documentation will provide team members with quick access to information about endpoints and backend resources when working on frontend development. This will help cut down time spent on back end development.

## Product

#### Goals and tasks

This iteration will be dedicated to the “first layer”, involving login and signup functionality. We will implement the landing screen and functionality involving signup and login. If we have time leftover, we will look to start implementing the “second layer”, which are screens that users have direct access to once logging in, such as the home screen, profile screen, and workout screens. In order to achieve these tasks, group members must learn React Native basics as well as figure out schemas for databases, and typescript for backend implementation.
- Signup functionality
    - We will need an intuitive user interface so that users can interact with the app and create an account, which will give them access to the rest of the app.
    - We will also need a backend API integration that checks for the validity of the credentials inputted by the user, as well as an update to the database with the information of the new user
- Login functionality
    - We will create a screen with intuitive processes for logging in, so that the users can interact with the app and login with their existing account, giving them access to the rest of the app.
    - We will need a backend API integration that will check for the existence of such a user and navigation to the home screen once the validity has been checked.
- Resetting password functionality
    - We will need a separate screen in which the user can input their email to recover their account (if they forgot their password).
    - We will need a backend API integration that does the following: check that the email is a valid email, and make a request to send a password reset email if the email is valid. 
- Landing screen
    - We will need a welcoming screen that allows the user to navigate to a login page, signup with email page, and signup with google page. 
- Second layer
    - This is an abstract terminology to group functionality that the user will be given access to after signing up and logging in. As this is not necessary within the domain of planned functionality, we will perhaps aim to design the user-friendly interfaces for each item (home, profile, and workout screens), but the backend API integration will be more complex and considered for future sprints. 


#### Artifacts

We will build a static landing page and integrate key components of our application for both new and existing users, to sign up and/or log in to access the full functionality of our app. We will also build a sign up screen, where users can enter and upload their information onto the application, to be converted and posted as a user schema in our database. Each user will have their own dynamic profile screen, which allows for seamless scrolling through their history, as well as their own statistics. Each user will also have their own personalized scrollable feed, containing posts of the users they follow, sorted by most recent. Users are able to start a workout at any time in their workflow, and be taken to our dynamic workout screen, capable of recording and tracking their workouts to be posted onto their feed