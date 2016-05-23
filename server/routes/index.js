'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/client', require('./client'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});