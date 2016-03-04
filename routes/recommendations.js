/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();


//추천
router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "1페이지의 추천입니다.",
            "page":1,
            "rows":3,
            "recommend_id" :"추천id",
            "recommendBook" : {
	            "recommend_book_id": "추천책 id",
	            "isbn" : "isbn",
	            "name" : "책제목",
	            "emotion" : "책대표감정"
                                },
            "recommendProgram": {
	            "programId" : "프로그램 id",
	            "programName" : "프로그램명",
	            "programImage" : "프로그램 대표 이미지",
	            "programContents" : "프로그램 내용"
                                },
            "recommendClub" : {
	            "clubId" : "모임 id",
	            "clubName" : "모임명",
	            "clubImage" : "모임 대표 이미지",
	            "clubContents": "모임내용"
                                }
        }
    };
    res.json(message);
});

module.exports = router;