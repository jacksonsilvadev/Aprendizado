const moment = require("moment");

moment.locale("pt-br");

const dia = moment().format("dddd");

console.log(dia);
