/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();

// 독서량 통계
router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "사용자의 독서량 통계입니다.",
	        "month" : "201601",
            "month_page" : 88
        }
    };
    res.json(message);
});

module.exports = router;