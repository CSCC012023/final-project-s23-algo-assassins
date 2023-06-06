<p align="center">
  <a href="https://github.com/CSCC012023/final-project-s23-algo-assassins">
    <img src-dark="doc/mockups/logo_readme_lightmode.png" src="doc/mockups/logo_readme.png" alt="Logo" width="200" height="110">
  </a>
</p>

FitBook is a fitness social media app that combines fitness tracking with social connectivity. The motivation behind this project is to address the common challenge of maintaining consistent motivation to work out. FitBook aims to motivate users to engage in regular physical activities by fostering a supportive community and promoting healthy competition. Users can share their workouts, repost fitness content, and track their personal progress.

## Technologies Used

- Front-end: React Native
- Back-end: Express.js web application framework

## Installation

### Front-end

#### iOS

1. Make sure Xcode is installed on your system.
2. Follow the [React Native documentation](https://reactnative.dev/docs/environment-setup?os=macos&platform=ios) for macOS and iOS to install any necessary dependencies.
3. Clone the repository.
4. Run `yarn install` to install all the dependencies.
5. For iOS, navigate to the `ios` folder and run `pod install` to install the required pod dependencies.
6. To run the project, use `yarn ios`. This will start the Metro bundler, and you can choose to open a simulator or configure it to run in Xcode with a custom simulator or device.

#### Android (Windows)

1. Make sure Android Studio is installed on your system.
2. Follow the [React Native documentation](https://reactnative.dev/docs/environment-setup?os=macos&platform=ios) for Windows and Android to install any necessary dependencies.
3. Clone the repository.
4. Run `yarn install` to install all the dependencies.
5. For Android, ensure that developer mode is turned on for a physical device or have an Android Studio virtual device set up.
6. On a terminal, run `yarn react-native start`, and then on a separate terminal, run `yarn react-native run-android`.

### Back-end

- Make sure you have the latest version of [Node.js](https://nodejs.org/en) installed.
- Run `npm install` to install all the dependencies.
- Run `npm run dev` to start a local server.

## Contribution

### Git Flow

We follow the Git Flow workflow. We have a master branch and multiple sub-branches based on the specific parts of the project we are working on. We create pull requests for each feature or bug fix, and we also conduct testing before squashing and merging into the main/develop branches.

### Branch Naming

We follow the Git Flow convention for branch naming. Branches are named with a prefix of either `fix` or `feature`, followed by the main title of the corresponding Jira ticket. We attach our git branches to our Jira tickets for better organization and traceability.

### Issue Tracking

We primarily use JIRA as our ticketing software to manage tasks, issues, and stories. JIRA allows us to track progress effectively, and since it can be directly linked to our GitHub repository, accessing the codebase from the tickets is convenient by simply linking each ticket with the GitHub link.

We also use GitHub issues for specific tasks when required.

### Pull Requests

Pull requests are managed on GitHub and should be opened when merging code into the main branch of the application. The pull request should include a prefix of either `fix` or `feature`, and should comprise of a brief overview of the changes implemented in the PR. The PR should also include a description of the changes made to the code and a brief explanation of why they were necessary, as well as a link to the corresponding JIRA ticket(s). The PR description should follow the PR description template as close as possible. The PR should be tested by the programmer before it is marked as `ready for review`. Each pull request must receive at least one review from a peer, and the code must then also be tested by the reviewer as well before it can be merged into the main branch.

Github Classroom does not permit opening of draft PR's, but they can be helpful to visualize changes to the codebase and commit histories. Therefore, we will loosely follow the convention of tagging open draft PR's as \[DRAFT]. PR's tagged with \[DRAFT] in the prefix are not to be merged. Conversely, PR's marked as \[READY FOR REVIEW] or \[ROR] are PR's that are ready for review and potentially merged onto the main branch.

---

This README file provides an overview of FitBook, including its motivation, technologies used, installation instructions, contribution guidelines, and pull request process.
