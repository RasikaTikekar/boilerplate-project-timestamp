// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/api/:date?', (req, res) => {
//     let dateString = req.params.date;

//     if (!dateString) {
//         // If the date parameter is empty, use the current time
//         dateString = new Date().toUTCString();
//     }

//     const date = new Date(dateString);

//     if (isNaN(date.getTime())) {
//         return res.json({ error: "Invalid Date" });
//     }

//     res.json({ unix: date.getTime(), utc: date.toUTCString() });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/:date?", (req, res) => {
  let dateString = req.params.date;

  if (!dateString) {
    // If the date parameter is empty, use the current time
    dateString = new Date().toUTCString();
  }

  // Check if the date parameter is a valid number
  const isNumber = /^\d+$/.test(dateString);

  const date = isNumber ? new Date(parseInt(dateString)) : new Date(dateString);

  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
