/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();



router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "사용자의 책목록을 시제에 맞게 출력합니다.",
            "page":1,
            "rows":10,
            "user_id":"사용자 id",
            "tenseList":[{
                "isbn":"책id",
                "cover_url":"책표지의 파일 경로",
                "title":"책제목",
                "author":"저자",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "cover_url":"책표지의 파일 경로",
                "title":"책제목",
                "author":"저자",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "cover_url":"책표지의 파일 경로",
                "title":"책제목",
                "author":"저자",
                "pop_emotion_id":"책의 대표감정"
            },{
                "isbn":"책id",
                "cover_url":"책표지의 파일 경로",
                "title":"책제목",
                "author":"저자",
                "pop_emotion_id":"책의 대표감정"
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