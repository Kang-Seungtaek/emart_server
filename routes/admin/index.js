var express = require('express');
var router = express.Router();

module.exports = () => {

    router.get('/', (req, res, next) => {
        res.send({
            test_text: 'ADMIN_ROUTER',
        })
    })

    return router
}
