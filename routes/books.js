var express = require('express');
var router = express.Router();

// 책 검색
router.get('/', function(req,res,next){
    var message ={
        "success" : {
            "message" : "4page에 대한 책 검색입니다.",
	        "pageNum" : 4,
            "searchList":[{
                "isbn" : "9788990982575",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
                "isbn" : "9788990982575",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
                "isbn" : "9788990982575",
	            "title" : "책제목",
	            "author" : "저자",
                "cover_url" : "책표지의 파일 경로"
            },{
                "isbn" : "9788991113756",
	            "title" : "책제목",
	            "author" : "저자",
                "cover_url" : "책표지의 파일 경로"
            },{
                "isbn" : "9788992037686",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
	            "isbn" : "9788993734348",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
	            "isbn" : "9788994120997",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
	            "isbn" : "9788991113756",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
	            "isbn" : "9791158510244",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            },{
	            "isbn" : "9791186195482",
	            "title" : "책제목",
	            "author" : "저자",
	            "cover_url" : "책표지의 파일 경로"
            }]
        }
    };
    res.json(message);
});

// 책 상세보기
router.get('/:isbn', function(req,res,next){
	var message ={
		"success" : {
			"message" : "책 에 대한 상세입니다.",
			"bookDetail":{
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"cover_url" : "책표지의 파일 경로"
			}
		}
	};
	res.json(message);
});


// 책갈피 추가
router.post('/:isbn/bookmarks',function (req,res,next){
    var message ={
        "success":{
            "message":"현재 읽은 책의 페이지가 저장되었습니다."
        }
    };
    res.json(message);

});



// 낙서 작성
router.post('/:isbn/doodles', function (req,res,next){
    var message ={
        "success":{
            "message":"낙서가 작성 되었습니다."
        }
    };
    res.json(message);
});

// 낙서 리스트 출력
router.get('/:isbn/doodles', function(req,res,next){

    var message ={
        "success" : {
            "message" : "2page의 나의 낙서기록이 조회되었습니다.",
	        "pageNum" : 2,
            "doodleList":[{
	            "write_user_id" : 1,
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 7,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 4,
	            "heart": 3
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 14,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 6,
	            "heart": 5
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 26,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 2,
	            "heart": 72
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 34,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 2,
	            "heart": 33
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 55,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 1,
	            "heart": 3
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 56,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 1,
	            "heart": 4
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 57,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 3,
	            "heart": 0
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 80,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 1,
	            "heart": 3
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 88,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 4,
	            "heart": 6
            },{
	            "user_photo_url" : "사용자의 사진",
	            "nickname" : "별명",
	            "doodle_id": 50,
	            "doodle_time" : "2016-02-08 16:22:01",
	            "page" : 0,
	            "text_doodle" : "글낙서",
	            "picture_doodle_url" : "사진낙서의 url",
	            "cover_url" : "책 표지의 파일 경로",
	            "emotion_doodle_id" : 5,
	            "heart": 3
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