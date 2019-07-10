const yahooFinance = require('../index')
const fs = require('fs')

// const date = new Date()
// const fullDate = {
//     year: date.getFullYear(),
//     month: (date.getMonth() + 1) < 10
//         ? '0' + (date.getMonth() + 1)
//         : date.getMonth(),
//     day: date.getDate() < 10
//         ? '0' + date.getDate()
//         : date.getDate()
// }
// var from = `${fullDate.year - 1}-${fullDate.month}-${fullDate.day}`
// var to = `${fullDate.year}-${fullDate.month}-${fullDate.day}`

yahooFinance.historical({
    // symbol: 'AAPL,MSFT,AMD',
    symbol: ['AAPL','MSFT','AMD'],
    from: '2019-06-01',
    to: '2019-06-28'
}, function (err, data) {
    if (err) 
        console.log(err)
    else {
        console.log({symbol: data.symbol, status: 'Done'})
        fs.writeFileSync(`./lib/${data.symbol}.json`, JSON.stringify(data), function (err) {
            if (err) 
                console.log(err)
        })
    }
})