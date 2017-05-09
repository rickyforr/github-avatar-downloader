var request = require('request');

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.length);
  for (var i = 0; i < info.length; i++) {
    console.log(info[i].avatar_url)
  }

  }
}

request(options, callback);
