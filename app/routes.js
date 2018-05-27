var express = require("express");
var path = require("path");
var router = express.Router();

//routes
router.get("/", function(req,res) {
  res.sendFile(path.join(_dirname, "../index.html"))
});
router.get("/about", function(req,res) {
  res.sendFile(path.join(_dirname, "../about.html"))
});

//export
module.exports = router;
