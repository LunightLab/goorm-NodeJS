    // 분기처리(http://url/users 뒤에 분기처리가 많아지기 때문에 Express를 사용한다.)
    // express 프레임워크 왜에 koa나 hapi가 있음.
    // express.js는 Node.js를 위한 빠르고 간편한 웹 프레임워크
    // http://expressjs.com/ko/
/*
Express 용어 : 라우팅
Express에는 라우팅 이라는 개념이 있다.
클라이언트가 서버로 접속할때는 특정한 URL를 통해 접속한다. 서버에서는 이 URL에 해당하는 자원을 클라이언트로 보내준다.
POST 요청일 경우는 자원을 만들기도 한다. 이러한 클라이언트 요청을 위한 URL스키마를 라우트라고 한다.
서버에서는 라우팅 작업을 통해 클라이언트와 통신의 인터페이스를 제공해준다.
익스프레스에는 이러한 라우팅 모듈이 존재한다.

Express 용어 : 미들웨어
미들웨어는 익스프레스의 핵심이다. 요청과 응답의 중간에 위치하여 미들웨어라고 부른다.
라우터와 에러 핸들러 역시 미들웨어의 일종이므로 미들웨어는 익스프레스의 전부라고 해도 과언이 아니다.
미들웨어는 요청과 응답을 조작하여 기능을 추가하기도 하고, 나쁜 요청은 걸러내기도 한다.
미들웨어는 함수들의 연속이다.
 */
    const express = require('express');
    const app = express(); 

    function logger(req,res,next) { // 미들웨어는 인터페이스가 req, res, next로 정해져있음.
        console.log('logger'); 
        next()
        // 함수에는 인자의 종류에 따라 몇 가지 기능이 구분된다. 
        // 먼저 인자를 넣지 않으면 단순하게 다음 미들웨어로 넘어간다. 
        // 인자로 route를 넣게 되면, 특수한 기능을 한다. 이런 경우에는 라우터에 연결된 나머지 미들웨어들을 실행하지 않게 된다. 
        // route이외의 다른 값을 넣으면, 다른 미들웨어나 라우터를 건너 뛰고 바로 에러 핸들러로 이동하게 된다. 
        // 넣어준 값은 에러에 대한 내용으로 간주된다.
        next(); // 미들웨어는 자신이 할일을 다한 다음 next()호출

    }
    
    function logger2(req,res,next){
        console.log('logger2');
        next()
    }

    // 미들웨어 추가시 use라는 함수를 사용
    app.use(logger);
    app.use(logger2);

    app.listen(3000,function(){
        console.log('SErver is running');
    });