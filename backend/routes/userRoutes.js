// const express = require('express');
// const { getUsers } = require('../controllers/userController');
// const router = express.Router();

// router.get('/', getUsers);

// module.exports = router;




// backend/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/userController"); // Correct path

// This must be POST, not GET
router.post("/login", loginUser);

module.exports = router;

