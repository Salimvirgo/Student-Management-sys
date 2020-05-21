const express = require('express')
const router = express.Router()
const csurf = require("csurf");
const csrfProtection = csurf();

router.get('/', (req, res) => {
    // res.send('Hello Everyone')
    res.render('index');
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});


router.get("/login",csrfProtection, (req, res,next) => {
    res.render("login", {csrfToken: req.csrfToken() });
});
router.post('/login', csrfProtection, (req, res) => {
    res.redirect('/dashboard')
});
  

module.exports = router