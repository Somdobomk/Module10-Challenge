# Module 10 - Team Profile Generator

<h1 align="center">
    <a href="https://www.loom.com/share/f9fea82eda77403b97ff21e6940615bd" target="_blank">
     View Demo
    </a>
</h1>
<div align="center">
    <img src="./assets/images/screenshot.gif" width="600px">
</div>

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built With](#built_with)
- [Contributing](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## About <a name = "about"></a>

This is a node cli application that allows you to generate an HTML page that shows each member of a software engineering team. You will be prompted for information regarding the manager, intern, and engineer.

## Getting Started <a name = "getting_started"></a>

### User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Jest](https://www.npmjs.com/package/jest)

### Installing

1. Clone this repo.
2. Navigate to repo foler.
3. Run `npm install`
4. Run `node index.js`
5. Follow the prompts.
6. Open the `generated-site/index.html` file in your browser to view the results.

## Built With <a name = "built_with"></a>

- [Font](https://rubjo.github.io/victor-mono/)
- [Gruvbox Theme](https://github.com/morhetz/gruvbox)
