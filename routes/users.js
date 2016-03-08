/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req,res,next){
    if(req.secure){
        var message ={
            "success" : {
                "message" : "회원가입이 정상적으로 처리되었습니다."
            }
        };
        res.json(message);
    }
});

router.post('/login', function(req, res, next) {
    if (req.secure){
        var message = {
            "success" : {
                "message" : "로그인에 성공하였습니다."
            }
        };
        res.json(message);
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

router.get('/facebook', function(req,res,next){
    if(req.secure){
        var message ={
            "success" : {
                "message" : "로그인에 성공하였습니다."
            }
        };
        res.json(message);
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});



router.post('/filter', function(req,res,next){

    var message ={
        "success" : {
            "message" : "책의 관심분야를 추가합니다."
        }
    };
    res.json(message);
    //에러면 next에러 맞으면 true
});

router.get('/filter', function(req, res, next) {
	var message = {
		"success" : {
			"message" : "사용자의 관심분야를 보여줍니다. ",
			"filter" : [ "category_id", "category_id","category_id"]
		}
	};
	res.json(message);
});


router.get('/me', function(req, res, next) {
    if (req.secure){
        var message = {
            "success" : {
                "message":"회원의 개인정보를 조회 합니다.",
                "me":{
	                "user_photo_url": "프로필 사진" ,
	                "nickname" : "닉네임",
	                "local_email" : "사용자 이메일"
                }
            }
        };
        res.json(message);
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

router.put('/me', function(req, res, next) {
    if (req.secure){
        var message = {
            "success" : {
                "message":"회원의 개인정보를 조회 합니다."
            }
        };
        res.json(message);
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});


module.exports = router;