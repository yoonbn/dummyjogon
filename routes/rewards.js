/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();

// 리워드
router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "리워드 기록입니다.",
            "page":1,
            "rows":10,
            "rewardList":[{
                "reward_id": 1,
                "reward_type" : 1,
                "reward_quantity" : 1,
                "reward_image_url" : "리워드 사진 url"
            },
                {
                    "reward_id": 2,
                    "reward_type" : 1,
                    "reward_quantity" : 10,
                    "reward_image_url" : "리워드 사진 url"
                },
                {
                    "reward_id": 3,
                    "reward_type" : 1,
                    "reward_quantity" : 20,
                    "reward_image_url" : "리워드 사진 url"
                }
            ]
        }
    };
    res.json(message);
});
module.exports = router;