var express = require('express');
var router = express.Router();

const POST = 'POST';
const GET = 'GET';

router.use(function (req, res, next) {
    if (req.method === GET) {
        renderPage(res);
        return;
    }

    if (req.method === POST) {
        saveData(req);
        renderPage(res, 'Thank you! We\'ll get back to you shortly');
        return;
    }

    // 404
    next();
});

/**
 * Render the conact page with an optional flashMessage
 *
 * @param  {Response}  res           Response Object
 * @param  {String}    flashMessage  Message to be displayed at the top of the page
 */
function renderPage(res, flashMessage) {
    res.render('contact', { flashMessage });
}

/**
 * Save data to DB
 *
 * @param  {Request}  req  Request object
 */
function saveData(req) {
    console.log('Submitted Data:', req.body);
}

module.exports = router;

