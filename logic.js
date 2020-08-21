$( document ).ready(function() {
    let BASE_URL = "https://api.coingecko.com/api/v3";
    let COINS_MARKETS = "coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    let marketDataAPI = BASE_URL+COINS_MARKETS;

    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })


    

    function populateTable(url){
        fetch(url)
          .then(res => {
          res.json().then( data => {
            for(i = 0; i < 100; i++){
                let coinData = data[i];
                var marketCap = coinData.market_cap ? Number(coinData.market_cap).toFixed(2) : "-";
                var coinPrice = coinData.price ? Number(coinData.price).toFixed(2) : "-";
                var volume = coinData.total_volume ? Number(coinData.total_volume).toFixed(2) : "-";
                var cirSuppy = coinData.circulating_Supply ? Number(coinData.circulating_Supply).toFixed(2) : "-";
                var coinDelta = coinData.price_change_24h ? Number(coinData.price_change_24h).toFixed(2) : "-";

              // CREATE A ROW AND APPEND TO TABLE
              $("#marketsTable").append(
                `<tr>
                  <th scope="col">${i+1}</th>
                  <th scope="col"><img src="${coinData.image}" style="height: 1.5em;">${coinData.id}</th>
                  <th scope="col">${coinData.symbol.toUpperCase()}</th>
                  <th scope="col">${marketCap}</th>
                  <th scope="col">${coinPrice}</th>
                  <th scope="col">${volume}</th>
                  <th scope="col">${cirSuppy}</th>
                  <th scope="col">${coinDelta}</th>
                </tr>
                `
              )
            }
          })
        })
    }
populateTable("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  
});

