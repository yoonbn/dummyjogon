var express = require('express');
var router = express.Router();

// 책 검색
router.get('/', function(req,res,next){

    var message ={
        "success" : {
            "message" : "1page에 대한 책 검색입니다.",
            "page":1,
            "rows":10,
            "searchList":[{
                "isbn":"책id",
                "title":"책제목",
                "author":"저자",
                "publisher":"출판사",
                "total_page":"페이지",
                "category_id":"책 분류 번호",
                "cover_url":"책표지의 파일 경로",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "title":"책제목",
                "author":"저자",
                "publisher":"출판사",
                "total_page":"페이지",
                "category_id":"책 분류 번호",
                "cover_url":"책표지의 파일 경로",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "title":"책제목",
                "author":"저자",
                "publisher":"출판사",
                "total_page":"페이지",
                "category_id":"책 분류 번호",
                "cover_url":"책표지의 파일 경로",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "title":"책제목",
                "author":"저자",
                "publisher":"출판사",
                "total_page":"페이지",
                "category_id":"책 분류 번호",
                "cover_url":"책표지의 파일 경로",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "title":"책제목",
                "author":"저자",
                "publisher":"출판사",
                "total_page":"페이지",
                "category_id":"책 분류 번호",
                "cover_url":"책표지의 파일 경로",
                "pop_emotion_id":"책의 대표감정"
            },{
	            "isbn":"책id",
	            "title":"책제목",
	            "author":"저자",
	            "publisher":"출판사",
	            "total_page":"페이지",
	            "category_id":"책 분류 번호",
	            "cover_url":"책표지의 파일 경로",
	            "pop_emotion_id":"책의 대표감정"
            },{
	            "isbn":"책id",
	            "title":"책제목",
	            "author":"저자",
	            "publisher":"출판사",
	            "total_page":"페이지",
	            "category_id":"책 분류 번호",
	            "cover_url":"책표지의 파일 경로",
	            "pop_emotion_id":"책의 대표감정"
            },{
	            "isbn":"책id",
	            "title":"책제목",
	            "author":"저자",
	            "publisher":"출판사",
	            "total_page":"페이지",
	            "category_id":"책 분류 번호",
	            "cover_url":"책표지의 파일 경로",
	            "pop_emotion_id":"책의 대표감정"
            },{
	            "isbn":"책id",
	            "title":"책제목",
	            "author":"저자",
	            "publisher":"출판사",
	            "total_page":"페이지",
	            "category_id":"책 분류 번호",
	            "cover_url":"책표지의 파일 경로",
	            "pop_emotion_id":"책의 대표감정"
            },{
	            "isbn":"책id",
	            "title":"책제목",
	            "author":"저자",
	            "publisher":"출판사",
	            "total_page":"페이지",
	            "category_id":"책 분류 번호",
	            "cover_url":"책표지의 파일 경로",
	            "pop_emotion_id":"책의 대표감정"
            }]
        }
    };
    res.json(message);
});

router.post('/:isbn/bookmarks',function (req,res,next){
    var message ={
        "success":{
            "message":"현재 읽은 책의 페이지가 저장되었습니다."
        }
    };
    res.json(message);

});

router.post('/:isbn/doodles', function (req,res,next){
    var message ={
        "success":{
            "message":"낙서가 작성 되었습니다.",
        }

    };
    res.json(message);
});

router.get('/:isbn/doodles', function(req,res,next){

    var message ={
        "success" : {
            "message" : "2page의 나의 낙서기록이 조회되었습니다.",
            "page":2,
            "rows":10,
            "isbn":"책id",
            "doodleList":[{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": "낙서 id",
	            "doodle_time" : "날짜 ",
	            "page" : "페이지",
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : "감정낙서",
	            "heart": "낙서에 대한 추천"
            }]
        }
    };
    res.json(message);
});


router.put('/:isbn/doodles/:doodle_id',function (req,res,next){
   var message ={
       "success":{
           "message":"나의 낙서가 수정되었습니다."
       }
   };
    res.json(message);

});

router.delete('/:isbn/doodles/:doodle_id',function (req,res,next){
    var message ={
        "success":{
            "message":"나의 낙서가 삭제되었습니다."
        }
    };
    res.json(message);

});


module.exports = router;