hashit is a simple method for making secure codes out of plain text. It uses sha-1 and crypto to make things hopefully secure.
#Usage

    var hashit = require('hashit');
    hashit('somepassword', 'yoursecretcode'); //returns a hashed string

