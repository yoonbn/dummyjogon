/**
 * Created by skplanet on 2016-02-23.
 */
var express = require('express');
var router = express.Router();

router.get('/me', function(req,res,next){

    var message ={
        "success" : {
            "message" : "리워드 기록입니다.",
            "page":1,
            "rows":10,
            "user_id" :"사용자id",
            "rewardList":[{
                "reward_id": "리워드 id",
                "reward_type" : "리워드타입",
                "quantity" : "수량",
                "reward_quantity" : "리워드 수 ",
                "reward_image_url" : "리워드 사진 url"
            },
                {
                    "reward_id": "리워드 id",
                    "reward_type" : "리워드타입",
                    "quantity" : "수량",
                    "reward_quantity" : "리워드 수 ",
                    "reward_image_url" : "리워드 사진 url"
                },
                {
                    "reward_id": "리워드 id",
                    "reward_type" : "리워드타입",
                    "quantity" : "수량",
                    "reward_quantity" : "리워드 수 ",
                    "reward_image_url" : "리워드 사진 url"
                }
            ]
        }
    };
    res.json(message);
});
module.exports = router;