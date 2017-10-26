var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    fs.readFile('wwh.txt', 'utf-8', function(err, data) {
        console.log(parseInt(data.user))
        // var user = data
    })
    res.send()
});

module.exports = router;