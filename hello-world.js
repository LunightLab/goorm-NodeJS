
const http = require("http") // http 모듈 가져오기

// server & port set
const hostname = '127.0.0.1'
const port = 3000;

// server create
const server = http.createServer((req, res) => {
    console.log(req.url);

    // 분기처리(http://url/users 뒤에 분기처리가 많아지기 때문에 Express를 사용한다.)
    // express 프레임워크 왜에 koa나 hapi가 있음.
    // express.js는 Node.js를 위한 빠르고 간편한 웹 프레임워크
    // http://expressjs.com/ko/
    if(req.url === '/'){
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'text/plain'); 
            res.end('Hello World!\n');
        }
        else if(req.url === '/users'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('User list');
        }
        else{
            res.statusCode = 404;
            res.end('Not Found');
        }
});

// 서버를 요청 대기상태 역할로 만들어줌.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

// listen 메서드에 콜백함수를 넣는 대신 listening 이벤트 리스너를 붙여준다. 
// server.listen(port)
// server.on('listening',()=>{
//     console.log("Server running!");
// }); 

// server.on('error',(error)=>{
//     console.error(error);
// });


/**
 * 테스트 command
 *  ❯ node hello-world.js
 * 
 * ~/Documents/GitHub/swift-app-test/AppTestProject develop*
 *  ❯ curl -X GET 127.0.0.1:3000
 * Hello, World!
 * 
 */