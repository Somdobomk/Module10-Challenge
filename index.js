const inquirer = require('inquirer');
const template = require('./templates');
const writeFile = require('./utils/writeFile');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerTemplate = './templates/manager.html';
const engineerTemplate = './templates/engineer.html';
const internTemplate = './templates/intern.html';
const indexHTML = './output/index.html';
const indexHTMLTemplate = './templates/indexhtmltemplate.html';

let pageHTML = '';

// set of questions for each role
const roleQuestions = [
	{
		type: 'list',
		name: 'role',
		message: 'Which role are you adding?',
		choices: ['Engineer', 'Intern', 'Manager', "I'm done adding roles"],
	},
];

const managerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'id',
		message: 'What is your ID?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: 'What is your office number?',
	},
];

const engineerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'id',
		message: 'What is your ID?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
	},
	{
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?',
	},
];

const internQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'id',
		message: 'What is your ID?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
	},
	{
		type: 'input',
		name: 'school',
		message: 'What school do you go to?',
	},
];

const promptUser = async () => {
	const { role } = await inquirer.prompt(roleQuestions);

	switch (role) {
		case 'Engineer':
			const engineer = await inquirer.prompt(engineerQuestions);
			return new Engineer(engineer);
		case 'Intern':
			const intern = await inquirer.prompt(internQuestions);
			return new Intern(intern);
		case 'Manager':
			const manager = await inquirer.prompt(managerQuestions);
			return new Manager(manager);
		case "I'm done adding roles":
			return 'done';
		default:
			return promptUser();
	}
};

// Initialize the program
function init() {
	// Prompt the user for each team member
	promptUser().then((user) => {
		if (user === 'done') {
			// generate the HTML
			pageHTML = template.generateHTML(pageHTML);
			// write the HTML to the file
			writeFile(indexHTML, pageHTML);
			console.log('Successfully wrote to index.html');
		} else {
			// add the user to the page
			pageHTML += template.generateHTML(user.getHtml());
			// call the function again
			init();
		}
	});
}

init();
