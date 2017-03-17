var http = require('http');
var nodeStatic = require('node-static');
var file = new nodeStatic.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == '/phones.json') {
    // искусственная задержка для наглядности
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
  }
  else if(req.url == '/logInfo.json') {
      file.serve(req, res);
  }  else {
    file.serve(req, res);
  }
}

// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}