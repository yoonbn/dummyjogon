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
            "recommendBook" : {
	            "isbn" : "9791186195482",
	            "cover_url" : "표지이미지"
            },
            "recommendProgram": {
	            "programId" : 2,
	            "programName" : "프로그램 명",
	            "programDate" : "프로그램 날짜",
	            "programLocation" : "프로그램 장소",
	            "programSponsor" : "프로그램 주최",
	            "programReservation" : "프로그램 예약 사이트",
	            "programImage" : "프로그램 대표 이미지"
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