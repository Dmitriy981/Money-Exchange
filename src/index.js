// PLEASE DON'T change function name
const WE_DONT_HAVE_MONEYS = {error: "You are rich, my friend! We don't have so much coins for exchange"};
const MAX_VALUE = 10000;
const H = 50;
const Q = 25;
const D = 10;
const N = 5;
const P = 1;

module.exports = function makeExchange(currency) {
    let result = {};
    
    if(currency <= 0) {
        return result;
    }
    else if(currency >= MAX_VALUE) {
        return WE_DONT_HAVE_MONEYS;
    }
    
    exchangeCoins(H);
    exchangeCoins(Q);
    exchangeCoins(D);
    exchangeCoins(N);
    exchangeCoins(P);
    
        
    function exchangeCoins(denomination) {
        let value = parseInt(currency / denomination);
        
        if(value != 0) {
            currency -= value * denomination;
            
            switch(denomination) {
                case 50:
                    result.H = value;
                    break;

                case 25:
                    result.Q = value;
                    break;

                case 10:
                    result.D = value;
                    break;

                case 5:
                    result.N = value;
                    break;

                case 1:
                    result.P = value
                    break;
            }
        }
    }
    
    return result;
}
