$(document).ready(function(){
    let xhr = new XMLHttpRequest();
    let xhrSTMX = new XMLHttpRequest();
    let xhrWIN = new XMLHttpRequest();
    let xhrDOGE = new XMLHttpRequest();
    let xhrSXP = new XMLHttpRequest();
    let res;
    let urlSTMX = "https://api.binance.com/api/v3/klines?symbol=STMXUSDT&interval=1h&limit=1";
    let urlWIN = "https://api.binance.com/api/v3/klines?symbol=WINUSDT&interval=1h&limit=1";
    let urlDOGE = "https://api.binance.com/api/v3/klines?symbol=DOGEUSDT&interval=1h&limit=1";
    let urlBTC = "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=1";
    let urlSXP = "https://api.binance.com/api/v3/klines?symbol=SXPUSDT&interval=1h&limit=1";

    let funcSTMX = () => {
        xhrSTMX.open('GET', urlSTMX,true);
        xhrSTMX.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrSTMX.responseText);
                    res.forEach(element => {
                        var openPrice = element[1];
                        var closePrice = element[4];
                        // console.log(openPrice);
                        // console.log(closePrice);
                        var average = ((closePrice-openPrice)/openPrice)*100;
    
                        let divPrices = $('#priceSTMX');
                        if (average>0){
                            divPrices.css("color","green");
                            $('#priceSTMX').html(`+ ${average}`)
                        }
                        else{
                            divPrices.css("color","red");
                            $('#priceSTMX').html(` ${average}`)
                        }
                    });
                }
                
             };
             xhrSTMX.send();
    };


    let funcWIN = () => {
        xhrWIN.open('GET', urlWIN,true);
        xhrWIN.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrWIN.responseText);
                    res.forEach(element => {
                        var openPrice = element[1];
                        var closePrice = element[4];
                        // console.log(openPrice);
                        // console.log(closePrice);
                        var average = ((closePrice-openPrice)/openPrice)*100;
    
                        let divPrices = $('#priceWIN');
                        if (average>0){
                            divPrices.css("color","green");
                            $('#priceWIN').html(`+ ${average}`)
                        }
                        else{
                            divPrices.css("color","red");
                            $('#priceWIN').html(` ${average}`)
                        }
                    });
                }
                
             };
             xhrWIN.send();
    };


    let funcDOGE = () => {
        xhrDOGE.open('GET', urlDOGE,true);
        xhrDOGE.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrDOGE.responseText);
                    res.forEach(element => {
                        var openPrice = element[1];
                        var closePrice = element[4];
                        // console.log(openPrice);
                        // console.log(closePrice);
                        var average = ((closePrice-openPrice)/openPrice)*100;
    
                        let divPrices = $('#priceDOGE');
                        if (average>0){
                            divPrices.css("color","green");
                            $('#priceDOGE').html(`+ ${average}`)
                        }
                        else{
                            divPrices.css("color","red");
                            $('#priceDOGE').html(` ${average}`)
                        }
                    });
                }
                
             };
             xhrDOGE.send();
    };

    
    let funcBTC = () => {
        xhr.open('GET', urlBTC,true);
        xhr.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhr.responseText);
                    res.forEach(element => {
                        var openPrice = element[1];
                        var closePrice = element[4];
                        // console.log(openPrice);
                        // console.log(closePrice);
                        var average = ((closePrice-openPrice)/openPrice)*100;
    
                        let divPrices = $('#priceBTC');
                        if (average>0){
                            divPrices.css("color","green");
                            $('#priceBTC').html(`+ ${average}`)
                        }
                        else{
                            divPrices.css("color","red");
                            $('#priceBTC').html(` ${average}`)
                        }
                    });
                }
                
             };
             xhr.send();
    };
    let funcSXP = () => {
        xhrSXP.open('GET', urlSXP,true);
        xhrSXP.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrSXP.responseText);
                    res.forEach(element => {
                        var openPrice = element[1];
                        var closePrice = element[4];
                        // console.log(openPrice);
                        // console.log(closePrice);
                        var average = ((closePrice-openPrice)/openPrice)*100;
    
                        let divPrices = $('#priceSXP');
                        if (average>0){
                            divPrices.css("color","green");
                            $('#priceSXP').html(`+ ${average}`)
                        }
                        else{
                            divPrices.css("color","red");
                            $('#priceSXP').html(` ${average}`)
                        }
                    });
                }
                
             };
             xhrSXP.send();
    };
    
    funcWIN();
    funcDOGE();
    funcBTC();
    funcSTMX();
    funcSXP();
    setTimeout(function(){
        window.location.reload(1);
     }, 2000);    
});

