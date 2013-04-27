var crypto = require('crypto');
//var key = 'YOURSECRETKEY';
var hash;

module.exports = function(text, key) {
    if (text && key) {
        hash = crypto.createHmac('sha1', key).update(text).digest('hex');
        return hash;
    } else {
        throw new Error('Invalid inputs');
    }
    
}
