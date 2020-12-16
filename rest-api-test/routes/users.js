var express = require('express');
var router = express.Router();

/* GET users listing. */
// default set
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


// 간단한 Restfull api 서비스 만들기
// https://ing-yeo.net/2020/02/study-nodejs-create-simple-restful-api-server/
const users = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'npm' },
  { id: 3, name: 'Pengsu' },
]

// 모든 유저 정보를 제공하는 라우팅
router.get('/', function (req, res, next) {
  res.json(users);
});

// 경로 매개변수를 사용한 라우팅: 특정 유저 정보 제공
// 작동 테스트 방법: 웹 브라우저에서 http://localhost:3000/users 또는 http://localhost:3000/users/1 접속 확인
router.get('/:id', function (req, res, next) {
  user = users.find(u => u.id === parseInt(req.params.id))
  res.send(user);
});

router.post('/', function (req, res, next) {
  const user = {
    id: users.length + 1,
    name: req.body.name
  }
  users.push(user);
  res.send(user);
});

router.put('/:id', function (req, res, next) {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) { return res.status(404).send('ID was not found.'); }

  user.name = req.body.name; // users 값도 바뀌네? 왜죠...
  res.send(user);
  console.log(users);
});


module.exports = router;
