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

    async function current_BTC_price(){
        const CRYPTO_MARKETS = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        
        let res = await fetch(CRYPTO_MARKETS);    
        const data = await res.json();       
        let BTC_USD_price = data[0].current_price;
        return BTC_USD_price;   
      }
     
    


    function populateCoinsTable(){
        $("#nav-exchanges").hide();
        $("#crypto-page-title").html(
            `                    
            <div class="row justify-content-center mt-3 full-height">
                <h4 class="align-self-center"><strong>Top 100 Cryptocurrencies by Market Capitalization</strong></h4>
            </div>
            `
            )
        let COINS_MARKETS = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${coinPG}&sparkline=true`;
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
                const sparkData = coinData.sparkline_in_7d.price;
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
                $("#markets-table").append(
                    `<tr>
                        <th scope="row">${coinData.market_cap_rank}</td>
                        <td><b><img src="${coinData.image}" style="height: 1em;">&nbsp;&nbsp;${coinData.name}</b></td>
                        <td class="text-right">${formatter.format(MarketCap)}</td>
                        <td class="text-right">${formatter.format(coinPrice)}</td>
                        <td class="text-right">${formatter.format(volume)}</td>
                        <td class="text-right">${formatter.format(cirSuppy)}&nbsp;${capSymbol}</td>
                        <td class="text-right">${formatter.format(coinDelta)}</td>
                        <td><img src=${SPARKLINE_BASE}${ID_url}.png style="height: 2em;"></td>
                    </tr>`
                )
                

                
            }
            })
            })
            .catch(function(err){
                alert("fetch() data error");
            })
    }
    function populateExchangeTable(){
        $("#nav-cryptocurrency").hide();
        $("#crypto-page-title").html(
            `                    
            <div class="row border justify-content-center mt-3">
                <h4 class="align-bottom"><strong>Top Cryptocurrency Spot Exchanges</strong></h4>
            </div>
            <div class="row border justify-content-center full-height">
                <h6 class="align-top text-secondary font-weight-light">CoinMarketCap ranks the top cryptocurrency exchanges based on traffic, liquidity, trading volumes of spot markets.</h6>
            </div>
            `
           )
        let EXCHANGES = `${BASE_URL}/exchanges?per_page=100&page=${exchangePG}`;
        fetch(EXCHANGES)
            .then(res => {
            res.json().then( async data => {
            for(i = 0; i < 100; i++){
                let exchangeData = data[i];
                const exName = exchangeData.name;
                const exCountry = exchangeData.country;
                const exYear = exchangeData.year_established;
                const volumeBTC = exchangeData.trade_volume_24h_btc ? Number(exchangeData.trade_volume_24h_btc).toFixed(2) : "-";
                var BTC_price = await current_BTC_price();
                const volumeUSD = Number((volumeBTC * BTC_price)).toFixed(2);
                const exTrust = exchangeData.trust_score;

                $("#markets-table").append(
                    `<tr>
                        <th scope="row">${exchangeData.trust_score_rank}</td>
                        <td><b><img src="${exchangeData.image}" style="height: 1em;">&nbsp;&nbsp;${exchangeData.name}</b></td>
                        <td class="text-right">${exCountry}</td>
                        <td>${exYear}}</td>
                        <td>${formatter.format(volumeUSD)}</td>
                        <td>${exTrust}</td>
                    </tr>`
                )
            }
          })
        })
    }


    
$("#previous-page").hide();
$("#previous-page-btm").hide();
populateCoinsTable();


$("#next-page").click(function(){
    $("#markets-table").html("");
    $("#previous-page").show();
    $("#previous-page-btm").show();
    coinPG++;
    populateCoinsTable();
})
$("#next-page-btm").click(function(){
    $("#markets-table").html("");
    $("#previous-page").show();
    $("#previous-page-btm").show();
    coinPG++;
    populateCoinsTable();
})
$("#previous-page").click(function(){
    $("#markets-table").html("");
    if(coinPG < 3){
        $("#previous-page").hide();
        $("#previous-page-btm").hide();
    }
    coinPG--;
    populateCoinsTable();
})
$("#previous-page-btm").click(function(){
    $("#markets-table").html("");
    if(coinPG < 3){
        $("#previous-page").hide();
        $("#previous-page-btm").hide();
    }
    coinPG--;
    populateCoinsTable();
})
  
});

