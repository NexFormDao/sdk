
const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ status: "NexForm API Running" });
});

module.exports = router;
```
