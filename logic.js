$( document ).ready(function() {
    let BASE_URL = "https://api.coingecko.com/api/v3";
    let PG = 1;

    //function to display numbers as $###,###.##
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

    var exchangeTableOpen = false;
    
    async function current_BTC_price(){
        const CRYPTO_MARKETS = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        let res = await fetch(CRYPTO_MARKETS);    
        const data = await res.json();       
        let BTC_USD_price = data[0].current_price;
        return BTC_USD_price;   
    }
     
    function movingAve(array){
        let aveArray = []; 
        for(let i=5; i < array.length - 1; i++){
            let indAve =((array[i-4] + array[i-3] + array[i-2] + array[i-1] + array[i])/5);
            aveArray.push(indAve);
        }
        return aveArray;
    }

    function sparkLine(data,color){
        $(`#sparkline${i}`).sparkline(data, {
            type: 'line',
            width: '160',
            height: '30',
            lineColor: color,
            fillColor: null,
            lineWidth: 1.5,
            spotColor: null,
            minSpotColor: null,
            maxSpotColor: null,
            spotRadius: 0,
            highlightSpotColor: undefined,
            highlightLineColor: undefined});
    }

    async function populateCoinsTable(){
        let COINS_MARKETS = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${PG}&sparkline=true`;
        const res = await fetch(COINS_MARKETS);
        const data = await res.json();
        
        for(i = 0; i < data.length; i++){
            let coinData = data[i];
            const MarketCap = coinData.market_cap ? Number(coinData.market_cap).toFixed(2) : "-";
            const coinPrice = coinData.current_price ? Number(coinData.current_price).toFixed(2) : "-";
            const volume = coinData.total_volume ? Number(coinData.total_volume).toFixed(2) : "-";
            const cirSuppy = coinData.circulating_supply ? Number(coinData.circulating_supply).toFixed(2) : "-";
            const coinDelta = coinData.price_change_percentage_24h ? Number(coinData.price_change_percentage_24h).toFixed(2) : "-";
            const sparkData = coinData.sparkline_in_7d.price;
            const sparkAve = movingAve(sparkData);
            const coinSymbol = coinData.symbol;
            const coinName = coinData.name;
            const capSymbol = coinSymbol.toUpperCase(); //converts lowercase coin symbols to uppercase
            
            //table dynamically created, data feed from fetch(COINS_MARKETS)
            var classColor; //variable to change color class for percent change 24h (coinDelta).
            if (coinDelta > 0){ //if change is a positive number show it green
                classColor = "green";
            } 
            if (coinDelta < 0){ //if change is a negative number show it red
                classColor = "red";
            }
            $("#cmc-table").append( //populates the table rows with data from API
                `<tr>
                    <th class="text-right text-light" scope="row">${coinData.market_cap_rank}</td>
                    <td><b class="text-light"><img src="${coinData.image}" style="height: 1em;">&nbsp;&nbsp;${coinName}</b></td>
                    <td class="text-right text-light">${formatter.format(MarketCap)}</td>
                    <td class="text-right text-light">${formatter.format(coinPrice)}</td>
                    <td class="text-right text-light">${formatter.format(volume)}</td>
                    <td class="text-right text-light">${formatter.format(cirSuppy)}&nbsp;${capSymbol}</td>
                    <td id="coin-change-percent" class="text-right ${classColor}">${coinDelta}%</td>
                    <td class="text-right text-light"><span id="sparkline${i}"></span></td>
                </tr>`
                
            );
            //control flow for painting sparklines green (up-trending) or red (down-trending)
            if (sparkAve[0] > sparkAve[sparkAve.length - 1]){
                sparkLine(sparkAve, '#ff0000');
            }
            if (sparkAve[0] < sparkAve[sparkAve.length - 1]){
                sparkLine(sparkAve, '#00bf00');
            }

        }
    }

    async function coinSearch(search){
        let COIN = `${BASE_URL}/coins/markets?vs_currency=usd&ids=${search}&order=market_cap_desc&page=1&sparkline=true`;
        const res = await fetch(COIN);
        const data = await res.json();

        const MarketCap = data[0].market_cap ? Number(data[0].market_cap).toFixed(2) : "-";
        const coinPrice = data[0].current_price ? Number(data[0].current_price).toFixed(2) : "-";
        const volume = data[0].total_volume ? Number(data[0].total_volume).toFixed(2) : "-";
        const cirSuppy = data[0].circulating_supply ? Number(data[0].circulating_supply).toFixed(2) : "-";
        const coinDelta = data[0].price_change_percentage_24h ? Number(data[0].price_change_percentage_24h).toFixed(2) : "-";
        const sparkData = data[0].sparkline_in_7d.price;
        const coinID = data[0].id;
        const sparkAve = movingAve(sparkData);
        const coinSymbol = data[0].symbol;
        const coinName = data[0].name;
        const capSymbol = coinSymbol.toUpperCase(); //converts lowercase coin symbols to uppercase

        //table dynamically created, data feed from fetch(COINS_MARKETS)
        var classColor; //variable to change color class for percent change 24h (coinDelta).
        if (coinDelta > 0){ //if change is a positive number show it green
            classColor = "green";
        } 
        if (coinDelta < 0){ //if change is a negative number show it red
            classColor = "red";
        }
        $("#cmc-table").append( //populates the table rows with data from API
            `<tr>
                <th class="text-light" scope="row">${data[0].market_cap_rank}</td>
                <td><b class="text-light"><img class="text-light" src="${data[0].image}" style="height: 1em;">&nbsp;&nbsp;${coinName}</b></td>
                <td class="text-right text-light">${formatter.format(MarketCap)}</td>
                <td class="text-right text-light">${formatter.format(coinPrice)}</td>
                <td class="text-right text-light">${formatter.format(volume)}</td>
                <td class="text-right text-light">${formatter.format(cirSuppy)}&nbsp;${capSymbol}</td>
                <td id="coin-change-percent" class="text-right ${classColor}">${coinDelta}%</td>
                <td class="text-right"><span id="sparkline${i}"></span></td>
            </tr>`
            
        );
        //control flow for painting sparklines green (up-trending) or red (down-trending)
        if (sparkAve[0] > sparkAve[sparkAve.length - 1]){
            sparkLine(sparkAve, '#ff0000');
        }
        if (sparkAve[0] < sparkAve[sparkAve.length - 1]){
            sparkLine(sparkAve, '#00bf00');
        }
    }

    async function exchangeSearch(search){
        let EXCHANGE = `${BASE_URL}/exchanges/${search}`;
        const res = await fetch(EXCHANGE);
        const data = await res.json();

        const exName = data.name;
        const exCountry = data.country;
        const exUrl = data.url;
        const exYear = data.year_established;
        const volumeBTC = data.trade_volume_24h_btc ? Number(data.trade_volume_24h_btc).toFixed(2) : "-";
        var BTC_price = await current_BTC_price();
        const volumeUSD = Number((volumeBTC * BTC_price)).toFixed(2);
        const exTrust = data.trust_score;

        $("#cmc-table").append(
            `<tr>
                <th class="text-light" scope="row">${data.trust_score_rank}</td>
                <td><img src="${data.image}" style="height: 1em;">&nbsp;&nbsp;<a class="black-links" href ="${exUrl}" target="_blank"><b class="text-light">${data.name}</b></a></td>
                <td class="text-left text-light">${exTrust}</td>
                <td class="text-left text-light">${exCountry}</td>
                <td class="text-left text-light">${exYear}</td>
                <td class="text-right text-light">${formatter.format(volumeUSD)}</td>
            </tr>`
        )
    }

    async function populateExchangeTable(){
        let EXCHANGES = `${BASE_URL}/exchanges?per_page=100&page=${PG}`;
        const res = await fetch(EXCHANGES);
        const data = await res.json();
        for(i = 0; i < 100; i++){
            let exchangeData = data[i];
            const exName = exchangeData.name;
            const exCountry = exchangeData.country;
            const exUrl = exchangeData.url;
            const exYear = exchangeData.year_established;
            const volumeBTC = exchangeData.trade_volume_24h_btc ? Number(exchangeData.trade_volume_24h_btc).toFixed(2) : "-";
            var BTC_price = await current_BTC_price();
            const volumeUSD = Number((volumeBTC * BTC_price)).toFixed(2);
            const exTrust = exchangeData.trust_score;

            $("#cmc-table").append(
                `<tr>
                    <th class="text-light"scope="row">${exchangeData.trust_score_rank}</td>
                    <td><img src="${exchangeData.image}" style="height: 1em;">&nbsp;&nbsp;<a class="black-links" href ="${exUrl}" target="_blank"><b class="text-light">${exchangeData.name}</b></a></td>
                    <td class="text-left text-light">${exTrust}</td>
                    <td class="text-left text-light">${exCountry}</td>
                    <td class="text-left text-light">${exYear}</td>
                    <td class="text-right text-light">${formatter.format(volumeUSD)}</td>
                </tr>`
            )
        } 
    }

    $("#previous-page, #previous-page-btm").hide();  //make sure previous page nav buttons aren't showing for home page
    $("#cmc-page-title").html( //loads up the main table title
        `<div class="row justify-content-center text-center mt-3 full-height">
            <h4 class="align-self-center text-light"><strong>Top 100 Cryptocurrencies by Market Capitalization</strong></h4>
        </div>`
        );
    $("#nav-tabContent").html( //table header load for home page
        `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
            <table class="table" id="markets-table-header"><!--start of table data-->
                <thead id="cmc-table-header">
                    <tr>
                        <th class="text-right text-light" scope="col">Rank</th>
                        <th class="text-left text-light"scope="col">Name</th>
                        <th class="text-right text-light" scope="col">Market Cap</th>
                        <th class="text-right text-light" scope="col">Price</th>
                        <th class="text-right text-light" scope="col">Volume (24h)</th>
                        <th class="text-right text-light" scope="col">Circulating Supply</th>
                        <th class="text-right text-light" scope="col">Change (24h)</th>
                        <th class="text-right text-light" scope="col">Price Graph(7d)</th>
                    </tr>
                </thead>
                <tbody id="cmc-table">
                </tbody>
            </table>
        </div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
        </div>
        `
        );
        populateCoinsTable();


    //-----------CLICK-EVENT LISTENERS--------------

    //click event listener for home-page logo
    $("#home-page-logo").click(function(){
        location.reload()
    })

    //click event listener for search field
    $("#data-search").click(function(){
        let entry = $("#data-search-entry").val();
        const lowEntry = entry.toLowerCase();
        if(exchangeTableOpen == false){
            $("#nav-tabContent").html( //table header load for home page
                `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
                    <table class="table" id="markets-table-header"><!--start of table data-->
                        <thead id="cmc-table-header">
                            <tr>
                                <th class="text-right text-light" scope="col">Rank</th>
                                <th class="text-left text-light"scope="col">Name</th>
                                <th class="text-right text-light" scope="col">Market Cap</th>
                                <th class="text-right text-light" scope="col">Price</th>
                                <th class="text-right text-light" scope="col">Volume (24h)</th>
                                <th class="text-right text-light" scope="col">Circulating Supply</th>
                                <th class="text-right text-light" scope="col">Change (24h)</th>
                                <th class="text-right text-light" scope="col">Price Graph(7d)</th>
                            </tr>
                        </thead>
                        <tbody id="cmc-table">
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
                </div>
                `
                );
            $("#cmc-table").html("");
            coinSearch(lowEntry);
        }
        else {
            $("#nav-tabContent").html( //loads up the table header html content
                `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
                    <table class="table" id="markets-table-header"><!--start of table data-->
                        <thead id="cmc-table-header">
                                <tr>
                                    <th class="text-left text-light" scope="col">Rank</th>
                                    <th class="text-left text-light"scope="col">Name</th>
                                    <th class="text-left text-light" scope="col">Trust Score</th>
                                    <th class="text-left text-light" scope="col">Country</th>
                                    <th class="text-left text-light" scope="col">Year Est.</th>
                                    <th class="text-right text-light" scope="col">Volume (24h)</th>
                                </tr>
                        </thead>
                        <tbody id="cmc-table">
                        </tbody>
                    </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
                </div>`
                );
            $("#cmc-table").html("");
            exchangeSearch(lowEntry);
        }
    })

    //keypress event (enter) listener for search field
    $("#data-search-entry").keyup(function (e) {
        if (e.keyCode === 13) {
            // Cancel the default action, if needed
            e.preventDefault();
            let entry = $("#data-search-entry").val();
            if(exchangeTableOpen == false){
                $("#nav-tabContent").html( //table header load for home page
                    `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table class="table" id="markets-table-header"><!--start of table data-->
                            <thead id="cmc-table-header">
                                <tr>
                                    <th class="text-right" scope="col">Rank</th>
                                    <th class="text-left"scope="col">Name</th>
                                    <th class="text-right" scope="col">Market Cap</th>
                                    <th class="text-right" scope="col">Price</th>
                                    <th class="text-right" scope="col">Volume (24h)</th>
                                    <th class="text-right" scope="col">Circulating Supply</th>
                                    <th class="text-right" scope="col">Change (24h)</th>
                                    <th class="text-right" scope="col">Price Graph(7d)</th>
                                </tr>
                            </thead>
                            <tbody id="cmc-table">
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
                    </div>
                    `
                    );
                $("#cmc-table").html("");
                coinSearch(entry);
            }
            else {
                $("#nav-tabContent").html( //loads up the table header html content
                    `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table class="table" id="markets-table-header"><!--start of table data-->
                            <thead id="cmc-table-header">
                                    <tr>
                                        <th class="text-left" scope="col">Rank</th>
                                        <th class="text-left"scope="col">Name</th>
                                        <th class="text-left" scope="col">Trust Score</th>
                                        <th class="text-left" scope="col">Country</th>
                                        <th class="text-left" scope="col">Year Est.</th>
                                        <th class="text-right" scope="col">Volume (24h)</th>
                                    </tr>
                            </thead>
                            <tbody id="cmc-table">
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
                    </div>`
                    );
                $("#cmc-table").html("");
                exchangeSearch(entry);
            }         
        }
    });

    //click event listener for cryptocurrency tab
    $("#nav-cryptocurrency-tab").click(function(){
        $("#cmc-table").html("");
        location.reload()
    })

    //click event listener for exchanges tab
    $("#nav-exchanges-tab").click(function(){
        exchangeTableOpen = true;
        $("#cmc-page-title").html( //loads up the main table title html content
            `<div class="row justify-content-center text-center mt-3">
                <h4 class="align-bottom text-light"><strong>Top Cryptocurrency Spot Exchanges</strong></h4>
            </div>
            <div class="row justify-content-center text-center full-height">
                <h6 class="align-top  text-light font-weight-light">CoinMarketCap ranks the top cryptocurrency exchanges based on traffic, liquidity, trading volumes of spot markets.</h6>
            </div>`
        );

        $("#nav-tabContent").html( //loads up the table header html content
            `<div class="tab-pane fade show active" id="nav-cmc-table" role="tabpanel" aria-labelledby="nav-home-tab">
                <table class="table" id="markets-table-header"><!--start of table data-->
                    <thead id="cmc-table-header">
                            <tr>
                                <th class="text-left text-light" scope="col">Rank</th>
                                <th class="text-left text-light"scope="col">Name</th>
                                <th class="text-left text-light" scope="col">Trust Score</th>
                                <th class="text-left text-light" scope="col">Country</th>
                                <th class="text-left text-light" scope="col">Year Est.</th>
                                <th class="text-right text-light" scope="col">Volume (24h)</th>
                            </tr>
                    </thead>
                    <tbody id="cmc-table">
                    </tbody>
                </table>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Your Watchlist
            </div>`
            );
        $("#cmc-table").html("");
        populateExchangeTable();
    })

    //click event listeners for cryptocurrency table navigation, all hidden when in exchanges tab
    $("#next-page, #next-page-btm").click(function(){
        $("#cmc-table").html("");
        $("#previous-page").show();
        $("#previous-page-btm").show();
        PG++;
        if(exchangeTableOpen == false){
            populateCoinsTable();
        }
        if(exchangeTableOpen == true){
            populateExchangeTable();
        }
    })
    
    $("#previous-page, #previous-page-btm").click(function(){
        $("#cmc-table").html("");
        if(PG == 2){
            $("#previous-page").hide();
            $("#previous-page-btm").hide();
        }
        PG--;
        if(exchangeTableOpen == false){
            populateCoinsTable();
        }
        if(exchangeTableOpen == true){
            populateExchangeTable();
        }
    })
    
    
});

