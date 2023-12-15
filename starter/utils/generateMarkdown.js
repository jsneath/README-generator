// function to generate markdown for README
// generateMarkdown.js

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.badge}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${data.license !== 'None' ? `This project is licensed under the ${data.license} License.` : 'No License'}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). 
  You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;

