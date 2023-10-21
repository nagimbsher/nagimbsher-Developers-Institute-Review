const auth = (req, res, next) => {
  const { name } = req.query;
  console.log(req.query);
  if (name != "admin") {
    res.json({ msg: "not authirized to see this product" });
  } else {
    next();
  }
};

module.exports = {
  auth,
};
