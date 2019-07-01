var fetch = require('fetch-retry');

module.exports.historical = async function (data, callback){

    const symbols = data.symbol.isArray ? data.symbol : data.symbol.split(',')
    const from = Date.parse(new Date(data.from)) / 1000
    const to = Date.parse(new Date(data.to)) / 1000
    
    symbols.map(symbol => {
        fetch(`http://query1.finance.yahoo.com/v7/finance/chart/${symbol}?period1=${from}&period2=${to}&interval=1d&events=history`, {
                retries: 5,
                retryDelay: 6000,
                timeout: 60000*7
            })
            .then(res => res.json())
            .then(data => {
                if (data.chart.result !== null) {
                    const symbol = data.chart.result[0].meta.symbol
                    const date = data.chart.result[0].timestamp
                    const open = data.chart.result[0].indicators.quote[0].open
                    const high = data.chart.result[0].indicators.quote[0].high
                    const low = data.chart.result[0].indicators.quote[0].low
                    const close = data.chart.result[0].indicators.quote[0].close
                    const adjclose = data.chart.result[0].indicators.adjclose[0].adjclose
                    const volume = data.chart.result[0].indicators.quote[0].volume

                    const tmp = []
                    for (let x = 0; x < date.length; x++) {
                        const data = {
                            date: date[x],
                            open: open[x],
                            high: high[x],
                            low: low[x],
                            close: close[x],
                            adjclose: adjclose[x],
                            volume: volume[x],
                            symbol: symbol
                        }
                        tmp.push(data)
                    }

                    const final = {
                        symbol: tmp[0].symbol,
                        chart: tmp.reverse()
                    }
                    callback(null,final)
                } else {
                    callback({error: data}, null)
                }
            })
            .catch(err => {
                callback({error: err}, null)
            })
    })
}