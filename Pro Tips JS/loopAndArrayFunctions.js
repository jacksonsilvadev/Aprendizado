const orders = [500, 30, 99, 15, 223];


// Bad Loop Code


let total = 0;
let withTax = [];
let highValue =[];

for (i = 0; i < orders.length; i++){
    // Recude
    total += orders[i]

    // Map
    withTax.push(orders[i] * 1.1)
    
    
    // filter
    if(orders[i] > 100){
        highValue.push(orders[i])
    }
}
console.log({total,withTax,highValue})


// good loop code
// acc valor antigo
// cur valor atual do array
let totals = orders.reduce((acc, cur) => acc+cur)

let withTaxs = orders.map(v => v * 1.1)

let highValues = orders.filter(v => v > 100)