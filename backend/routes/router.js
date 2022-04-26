const express = require("express");
const router = express.Router();

const api = require("../services/api");

/* --------------------------------- Create --------------------------------- */
router.post("/api/v1/add", api.create);
/* ---------------------------------- Read ---------------------------------- */
/* --------------------------------- Update --------------------------------- */
/* --------------------------------- Delete --------------------------------- */

module.exports = router;
