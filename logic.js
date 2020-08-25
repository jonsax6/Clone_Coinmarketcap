$( document ).ready(function() {
    let BASE_URL = "https://api.coingecko.com/api/v3";
    let coinPG = 1;
    let exchangePG = 1;
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

    let SPARKLINE_BASE = "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/";
    let coinID_Obj_Symbol = {};
    for(i = 0; i < CMC_DATA.length; i++){
        let coin = CMC_DATA[i];
        coinID_Obj_Symbol[coin.symbol] = coin.id;
    }
    let coinID_Obj_Slug = {};
    for(i = 0; i < CMC_DATA.length; i++){
        let coin = CMC_DATA[i];
        coinID_Obj_Slug[coin.slug] = coin.id;
    }
    let coinID_Obj_Name = {};
    for(i = 0; i < CMC_DATA.length; i++){
        let coin = CMC_DATA[i];
        coinID_Obj_Name[coin.name] = coin.id;
    }
    //let ethChart = `${SPARKLINE_BASE}${coinID_Obj["ETH"]}.png`
    
    

    function populateCoinsTable(){
        $("#crypto-page-title").html("");
        $("#crypto-page-title").append(
            `                    
            <div class="row justify-content-center full-height">
                <h4 class="align-self-center"><strong>Top 100 Cryptocurrencies by Market Capitalization</strong></h4>
            </div>
            `
            )
        let COINS_MARKETS = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${coinPG}&sparkline=false`;
        fetch(COINS_MARKETS)
          .then(res => {
          res.json().then( data => {
            for(i = 0; i < data.length; i++){
                let coinData = data[i];
                const MarketCap = coinData.market_cap ? Number(coinData.market_cap.toFixed(2)) : "-";
                const coinPrice = coinData.current_price ? Number(coinData.current_price.toFixed(2)) : "-";
                const volume = coinData.total_volume ? Number(coinData.total_volume.toFixed(2)) : "-";
                const cirSuppy = coinData.circulating_supply ? Number(coinData.circulating_supply.toFixed(2)) : "-";
                const coinDelta = coinData.price_change_24h ? Number(coinData.price_change_24h.toFixed(2)) : "-";
                const coinSymbol = coinData.symbol;
                const coinName = coinData.name;
                const coin_ID = coinData.id;
                const capSymbol = coinSymbol.toUpperCase(); //converts lowercase coin symbols to uppercase
                
                let ID_url = coinID_Obj_Symbol[capSymbol]; //sets ID_url to the coinID_Obj_Symbol assigning coinData.symbol
                if (ID_url == undefined){ //if ID_url comes back undefined, we try an different object comparing to  "name"
                    ID_url = coinID_Obj_Name[coinName];
                } 
                if (ID_url == undefined){ // if above also returns undefined, we try the final object and compare to "slug"
                    ID_url = coinID_Obj_Slug[coin_ID];
                } 
                if (ID_url == undefined){
                    ID_url = "1";
                }
                //table dynamically created, data feed from fetch(COINS_MARKETS)
                $("#marketsTable").append(
                    `<tr>
                        <th scope="row">${coinData.market_cap_rank}</td>
                        <td><b><img src="${coinData.image}" style="height: 1em;">&nbsp;&nbsp;${coinData.name}</b></td>
                        <td>${formatter.format(MarketCap)}</td>
                        <td>${formatter.format(coinPrice)}</td>
                        <td>${formatter.format(volume)}</td>
                        <td>${formatter.format(cirSuppy)}</td>
                        <td>${formatter.format(coinDelta)}</td>
                        <td><img src=${SPARKLINE_BASE}${ID_url}.png style="height: 2em;"></td>
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
           $("#prev-page").html("");
          })
        })
    }
    function populateExchangeTable(){
        $("#crypto-page-title").html("");
        $("#crypto-page-title").append(
            `                    
            <div class="row justify-content-center full-height">
                <h4 class="align-self-center"><strong>Top Cryptocurrency Spot Exchanges</strong></h4>
            </div>
            <div class="row justify-content-center full-height">
                <h6 class="text-secondary font-weight-light">CoinMarketCap ranks the top cryptocurrency exchanges based on traffic, liquidity, trading volumes of spot markets.</h6>
            </div>
            `
            )
            let EXCHANGES = `${BASE_URL}/exchanges?per_page=100&page=${exchangePG}`;
        fetch(EXCHANGES)
          .then(res => {
          res.json().then( data => {
            for(i = 0; i < 100; i++){
                let exchangeData = data[i];
                const MarketCap = exchangeData.market_cap ? Number(exchangeData.market_cap.toFixed(2)) : "-";
                const coinPrice = exchangeData.current_price ? Number(exchangeData.current_price.toFixed(2)) : "-";
                const volume = exchangeData.trade_volume_24h_btc ? Number(exchangeData.trade_volume_24h_btc.toFixed(2)) : "-";
                const cirSuppy = exchangeData.circulating_supply ? Number(exchangeData.circulating_supply.toFixed(2)) : "-";
                const coinDelta = exchangeData.price_change_24h ? Number(exchangeData.price_change_24h.toFixed(2)) : "-";

              // CREATE A ROW AND APPEND TO TABLE
                // $("#marketsTable").append(
                //     `<tr>
                //         <th scope="row">${i+rank}</td>
                //         <td><b><img src="${exchangeData.image}" style="height: 1em;">&nbsp;&nbsp;${coinData.name}</b></td>
                //         <td>${formatter.format(MarketCap)}</td>
                //         <td>${formatter.format(coinPrice)}</td>
                //         <td>${formatter.format(volume)}</td>
                //         <td>${formatter.format(cirSuppy)}</td>
                //         <td>${formatter.format(coinDelta)}</td>
                //         <td><img src=${sparkineUrl} style="height: 2em;"></td>
                //         <td>
                //         <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                //         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                //         <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                //         </svg></a>
                //             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                //                 <a class="dropdown-item" href="https://coinmarketcap.com/headlines/">Add to Watchlist</a>
                //                 <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/">view Chart</a>
                //                 <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/markets/">View Markets</a>
                //                 <a class="dropdown-item" href="https://coinmarketcap.com/currencies/bitcoin/historical-data/">View Historical Data</a>
                //             </div>
                //             <a href
                //         </td>
                //     </tr>`
                //)
                

                
            }
          })
        })
    }

$("#previous-page").hide();
$("#previous-page-btm").hide();
populateCoinsTable();


$("#next-page").click(function(){
    $("#marketsTable").html("");
    $("#previous-page").show();
    $("#previous-page-btm").show();
    coinPG++;
    populateCoinsTable();
})
$("#next-page-btm").click(function(){
    $("#marketsTable").html("");
    $("#previous-page").show();
    $("#previous-page-btm").show();
    coinPG++;
    populateCoinsTable();
})
$("#previous-page").click(function(){
    $("#marketsTable").html("");
    if(coinPG < 3){
        $("#previous-page").hide();
        $("#previous-page-btm").hide();
    }
    coinPG--;
    populateCoinsTable();
})
$("#previous-page-btm").click(function(){
    $("#marketsTable").html("");
    if(coinPG < 3){
        $("#previous-page").hide();
        $("#previous-page-btm").hide();
    }
    coinPG--;
    populateCoinsTable();
})
  
});

