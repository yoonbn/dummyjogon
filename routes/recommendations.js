/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();


//추천
router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "추천입니다.",
	        "pageNum" : 2,
            "recommendBook" : {
	            "isbn" : 9791186195482,
	            "name" : "책제목",
	            "emotion" : 3
            },
            "recommendProgram": {
	            "programId" : 2,
	            "programName" : "프로그램명",
	            "programImage" : "프로그램 대표 이미지",
	            "programContents" : "프로그램 내용"
                                },
            "recommendClub" : {
	            "clubId" : 2,
	            "clubName" : "모임명",
	            "clubImage" : "모임 대표 이미지",
	            "clubContents": "모임내용"
                                }
        }
    };
    res.json(message);
});

module.exports = router;