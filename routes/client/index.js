var express = require('express');
var router = express.Router();

module.exports = () => {

    router.get('/', (req, res, next) => {
        res.send({
            test_text: 'CLIENT_ROUTER',
        })
    })

    return router
}
