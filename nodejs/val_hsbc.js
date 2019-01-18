
module.exports.hsbc_val = function() {
    var request = require("request")

    url = 'https://rbwm-api.hsbc.com.hk/pws-hk-hase-mortgage-eapi-prod-proxy/v1/evaluation/address/valuation'

    payload = {
            "area":"K", 
            "district":"NTK", 
            "estate":"AG", 
            "block":"191", 
            "floor":"0030",
            "flat":"3",
            "carpark":"",
            "tcKnowledge":"on",
            "hpContactUs":""
        }

    return new Promise(function(resolve, reject){
        request({uri: url, method: 'POST',json: payload}, (err, res, body) => {
            if (err) { return console.log(err)}
            console.log(body)
        })
    }).then(function(j){
        console.log(j)
    })
}
