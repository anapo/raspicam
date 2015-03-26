var express = require('express');
var router = express.Router();

/* GET shots. */
router.get('/getshots', function(req, res, next) {
	res.json({ user: 'andrea.napoleoni' });
});

module.exports = router;
