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

router.get('/filter', function(req,res,next){

    var message ={
        "success" : {
            "message" : "책의 관심분야를 조회합니다.",
	        "filter" : [{
		        "category_1_id" : "참고서/교재",
				"category_1_select" : 1
	        },{
		        "category_2_id" : "아동/청소년",
		        "category_2_select" : 1
	        },{
		        "category_3_id" : "경제경영",
		        "category_3_select" : 1
	        },{
		        "category_4_id" : "사회과학",
		        "category_4_select" : 1
	        },{
		        "category_5_id" : "역사/종교/역학",
		        "category_5_select" : 1
	        },{
		        "category_6_id" : "예술/대중문화",
		        "category_6_select" : 1
	        },{
		        "category_7_id" : "과학",
		        "category_7_select" : 1
	        },{
		        "category_8_id" : "가정/취미/건강",
		        "category_8_select" : 0
	        },{
		        "category_9_id" : "자기계발",
		        "category_9_select" : 0
	        },{
		        "category_10_id" : "컴퓨터/인터넷",
		        "category_10_select" : 0
	        },{
		        "category_11_id" : "만화",
		        "category_11_select" : 0
	        },{
		        "category_12_id" : "인문학",
		        "category_12_select" : 0
	        },{
		        "category_13_id" : "소설/시/희곡",
		        "category_13_select" : 0
	        },{
		        "category_14_id" : "에세이",
		        "category_14_select" : 0
	        }]
        }
    };
    res.json(message);
    //에러면 next에러 맞으면 true
});


router.get('/me', function(req, res, next) {
    if (req.secure){
        var message = {
            "success" : {
                "message":"회원의 개인정보를 조회 합니다.",
                "me":{
	                "user_photo_url": "프로필 사진" ,
	                "nickname" : "닉네임",
	                "local_email":"사용자 이메일",
	                "filter" : [{
		                "category_1_id" : "참고서/교재",
		                "category_1_select" : 1
	                },{
		                "category_2_id" : "아동/청소년",
		                "category_2_select" : 1
	                },{
		                "category_3_id" : "경제경영",
		                "category_3_select" : 1
	                },{
		                "category_4_id" : "사회과학",
		                "category_4_select" : 1
	                },{
		                "category_5_id" : "역사/종교/역학",
		                "category_5_select" : 1
	                },{
		                "category_6_id" : "예술/대중문화",
		                "category_6_select" : 1
	                },{
		                "category_7_id" : "과학",
		                "category_7_select" : 1
	                },{
		                "category_8_id" : "가정/취미/건강",
		                "category_8_select" : 0
	                },{
		                "category_9_id" : "자기계발",
		                "category_9_select" : 0
	                },{
		                "category_10_id" : "컴퓨터/인터넷",
		                "category_10_select" : 0
	                },{
		                "category_11_id" : "만화",
		                "category_11_select" : 0
	                },{
		                "category_12_id" : "인문학",
		                "category_12_select" : 0
	                },{
		                "category_13_id" : "소설/시/희곡",
		                "category_13_select" : 0
	                },{
		                "category_14_id" : "에세이",
		                "category_14_select" : 0
	                }]
                },
                "facemessage":" 페이스북 회원의 개인정보를 조회 합니다.",
                "faceme":{
	                "user_photo_url": "프로필 사진" ,
	                "nickname" : "닉네임",
	                "local_email":"사용자 이메일",
	                "filter" : [{
		                "category_1_id" : "참고서/교재",
		                "category_1_select" : 1
	                },{
		                "category_2_id" : "아동/청소년",
		                "category_2_select" : 1
	                },{
		                "category_3_id" : "경제경영",
		                "category_3_select" : 1
	                },{
		                "category_4_id" : "사회과학",
		                "category_4_select" : 1
	                },{
		                "category_5_id" : "역사/종교/역학",
		                "category_5_select" : 1
	                },{
		                "category_6_id" : "예술/대중문화",
		                "category_6_select" : 1
	                },{
		                "category_7_id" : "과학",
		                "category_7_select" : 1
	                },{
		                "category_8_id" : "가정/취미/건강",
		                "category_8_select" : 0
	                },{
		                "category_9_id" : "자기계발",
		                "category_9_select" : 0
	                },{
		                "category_10_id" : "컴퓨터/인터넷",
		                "category_10_select" : 0
	                },{
		                "category_11_id" : "만화",
		                "category_11_select" : 0
	                },{
		                "category_12_id" : "인문학",
		                "category_12_select" : 0
	                },{
		                "category_13_id" : "소설/시/희곡",
		                "category_13_select" : 0
	                },{
		                "category_14_id" : "에세이",
		                "category_14_select" : 0
	                }]
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