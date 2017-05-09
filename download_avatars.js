var request = require('request');
var fs = require('fs')

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  var results = []


  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.length);


  for (var i = 0; i < info.length; i++) {

    logins = info[i].login

    var avatars = request.get(info[i].avatar_url)
    .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('./' + logins + '.jpeg'));
  }
  }




}








request(options, callback);
