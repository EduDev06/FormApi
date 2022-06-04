const { Router } = require('express');
const router = Router();
const { createNewUser } = require('../controllers/user.controllers');

router.post('/user', createNewUser);
module.exports = router;