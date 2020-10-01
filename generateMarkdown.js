// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  // Links
 
  ## Installation
  ${data.installations}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions

  ### GitHub Username
  ${data.username}

  ### Email Address
  ${data.email}

  ### How to reach me
  ${data.reachout}
`;
}

module.exports = generateMarkdown;
