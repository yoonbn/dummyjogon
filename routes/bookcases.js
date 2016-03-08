/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();



//책장 출력
router.get('/me', function(req,res,next){

	var message ={
		"success" : {
			"message" : "사용자의 책목록을 시제에 맞게 출력합니다.",
			"pageNum" : 4,
			"tenseList" : [{
				"isbn" : "9788900389210",
				"cover_url":"책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 1
			},{
				"isbn" : "9788901161198",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 2
			},{
				"isbn" : "9788901204772",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 5
			},{
				"isbn" : "9788936479671",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id": 4
			},{
				"isbn" : "9788937839719",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 5
			},{
				"isbn" : "9788971997048",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 1
			},{
				"isbn" : "9788971997048",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 3
			},{
				"isbn" : "9788971997116",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 2
			},{
				"isbn" : "9788972753698",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 4
			},{
				"isbn" : "9788972757573",
				"cover_url" : "책표지의 파일 경로",
				"title" : "책제목",
				"author" : "저자",
				"publisher" : "출판사",
				"category" : "책의 카테고리",
				"total_page" : 120,
				"pop_emotion_id" : 5
			}]
		}
	};
	res.json(message);
});

router.post('/me', function(req,res,next){

	var message ={
		"success" : {
			"message" : "책을 책장에 추가합니다."
		}
	};
	res.json(message);
});

module.exports = router;

