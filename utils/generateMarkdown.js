// function to generate markdown for README
function generateMarkdown({ Title, description, installation, usage, technologies, testing, license, contributing, projectImgSRC,sampleInfo, sampleCode, 
   username, email}) {
  return `
  
  # ${Title}
 
  ## Description
  ${description}
  
  ## Table of Contents
  - [Title](#Title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Information](#additional-information)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions and Feedback](#questions-and-feedback)

  ## Installation
   ${installation}

  ## Usage
  ${usage}

  ## Technologies Used:
  ${technologies}

  ## Code Sample
  ${sampleInfo}
  <img src="${sampleCode}" alt="${Title}"/>

  ## Screenshots
  <img src="${projectImgSRC}" alt="${Title}"/>

  ## License
  ${license} License - see the [LICENSE.txt](https://github.com/${username}/${Title}/blob/main/LICENSE.txt) file for details
  
  ## Testing 
  ${testing}

  ## Contributing
  ${contributing}
  
  ## Questions and Feedback
  Please contact me using one of the following:
  - | Github: [${username}](https://gist.github.com/${username})
  |---|---|
  - Email: ${email}
`;
}


module.exports = generateMarkdown;
