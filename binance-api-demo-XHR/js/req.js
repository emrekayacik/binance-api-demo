let getData =(interval)=>{
    let xhr = new XMLHttpRequest();
    let xhrSTMX = new XMLHttpRequest();
    let xhrWIN = new XMLHttpRequest();
    let xhrDOGE = new XMLHttpRequest();
    let res;
    let urlSTMX = `https://api.binance.com/api/v3/klines?symbol=STMXUSDT&interval=${interval}&limit=1`;
    let urlWIN = `https://api.binance.com/api/v3/klines?symbol=WINUSDT&interval=${interval}&limit=1`;
    let urlDOGE = `https://api.binance.com/api/v3/klines?symbol=DOGEUSDT&interval=${interval}&limit=1`;
    let urlBTC = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=1`;

    let funcSTMX = () => {
        let divPrices = $('#priceSTMX');
        xhrSTMX.open('GET', urlSTMX,true);
        xhrSTMX.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrSTMX.responseText);
                    res.forEach(element => {
                        let openPrice = element[1];
                        let closePrice = element[4];
                        
                        let average = calculateAverage(openPrice,closePrice);
                        doColor(average,divPrices);
                    });
                }
                
             };
             xhrSTMX.send();
    };


    let funcWIN = () => {
        let divPrices = $('#priceWIN');
        xhrWIN.open('GET', urlWIN,true);
        xhrWIN.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrWIN.responseText);
                    res.forEach(element => {
                        let openPrice = element[1];
                        let closePrice = element[4];

                        let average = calculateAverage(openPrice,closePrice);
                        doColor(average,divPrices);
                    });
                }
                
             };
             xhrWIN.send();
    };


    let funcDOGE = () => {
        let divPrices = $('#priceDOGE');

        xhrDOGE.open('GET', urlDOGE,true);
        xhrDOGE.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhrDOGE.responseText);
                    res.forEach(element => {
                        let openPrice = element[1];
                        let closePrice = element[4];
                        
                        let average = calculateAverage(openPrice,closePrice);
                        doColor(average,divPrices);

                    });
                }
                
             };
             xhrDOGE.send();
    };

    
    let funcBTC = () => {
        let divPrices = $('#priceBTC');

        xhr.open('GET', urlBTC,true);
        xhr.onload = function () {
            if (this.status == 200) {
                    res = JSON.parse(xhr.responseText);
                    res.forEach(element => {
                        let openPrice = element[1];
                        let closePrice = element[4];
                        
                        let average = calculateAverage(openPrice,closePrice);
                        doColor(average,divPrices);

                    });
                }
                
             };
             xhr.send();
    };
    
    funcWIN();
    funcDOGE();
    funcBTC();
    funcSTMX();

    setTimeout(function(){
        getCurrencies();
     }, 2000);
};

let doColor = (average,divPrices) => {
    if (average>0){
        divPrices.css("color","green");
        $(`#${divPrices.attr('id')}`).html(`+${average}`)
    }
    else{
        divPrices.css("color","red");
        $(`#${divPrices.attr('id')}`).html(`${average}`)
    }
}
let calculateAverage = (openPrice,closePrice) => ((closePrice-openPrice)/openPrice)*100;

getCurrencies = () => {
    let interval = $('#intervals').val();
    getData(interval);
    $('#btnGetData').hide(500);
};