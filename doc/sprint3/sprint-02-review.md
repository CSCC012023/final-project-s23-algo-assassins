# FitBook




## Iteration 02 - Review & Retrospect


 * When: July 10, 2023
 * Where: Online


## Process - Reflection


In the second iteration of the development of Fitbook, we made significant progress on the development, completing many key features on both the social and fitness fronts of the application. However, we faced challenges with respect to the compatibility of the re-animated 3.0x Image Picker dependency with Android, which led us to search for a different module that was compatible with both iOS and Android. Certain functionalities were also unable to be completed due to underestimation of workload.


#### Decisions that turned out well


List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.


 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).


Merge Conflicts and PR channel
* To improve the process of resolving merge conflicts, we have created dedicated channels to pull requests and merge conflicts. These channels allow us to track the progress of PRs and address conflicts in a more efficient manner. 
* Instead of GitHub's pull request review section, our channels promote the sharing of screenshots, discussing code changes, and engaging in voice chats in a more casual manner, resulting in improved collaboration and better resolutions. 
* This change will be considered successful if the team members can agree that resolutions to any merge conflicts went more smoothly and with improved communication compared to last sprint. It is difficult to define any concrete success metric, as each individual pull request will have vastly differing issues, ranging from none to severe.


Nodemailer
* Straightforward and intuitive API for sending emails to users programmatically
* Extremely flexible, supports numerous features, and compatible with Next.js, allowing for further security upgrades via various authentication or ability to send attachments.


Using the react-native-image-crop-picker library
* Library was easy to set up and use, as well as working with the re-animated 2.0x library
* Compatible with iOS and Android, the library allows users to select images from their library or take pictures from their camera, which we can use for features like allowing users to set their profile picture


#### Decisions that did not turn out as well as we hoped


List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.


 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).


Re-animated 3.0x Image Picker
* While trying to implement the user profile image element of the front-end, we chose an image picker that was not compatible with our reanimated dependency which turned out to be a blocker since the dependency did not work for Android and only for iOS. It was not until later that we solved that issue when a new image picker module was chosen that works for both platforms.


#### Planned changes


List any process-related changes you are planning to make (if there are any)


 * Ordered from most to least important.
 * Explain why you are making a change.


## Product - Review


#### Goals and/or tasks that were met/completed:


Workout Screen
* https://hoomji.atlassian.net/browse/FB-26
* Task was originally part of sprint1 responsibilities. However, it was under code review and not merged in time at the end of sprint1.


Resetting Login Credentials
* https://hoomji.atlassian.net/browse/FB-97
* The task was originally a part of sprint1 responsibilities. However, it was delayed and finished during sprint2
* Added screens and backend support for reset-login functionality for users.


Home Screen
* https://hoomji.atlassian.net/jira/software/projects/FB/boards/1/backlog?selectedIssue=FB-18
* Added the main tab navigators with tabs for home page navigation
* workout, profile and home screens were added
* Added a few components to go along with the Home page for followers and home page introduction


User Profile Image Upload
* https://hoomji.atlassian.net/browse/FB-33
* Added a feature so that the user change upload/change their own profile picture
* Backend support works for image upload but not working yet for name, username, and biography


Sign Up Introduction Screen
* https://hoomji.atlassian.net/browse/FB-90
* Added screen that allows user to optimally input their age, weight, and height for their profile.
* Included a brief introduction to the FitBook application.


 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.


#### Goals and/or tasks that were planned but not met/completed:


 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?


* Tracking/Logging workouts (Posting onto API): The amount of work was larger than originally estimated, and as a result was unable to be completed by the end of the sprint.


User Profile Interaction
* Added frontend for users to be able to edit their username, name, and biography and the changes would be reflected in the user’s profile page. However, this was not completed due to the minimal time we had to work on it since two of our group mates had an xcode bug that took days to resolve (during that time we were unable to run our branches). After updating mac version and xcode command line tools, the issue was fixed and I was able to continue working on the task at hand
* Frontend react implementation needed to be refactored to account for the backend changes, which did not work out for the demo so it is being pushed to the next sprint to complete early in the sprint


## Meeting Highlights


Going into the next iteration, our main insights are:


 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.


Our focus will be on the social media aspect of the FitBook application and how users interact with each other. We will introduce features that allow users to engage with each other's posts, being able to add or remove friends, and for users to be able to communicate with each other through a chat. We will also aim to complete the routines functionality, which builds upon the workout functionality that we previously implemented. 


User Posts: In the user feed, the user should be able to see other user’s posts, and be able to interact with them by liking and commenting. There will be an image, a like button, and a comment button for each post.


User Friends: The user should be able to add and remove friends. This will affect whether they are able to communicate with the user, and whether they will be able to view their posts.


Routines: The user should be able to add multiple exercises to create a routine to follow. This feature builds upon the Add New Workout feature, and should not be too difficult to implement.
