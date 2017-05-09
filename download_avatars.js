var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "rickyforr";
var GITHUB_TOKEN = "5e55d4be18de888bdebbfee138b5ac39a63f2c87";

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
   var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

   console.log(requestURL);

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});