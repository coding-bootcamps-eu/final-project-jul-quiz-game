# Final Project: Quiz Game

## Your Mission

You will create a Quiz App for our Bootcamp Attendees with a tech stack of your choice.

The app should have two parts:

- The Admin Control panel to manage the questions of the quiz.
- The Attendee View to play the quiz.

## Epic: Admin control panel

An administration interface is required for the application to manage the questions. It should be possible to create, read, update and delete questions.

All data should be stored persistent and accessible for all users into the provided Restful API.

### Important

To keep things simple, please skip the authentication.

### Story: Question Listing

As an administrator I would like to get a overview of all questions with the search and filtering options.

#### Scenario: List of entries

- _GIVEN_ that I navigate to admin control panel
- _WHEN_ I enter the page
- _THEN_ all questions are displayed, ordered descending by creation date
- _AND_ each entry will display the `question`, `group` and the `isActive` status

#### Scenario: Search bar

- _GIVEN_ that I navigate to the list of all questions
- _WHEN_ I enter the page
- _THEN_ a search bar is visible
- _AND_ provides me the functionality to search case insensitive for a specific entry by question
- _AND_ after I enter some text and hitting the submit button it updates the list of questions with all questions that matches to the current search
- _AND_ when no entries are found, the user will get displayed a message that no entry for his search was found.

#### Scenario: Filter by Group

- _GIVEN_ that I navigate to the list of all questions
- _WHEN_ I enter the page
- _THEN_ a filter is visible that allows me to filter the questions by a specific group
- _AND_ the filter is combinable with the search bar

### Story: Create new Entry

As an administrator I would like to create new questions to provide more questions to the quiz players.

#### Scenario: Create button

- _GIVEN_ that I navigate to the list of all questions on the admin control panel
- _WHEN_ I enter the page
- _THEN_ I will see a button "Create question"
- _AND_ when I click on the button, I will leave the list of questions page and getting redirected to the create new question form.

#### Scenario: Create new question form

- _GIVEN_ that I enter the `create new question form` page
- _WHEN_ I enter the page
- _THEN_ there will be a text field where I can enter a question
- _AND_ there will be a combobox where I can choose a group
- _AND_ there will be the possibillity to add multiple answers with the option to mark the valid answers
- _AND_ the status could be set to active or inactive.
- _AND_ when I hitting the submit button, when no error occurred, I'll should get forwarded to the list of questions.

### Story: Manage existing questions

As an administrator I would like to edit and delete existing questions.

#### Scenario: Buttons on list view

- _GIVEN_ that I navigate to the list of all questions in the admin control panel
- _WHEN_ I enter the page
- _THEN_ each entry will have an edit and a delete button.

#### Scenario: Edit form

- _GIVEN_ that I navigate to the list of all questions in the admin control panel
- _WHEN_ I click at one of the edit buttons
- _THEN_ a simular form as on the `create new question` page will be displayed. But prefilled with the given data of the current question.

#### Scenario: Delete question

- _GIVEN_ that I navigate to the list of all questions in the admin control panel
- _WHEN_ I click at one of the delete buttons
- _THEN_ I will get asked if i really want to delete the given entry
- _AND_ when I agree the question will be deleted.

## Attendee View - Play the quiz

Attendees of the Coding Bootcamp should be able to play the quiz to test there knowledge.

### Story: Play the game

As a quiz-user I would like to configure the quiz before I start.

#### Scenario: Entry screen

- _GIVEN_ that I navigate to the root main page of the application
- _WHEN_ I enter the page
- _THEN_ there will be a form where I`m able to choose how many questions I like to play. There are fixed options -> 5,10,15,20
- _AND_ I can choose which groups I like to get questions from
- _AND_ there will be a button to start the quiz

#### Scenario: Stopwatch

- _GIVEN_ that configured the quiz
- _WHEN_ I hit the start game button
- _THEN_ a stopwatch will be displayed to messure the time that I needed to finish the quiz

#### Scenario: Answering Questions

- _GIVEN_ that configured the quiz
- _WHEN_ I hit the start game button
- _THEN_ I will get displayed the first question with different answers. I am able to mark all answers as valid solution. There will be also a `Next` button".
- _AND_ when I hit the `Next button` the next question will be displayed. There will be no chance to go back to the previous question.

#### Scenario: Visible Progress indicator

- _GIVEN_ that configured the quiz
- _WHEN_ I hit the start game button
- _THEN_ I will always see a progress indicator which displays how many questions are left to finish the quiz.

#### Scenario: Motivational Result page

- _GIVEN_ that the last question will be displayed
- _WHEN_ I hit the next button
- _THEN_ I will see a conratulation screen that reacts depending on how my result turned out. When the ratio is lower than 50% there should be some kind of encouraging words. Between 50% - 99% there should be something like "that was already pretty good! Try it again to join the 100% club". 100 > "Wow you are very talented! I bet you can`t repeat that, can you?"

#### Scenario: Statistics on Result page

- _GIVEN_ that the last question will be displayed
- _WHEN_ I hit the next button
- _THEN_ I will see the statistics. The time I needed, correct answers in percentage, correct answers ratio to total amount of questions.
- _AND_ I will see each question again with my selected answers vs. the expected answers.

#### Scenario: Play again

- _GIVEN_ that the last question will be displayed
- _WHEN_ I hit the next button
- _THEN_ there will be a button that asks me if I like to play the quiz again.
- _AND_ when I hit the button I will get forwarded to the configuturation page.

## Restful API

A restful API is provided in the `api` folder in this folder. You will also get the restful api provided on a web server. Follow the instructions of the README.md to install the api locally.

## General Technical Requirements

Implement the App with the general requirements in mind.

- [ ] Implement the features with the tech stack of your choice
- [ ] Use semantic HTML
- [ ] Implement the given design
- [ ] Cover your app with e2e tests
- [ ] Deploy the App on Netlify

## General Development Process

Please follow the requirements for the development process.

- [ ] Create a new repository for the final project
- [ ] Implement all features with the help of feature branches and pull requests
- [ ] Review and merge your pull requests yourself or invite students from your class as
      reviewers
- [ ] Use semantic commit messages
- [ ] Deploy your final project on Netlify (see more below)

### Optional

- [ ] Create a GitHub Action that will execute tests for the main and feature branches

## Deployment

Deploy your app with the help of [Netlify](https://netlify.com) in the internet. Netlify is generally free until your app or website reaches a specific level of popularity and traffic - so you don't have to worry about money.

- [ ] Sign up an account on Netlify with your GitHub Account
- [ ] Deploy your final project with Netlify
- [ ] Deploy your main branch by default
- [ ] Use deploy previews for your feature branches

List of tutorials that may help:

- [Deploy site on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
- [Deploy previews with Netlify](https://docs.netlify.com/site-deploys/deploy-previews/)

## Design

Create the App with the given figma design. It could happen that not all elements are covered by the design. Feel free to be creative.

- [ ] Implement the app with the given [figma design](https://www.figma.com/file/HLH9eeRkFlvNaBRtPjtHma/StudentHub-Coding-Bootcamps-Europe?node-id=553%3A88)
- [ ] Focus on the implementation the mobile design
  - [ ] Implement the larger design only if you have time left
# final-project-jul-quiz-game

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
