# FitBook

## Iteration 03 - Review & Retrospect

* When: July 10, 2023
* Where: Online

## Process - Reflection

#### Decisions that turned out well

We have made the change to reevaluate the story points at the end of each sprint. This decision was made to ensure that the points assigned to each story more accurately reflect its actual complexity and difficulty. We typically gain a better understanding of the work completed during the sprint, which means we are able to make more informed predictions about the user stories. This has been beneficial as it allowed us to construct a more precise roadmap for our development process. By making better comparisons with previously implemented features, we were able to plan and prioritize tasks more effectively, leading to more accurate estimations of project timelines.

#### Decisions that did not turn out as well as we hoped

During our development process, we encountered an oversight related to user profiles in our application, which led to underestimating the story points of this feature. Originally, we assumed that creating user profiles would be a straightforward process, simply involving the creation of a screen and basic navigation. However, we failed to consider the dynamic nature of each user profile, which varies based on the perspective of different users. We discovered we needed to implement the user profile screen differently from other screens by storing relevant user information in local device storage upon login and displaying it dynamically. Additionally, we overlooked the fact that viewing a user's profile from someone else's perspective or account would require a separate implementation, essentially leading to the creation of two distinct screens.We have addressed these difficulties and have decided on an approach, while adjusting the story points accordingly.

#### Planned changes

Posts: 
Although there are no concrete changes decided, we believe we will have to scale down the posts functionality, removing the ability to like and comment, as well as posting and displaying images selected from the poster’s phone storage or camera. We originally were planning to have posts displayed in a more complex format, which included an image, likes, and comments, as well as privacy settings for who would be able to view the post, and the ability to take down the post. We have determined that this is not feasible in the timeframe we have.

## Product - Review

#### Goals and/or tasks that were met/completed:
Logging Workouts: [https://hoomji.atlassian.net/browse/FB-19]
We have implemented the functionality for users to log their workouts, which they can do by adding an exercise, and then recording the number of reps, weight, and sets they perform for the exercise. The duration of each exercise is automatically recorded. This feature is core to FitBook as it improves the life of the user by tracking their progress and performance for them.

Routines:  [https://hoomji.atlassian.net/browse/FB-111]
We also have implemented the functionality for users to use predefined routines for users to follow for their workout. This means that users do not have to go through the hassle of creating a new workout, and adding new exercises, each time they go to the gym. They can instead follow the routine format and simply input the number of reps, weight, and sets they perform.


#### Goals and/or tasks that were planned but not met/completed:

User Progression
We will focus on creating a chart, or some other visual, that showcases a users' fitness progress with metrics such as volume, reps, and duration. This will track daily progress, and display the progress of the user over time. This was not yet met because we were implementing the functionality to create the workouts.

User Friends
Users will be able to see their list of friends in the friends screen.  A friend will be defined as when two users follow each other. This screen will display a list of user emails, and will provide a straightforward way to access profiles with a simple click on the respective user's email. Users will be able to also search up other users in our search bar in order to navigate to other user’s profiles, and follow/unfollow them. This goal has not yet been completed as we have just not gotten to it yet.

User Posts
We will be expanding on the existing user feed screen by implementing workout posts. Once logged in, users will be able to post their own workouts, with information regarding the exercise, number of reps, weight, and duration, for other users to see. This goal has not yet been met as we have decided on an alternative implementation.


## Meeting Highlights

Going into the next iteration, our main insights are:

We will continue to focus on the social media aspects of our application, such as posts and user profiles, and how to display user progress, such as with a chart.

User Interface: Feedback of our existing user interface indicates that there is room for improvement with respect to the consistency and overall aesthetic of our user interface. We will address the feedback and implement a more consistent, good-looking UI.

Posts: We will be scaling down our original intention, and the posts in our FitBook application will instead be displaying information about a user’s workout, including duration, number of reps, weight, and type of exercise. 

User Progress: We will be implementing a visual that will display a user’s progress through a chart. This chart will include the user’s daily information about their workout, including the duration, number of reps, and weight.

Friends: We will be implementing a friends screen to visually display to the user their list of friends. Friends in this platform are defined as two users who follow each other.

Profile: We will be removing the placeholder for the profile screen, and implementing the functionality to display unique profiles for each user, which will display their username, number of followers, number of following, number of posts, and their posts (which contain information about their workouts).
