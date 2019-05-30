const { imc } = require('./plugin');
const moment = require('moment');

console.log(imc(70, 1.60));

console.log(moment().endOf('day').fromNow());