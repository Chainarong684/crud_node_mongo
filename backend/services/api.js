const create = (req, res) => {
  console.log(req.body);
  res.json({ status: "done" });
};

module.exports = { create };
