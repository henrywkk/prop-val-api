/* 
HASE Valuation site: https://www.hangseng.com/zh-hk/e-valuation/address-search/#
*/

const request = require("request")
const api_url = 'https://rbwm-api.hsbc.com.hk/pws-hk-hase-mortgage-eapi-prod-proxy/v1/evaluation/address'


module.exports.hase_val = function() {
    
    var options = {
        url: api_url + '/valuation',
        method: 'POST',
        headers: {
            //'X-HSBC-Locale': 'zh_HK'
            'X-HSBC-Locale': 'en_HK'
        },
        json: {
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
    }

    return new Promise(function(resolve, reject){
        request(options, (err, res, body) => {
            if (err) { return console.log(err)}
            console.log(body)
        })
    }).then(function(j){
        console.log(j)
    })
}

/*
const api_area = '/area'
const api_district = '/district/'
const api_estate = '/estate/'
const api_block = '/block/'
const api_floor = '/floor/'
const api_flat = '/flat'
*/
module.exports.hase_search = function (param, value1 = 0, value2 = 0) {
    var url = api_url
    switch (param) {
        case 'area':
            url += '/area'
            break
        case 'district':
            url += '/district/' + value1
            break
        case 'estate':
            url += '/estate/' + value1
            break
        case 'block':
            url += '/block/' + value1
            break
        case 'floor':
            url += '/floor/' + value1
            break
        case 'flat':
            url += '/flat/' + value1 + value2
            break
        default:
            url += '/area'
            break
    }
    
    var options = {
        url: url,
        //method: 'GET',
        headers: {
            'X-HSBC-Locale': 'zh_HK'
        }
    }
    
    return new Promise(function(resolve, reject){
        request(options, (err, res, body) => {
            if (err) { return reject(err)}
            //console.log(body)
            resolve(body)
        })
    })
    /*
    
    .then(function(j){
        console.log(j)
    })

    */
}
