// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](usage)
  [License](license)
  [Contributing](contributing)
  [Tests](tests)
  [Contact Creator](contact-creator)
 
  ### Installation
  ${data.installations}
  
  ### Usage
  ${data.usage}
  
  ### License
  ${data.license}
  
  ### Contributing
  ${data.contributing}
  
  ### Tests
  ${data.tests}
  
  ### Contact Creator

  #### GitHub Username
  [See GitHub](https://github.com/${data.username})

  #### Email Address
  ${data.email}

  #### How to reach me
  ${data.reachout}
`;
}

module.exports = generateMarkdown;