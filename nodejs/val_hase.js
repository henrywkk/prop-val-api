/* 
HASE Valuation site: https://www.hangseng.com/zh-hk/e-valuation/address-search/#
*/

const request = require("request")
const api_url = 'https://rbwm-api.hsbc.com.hk/pws-hk-hase-mortgage-eapi-prod-proxy/v1/evaluation/address'

const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

// const arrayToObject = (array, keyField) =>
//    array.reduce((obj, item) => {
//      obj[item[keyField]] = item
//      return obj
//    }, {})

function hase_val() {
    
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


 function hase_search(param, value1 = 0, value2 = 0) {
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
    
}

/*
[ { areaCode: 'H', areaName: '香港島' },
  { areaCode: 'K', areaName: '九龍' },
  { areaCode: 'T', areaName: '新界' } ]
*/
area_list = []
function hase_all_area(){
    var promiseList = []
    return hase_search('area').then(function(res){
        area_list = area_list.concat(JSON.parse(res))
        return area_list
    })
    
}

function print_all_area(){
    for (let area of area_list) {
        console.log(area.areaName+ "/" + area.areaCode)
    }
}

/*
[ { districtCode: 'SW', districtName: '上環' },
  { districtCode: 'NP', districtName: '北角' },
  { districtCode: 'ML', districtName: '半山區' },
  { districtCode: 'CW', districtName: '柴灣' },
  { districtCode: 'JL', districtName: '渣甸山' },
  { districtCode: 'IS', districtName: '港島南' },
  { districtCode: 'WC', districtName: '灣仔' },
  { districtCode: 'SKW', districtName: '筲箕灣' },
  { districtCode: 'PFL', districtName: '薄扶林' },
  { districtCode: 'W', districtName: '西環' },
  { districtCode: 'HV', districtName: '跑馬地' },
  { districtCode: 'CB', districtName: '銅鑼灣' },
  { districtCode: 'A', districtName: '香港仔' },
  { districtCode: 'QB', districtName: '鰂魚涌' },
  { districtCode: 'ALC', districtName: '鴨脷洲' },
  { districtCode: 'KLC', districtName: '九龍城' },
  { districtCode: 'KLT', districtName: '九龍塘' },
  { districtCode: 'KLB', districtName: '九龍灣' },
  { districtCode: 'HMT', districtName: '何文田' },
  { districtCode: 'YYC', districtName: '又一村' },
  { districtCode: 'TKW', districtName: '土瓜灣' },
  { districtCode: 'TKT', districtName: '大角咀' },
  { districtCode: 'TST', districtName: '尖沙咀' },
  { districtCode: 'TWS', districtName: '慈雲山' },
  { districtCode: 'SPK', districtName: '新蒲崗' },
  { districtCode: 'MK', districtName: '旺角' },
  { districtCode: 'YT', districtName: '油塘' },
  { districtCode: 'YMT', districtName: '油麻地' },
  { districtCode: 'NCW', districtName: '牛池灣' },
  { districtCode: 'NTK', districtName: '牛頭角' },
  { districtCode: 'HH', districtName: '紅磡' },
  { districtCode: 'LCK', districtName: '荔枝角' },
  { districtCode: 'KT', districtName: '觀塘' },
  { districtCode: 'DH', districtName: '鑽石山' },
  { districtCode: 'CSW', districtName: '長沙灣' },
  { districtCode: 'WTS', districtName: '黃大仙' },
  { districtCode: 'SS', districtName: '上水' },
  { districtCode: 'YL', districtName: '元朗' },
  { districtCode: 'TP', districtName: '大埔' },
  { districtCode: 'LI', districtName: '大嶼山' },
  { districtCode: 'TKO', districtName: '將軍澳' },
  { districtCode: 'TM', districtName: '屯門' },
  { districtCode: 'TC', districtName: '東涌' },
  { districtCode: 'ST', districtName: '沙田' },
  { districtCode: 'FL', districtName: '粉嶺' },
  { districtCode: 'TW', districtName: '荃灣' },
  { districtCode: 'KC', districtName: '葵涌' },
  { districtCode: 'SK', districtName: '西貢' },
  { districtCode: 'SKN', districtName: '西貢北' },
  { districtCode: 'TY', districtName: '青衣島' },
  { districtCode: 'MW', districtName: '馬灣' },
  { districtCode: 'MOS', districtName: '馬鞍山' } ]
*/
area_district_list = []
district_list = []
async function hase_all_district() {
    
    if (area_list.length == 0) {
        await hase_all_area()
    }
    
    var promiseList = []
    //for (area_idx in area_list) {
    for (let area of area_list) {
        var p = hase_search('district', area.areaCode)
        promiseList.push(p)
    }

    area_district_list = arrayToObject(area_list, "areaCode")
    //console.log('test')
    //console.log(area_district_list)
    //console.log(area_district_list['H'])
    //print_all_area()
    return Promise.all(promiseList).then(function(responses){
        for (idx in responses){
            var districts = JSON.parse(responses[idx])
            district_list = district_list.concat(districts)
            area_district_list[area_list[idx].areaCode].districts = arrayToObject(districts, "districtCode")
            //console.log(district_list)
            
        }  
        //print_all_district()
        //console.log(area_district_list)
        //console.log(JSON.stringify(area_district_list))
        return area_district_list
    })

    
}

function print_all_district(){
    for (let district of district_list) {
        console.log(district.districtName + "/" + district.districtCode)
    }
}


/*
[ { estateCode: 'BAC', estateName: '觀瀾雅軒' },
  { estateCode: 'BAT', estateName: '海栢花園' },
  { estateCode: 'CHG', estateName: '富安花園' },
  { estateCode: 'DOC', estateName: '迎海' },
  { estateCode: 'FOOG', estateName: '福安花園' },
  { estateCode: 'FFG', estateName: '富輝花園' },
  { estateCode: 'KFC', estateName: '錦豐苑' },
  { estateCode: 'KAYC', estateName: '錦英苑' },
  { estateCode: 'LAC', estateName: '嘉華星濤灣' },
  { estateCode: 'LAKES', estateName: '銀湖•天峰' },
  { estateCode: 'MOSC', estateName: '馬鞍山中心' },
  { estateCode: 'MAR', estateName: '迎濤灣' },
  { estateCode: 'MV', estateName: '翠擁華庭' },
  { estateCode: 'MS', estateName: '曉峰灣畔' },
  { estateCode: 'OCV', estateName: '海典灣' },
  { estateCode: 'OCE', estateName: '天宇海' },
  { estateCode: 'SRG', estateName: '富寶花園' },
  { estateCode: 'SAUS', estateName: '嵐岸' },
  { estateCode: 'SC', estateName: '新港城' },
  { estateCode: 'THEWA', estateName: '雅濤居' },
  { estateCode: 'VA', estateName: '雅典居' },
  { estateCode: 'VO', estateName: '海典居' },
  { estateCode: 'VP', estateName: '聽濤雅苑' } ]
*/
estate_list = []
async function hase_all_estate(){
    if (district_list.length == 0) {
        await hase_all_district()
    }
    //console.log(district_list.length)
    
    var promiseList = []
    for (district_idx in district_list) {
        var p = hase_search('estate' ,district_list[district_idx].districtCode)
        promiseList.push(p)
    }
    return Promise.all(promiseList).then(function(responses){
        for (res_idx in responses){
            estate_list = estate_list.concat(JSON.parse(responses[res_idx]))
            //console.log(JSON.parse(responses[res_idx]))
        }
        return estate_list
        //console.log(estate_list.length)
        //print_all_estate()
    })
}

function print_all_estate(){
    for (let estate of estate_list) {
        console.log(estate.estateName + "/" + estate.estateCode)
    }
}

module.exports = {
    hase_val,
    hase_search,
    hase_all_area,
    hase_all_district,
    hase_all_estate
}
