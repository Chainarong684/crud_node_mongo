const express = require("express");
const router = express.Router();

const api = require("../services/api");

/* --------------------------------- Create --------------------------------- */
router.post("/api/v1/add", api.createUser);
/* ---------------------------------- Read ---------------------------------- */
router.get("/api/v1/user", api.findAllUser);
router.get("/api/v1/user/:id", api.findUser);
/* --------------------------------- Update --------------------------------- */
router.put("/api/v1/edit/:id", api.updateUser);
/* --------------------------------- Delete --------------------------------- */
router.delete("/api/v1/del/:id", api.deleteUser);

module.exports = router;
