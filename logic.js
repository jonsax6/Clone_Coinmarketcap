$( document ).ready(function() {
    let BASE_URL = "https://api.coingecko.com/api/v3";
    let COINS_MARKETS_PG1 = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    let COINS_MARKETS_PG2 = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=false";
    let EXCHANGES = "/exchanges?per_page=100&page=1";

    let marketDataAPI_1 = BASE_URL+COINS_MARKETS_PG1;
    let marketDataAPI_2 = BASE_URL+COINS_MARKETS_PG2;
    let exchangeDataAPI_1 = BASE_URL+EXCHANGES;
    const CMC_DATA = [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 8767,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "sha-256",
                "store-of-value",
                "state-channels"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18469793,
            "total_supply": 18469793,
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2020-08-24T17:13:33.000Z",
            "quote": {
                "USD": {
                    "price": 11756.6182232,
                    "volume_24h": 20377601580.9275,
                    "percent_change_1h": 0.0112734,
                    "percent_change_24h": 0.875181,
                    "percent_change_7d": -3.52718,
                    "market_cap": 217142304962.53177,
                    "last_updated": "2020-08-24T17:13:33.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 5605,
            "date_added": "2015-08-07T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "ethash",
                "medium-of-exchange",
                "crowdfunding",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 112314739.3115,
            "total_supply": 112314739.3115,
            "platform": null,
            "cmc_rank": 2,
            "last_updated": "2020-08-24T17:13:29.000Z",
            "quote": {
                "USD": {
                    "price": 403.340699648,
                    "volume_24h": 9638273845.68929,
                    "percent_change_1h": 0.144895,
                    "percent_change_24h": 3.08974,
                    "percent_change_7d": -7.16605,
                    "market_cap": 45301105534.683136,
                    "last_updated": "2020-08-24T17:13:29.000Z"
                }
            }
        },
        {
            "id": 52,
            "name": "XRP",
            "symbol": "XRP",
            "slug": "xrp",
            "num_market_pairs": 590,
            "date_added": "2013-08-04T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "enterprise-solutions"
            ],
            "max_supply": 100000000000,
            "circulating_supply": 44942589751,
            "total_supply": 99990900966,
            "platform": null,
            "cmc_rank": 3,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.288136557512,
                    "volume_24h": 1363933161.31548,
                    "percent_change_1h": 0.0967587,
                    "percent_change_24h": 1.66184,
                    "percent_change_7d": -8.82266,
                    "market_cap": 12949603096.527233,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 825,
            "name": "Tether",
            "symbol": "USDT",
            "slug": "tether",
            "num_market_pairs": 6639,
            "date_added": "2015-02-25T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "payments",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 9998221723.19198,
            "total_supply": 10281372503.6705,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
            },
            "cmc_rank": 4,
            "last_updated": "2020-08-24T17:13:21.000Z",
            "quote": {
                "USD": {
                    "price": 1.00041907709,
                    "volume_24h": 31425468519.4487,
                    "percent_change_1h": 0.00901542,
                    "percent_change_24h": -0.125329,
                    "percent_change_7d": 0.0434756,
                    "market_cap": 10002411748.85691,
                    "last_updated": "2020-08-24T17:13:21.000Z"
                }
            }
        },
        {
            "id": 1831,
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "slug": "bitcoin-cash",
            "num_market_pairs": 520,
            "date_added": "2017-07-23T00:00:00.000Z",
            "tags": [
                "mineable",
                "marketplace",
                "enterprise-solutions"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18498675,
            "total_supply": 18498675,
            "platform": null,
            "cmc_rank": 5,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 291.982136228,
                    "volume_24h": 1200372154.18829,
                    "percent_change_1h": 1.09778,
                    "percent_change_24h": 2.64565,
                    "percent_change_7d": -8.22536,
                    "market_cap": 5401282643.887498,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 1975,
            "name": "Chainlink",
            "symbol": "LINK",
            "slug": "chainlink",
            "num_market_pairs": 306,
            "date_added": "2017-09-20T00:00:00.000Z",
            "tags": [
                "platform",
                "defi",
                "oracles",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 350000000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
            },
            "cmc_rank": 6,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 15.2309088833,
                    "volume_24h": 1132490463.55435,
                    "percent_change_1h": 0.458029,
                    "percent_change_24h": 1.67746,
                    "percent_change_7d": -19.3711,
                    "market_cap": 5330818109.155,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 2,
            "name": "Litecoin",
            "symbol": "LTC",
            "slug": "litecoin",
            "num_market_pairs": 644,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "scrypt",
                "medium-of-exchange"
            ],
            "max_supply": 84000000,
            "circulating_supply": 65306924.3115159,
            "total_supply": 65306924.3115159,
            "platform": null,
            "cmc_rank": 7,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 62.6170718401,
                    "volume_24h": 2527666540.72405,
                    "percent_change_1h": 0.650794,
                    "percent_change_24h": 4.28916,
                    "percent_change_7d": -4.96117,
                    "market_cap": 4089328371.2701645,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 3602,
            "name": "Bitcoin SV",
            "symbol": "BSV",
            "slug": "bitcoin-sv",
            "num_market_pairs": 205,
            "date_added": "2018-11-09T00:00:00.000Z",
            "tags": [
                "mineable",
                "medium-of-exchange"
            ],
            "max_supply": 21000000,
            "circulating_supply": 18497314.5819233,
            "total_supply": 18497314.5819233,
            "platform": null,
            "cmc_rank": 8,
            "last_updated": "2020-08-24T17:13:12.000Z",
            "quote": {
                "USD": {
                    "price": 204.262827834,
                    "volume_24h": 740166703.400083,
                    "percent_change_1h": 2.81411,
                    "percent_change_24h": 4.66099,
                    "percent_change_7d": -9.60886,
                    "market_cap": 3778313783.8387365,
                    "last_updated": "2020-08-24T17:13:12.000Z"
                }
            }
        },
        {
            "id": 3635,
            "name": "Crypto.com Coin",
            "symbol": "CRO",
            "slug": "crypto-com-coin",
            "num_market_pairs": 57,
            "date_added": "2018-12-14T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "mobile",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 19014155251.1416,
            "total_supply": 100000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
            },
            "cmc_rank": 9,
            "last_updated": "2020-08-24T17:13:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.174696636388,
                    "volume_24h": 74939127.9006396,
                    "percent_change_1h": 0.176733,
                    "percent_change_24h": 2.28569,
                    "percent_change_7d": 2.35741,
                    "market_cap": 3321708966.1336656,
                    "last_updated": "2020-08-24T17:13:12.000Z"
                }
            }
        },
        {
            "id": 1839,
            "name": "Binance Coin",
            "symbol": "BNB",
            "slug": "binance-coin",
            "num_market_pairs": 379,
            "date_added": "2017-07-25T00:00:00.000Z",
            "tags": [
                "marketplace",
                "payments"
            ],
            "max_supply": 176406561,
            "circulating_supply": 144406560,
            "total_supply": 176406560.9,
            "platform": null,
            "cmc_rank": 10,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 22.5446375332,
                    "volume_24h": 189213842.11752,
                    "percent_change_1h": 0.0445653,
                    "percent_change_24h": 3.11667,
                    "percent_change_7d": -4.07001,
                    "market_cap": 3255593552.6162977,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 2010,
            "name": "Cardano",
            "symbol": "ADA",
            "slug": "cardano",
            "num_market_pairs": 162,
            "date_added": "2017-10-01T00:00:00.000Z",
            "tags": [
                "mineable",
                "platform",
                "research",
                "smart-contracts"
            ],
            "max_supply": 45000000000,
            "circulating_supply": 25927070538,
            "total_supply": 31112483745,
            "platform": null,
            "cmc_rank": 11,
            "last_updated": "2020-08-24T17:13:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.125085546935,
                    "volume_24h": 268724417.003337,
                    "percent_change_1h": 0.342469,
                    "percent_change_24h": 2.27455,
                    "percent_change_7d": -11.7835,
                    "market_cap": 3243101798.668055,
                    "last_updated": "2020-08-24T17:13:06.000Z"
                }
            }
        },
        {
            "id": 1765,
            "name": "EOS",
            "symbol": "EOS",
            "slug": "eos",
            "num_market_pairs": 411,
            "date_added": "2017-07-01T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "enterprise-solutions",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 935467793.447,
            "total_supply": 1022167804.397,
            "platform": null,
            "cmc_rank": 12,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 3.38251716932,
                    "volume_24h": 1968967922.45936,
                    "percent_change_1h": 0.375784,
                    "percent_change_24h": 1.26501,
                    "percent_change_7d": -11.5194,
                    "market_cap": 3164235872.6803727,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 2011,
            "name": "Tezos",
            "symbol": "XTZ",
            "slug": "tezos",
            "num_market_pairs": 149,
            "date_added": "2017-10-06T00:00:00.000Z",
            "tags": [
                "platform",
                "enterprise-solutions",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 740884787.653774,
            "total_supply": 740884787.653774,
            "platform": null,
            "cmc_rank": 13,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 3.73849945804,
                    "volume_24h": 233975144.56352,
                    "percent_change_1h": -0.122325,
                    "percent_change_24h": 7.4919,
                    "percent_change_7d": -9.24205,
                    "market_cap": 2769797377.1137147,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 512,
            "name": "Stellar",
            "symbol": "XLM",
            "slug": "stellar",
            "num_market_pairs": 291,
            "date_added": "2014-08-05T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "decentralized-exchange"
            ],
            "max_supply": null,
            "circulating_supply": 20583243420.4775,
            "total_supply": 50001803764.8717,
            "platform": null,
            "cmc_rank": 14,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.104195762647,
                    "volume_24h": 170707015.820457,
                    "percent_change_1h": 0.303276,
                    "percent_change_24h": 2.58997,
                    "percent_change_7d": -9.13372,
                    "market_cap": 2144686745.9454982,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1958,
            "name": "TRON",
            "symbol": "TRX",
            "slug": "tron",
            "num_market_pairs": 408,
            "date_added": "2017-09-13T00:00:00.000Z",
            "tags": [
                "media",
                "filesharing",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 71659657369.49,
            "total_supply": 100850743811.662,
            "platform": null,
            "cmc_rank": 15,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.025108898084,
                    "volume_24h": 565618084.870364,
                    "percent_change_1h": -0.179703,
                    "percent_change_24h": 2.20765,
                    "percent_change_7d": -16.2469,
                    "market_cap": 1799295033.624884,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 328,
            "name": "Monero",
            "symbol": "XMR",
            "slug": "monero",
            "num_market_pairs": 171,
            "date_added": "2014-05-21T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "medium-of-exchange",
                "ringct"
            ],
            "max_supply": null,
            "circulating_supply": 17675755.9118197,
            "total_supply": 17675755.9118197,
            "platform": null,
            "cmc_rank": 16,
            "last_updated": "2020-08-24T17:13:02.000Z",
            "quote": {
                "USD": {
                    "price": 93.2939447834,
                    "volume_24h": 78289011.0171959,
                    "percent_change_1h": 0.039291,
                    "percent_change_24h": 2.17734,
                    "percent_change_7d": 0.365709,
                    "market_cap": 1649040996.0421631,
                    "last_updated": "2020-08-24T17:13:02.000Z"
                }
            }
        },
        {
            "id": 3794,
            "name": "Cosmos",
            "symbol": "ATOM",
            "slug": "cosmos",
            "num_market_pairs": 144,
            "date_added": "2019-03-14T00:00:00.000Z",
            "tags": [
                "platform",
                "content-creation",
                "interoperability"
            ],
            "max_supply": null,
            "circulating_supply": 202115260.37272,
            "total_supply": 259899863.37272,
            "platform": null,
            "cmc_rank": 17,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 7.76538200852,
                    "volume_24h": 594291787.845961,
                    "percent_change_1h": -1.82318,
                    "percent_change_24h": 1.82299,
                    "percent_change_7d": 27.9257,
                    "market_cap": 1569502206.5456553,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 3408,
            "name": "USD Coin",
            "symbol": "USDC",
            "slug": "usd-coin",
            "num_market_pairs": 429,
            "date_added": "2018-10-08T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 1351227877.30276,
            "total_supply": 1357347814.77,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            },
            "cmc_rank": 18,
            "last_updated": "2020-08-24T17:13:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.99991595274,
                    "volume_24h": 310001082.561094,
                    "percent_change_1h": 0.0209062,
                    "percent_change_24h": -0.019714,
                    "percent_change_7d": 0.279292,
                    "market_cap": 1351114310.302037,
                    "last_updated": "2020-08-24T17:13:14.000Z"
                }
            }
        },
        {
            "id": 1376,
            "name": "Neo",
            "symbol": "NEO",
            "slug": "neo",
            "num_market_pairs": 240,
            "date_added": "2016-09-08T00:00:00.000Z",
            "tags": [
                "platform",
                "enterprise-solutions",
                "smart-contracts"
            ],
            "max_supply": 100000000,
            "circulating_supply": 70538831,
            "total_supply": 100000000,
            "platform": null,
            "cmc_rank": 19,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 18.4738241466,
                    "volume_24h": 390440580.09179,
                    "percent_change_1h": 0.334876,
                    "percent_change_24h": 1.886,
                    "percent_change_7d": 12.213,
                    "market_cap": 1303121959.4007366,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 3957,
            "name": "UNUS SED LEO",
            "symbol": "LEO",
            "slug": "unus-sed-leo",
            "num_market_pairs": 26,
            "date_added": "2019-05-21T00:00:00.000Z",
            "tags": [
                "marketplace",
                "discount-token",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 999498892.9,
            "total_supply": 999498892.9,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
            },
            "cmc_rank": 20,
            "last_updated": "2020-08-24T17:13:12.000Z",
            "quote": {
                "USD": {
                    "price": 1.2658745841,
                    "volume_24h": 11673238.7213144,
                    "percent_change_1h": -0.027119,
                    "percent_change_24h": -0.14936,
                    "percent_change_7d": -0.444405,
                    "market_cap": 1265240245.358198,
                    "last_updated": "2020-08-24T17:13:12.000Z"
                }
            }
        },
        {
            "id": 1720,
            "name": "IOTA",
            "symbol": "MIOTA",
            "slug": "iota",
            "num_market_pairs": 55,
            "date_added": "2017-06-13T00:00:00.000Z",
            "tags": [
                "dag",
                "medium-of-exchange",
                "iot",
                "sharing-economy"
            ],
            "max_supply": 2779530283,
            "circulating_supply": 2779530283,
            "total_supply": 2779530283,
            "platform": null,
            "cmc_rank": 21,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.394388146716,
                    "volume_24h": 18733172.6222546,
                    "percent_change_1h": 0.506295,
                    "percent_change_24h": 2.52411,
                    "percent_change_7d": -4.98196,
                    "market_cap": 1096213797.053369,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 3077,
            "name": "VeChain",
            "symbol": "VET",
            "slug": "vechain",
            "num_market_pairs": 110,
            "date_added": "2017-08-22T00:00:00.000Z",
            "tags": [
                "logistics",
                "data-provenance",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 55454734800,
            "total_supply": 86712634466,
            "platform": null,
            "cmc_rank": 22,
            "last_updated": "2020-08-24T17:13:10.000Z",
            "quote": {
                "USD": {
                    "price": 0.018308330957,
                    "volume_24h": 126588267.580697,
                    "percent_change_1h": 0.0602567,
                    "percent_change_24h": 1.6189,
                    "percent_change_7d": -10.0097,
                    "market_cap": 1015283637.8510653,
                    "last_updated": "2020-08-24T17:13:10.000Z"
                }
            }
        },
        {
            "id": 2502,
            "name": "Huobi Token",
            "symbol": "HT",
            "slug": "huobi-token",
            "num_market_pairs": 155,
            "date_added": "2018-02-03T00:00:00.000Z",
            "tags": [
                "marketplace",
                "discount-token",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 213712639.769887,
            "total_supply": 500000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
            },
            "cmc_rank": 23,
            "last_updated": "2020-08-24T17:13:08.000Z",
            "quote": {
                "USD": {
                    "price": 4.72857994635,
                    "volume_24h": 66779091.4957847,
                    "percent_change_1h": -0.409015,
                    "percent_change_24h": 1.67858,
                    "percent_change_7d": -1.61795,
                    "market_cap": 1010557302.6974092,
                    "last_updated": "2020-08-24T17:13:08.000Z"
                }
            }
        },
        {
            "id": 2239,
            "name": "Aave",
            "symbol": "LEND",
            "slug": "aave",
            "num_market_pairs": 125,
            "date_added": "2017-11-30T00:00:00.000Z",
            "tags": [
                "platform",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 1299999941.70317,
            "total_supply": 1299999941.70317,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x80fb784b7ed66730e8b1dbd9820afd29931aab03"
            },
            "cmc_rank": 24,
            "last_updated": "2020-08-24T17:13:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.723086020119,
                    "volume_24h": 102764137.775292,
                    "percent_change_1h": 13.2815,
                    "percent_change_24h": 28.4418,
                    "percent_change_7d": 29.6385,
                    "market_cap": 940011784.0010773,
                    "last_updated": "2020-08-24T17:13:06.000Z"
                }
            }
        },
        {
            "id": 131,
            "name": "Dash",
            "symbol": "DASH",
            "slug": "dash",
            "num_market_pairs": 302,
            "date_added": "2014-02-14T00:00:00.000Z",
            "tags": [
                "mineable",
                "hybrid-pow-pos",
                "x11",
                "medium-of-exchange",
                "privacy",
                "masternodes"
            ],
            "max_supply": 18900000,
            "circulating_supply": 9667973.26852809,
            "total_supply": 9667973.26852809,
            "platform": null,
            "cmc_rank": 25,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 91.9159333047,
                    "volume_24h": 193671304.477559,
                    "percent_change_1h": 0.795965,
                    "percent_change_24h": 0.759106,
                    "percent_change_7d": -6.32699,
                    "market_cap": 888640786.1416506,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1808,
            "name": "OMG Network",
            "symbol": "OMG",
            "slug": "omg",
            "num_market_pairs": 235,
            "date_added": "2017-07-14T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "payments",
                "state-channels"
            ],
            "max_supply": null,
            "circulating_supply": 140245398.245133,
            "total_supply": 140245398.245133,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
            },
            "cmc_rank": 26,
            "last_updated": "2020-08-24T17:13:06.000Z",
            "quote": {
                "USD": {
                    "price": 5.88448886048,
                    "volume_24h": 724767501.777345,
                    "percent_change_1h": -0.453828,
                    "percent_change_24h": -11.3846,
                    "percent_change_7d": 106.707,
                    "market_cap": 825272483.7070665,
                    "last_updated": "2020-08-24T17:13:06.000Z"
                }
            }
        },
        {
            "id": 873,
            "name": "NEM",
            "symbol": "XEM",
            "slug": "nem",
            "num_market_pairs": 90,
            "date_added": "2015-04-01T00:00:00.000Z",
            "tags": [
                "poi",
                "medium-of-exchange",
                "payments",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 8999999999,
            "total_supply": 8999999999,
            "platform": null,
            "cmc_rank": 27,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.0896451001552,
                    "volume_24h": 67662126.959558,
                    "percent_change_1h": 0.0475615,
                    "percent_change_24h": 0.235966,
                    "percent_change_7d": 26.7971,
                    "market_cap": 806805901.3071549,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 1321,
            "name": "Ethereum Classic",
            "symbol": "ETC",
            "slug": "ethereum-classic",
            "num_market_pairs": 256,
            "date_added": "2016-07-24T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "ethash",
                "platform",
                "smart-contracts"
            ],
            "max_supply": 210700000,
            "circulating_supply": 116313299,
            "total_supply": 116313299,
            "platform": null,
            "cmc_rank": 28,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 6.84184690398,
                    "volume_24h": 553491878.43406,
                    "percent_change_1h": 0.668724,
                    "percent_change_24h": 1.13269,
                    "percent_change_7d": -8.06468,
                    "market_cap": 795797784.65485,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1437,
            "name": "Zcash",
            "symbol": "ZEC",
            "slug": "zcash",
            "num_market_pairs": 238,
            "date_added": "2016-10-29T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "equihash",
                "medium-of-exchange",
                "zero-knowledge-proofs"
            ],
            "max_supply": 21000000,
            "circulating_supply": 9884956.25,
            "total_supply": 9884956.25,
            "platform": null,
            "cmc_rank": 29,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 80.3146691783,
                    "volume_24h": 375195353.650866,
                    "percent_change_1h": -0.226136,
                    "percent_change_24h": -1.33325,
                    "percent_change_7d": -6.48325,
                    "market_cap": 793906991.0607189,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 1518,
            "name": "Maker",
            "symbol": "MKR",
            "slug": "maker",
            "num_market_pairs": 138,
            "date_added": "2017-01-29T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 1005576.7463296,
            "total_supply": 1005576.7463296,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
            },
            "cmc_rank": 30,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 683.283058169,
                    "volume_24h": 38055592.9411162,
                    "percent_change_1h": 2.95879,
                    "percent_change_24h": 8.27207,
                    "percent_change_7d": -1.96975,
                    "market_cap": 687093554.4557219,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 2566,
            "name": "Ontology",
            "symbol": "ONT",
            "slug": "ontology",
            "num_market_pairs": 130,
            "date_added": "2018-03-08T00:00:00.000Z",
            "tags": [
                "marketplace",
                "enterprise-solutions",
                "identity"
            ],
            "max_supply": null,
            "circulating_supply": 699029877,
            "total_supply": 1000000000,
            "platform": null,
            "cmc_rank": 31,
            "last_updated": "2020-08-24T17:13:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.873416217038,
                    "volume_24h": 132385562.29761,
                    "percent_change_1h": 0.262355,
                    "percent_change_24h": -0.350138,
                    "percent_change_7d": -3.85633,
                    "market_cap": 610544030.7658784,
                    "last_updated": "2020-08-24T17:13:08.000Z"
                }
            }
        },
        {
            "id": 2586,
            "name": "Synthetix Network Token",
            "symbol": "SNX",
            "slug": "synthetix-network-token",
            "num_market_pairs": 109,
            "date_added": "2018-03-14T00:00:00.000Z",
            "tags": [
                "services",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 94290176.6140225,
            "total_supply": 198650835.960782,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
            },
            "cmc_rank": 32,
            "last_updated": "2020-08-24T17:13:08.000Z",
            "quote": {
                "USD": {
                    "price": 6.25516558311,
                    "volume_24h": 50796297.2890243,
                    "percent_change_1h": 3.3745,
                    "percent_change_24h": 11.1564,
                    "percent_change_7d": -2.02874,
                    "market_cap": 589800667.5813969,
                    "last_updated": "2020-08-24T17:13:08.000Z"
                }
            }
        },
        {
            "id": 1697,
            "name": "Basic Attention Token",
            "symbol": "BAT",
            "slug": "basic-attention-token",
            "num_market_pairs": 233,
            "date_added": "2017-06-01T00:00:00.000Z",
            "tags": [
                "marketing",
                "content-creation",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 1458750288.1963,
            "total_supply": 1500000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
            },
            "cmc_rank": 33,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.39055493495,
                    "volume_24h": 296691416.458708,
                    "percent_change_1h": -1.30463,
                    "percent_change_24h": -4.97431,
                    "percent_change_7d": 25.56,
                    "market_cap": 569722123.9147997,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 3662,
            "name": "HedgeTrade",
            "symbol": "HEDG",
            "slug": "hedgetrade",
            "num_market_pairs": 16,
            "date_added": "2019-01-03T00:00:00.000Z",
            "tags": [
                "asset-management",
                "marketplace",
                "discount-token"
            ],
            "max_supply": null,
            "circulating_supply": 301531203.350657,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F"
            },
            "cmc_rank": 34,
            "last_updated": "2020-08-24T17:13:11.000Z",
            "quote": {
                "USD": {
                    "price": 1.80209993035,
                    "volume_24h": 1048939.99077691,
                    "percent_change_1h": -0.0879003,
                    "percent_change_24h": -2.49317,
                    "percent_change_7d": -6.68896,
                    "market_cap": 543389360.5565706,
                    "last_updated": "2020-08-24T17:13:11.000Z"
                }
            }
        },
        {
            "id": 1896,
            "name": "0x",
            "symbol": "ZRX",
            "slug": "0x",
            "num_market_pairs": 225,
            "date_added": "2017-08-16T00:00:00.000Z",
            "tags": [
                "platform",
                "decentralized-exchange",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 720082673.204797,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
            },
            "cmc_rank": 35,
            "last_updated": "2020-08-24T17:13:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.711469903645,
                    "volume_24h": 109267370.207823,
                    "percent_change_1h": -0.749789,
                    "percent_change_24h": -1.83746,
                    "percent_change_7d": 24.4056,
                    "market_cap": 512317150.12145096,
                    "last_updated": "2020-08-24T17:13:06.000Z"
                }
            }
        },
        {
            "id": 2416,
            "name": "THETA",
            "symbol": "THETA",
            "slug": "theta",
            "num_market_pairs": 33,
            "date_added": "2018-01-17T00:00:00.000Z",
            "tags": [
                "media",
                "content-creation",
                "video"
            ],
            "max_supply": null,
            "circulating_supply": 870502690,
            "total_supply": 1000000000,
            "platform": null,
            "cmc_rank": 36,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.566130777007,
                    "volume_24h": 137802410.820087,
                    "percent_change_1h": -1.88961,
                    "percent_change_24h": 22.4518,
                    "percent_change_7d": 44.554,
                    "market_cap": 492818364.27638364,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 5692,
            "name": "Compound",
            "symbol": "COMP",
            "slug": "compound",
            "num_market_pairs": 130,
            "date_added": "2020-06-16T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 2561279,
            "total_supply": 10000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xc00e94cb662c3520282e6f5717214004a7f26888"
            },
            "cmc_rank": 37,
            "last_updated": "2020-08-24T17:13:17.000Z",
            "quote": {
                "USD": {
                    "price": 185.420120566,
                    "volume_24h": 80154967.9734123,
                    "percent_change_1h": 0.8401,
                    "percent_change_24h": 9.72465,
                    "percent_change_7d": -3.02854,
                    "market_cap": 474912660.98316395,
                    "last_updated": "2020-08-24T17:13:17.000Z"
                }
            }
        },
        {
            "id": 4030,
            "name": "Algorand",
            "symbol": "ALGO",
            "slug": "algorand",
            "num_market_pairs": 100,
            "date_added": "2019-06-20T00:00:00.000Z",
            "tags": [
                "mineable",
                "pos",
                "platform",
                "research"
            ],
            "max_supply": null,
            "circulating_supply": 771817006.928144,
            "total_supply": 3303088849.92814,
            "platform": null,
            "cmc_rank": 38,
            "last_updated": "2020-08-24T17:13:14.000Z",
            "quote": {
                "USD": {
                    "price": 0.613253733756,
                    "volume_24h": 194593735.891005,
                    "percent_change_1h": -2.03859,
                    "percent_change_24h": 6.33418,
                    "percent_change_7d": -0.353006,
                    "market_cap": 473319661.2750648,
                    "last_updated": "2020-08-24T17:13:14.000Z"
                }
            }
        },
        {
            "id": 4943,
            "name": "Dai",
            "symbol": "DAI",
            "slug": "multi-collateral-dai",
            "num_market_pairs": 292,
            "date_added": "2019-11-22T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 441685043.125265,
            "total_supply": 442075129.66741,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
            },
            "cmc_rank": 39,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 1.01811663869,
                    "volume_24h": 47286238.1982448,
                    "percent_change_1h": 0.662146,
                    "percent_change_24h": 1.51165,
                    "percent_change_7d": 1.13308,
                    "market_cap": 449686891.4663425,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 3718,
            "name": "BitTorrent",
            "symbol": "BTT",
            "slug": "bittorrent",
            "num_market_pairs": 138,
            "date_added": "2019-01-31T00:00:00.000Z",
            "tags": [
                "platform",
                "distributed-computing",
                "filesharing"
            ],
            "max_supply": null,
            "circulating_supply": 986714545771,
            "total_supply": 990000000000,
            "platform": {
                "id": 1958,
                "name": "TRON",
                "symbol": "TRX",
                "slug": "tron",
                "token_address": "1002000"
            },
            "cmc_rank": 40,
            "last_updated": "2020-08-24T17:13:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.000440901532508,
                    "volume_24h": 26377437.9723377,
                    "percent_change_1h": 0.209976,
                    "percent_change_24h": 4.17443,
                    "percent_change_7d": -16.6853,
                    "market_cap": 435043955.378369,
                    "last_updated": "2020-08-24T17:13:12.000Z"
                }
            }
        },
        {
            "id": 74,
            "name": "Dogecoin",
            "symbol": "DOGE",
            "slug": "dogecoin",
            "num_market_pairs": 261,
            "date_added": "2013-12-15T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "scrypt",
                "medium-of-exchange",
                "memes",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 125965969048.319,
            "total_supply": 125965969048.319,
            "platform": null,
            "cmc_rank": 41,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.00341572195786,
                    "volume_24h": 43808867.0260929,
                    "percent_change_1h": 0.199914,
                    "percent_change_24h": -0.433604,
                    "percent_change_7d": -5.48504,
                    "market_cap": 430264726.42145634,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 109,
            "name": "DigiByte",
            "symbol": "DGB",
            "slug": "digibyte",
            "num_market_pairs": 95,
            "date_added": "2014-02-06T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "multiple",
                "medium-of-exchange",
                "privacy",
                "payments"
            ],
            "max_supply": 21000000000,
            "circulating_supply": 13479412250.9512,
            "total_supply": 13479412250.9512,
            "platform": null,
            "cmc_rank": 42,
            "last_updated": "2020-08-24T17:13:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.0312330948727,
                    "volume_24h": 13237695.986644,
                    "percent_change_1h": 0.204429,
                    "percent_change_24h": 4.9244,
                    "percent_change_7d": -9.82899,
                    "market_cap": 421003761.6621935,
                    "last_updated": "2020-08-24T17:13:02.000Z"
                }
            }
        },
        {
            "id": 5864,
            "name": "yearn.finance",
            "symbol": "YFI",
            "slug": "yearn-finance",
            "num_market_pairs": 94,
            "date_added": "2020-07-18T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 29962.3894596784,
            "total_supply": 30000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
            },
            "cmc_rank": 43,
            "last_updated": "2020-08-24T17:13:17.000Z",
            "quote": {
                "USD": {
                    "price": 13016.5315783,
                    "volume_24h": 45711115.6396912,
                    "percent_change_1h": -0.37631,
                    "percent_change_24h": 2.72197,
                    "percent_change_7d": 65.0224,
                    "market_cap": 390006388.563227,
                    "last_updated": "2020-08-24T17:13:17.000Z"
                }
            }
        },
        {
            "id": 2539,
            "name": "Ren",
            "symbol": "REN",
            "slug": "ren",
            "num_market_pairs": 77,
            "date_added": "2018-02-21T00:00:00.000Z",
            "tags": [
                "marketplace",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 884617356.91135,
            "total_supply": 999999632.80375,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x408e41876cccdc0f92210600ef50372656052a38"
            },
            "cmc_rank": 44,
            "last_updated": "2020-08-24T17:13:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.433976397352,
                    "volume_24h": 33542049.3344435,
                    "percent_change_1h": 0.980734,
                    "percent_change_24h": -1.69229,
                    "percent_change_7d": 0.9298,
                    "market_cap": 383903053.587436,
                    "last_updated": "2020-08-24T17:13:08.000Z"
                }
            }
        },
        {
            "id": 5268,
            "name": "Energy Web Token",
            "symbol": "EWT",
            "slug": "energy-web-token",
            "num_market_pairs": 9,
            "date_added": "2020-03-28T00:00:00.000Z",
            "tags": [],
            "max_supply": 100000000,
            "circulating_supply": 30062138,
            "total_supply": 48638535.4433,
            "platform": null,
            "cmc_rank": 45,
            "last_updated": "2020-08-24T17:13:16.000Z",
            "quote": {
                "USD": {
                    "price": 12.5938766056,
                    "volume_24h": 1296194.19856864,
                    "percent_change_1h": 0.406856,
                    "percent_change_24h": -0.525677,
                    "percent_change_7d": -2.22033,
                    "market_cap": 378598856.4725188,
                    "last_updated": "2020-08-24T17:13:16.000Z"
                }
            }
        },
        {
            "id": 1274,
            "name": "Waves",
            "symbol": "WAVES",
            "slug": "waves",
            "num_market_pairs": 152,
            "date_added": "2016-06-02T00:00:00.000Z",
            "tags": [
                "lpos",
                "platform",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 102822760,
            "total_supply": 102822760,
            "platform": null,
            "cmc_rank": 46,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 3.67682800929,
                    "volume_24h": 76971020.7946773,
                    "percent_change_1h": -0.845893,
                    "percent_change_24h": 2.51919,
                    "percent_change_7d": -19.4333,
                    "market_cap": 378061603.9605034,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1684,
            "name": "Qtum",
            "symbol": "QTUM",
            "slug": "qtum",
            "num_market_pairs": 178,
            "date_added": "2017-05-24T00:00:00.000Z",
            "tags": [
                "platform",
                "smart-contracts"
            ],
            "max_supply": 107822406,
            "circulating_supply": 96969491.6577188,
            "total_supply": 102688912,
            "platform": null,
            "cmc_rank": 47,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 3.87312361243,
                    "volume_24h": 492448346.638615,
                    "percent_change_1h": 0.505587,
                    "percent_change_24h": -3.90265,
                    "percent_change_7d": 14.0511,
                    "market_cap": 375574827.8248446,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 5617,
            "name": "UMA",
            "symbol": "UMA",
            "slug": "uma",
            "num_market_pairs": 39,
            "date_added": "2020-05-25T00:00:00.000Z",
            "tags": [
                "defi",
                "oracles"
            ],
            "max_supply": null,
            "circulating_supply": 53864835.4474644,
            "total_supply": 100684611.333431,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
            },
            "cmc_rank": 48,
            "last_updated": "2020-08-24T17:13:16.000Z",
            "quote": {
                "USD": {
                    "price": 6.81888511151,
                    "volume_24h": 2146834.74350873,
                    "percent_change_1h": 0.0012582,
                    "percent_change_24h": 10.0155,
                    "percent_change_7d": -4.70409,
                    "market_cap": 367298124.4666511,
                    "last_updated": "2020-08-24T17:13:16.000Z"
                }
            }
        },
        {
            "id": 2563,
            "name": "TrueUSD",
            "symbol": "TUSD",
            "slug": "trueusd",
            "num_market_pairs": 194,
            "date_added": "2018-03-06T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 366077741.950522,
            "total_supply": 366077741.950522,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "TUSDB-888"
            },
            "cmc_rank": 49,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.999917065078,
                    "volume_24h": 82906645.9192789,
                    "percent_change_1h": -0.0371883,
                    "percent_change_24h": -0.163298,
                    "percent_change_7d": -0.125087,
                    "market_cap": 366047381.32154745,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 2099,
            "name": "ICON",
            "symbol": "ICX",
            "slug": "icon",
            "num_market_pairs": 61,
            "date_added": "2017-10-27T00:00:00.000Z",
            "tags": [
                "platform",
                "enterprise-solutions",
                "interoperability"
            ],
            "max_supply": null,
            "circulating_supply": 562270517.278337,
            "total_supply": 853223083.307333,
            "platform": null,
            "cmc_rank": 50,
            "last_updated": "2020-08-24T17:13:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.618835384774,
                    "volume_24h": 65157047.3352627,
                    "percent_change_1h": -2.35216,
                    "percent_change_24h": -0.917517,
                    "percent_change_7d": 20.6166,
                    "market_cap": 347952891.9070157,
                    "last_updated": "2020-08-24T17:13:06.000Z"
                }
            }
        },
        {
            "id": 1982,
            "name": "Kyber Network",
            "symbol": "KNC",
            "slug": "kyber-network",
            "num_market_pairs": 113,
            "date_added": "2017-09-24T00:00:00.000Z",
            "tags": [
                "marketplace",
                "decentralized-exchange",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 195512237.727564,
            "total_supply": 210445089.446428,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
            },
            "cmc_rank": 51,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 1.68121961254,
                    "volume_24h": 61410394.033818,
                    "percent_change_1h": -0.350448,
                    "percent_change_24h": -2.00564,
                    "percent_change_7d": -7.35794,
                    "market_cap": 328699008.5591636,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 4195,
            "name": "FTX Token",
            "symbol": "FTT",
            "slug": "ftx-token",
            "num_market_pairs": 32,
            "date_added": "2019-07-31T00:00:00.000Z",
            "tags": [
                "marketplace",
                "derivatives"
            ],
            "max_supply": null,
            "circulating_supply": 94346957.5237492,
            "total_supply": 345219293.590977,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "FTT-F11"
            },
            "cmc_rank": 52,
            "last_updated": "2020-08-24T17:13:14.000Z",
            "quote": {
                "USD": {
                    "price": 3.42231614053,
                    "volume_24h": 5568124.10237457,
                    "percent_change_1h": 0.0692669,
                    "percent_change_24h": 2.59621,
                    "percent_change_7d": -2.95216,
                    "market_cap": 322885115.5434252,
                    "last_updated": "2020-08-24T17:13:14.000Z"
                }
            }
        },
        {
            "id": 3897,
            "name": "OKB",
            "symbol": "OKB",
            "slug": "okb",
            "num_market_pairs": 56,
            "date_added": "2019-04-30T00:00:00.000Z",
            "tags": [
                "marketplace",
                "centralized-exchange",
                "discount-token"
            ],
            "max_supply": null,
            "circulating_supply": 60000000,
            "total_supply": 300000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x75231f58b43240c9718dd58b4967c5114342a86c"
            },
            "cmc_rank": 53,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 5.30819814251,
                    "volume_24h": 45624597.5328977,
                    "percent_change_1h": -0.0424571,
                    "percent_change_24h": 0.768564,
                    "percent_change_7d": -10.1348,
                    "market_cap": 318491888.5506,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 3695,
            "name": "Hyperion",
            "symbol": "HYN",
            "slug": "hyperion",
            "num_market_pairs": 10,
            "date_added": "2019-01-14T00:00:00.000Z",
            "tags": [
                "platform",
                "geospatial-services"
            ],
            "max_supply": null,
            "circulating_supply": 316765917.406,
            "total_supply": 10000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xe99a894a69d7c2e3c92e61b64c505a6a57d2bc07"
            },
            "cmc_rank": 54,
            "last_updated": "2020-08-24T17:13:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.983076821656,
                    "volume_24h": 16911269.2118277,
                    "percent_change_1h": 0.293299,
                    "percent_change_24h": -0.875717,
                    "percent_change_7d": 0.0410874,
                    "market_cap": 311405231.2924375,
                    "last_updated": "2020-08-24T17:13:11.000Z"
                }
            }
        },
        {
            "id": 1104,
            "name": "Augur",
            "symbol": "REP",
            "slug": "augur",
            "num_market_pairs": 82,
            "date_added": "2015-10-27T00:00:00.000Z",
            "tags": [
                "platform",
                "defi",
                "prediction-markets",
                "reputation"
            ],
            "max_supply": null,
            "circulating_supply": 11000000,
            "total_supply": 11000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1985365e9f78359a9b6ad760e32412f4a445e862"
            },
            "cmc_rank": 55,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 23.9836695714,
                    "volume_24h": 27108424.413935,
                    "percent_change_1h": -0.260401,
                    "percent_change_24h": -2.77049,
                    "percent_change_7d": 9.16671,
                    "market_cap": 263820365.2854,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 4086,
            "name": "Elrond",
            "symbol": "ERD",
            "slug": "elrond",
            "num_market_pairs": 11,
            "date_added": "2019-07-04T00:00:00.000Z",
            "tags": [
                "store-of-value"
            ],
            "max_supply": null,
            "circulating_supply": 13220533426.5129,
            "total_supply": 20000000000,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "ERD-D06"
            },
            "cmc_rank": 56,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0196773913368,
                    "volume_24h": 18659161.7971541,
                    "percent_change_1h": 1.94215,
                    "percent_change_24h": 5.07393,
                    "percent_change_7d": -3.38631,
                    "market_cap": 260145609.91473976,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 4642,
            "name": "Hedera Hashgraph",
            "symbol": "HBAR",
            "slug": "hedera-hashgraph",
            "num_market_pairs": 40,
            "date_added": "2019-09-17T00:00:00.000Z",
            "tags": [
                "dag",
                "marketplace",
                "enterprise-solutions",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 5210554377,
            "total_supply": 50000000000,
            "platform": null,
            "cmc_rank": 57,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 0.048973589961,
                    "volume_24h": 21920801.5678645,
                    "percent_change_1h": 0.0743704,
                    "percent_change_24h": 0.474818,
                    "percent_change_7d": -8.30192,
                    "market_cap": 255179553.5286918,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 3812,
            "name": "Flexacoin",
            "symbol": "FXC",
            "slug": "flexacoin",
            "num_market_pairs": 17,
            "date_added": "2019-03-22T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "payments"
            ],
            "max_supply": 100000000000,
            "circulating_supply": 28625000000,
            "total_supply": 28625000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x4a57e687b9126435a9b19e4a802113e266adebde"
            },
            "cmc_rank": 58,
            "last_updated": "2020-08-24T17:13:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.00869797247699,
                    "volume_24h": 278580.440221008,
                    "percent_change_1h": -1.02616,
                    "percent_change_24h": 4.71999,
                    "percent_change_7d": 35.8984,
                    "market_cap": 248979462.15383872,
                    "last_updated": "2020-08-24T17:13:12.000Z"
                }
            }
        },
        {
            "id": 2469,
            "name": "Zilliqa",
            "symbol": "ZIL",
            "slug": "zilliqa",
            "num_market_pairs": 111,
            "date_added": "2018-01-25T00:00:00.000Z",
            "tags": [
                "mineable",
                "platform",
                "payments"
            ],
            "max_supply": 21000000000,
            "circulating_supply": 10379189643.1291,
            "total_supply": 13670656796.1291,
            "platform": null,
            "cmc_rank": 59,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0236620992194,
                    "volume_24h": 42310427.8767993,
                    "percent_change_1h": 2.79135,
                    "percent_change_24h": 10.9011,
                    "percent_change_7d": -7.12247,
                    "market_cap": 245593415.15268967,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 3330,
            "name": "Paxos Standard",
            "symbol": "PAX",
            "slug": "paxos-standard",
            "num_market_pairs": 139,
            "date_added": "2018-09-27T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 244951954.494264,
            "total_supply": 249952064.83,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
            },
            "cmc_rank": 60,
            "last_updated": "2020-08-24T17:13:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.999147930862,
                    "volume_24h": 131137214.202852,
                    "percent_change_1h": -0.040669,
                    "percent_change_24h": -0.171975,
                    "percent_change_7d": 0.0985079,
                    "market_cap": 244743238.49354666,
                    "last_updated": "2020-08-24T17:13:11.000Z"
                }
            }
        },
        {
            "id": 4679,
            "name": "Band Protocol",
            "symbol": "BAND",
            "slug": "band-protocol",
            "num_market_pairs": 43,
            "date_added": "2019-09-18T00:00:00.000Z",
            "tags": [
                "defi",
                "oracles"
            ],
            "max_supply": null,
            "circulating_supply": 20494032.5175,
            "total_supply": 100000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55"
            },
            "cmc_rank": 61,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 11.7676273914,
                    "volume_24h": 42933828.38774,
                    "percent_change_1h": 0.26476,
                    "percent_change_24h": -0.0316137,
                    "percent_change_7d": -18.2404,
                    "market_cap": 241166138.41317528,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 1214,
            "name": "Lisk",
            "symbol": "LSK",
            "slug": "lisk",
            "num_market_pairs": 55,
            "date_added": "2016-04-06T00:00:00.000Z",
            "tags": [
                "dpos",
                "platform",
                "enterprise-solutions",
                "smart-contracts"
            ],
            "max_supply": null,
            "circulating_supply": 125378780.492076,
            "total_supply": 141410836,
            "platform": null,
            "cmc_rank": 62,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 1.83877613703,
                    "volume_24h": 5487536.92288104,
                    "percent_change_1h": -0.704485,
                    "percent_change_24h": -0.1414,
                    "percent_change_7d": 3.29048,
                    "market_cap": 230543509.65875182,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 1680,
            "name": "Aragon",
            "symbol": "ANT",
            "slug": "aragon",
            "num_market_pairs": 81,
            "date_added": "2017-05-18T00:00:00.000Z",
            "tags": [
                "platform",
                "enterprise-solutions",
                "dao"
            ],
            "max_supply": null,
            "circulating_supply": 33174119.7420665,
            "total_supply": 39609523.8095238,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x960b236a07cf122663c4303350609a66a7b288c0"
            },
            "cmc_rank": 63,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 6.81882051867,
                    "volume_24h": 68454035.685871,
                    "percent_change_1h": -0.582071,
                    "percent_change_24h": 11.8747,
                    "percent_change_7d": 15.7553,
                    "market_cap": 226208368.38601857,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1168,
            "name": "Decred",
            "symbol": "DCR",
            "slug": "decred",
            "num_market_pairs": 60,
            "date_added": "2016-02-10T00:00:00.000Z",
            "tags": [
                "mineable",
                "hybrid-pow-pos",
                "blake256",
                "medium-of-exchange",
                "store-of-value",
                "privacy",
                "dao"
            ],
            "max_supply": 21000000,
            "circulating_supply": 11916550.9208226,
            "total_supply": 11916550.9208226,
            "platform": null,
            "cmc_rank": 64,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 18.7426370704,
                    "volume_24h": 7226491.7520492,
                    "percent_change_1h": 0.299826,
                    "percent_change_24h": -2.97233,
                    "percent_change_7d": 6.40099,
                    "market_cap": 223347589.03991893,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 1934,
            "name": "Loopring",
            "symbol": "LRC",
            "slug": "loopring",
            "num_market_pairs": 67,
            "date_added": "2017-08-30T00:00:00.000Z",
            "tags": [
                "marketplace",
                "decentralized-exchange",
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 1142854855.26121,
            "total_supply": 1374513896.69082,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"
            },
            "cmc_rank": 65,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.19014538178,
                    "volume_24h": 44129824.5407517,
                    "percent_change_1h": 1.47779,
                    "percent_change_24h": -1.1812,
                    "percent_change_7d": -0.377187,
                    "market_cap": 217308572.77276942,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 2130,
            "name": "Enjin Coin",
            "symbol": "ENJ",
            "slug": "enjin-coin",
            "num_market_pairs": 87,
            "date_added": "2017-11-01T00:00:00.000Z",
            "tags": [
                "media",
                "collectibles-nfts",
                "gaming"
            ],
            "max_supply": null,
            "circulating_supply": 821201679.408264,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
            },
            "cmc_rank": 66,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.249933708976,
                    "volume_24h": 30333806.1437943,
                    "percent_change_1h": -0.1179,
                    "percent_change_24h": 15.4809,
                    "percent_change_7d": 20.6857,
                    "market_cap": 205245981.55182752,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 4687,
            "name": "Binance USD",
            "symbol": "BUSD",
            "slug": "binance-usd",
            "num_market_pairs": 192,
            "date_added": "2019-09-20T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 203516909.52,
            "total_supply": 203516909.52,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "BUSD-BD1"
            },
            "cmc_rank": 67,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 0.999775034191,
                    "volume_24h": 155421875.113325,
                    "percent_change_1h": -0.00989368,
                    "percent_change_24h": -0.109012,
                    "percent_change_7d": 0.204508,
                    "market_cap": 203471125.17380467,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 4279,
            "name": "Swipe",
            "symbol": "SXP",
            "slug": "swipe",
            "num_market_pairs": 51,
            "date_added": "2019-08-26T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "defi",
                "payments",
                "wallet"
            ],
            "max_supply": null,
            "circulating_supply": 65982751.7489504,
            "total_supply": 299969952.878909,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"
            },
            "cmc_rank": 68,
            "last_updated": "2020-08-24T17:13:14.000Z",
            "quote": {
                "USD": {
                    "price": 2.99180990362,
                    "volume_24h": 181964144.808423,
                    "percent_change_1h": -0.781231,
                    "percent_change_24h": 7.07458,
                    "percent_change_7d": -6.57784,
                    "market_cap": 197407850.1506097,
                    "last_updated": "2020-08-24T17:13:14.000Z"
                }
            }
        },
        {
            "id": 3911,
            "name": "Ocean Protocol",
            "symbol": "OCEAN",
            "slug": "ocean-protocol",
            "num_market_pairs": 23,
            "date_added": "2019-05-06T00:00:00.000Z",
            "tags": [
                "platform",
                "ai-big-data"
            ],
            "max_supply": 1410000000,
            "circulating_supply": 359137273.07166,
            "total_supply": 613099141,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x985dd3d42de1e256d09e1c10f112bccb8015ad41"
            },
            "cmc_rank": 69,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.548698995674,
                    "volume_24h": 9493209.10676554,
                    "percent_change_1h": 0.318341,
                    "percent_change_24h": 1.30753,
                    "percent_change_7d": -12.6495,
                    "market_cap": 197058261.04351893,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 4172,
            "name": "Terra",
            "symbol": "LUNA",
            "slug": "terra-luna",
            "num_market_pairs": 25,
            "date_added": "2019-07-26T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "defi",
                "payments",
                "stablecoin-algorithmically-stabilized"
            ],
            "max_supply": null,
            "circulating_supply": 385512694.265771,
            "total_supply": 997163710.265771,
            "platform": null,
            "cmc_rank": 70,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.498310359808,
                    "volume_24h": 10401575.5175151,
                    "percent_change_1h": 0.795674,
                    "percent_change_24h": 4.74517,
                    "percent_change_7d": -11.1871,
                    "market_cap": 192104969.39012784,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 2083,
            "name": "Bitcoin Gold",
            "symbol": "BTG",
            "slug": "bitcoin-gold",
            "num_market_pairs": 79,
            "date_added": "2017-10-23T00:00:00.000Z",
            "tags": [
                "mineable",
                "medium-of-exchange",
                "payments"
            ],
            "max_supply": 21000000,
            "circulating_supply": 17513923.589,
            "total_supply": 17513923.589,
            "platform": null,
            "cmc_rank": 71,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 10.9208457346,
                    "volume_24h": 7176213.20400162,
                    "percent_change_1h": 0.829347,
                    "percent_change_24h": 1.71134,
                    "percent_change_7d": -6.3975,
                    "market_cap": 191266857.723041,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 5034,
            "name": "Kusama",
            "symbol": "KSM",
            "slug": "kusama",
            "num_market_pairs": 23,
            "date_added": "2019-12-12T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 8470098.05726206,
            "total_supply": 9651217.45126206,
            "platform": null,
            "cmc_rank": 72,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 21.1795639691,
                    "volume_24h": 19611284.4338264,
                    "percent_change_1h": -3.27163,
                    "percent_change_24h": 18.0408,
                    "percent_change_7d": 62.9038,
                    "market_cap": 179392983.6283314,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 1042,
            "name": "Siacoin",
            "symbol": "SC",
            "slug": "siacoin",
            "num_market_pairs": 43,
            "date_added": "2015-08-26T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "blake2b",
                "platform",
                "distributed-computing",
                "filesharing"
            ],
            "max_supply": null,
            "circulating_supply": 41817047634,
            "total_supply": 41817047634,
            "platform": null,
            "cmc_rank": 73,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.00417238602959,
                    "volume_24h": 15299915.8107203,
                    "percent_change_1h": 0.579679,
                    "percent_change_24h": 2.31686,
                    "percent_change_7d": 10.202,
                    "market_cap": 174476865.34680116,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 1567,
            "name": "Nano",
            "symbol": "NANO",
            "slug": "nano",
            "num_market_pairs": 53,
            "date_added": "2017-03-06T00:00:00.000Z",
            "tags": [
                "pow",
                "blake2b",
                "medium-of-exchange",
                "payments"
            ],
            "max_supply": 133248297.197,
            "circulating_supply": 133248297.197,
            "total_supply": 133248297.197,
            "platform": null,
            "cmc_rank": 74,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 1.29904176919,
                    "volume_24h": 14018319.1940442,
                    "percent_change_1h": -0.310259,
                    "percent_change_24h": -3.91256,
                    "percent_change_7d": 5.01277,
                    "market_cap": 173095103.7323458,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 5728,
            "name": "Balancer",
            "symbol": "BAL",
            "slug": "balancer",
            "num_market_pairs": 98,
            "date_added": "2020-06-24T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 6943831,
            "total_supply": 35725000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xba100000625a3754423978a60c9317c58a424e3D"
            },
            "cmc_rank": 75,
            "last_updated": "2020-08-24T17:13:17.000Z",
            "quote": {
                "USD": {
                    "price": 24.8417359975,
                    "volume_24h": 60980298.048641,
                    "percent_change_1h": -0.663894,
                    "percent_change_24h": 2.96815,
                    "percent_change_7d": 26.9931,
                    "market_cap": 172496816.5132564,
                    "last_updated": "2020-08-24T17:13:17.000Z"
                }
            }
        },
        {
            "id": 2577,
            "name": "Ravencoin",
            "symbol": "RVN",
            "slug": "ravencoin",
            "num_market_pairs": 68,
            "date_added": "2018-03-10T00:00:00.000Z",
            "tags": [
                "mineable",
                "platform",
                "collectibles-nfts",
                "crowdfunding"
            ],
            "max_supply": 21000000000,
            "circulating_supply": 6887555000,
            "total_supply": 6887555000,
            "platform": null,
            "cmc_rank": 76,
            "last_updated": "2020-08-24T17:13:08.000Z",
            "quote": {
                "USD": {
                    "price": 0.0242013306375,
                    "volume_24h": 13722070.9054329,
                    "percent_change_1h": 1.25276,
                    "percent_change_24h": 4.26198,
                    "percent_change_7d": -7.41903,
                    "market_cap": 166687995.8389663,
                    "last_updated": "2020-08-24T17:13:08.000Z"
                }
            }
        },
        {
            "id": 4847,
            "name": "Blockstack",
            "symbol": "STX",
            "slug": "blockstack",
            "num_market_pairs": 8,
            "date_added": "2019-10-28T00:00:00.000Z",
            "tags": [],
            "max_supply": 2048913388,
            "circulating_supply": 574811340.75473,
            "total_supply": 808734706.75473,
            "platform": null,
            "cmc_rank": 77,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 0.287921112323,
                    "volume_24h": 3400413.15984345,
                    "percent_change_1h": -0.0936892,
                    "percent_change_24h": 0.484486,
                    "percent_change_7d": 6.87844,
                    "market_cap": 165500320.60597685,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 1866,
            "name": "Bytom",
            "symbol": "BTM",
            "slug": "bytom",
            "num_market_pairs": 52,
            "date_added": "2017-08-08T00:00:00.000Z",
            "tags": [
                "mineable",
                "platform",
                "payments",
                "smart-contracts"
            ],
            "max_supply": 2100000000,
            "circulating_supply": 1327367981.303,
            "total_supply": 1614652912.5,
            "platform": null,
            "cmc_rank": 78,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.122135401998,
                    "volume_24h": 34048925.7282886,
                    "percent_change_1h": -0.605893,
                    "percent_change_24h": -1.28379,
                    "percent_change_7d": 10.2607,
                    "market_cap": 162118621.99571565,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 4948,
            "name": "Nervos Network",
            "symbol": "CKB",
            "slug": "nervos-network",
            "num_market_pairs": 25,
            "date_added": "2019-11-19T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 20409190422.484,
            "total_supply": 28700959787.9645,
            "platform": null,
            "cmc_rank": 79,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 0.00777985056557,
                    "volume_24h": 7689111.62037143,
                    "percent_change_1h": -0.445547,
                    "percent_change_24h": -2.47187,
                    "percent_change_7d": -15.6278,
                    "market_cap": 158780451.651188,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 3964,
            "name": "Reserve Rights",
            "symbol": "RSR",
            "slug": "reserve-rights",
            "num_market_pairs": 40,
            "date_added": "2019-05-24T00:00:00.000Z",
            "tags": [
                "store-of-value",
                "defi",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 6849998999.99992,
            "total_supply": 100000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8762db106b2c2a0bccb3a80d1ed41273552616e8"
            },
            "cmc_rank": 80,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.0216657089701,
                    "volume_24h": 14326508.4357543,
                    "percent_change_1h": -1.48248,
                    "percent_change_24h": 2.00627,
                    "percent_change_7d": -9.31618,
                    "market_cap": 148410084.7794743,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 2222,
            "name": "Bitcoin Diamond",
            "symbol": "BCD",
            "slug": "bitcoin-diamond",
            "num_market_pairs": 24,
            "date_added": "2017-11-24T00:00:00.000Z",
            "tags": [
                "mineable",
                "medium-of-exchange",
                "payments"
            ],
            "max_supply": 210000000,
            "circulating_supply": 186492897.953,
            "total_supply": 189492897.953,
            "platform": null,
            "cmc_rank": 81,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.794920654743,
                    "volume_24h": 5729740.49873357,
                    "percent_change_1h": 0.189943,
                    "percent_change_24h": 2.07126,
                    "percent_change_7d": -6.18127,
                    "market_cap": 148247056.54571825,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 4056,
            "name": "Ampleforth",
            "symbol": "AMPL",
            "slug": "ampleforth",
            "num_market_pairs": 51,
            "date_added": "2019-06-28T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 189301283.929583,
            "total_supply": 442156224.559017,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xd46ba6d942050d489dbd938a2c909a5d5039a161"
            },
            "cmc_rank": 82,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.777504608554,
                    "volume_24h": 17563289.0990067,
                    "percent_change_1h": -0.167356,
                    "percent_change_24h": 1.36457,
                    "percent_change_7d": 31.2621,
                    "market_cap": 147182620.66044006,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 4157,
            "name": "THORChain",
            "symbol": "RUNE",
            "slug": "thorchain",
            "num_market_pairs": 22,
            "date_added": "2019-07-23T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 158432088.343333,
            "total_supply": 500000000,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "RUNE-B1A"
            },
            "cmc_rank": 83,
            "last_updated": "2020-08-24T17:13:13.000Z",
            "quote": {
                "USD": {
                    "price": 0.878254333805,
                    "volume_24h": 3189773.41991677,
                    "percent_change_1h": 1.14272,
                    "percent_change_24h": 9.13733,
                    "percent_change_7d": -1.86143,
                    "market_cap": 139143668.20130882,
                    "last_updated": "2020-08-24T17:13:13.000Z"
                }
            }
        },
        {
            "id": 4846,
            "name": "Kava.io",
            "symbol": "KAVA",
            "slug": "kava",
            "num_market_pairs": 28,
            "date_added": "2019-10-25T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": null,
            "circulating_supply": 33485394.721819,
            "total_supply": 106274713.721819,
            "platform": {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "token_address": "KAVA-10C"
            },
            "cmc_rank": 84,
            "last_updated": "2020-08-24T17:13:15.000Z",
            "quote": {
                "USD": {
                    "price": 4.12054931816,
                    "volume_24h": 22031048.740121,
                    "percent_change_1h": 1.12972,
                    "percent_change_24h": 0.179496,
                    "percent_change_7d": -16.9995,
                    "market_cap": 137978220.38930973,
                    "last_updated": "2020-08-24T17:13:15.000Z"
                }
            }
        },
        {
            "id": 4779,
            "name": "HUSD",
            "symbol": "HUSD",
            "slug": "husd",
            "num_market_pairs": 27,
            "date_added": "2019-10-15T00:00:00.000Z",
            "tags": [
                "pow",
                "medium-of-exchange",
                "stablecoin",
                "stablecoin-asset-backed"
            ],
            "max_supply": null,
            "circulating_supply": 137256959.193581,
            "total_supply": 137256959.193581,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1"
            },
            "cmc_rank": 85,
            "last_updated": "2020-08-24T17:13:14.000Z",
            "quote": {
                "USD": {
                    "price": 1.00011922188,
                    "volume_24h": 18399828.5135408,
                    "percent_change_1h": -0.0115616,
                    "percent_change_24h": -0.124905,
                    "percent_change_7d": 0.189857,
                    "market_cap": 137273323.22629914,
                    "last_updated": "2020-08-24T17:13:14.000Z"
                }
            }
        },
        {
            "id": 5488,
            "name": "JUST",
            "symbol": "JST",
            "slug": "just",
            "num_market_pairs": 37,
            "date_added": "2020-05-07T00:00:00.000Z",
            "tags": [
                "defi"
            ],
            "max_supply": 9900000000,
            "circulating_supply": 2260326706,
            "total_supply": 9900000000,
            "platform": {
                "id": 1958,
                "name": "TRON",
                "symbol": "TRX",
                "slug": "tron",
                "token_address": "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9"
            },
            "cmc_rank": 86,
            "last_updated": "2020-08-24T17:13:16.000Z",
            "quote": {
                "USD": {
                    "price": 0.0607031866651,
                    "volume_24h": 196553387.228234,
                    "percent_change_1h": -0.853506,
                    "percent_change_24h": 14.7773,
                    "percent_change_7d": -18.7996,
                    "market_cap": 137209033.95842862,
                    "last_updated": "2020-08-24T17:13:16.000Z"
                }
            }
        },
        {
            "id": 1966,
            "name": "Decentraland",
            "symbol": "MANA",
            "slug": "decentraland",
            "num_market_pairs": 88,
            "date_added": "2017-09-17T00:00:00.000Z",
            "tags": [
                "platform",
                "gaming",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 1440721783.01314,
            "total_supply": 2195718365.54406,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
            },
            "cmc_rank": 87,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.0944665138297,
                    "volume_24h": 29972889.5075458,
                    "percent_change_1h": 2.46296,
                    "percent_change_24h": 3.94413,
                    "percent_change_7d": -2.05555,
                    "market_cap": 136099964.23976085,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 1759,
            "name": "Status",
            "symbol": "SNT",
            "slug": "status",
            "num_market_pairs": 98,
            "date_added": "2017-06-28T00:00:00.000Z",
            "tags": [
                "media",
                "content-creation",
                "privacy"
            ],
            "max_supply": null,
            "circulating_supply": 3470483788,
            "total_supply": 6804870174,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
            },
            "cmc_rank": 88,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.0382583096289,
                    "volume_24h": 16039679.0154927,
                    "percent_change_1h": 0.679396,
                    "percent_change_24h": 0.68013,
                    "percent_change_7d": 2.46765,
                    "market_cap": 132774843.32338174,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 1727,
            "name": "Bancor",
            "symbol": "BNT",
            "slug": "bancor",
            "num_market_pairs": 160,
            "date_added": "2017-06-18T00:00:00.000Z",
            "tags": [
                "marketplace",
                "decentralized-exchange",
                "defi",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 69148529.1313958,
            "total_supply": 69148529.1313958,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c"
            },
            "cmc_rank": 89,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 1.90598576581,
                    "volume_24h": 76600490.0505675,
                    "percent_change_1h": -0.537042,
                    "percent_change_24h": -1.79565,
                    "percent_change_7d": -8.86758,
                    "market_cap": 131796112.25113851,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        },
        {
            "id": 1732,
            "name": "Numeraire",
            "symbol": "NMR",
            "slug": "numeraire",
            "num_market_pairs": 35,
            "date_added": "2017-06-23T00:00:00.000Z",
            "tags": [
                "asset-management",
                "ai-big-data",
                "defi",
                "payments"
            ],
            "max_supply": 11000000,
            "circulating_supply": 2936034.53377182,
            "total_supply": 10979479.314411,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671"
            },
            "cmc_rank": 90,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 44.1815533769,
                    "volume_24h": 3751161.66890105,
                    "percent_change_1h": -0.503114,
                    "percent_change_24h": -1.00213,
                    "percent_change_7d": -19.7134,
                    "market_cap": 129718566.47026137,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 2682,
            "name": "Holo",
            "symbol": "HOT",
            "slug": "holo",
            "num_market_pairs": 81,
            "date_added": "2018-04-29T00:00:00.000Z",
            "tags": [
                "platform",
                "distributed-computing",
                "filesharing"
            ],
            "max_supply": null,
            "circulating_supply": 165953971226.646,
            "total_supply": 177619433541.141,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
            },
            "cmc_rank": 91,
            "last_updated": "2020-08-24T17:13:09.000Z",
            "quote": {
                "USD": {
                    "price": 0.000781538739517,
                    "volume_24h": 8025308.79914452,
                    "percent_change_1h": -0.226103,
                    "percent_change_24h": 1.05295,
                    "percent_change_7d": -12.8524,
                    "market_cap": 129699457.4903134,
                    "last_updated": "2020-08-24T17:13:09.000Z"
                }
            }
        },
        {
            "id": 1637,
            "name": "iExec RLC",
            "symbol": "RLC",
            "slug": "rlc",
            "num_market_pairs": 32,
            "date_added": "2017-04-20T00:00:00.000Z",
            "tags": [
                "marketplace",
                "distributed-computing"
            ],
            "max_supply": null,
            "circulating_supply": 80070793.2387674,
            "total_supply": 86999784.9868455,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x607f4c5bb672230e8672085532f7e901544a7375"
            },
            "cmc_rank": 92,
            "last_updated": "2020-08-24T17:13:03.000Z",
            "quote": {
                "USD": {
                    "price": 1.58218347683,
                    "volume_24h": 3247927.62055402,
                    "percent_change_1h": 0.595732,
                    "percent_change_24h": 3.41154,
                    "percent_change_7d": -10.568,
                    "market_cap": 126686686.03904906,
                    "last_updated": "2020-08-24T17:13:03.000Z"
                }
            }
        },
        {
            "id": 213,
            "name": "MonaCoin",
            "symbol": "MONA",
            "slug": "monacoin",
            "num_market_pairs": 14,
            "date_added": "2014-03-20T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "scrypt",
                "medium-of-exchange",
                "memes"
            ],
            "max_supply": null,
            "circulating_supply": 65729674.8711679,
            "total_supply": 65729674.8711679,
            "platform": null,
            "cmc_rank": 93,
            "last_updated": "2020-08-24T17:13:02.000Z",
            "quote": {
                "USD": {
                    "price": 1.90491102637,
                    "volume_24h": 3144303.08490076,
                    "percent_change_1h": 0.445737,
                    "percent_change_24h": 0.696889,
                    "percent_change_7d": -2.86243,
                    "market_cap": 125209182.42180283,
                    "last_updated": "2020-08-24T17:13:02.000Z"
                }
            }
        },
        {
            "id": 693,
            "name": "Verge",
            "symbol": "XVG",
            "slug": "verge",
            "num_market_pairs": 49,
            "date_added": "2014-10-25T00:00:00.000Z",
            "tags": [
                "mineable",
                "multiple",
                "medium-of-exchange",
                "privacy"
            ],
            "max_supply": 16555000000,
            "circulating_supply": 16346729543.3634,
            "total_supply": 16346729543.3634,
            "platform": null,
            "cmc_rank": 94,
            "last_updated": "2020-08-24T17:13:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.00764680521887,
                    "volume_24h": 5022785.65418787,
                    "percent_change_1h": -0.452733,
                    "percent_change_24h": 7.30968,
                    "percent_change_7d": 8.25179,
                    "market_cap": 125000256.78364766,
                    "last_updated": "2020-08-24T17:13:02.000Z"
                }
            }
        },
        {
            "id": 3155,
            "name": "Quant",
            "symbol": "QNT",
            "slug": "quant",
            "num_market_pairs": 25,
            "date_added": "2018-08-10T00:00:00.000Z",
            "tags": [
                "platform",
                "interoperability"
            ],
            "max_supply": null,
            "circulating_supply": 12072738,
            "total_supply": 14612493.0808262,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
            },
            "cmc_rank": 95,
            "last_updated": "2020-08-24T17:13:10.000Z",
            "quote": {
                "USD": {
                    "price": 9.93207275633,
                    "volume_24h": 3209695.19066624,
                    "percent_change_1h": 0.400229,
                    "percent_change_24h": -2.08872,
                    "percent_change_7d": -3.91464,
                    "market_cap": 119907312.18410993,
                    "last_updated": "2020-08-24T17:13:10.000Z"
                }
            }
        },
        {
            "id": 3351,
            "name": "ZB Token",
            "symbol": "ZB",
            "slug": "zb-token",
            "num_market_pairs": 10,
            "date_added": "2018-09-27T00:00:00.000Z",
            "tags": [
                "marketplace",
                "discount-token",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 463288810,
            "total_supply": 2100000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927"
            },
            "cmc_rank": 96,
            "last_updated": "2020-08-24T17:13:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.25869329398,
                    "volume_24h": 14045096.9160737,
                    "percent_change_1h": -0.220947,
                    "percent_change_24h": 0.51548,
                    "percent_change_7d": 1.80484,
                    "market_cap": 119849708.32297437,
                    "last_updated": "2020-08-24T17:13:11.000Z"
                }
            }
        },
        {
            "id": 1455,
            "name": "Golem",
            "symbol": "GNT",
            "slug": "golem-network-tokens",
            "num_market_pairs": 90,
            "date_added": "2016-11-18T00:00:00.000Z",
            "tags": [
                "platform",
                "distributed-computing",
                "payments"
            ],
            "max_supply": null,
            "circulating_supply": 990670000,
            "total_supply": 1000000000,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
            },
            "cmc_rank": 97,
            "last_updated": "2020-08-24T17:13:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.119949424075,
                    "volume_24h": 17802644.2009089,
                    "percent_change_1h": -0.734288,
                    "percent_change_24h": 3.98615,
                    "percent_change_7d": 48.6376,
                    "market_cap": 118830295.94838026,
                    "last_updated": "2020-08-24T17:13:04.000Z"
                }
            }
        },
        {
            "id": 3356,
            "name": "The Midas Touch Gold",
            "symbol": "TMTG",
            "slug": "the-midas-touch-gold",
            "num_market_pairs": 7,
            "date_added": "2018-09-27T00:00:00.000Z",
            "tags": [],
            "max_supply": null,
            "circulating_supply": 4659365835.76071,
            "total_supply": 9250139666.07304,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x10086399dd8c1e3de736724af52587a2044c9fa2"
            },
            "cmc_rank": 98,
            "last_updated": "2020-08-24T17:13:10.000Z",
            "quote": {
                "USD": {
                    "price": 0.0248045439863,
                    "volume_24h": 12793072.8190243,
                    "percent_change_1h": -0.644252,
                    "percent_change_24h": 1.70143,
                    "percent_change_7d": 3.91545,
                    "market_cap": 115573444.82138997,
                    "last_updated": "2020-08-24T17:13:10.000Z"
                }
            }
        },
        {
            "id": 2405,
            "name": "IOST",
            "symbol": "IOST",
            "slug": "iostoken",
            "num_market_pairs": 85,
            "date_added": "2018-01-16T00:00:00.000Z",
            "tags": [
                "hardware",
                "iot"
            ],
            "max_supply": null,
            "circulating_supply": 15120648694.9651,
            "total_supply": 22049189041.4373,
            "platform": null,
            "cmc_rank": 99,
            "last_updated": "2020-08-24T17:13:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0074882515265,
                    "volume_24h": 54658724.0130659,
                    "percent_change_1h": -0.140494,
                    "percent_change_24h": 3.23047,
                    "percent_change_7d": 0.831753,
                    "market_cap": 113227220.67174265,
                    "last_updated": "2020-08-24T17:13:07.000Z"
                }
            }
        },
        {
            "id": 2087,
            "name": "KuCoin Shares",
            "symbol": "KCS",
            "slug": "kucoin-shares",
            "num_market_pairs": 14,
            "date_added": "2017-10-24T00:00:00.000Z",
            "tags": [
                "marketplace",
                "centralized-exchange",
                "discount-token"
            ],
            "max_supply": null,
            "circulating_supply": 80728394,
            "total_supply": 170728394,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x039b5649a59967e3e936d7471f9c3700100ee1ab"
            },
            "cmc_rank": 100,
            "last_updated": "2020-08-24T17:13:05.000Z",
            "quote": {
                "USD": {
                    "price": 1.38700628855,
                    "volume_24h": 11760317.8407228,
                    "percent_change_1h": 1.81749,
                    "percent_change_24h": 4.96325,
                    "percent_change_7d": 7.89331,
                    "market_cap": 111970790.1425421,
                    "last_updated": "2020-08-24T17:13:05.000Z"
                }
            }
        }
    ]
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
    
    

    function populateCoinsTable(url,rank,pg){
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
                const coinSymbol = coinData.symbol;
                const coinName = coinData.name;
                const coin_ID = coinData.id;
                const capSymbol = coinSymbol.toUpperCase(); //converts lowercase coin symbols to uppercase
                
                let ID_url = coinID_Obj_Symbol[capSymbol]; //sets ID_url to the coinID_Obj_Symbol assigning coinData.symbol
                if (ID_url == undefined){ //if ID_url comes back undefined, we try an different object comparing to  "name"
                    ID_url = coinID_Obj_Name[coinName];
                } else { // if above also returns undefined, we try the final object and compare to "slug"
                    ID_url = coinID_Obj_Slug[coin_ID];
                };

              // CREATE A ROW AND APPEND TO TABLE
                $("#marketsTable").append(
                    `<tr>
                        <th scope="row">${i+rank}</td>
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
            $("#next-page").html("");
            $("#next-page").append(`Page ${pg + 1}`)
          })
        })
    }
    function populateExchangeTable(url,rank,pg){
        fetch(url)
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
            $("#next-page").html("");
            $("#next-page").append(`Page ${pg + 1}`)
          })
        })
    }


populateCoinsTable(marketDataAPI_1,1,1);

$("#next-page").click(function(){
    $("#marketsTable").html("");
    populateCoinsTable(marketDataAPI_2,101,2);
})
  
});

