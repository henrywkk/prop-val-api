/* 
HSBC Valuation site: https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html
*/


module.exports.hsbc_val = function() {
    var request = require("request")

    var url = 'https://www.hsbc.com.hk/gpib/channel/proxy/mortgageSvc/enqPropVal'

    var payload = {
        "locale":"zh-hk",
        "zoneId":"2", //九龍
        "districtId":"17", //牛頭角
        "estateId":"263", //淘大花園
        "blockId":"294,3621,nil", //I D 座
        "floor":"35", 
        "flat":"1"
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
