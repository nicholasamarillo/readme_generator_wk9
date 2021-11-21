function generate_markdown(answers) {
    return `
  # ${answers.title}
  ## ${answers.description}
  ## Table of Contents:
  + [Installation](#installation)
  + [Usage](#usage)
  + [License](#license)
  + [Contributing](#contributions)
  + [Test](#test)
  + [Questions](#questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Liscense
  ${answers.license}
  ## Contributing
  ${answers.contributions}
  ## Tests
  ${answers.test}
  ## Questions
  Please reach out to @${answers.username} or email ${answers.email}
      `;
  }
  
  module.exports = generate_markdown;