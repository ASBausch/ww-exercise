/**
 * Created by manadab on 2/20/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {

    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;