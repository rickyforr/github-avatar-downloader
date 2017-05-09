var request = require('request');
var fs = require('fs')


var contributor = process.argv[2]


var repo = process.argv[3]



var options = {
  url: 'https://api.github.com/repos/' + contributor + '/' + repo + '/contributors',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {

  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.length);


  for (var i = 0; i < info.length; i++) {

    var logins = info[i].login;

    var avatars = request.get(info[i].avatar_url)
    .on('error', function (err) {
         throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode);
    })
    .pipe(fs.createWriteStream('avatars/' + logins + '.jpeg'));
  }

  }
  else {
   console.log("Please provide a contributor and a repo")
  }

}


request(options, callback);
