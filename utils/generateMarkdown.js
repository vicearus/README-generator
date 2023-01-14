// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data =>
  `# ${data.title}${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#Installation) <br>
  [Test](#Test) <br>
  [Usage](#Usage) <br>
  [Credits](#Credits)
  [Questions](#Questions) <br>
  ## Installation
  Install dependencies by running the following command in terminal: 
  \`\`\`
  ${data.dependency}
  \`\`\`
  Access the webpage via the following link: [${data.url}](${data.url})
  ## Test
  Perform tests by running the following command in terminal: 
  \`\`\`
  ${data.test}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Questions
  For questions, please email me at ${data.email}
  For other projects, please check out my GitHub at [github.com/${data.username}](github.com/${data.username})
`;

module.exports = generateMarkdown;
