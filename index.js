var inquirer = require("inquirer");
var axios = require("axios");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function({ username }) {
  
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    // Async API call
    axios.get(queryUrl).then(function(res) {
      console.log(res)
      
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
    });
  });  
