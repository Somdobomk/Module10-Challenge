const inquirer = require('inquirer');
const template = require('./src/page-template.js');
const writeFile = require('./src/generated-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

const promptUser = (employeeArray) => {
	inquirer.prompt(roleQuestions).then((answers) => {
		switch (answers.role) {
			case 'Engineer':
				inquirer.prompt(engineerQuestions).then((answers) => {
					const engineer = new Engineer(
						answers.name,
						answers.id,
						answers.email,
						answers.github
					);
					employeeArray.push(engineer);
					promptUser(employeeArray);
				});
				break;
			case 'Intern':
				inquirer.prompt(internQuestions).then((answers) => {
					const intern = new Intern(
						answers.name,
						answers.id,
						answers.email,
						answers.school
					);
					employeeArray.push(intern);
					promptUser(employeeArray);
				});
				break;
			case 'Manager':
				inquirer.prompt(managerQuestions).then((answers) => {
					const manager = new Manager(
						answers.name,
						answers.id,
						answers.email,
						answers.officeNumber
					);
					employeeArray.push(manager);
					promptUser(employeeArray);
				});
				break;
			case "I'm done adding roles":
				const html = template(employeeArray);
				writeFile(html);
				break;
		}
	});
};

// Initialize the function and start the prompt
promptUser([]);
