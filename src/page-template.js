const Employee = require('../lib/Employee');

const managerCard = (managerCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${managerCardTemplate.getName()}</h2>
      <h3>${managerCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${managerCardTemplate.getEmail()}</li>
        <li class="list-group-item">Office Number: ${managerCardTemplate.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;
};

const engineerCard = (engineerCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${engineerCardTemplate.getName()}</h2>
      <h3>${engineerCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${engineerCardTemplate.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineerCardTemplate.getGithub()}</li>
      </ul>
    </div>
  </div>`;
};

const internCard = (internCardTemplate) => {
	return `<div class="card">
    <div class="card-header">
      <h2>${internCardTemplate.getName()}</h2>
      <h3>${internCardTemplate.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internCardTemplate.getId()}</li>
        <li class="list-group-item">Email: ${internCardTemplate.getEmail()}</li>
        <li class="list-group-item">School: ${internCardTemplate.getSchool()}</li>
      </ul>
    </div>
  </div>`;
};

const generateCardSection = (cardTemplate, cardType) => {
	switch (cardType) {
		case 'Manager':
			return managerCard(cardTemplate);
		case 'Engineer':
			return engineerCard(cardTemplate);
		case 'Intern':
			return internCard(cardTemplate);
		default:
			return '';
	}
};

const pageTemplate = (employeeArray) => {
	let html = `<!DOCTYPE html>
  <html lang="en"><head>
    <meta charset="UTF-8">
    <title>My Team</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/f53a07ee43.js" crossorigin="anonymous"></script>

  </head>
  <body>

    <div class="container-fluid">

      <div class="jumbotron">
        <h1 class="text-center"><span><i class="fas fa-fire-alt"></i> My Team <i class="fas fa-fire-alt"></i></span></h1>
        <hr>

      <div class="row">
        <!--##CARDS##-->

      </div>

      </div>

    </div>

      <footer class="footer">
      </footer>

  </body>
  </html>`;
};

module.exports = pageTemplate;
