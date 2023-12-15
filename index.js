const express = require('express');
const app = express();

// Route to handle date requests
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  // If date is not provided, use the current time
  const inputDate = date ? new Date(date) : new Date();

  if (isNaN(inputDate.getTime())) {
    // Invalid date
    return res.json({ error: 'Invalid Date' });
  }

  // Valid date
  const unixTimestamp = inputDate.getTime();
  const utcString = inputDate.toUTCString();

  res.json({ unix: unixTimestamp, utc: utcString });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
