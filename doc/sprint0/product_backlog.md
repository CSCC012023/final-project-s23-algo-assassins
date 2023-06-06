## **User Stories**

---

### **Sign up Functionality**

1. As a prospective Fitbook user, I would like to be able to register my account so that I could personalize my experience on the app.
    * Given that the prospective user is connected to the internet and is entering valid account credentials, when the user signs up with a valid email and password, their account is registered onto the database.

### **Login Functionality**

2. As a Fitbook user, I would like to log in using my email and password linked to my account so that I can access content associated with my account.
    * Given that the user is connected to the internet and the login credentials entered are valid (exist in the database), when the user clicks login, they will be transferred to the home screen.
3. As a Fitbook user, I want a visual indication that I have entered an invalid username/password so that I can go back and enter valid credentials.
    * Given that the user is connected to the internet, when the user inputs login credentials that do not exist, they are displayed a pop-up message indicating which field was invalid.
4. As a prospective Fitbook user, I would like to be denied access to the rest of the app if I do not have an account so that I am forced to create an account first.
    * Given that the prospective user is not registered, when they launch the app, they are displayed the login page where they must login to proceed.

### **Keep Me Logged In**

5. As a FitBook User, I want to stay logged in since the last instance of authentication so that I do not have to re-login every time I exit the application.
    * Given that the user is logged in and using the app, when they exit the application, they will stay logged in for their next use.
6. As a FitBook user I want to remain logged in until I have pressed the log out button, so that I do not have to keep logging in while using the service.
    * Given that the user is logged in, when the user is using the application, they will stay logged in and will not be logged out until the logout button has been pressed.

### **Home Page**

7. As a FitBook user, I want to be able to reach the home page so that I can easily navigate the service to visit friends and workout tabs.
    * Given that the user is logged in, when they press the home button, they will be directed to a home page.

### **User Feed**

8. As a FitBook user I want a scrollable feed interface so that I can view other people’s progress and workouts.
    * Given that the user is on the home page, when they scroll down through the user feed, they will be displayed friends’ posts.
9. As a FitBook user I want to be able to interact with posts that come up in my user feed so that I can encourage my friends on their progress.
    * Given that the user is on the user feed, when they encounter a friend’s post, they will be able to like or comment via button press.

### **Workout Screen**

10. As a user I want to be able to see the workouts I have created so that I can follow them during my gym session.
    * Given that the user is logged in, when they press the workouts page button, they will be redirected to a workout page where they can view their personal workouts.

### **Logging Workouts**

11. As a FitBook user I want to be able to record the specific exercise I performed so that I can keep track of my workouts.
    * Given that the user is on the workouts page, when they click the “start empty workout” button, they are taken to a screen where they are able to add exercises, as well as discard the entire workout. When adding each exercise, the user is able to indicate the number of sets, reps, and weight performed.
12. As a FitBook user, I want to add my workout routines so that I do not have to manually start an empty workout each time, and can instead click on the routine and log my workout more quickly.
    * Given that the user is on the workout page, when they click on “New Routine”, they are able to create a new routine by adding exercises (with specific number of weight, reps, and sets) to the workout. The user can then access this newly created routine by clicking on “My Routines” to access previously created workout routines.

### **FitBook Profile**

13. As a FitBook user I want to create a profile where I am able to upload details such as my name and username so that others can recognize me on the app.
    * Given that the user has created an account, when they are on the profile screen they are able to upload/change their name, bio, link, sex, and birthdate onto their profile.
14. As a FitBook user, I want to be view my own profile so that I can see details like my name, workouts, statistics etcetera.
    * Given that the user is logged in, when they click the profile button, they should be able to see their profile that includes their name, bio, link, number of workouts, number of followers, and number of people they are following, as well as private details on their profile that their friends can’t see, such as birth date and sex.

### **FitBook Posts**

15. As a FitBook user I want to be able to post images so that my friends can see the progress I've made in the gym.
    * Given that the user is registered on FitBook, when the post an image, people who have them added as friends should have the image appear in their user feed.
16. As a FitBook user I want to be able to take down my post so that if I don't want the image on my profile anymore I can remove it.
    * Given that the user is on the desired post via their profile, when the user clicks the “Delete” button, the post will be removed from the database.

### **Fitness Progression**

17. As a User I would like to see a representation of the change in volume and weight in my past workouts to see any progress/changes.
    * Given that the user is a registered user on FitBook, they should be able to see a graphical representation of the duration, number of reps, and volume of their workouts from their very first workout to the most current workout.
18. As a FitBook user I want to be able to clear Fitness Progression data so that if I feel like starting fresh, I am able to.
    * Given that the user is registered on FitBook and has some pre-existing data, when the user clicks the “Clear Data” button, the information on their workouts, routines, and all information on their profile should be removed from the database.

### **Fitbook Friends**

19. As a FitBook user I want to add people as friends on the app so that I can see their posts.
    * Given that the user is on the prospective friend’s profile, when the user presses the friend button, a notification will be sent to the prospective friend’s account notifying them of a friend request.
20. As a FitBook user I want to be able to unfriend somebody so that I don't have to see their posts anymore.
    * Given that the user is on the friend’s profile and the two users are on each other’s friends list, when the user presses the unfriend button, they will be removed from each other’s friends list.

### **Friends Screen**

21. As a FitBook user I want to be able to see a list of all my friends so that I can easily see who I have friended on the service.
    * Given that the user is on their profile page, when they press the friends button, they are directed to a screen that displays the added friends.
22. As a FitBook user I want to be able to visit my friend's profile by clicking on their name in the my friends screen so that I can visit their profile.
    * Given that the user is on the user feed, direct messaging screen with a friend, or on the friends list screen, when they press on the friend’s name, they will be directed to the friend’s profile.

### **FitBook Chat**

23. As a FitBook user, I want a button I can click that will take me to a direct messaging screen with a specific friend, so that I can send them private messages.
    * Given that the user is logged in, when they click the direct messaging button, they will be redirected to a screen listing all opened direct messages with friends.
24. As a FitBook user I want to be able to directly message a friend so that I can get advice about my workouts.
    * Given that the user is on a direct messaging screen with a friend, when they write a message and click the send button, the message will be logged into the chat record and the specified friend will be notified of the new message.