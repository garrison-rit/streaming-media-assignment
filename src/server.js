const http = require('http');

const htmlHandler = require('./htmlResponses.js');
// const textHandler = require('./textResponses.js');
// const jsonHandler = require('./jsonResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// creating the server
const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    // pages
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/page3':
      htmlHandler.getPage3(request, response);
      break;
    // media
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
    case '/bird.mp4':
      mediaHandler.getBird(request, response);
      break;
    case '/bling.mp3':
      mediaHandler.getBling(request, response);
      break;
          /*
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
      */
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

// let the world know we're listening
console.log(`Listening on 127.0.0.1: ${port}`);
