const express = require("express");
const router = express.Router();

const api = require("../services/api");

/* --------------------------------- Create --------------------------------- */
router.post("/api/v1/add", api.createUser);
/* ---------------------------------- Read ---------------------------------- */
router.get("/api/v1/user", api.findAllUser);
router.get("/api/v1/user/:id", api.findUserById);
/* --------------------------------- Update --------------------------------- */
/* --------------------------------- Delete --------------------------------- */

module.exports = router;
