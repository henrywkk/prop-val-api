import requests

def get_valuation_hsb():
    # https://www.hangseng.com/zh-hk/e-valuation/address-search/#

    payload = {
        "area":"K", #九龍
        "district":"NTK", #牛頭角
        "estate":"AG", #淘大花園
        "block":"191", #I D 座
        "floor":"0035",
        "flat":"1",
        "carpark":"",
        "tcKnowledge":"on",
        "hpContactUs":""
    }
    
    url = 'https://rbwm-api.hsbc.com.hk/pws-hk-hase-mortgage-eapi-prod-proxy/v1/evaluation/address/valuation'

    r = requests.post(url, json=payload)
    data = r.json()

    print("Valuation from HSB:\n{}".format(data))


def get_valuation_hsbc():
    # https://www.hsbc.com.hk/zh-hk/personal/mortgages/property-valuation-tool.html

    payload = {
        "locale":"zh-hk",
        "zoneId":"2", #九龍
        "districtId":"17", #牛頭角
        "estateId":"263", #淘大花園
        "blockId":"294,3621,nil", #I D 座
        "floor":"35", 
        "flat":"1"
    }

    url = 'https://www.hsbc.com.hk/gpib/channel/proxy/mortgageSvc/enqPropVal'

    r = requests.post(url, json=payload)
    data = r.json()

    print("Valuation from HSBC:\n{}".format(data))



if __name__ == '__main__':
    get_valuation_hsb()
    print("==============================")
    get_valuation_hsbc()