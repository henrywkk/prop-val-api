const val_hase = require('./val_hase')
const val_hsbc = require('./val_hsbc')

//val_hsbc.hsbc_val()

val_hase.hase_all_district().then(JSON.stringify).then(console.log)
//val_hase.hase_all_estate()
//val_hase.hase_all_area()
