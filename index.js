const express = require("express");

const app = express();

const PORT = 3000;

app.post("/hello_world", (req, res) => {
  res.json(
        {
            response_type: "in_channel",
            test: "SBEM YOU CRASHED!",
        }
    );
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});