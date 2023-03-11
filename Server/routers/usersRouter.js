const express = require('express');
const usersBL = require('../models/usersBL');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await usersBL.getUsers();
    return res.json(users);
});

module.exports = router;