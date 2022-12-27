const getFlagsValue = require('./flag')

console.log(`Hey ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}`)