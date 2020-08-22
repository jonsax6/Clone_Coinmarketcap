$( document ).ready(function() {
    let BASE_URL = "https://api.coingecko.com/api/v3";
    let COINS_MARKETS_PG1 = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    let COINS_MARKETS_PG2 = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=false";
    let marketDataAPI_1 = BASE_URL+COINS_MARKETS_PG1;
    let marketDataAPI_2 = BASE_URL+COINS_MARKETS_PG2;
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })


    

    function populateTable(url,num,pg){
        fetch(url)
          .then(res => {
          res.json().then( data => {
            for(i = 0; i < 100; i++){
                let coinData = data[i];
                const MarketCap = coinData.market_cap ? Number(coinData.market_cap.toFixed(2)) : "-";
                const coinPrice = coinData.current_price ? Number(coinData.current_price.toFixed(2)) : "-";
                const volume = coinData.total_volume ? Number(coinData.total_volume.toFixed(2)) : "-";
                const cirSuppy = coinData.circulating_supply ? Number(coinData.circulating_supply.toFixed(2)) : "-";
                const coinDelta = coinData.price_change_24h ? Number(coinData.price_change_24h.toFixed(2)) : "-";

              // CREATE A ROW AND APPEND TO TABLE
                $("#marketsTable").append(
                    `<tr>
                        <th scope="row">${i+num}</td>
                        <td><b><img src="${coinData.image}" style="height: 1em;">&nbsp;&nbsp;${coinData.name}</b></td>
                        <td>${formatter.format(MarketCap)}</td>
                        <td>${formatter.format(coinPrice)}</td>
                        <td>${formatter.format(volume)}</td>
                        <td>${formatter.format(cirSuppy)}</td>
                        <td>${formatter.format(coinDelta)}</td>
                        <td><img src="https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" style="height: 2em;"></td>
                        <td>
                        <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg></a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="https://coinmarketcap.com/headlines/">Add to Watchlist</a>
                                <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/">view Chart</a>
                                <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/markets/">View Markets</a>
                                <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/historical-data/">View Historical Data</a>
                            </div>
                            <a href
                        </td>
                    </tr>`
                )
                

                
            }
            $("#next-page").html("");
            $("#next-page").append(`Page ${pg + 1}`)
          })
        })
    }
populateTable(marketDataAPI_1,1,1);

$("#next-page").click(function(){
    $("#marketsTable").html("");
    populateTable(marketDataAPI_2,101,2);
})
  
});

