/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();

router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "사용자의 월별 독서량 통계입니다.",
            "month_page":"한 달 동안 읽은 페이지"
        }
    };
    res.json(message);
});

module.exports = router;