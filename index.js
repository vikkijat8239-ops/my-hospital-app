const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>🏥 Hospital Booking System is LIVE!</h1><p>Welcome, Vikash. Your app is officially running.</p>');
});

app.listen(process.env.PORT || 3000);

