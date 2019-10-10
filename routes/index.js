var express = require('express');
var router = express.Router();

const headerInfo = {
  title: '코드엔',
  keyword: '웹퍼블리싱, 웹퍼블리셔, html 코딩, 홈페이지 제작, 반응형 웹사이트 제작, 모바일 웹사이트 제작, 스크립트 개발, 프론트엔드 개발, 이러닝 콘텐츠 개발, html5 개발, ui 개발',
  description: '웹퍼블리싱, 웹퍼블리셔, html 코딩, 홈페이지 제작, 반응형 웹사이트 제작, 모바일 웹사이트 제작, 스크립트 개발, 프론트엔드 개발, 이러닝 콘텐츠 개발, html5 개발, ui 개발'
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { headerInfo: headerInfo });
});

module.exports = router;
