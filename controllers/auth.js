const Router = require('koa-router');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../lib/config');

const router = new Router().prefix('/auth');

router.post('/register', async (ctx) => {
    const {name, email, password} = ctx.request.body;
    const user = await User.findOne({email});

});

router.post('/login', async (ctx) => {});

module.exports = router.routes();


