const vender = require('./subfolder/vender')

exports.increment = function (x){
    return vender.addFunction(1,x)
}