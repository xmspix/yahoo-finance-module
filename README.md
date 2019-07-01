# Installation
```
$npm i --save yahoo-finance-module
```
# Usage
```
var yahooFinance = require('yahoo-finance-module');

yahooFinance.historical({
        symbol: 'AAPL', // for multiple symbols use string separated by comma ('AAPL,MSFT,AMD') or an array ['AAPL','MSFT','AMD'], 
        from: '2019-06-01', 
        to: '2019-06-28'
    }, function (err, data) {
        if (err) console.log(err)
        else {
            // console.log(data)
        }
    })
```

# Output
```
{
    "symbol": "AAPL",
    "chart": [
        {
            "date": 1561642200,
            "open": 200.2899932861328,
            "high": 201.57000732421875,
            "low": 199.57000732421875,
            "close": 199.74000549316406,
            "adjclose": 199.74000549316406,
            "volume": 20899700,
            "symbol": "AAPL"
        }, {
            "date": 1561555800,
            "open": 197.77000427246094,
            "high": 200.99000549316406,
            "low": 197.35000610351562,
            "close": 199.8000030517578,
            "adjclose": 199.8000030517578,
            "volume": 26067500,
            "symbol": "AAPL"
        }, {
            "date": 1561469400,
            "open": 198.42999267578125,
            "high": 199.25999450683594,
            "low": 195.2899932861328,
            "close": 195.57000732421875,
            "adjclose": 195.57000732421875,
            "volume": 21070300,
            "symbol": "AAPL"
        },
        ...
    ]
}
```