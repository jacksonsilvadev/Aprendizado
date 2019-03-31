// Console.log

const foo = { name: 'tom', age:30, nervous:false}
const bar = { name: 'dick', age:40, nervous:false}
const baz = { name: 'harry', age:50, nervous:true}

// Código ruim

console.log(foo);
console.log(bar);
console.log(baz);

// Código bom

console.log('%c My Friends', 'color: orange; font-weigth:bold;')
console.log({foo, bar, baz})

console.table([foo,bar,baz])

console.time('looper')
    let i = 0

    while (i < 1000000) {i++}

console.timeEnd('looper')