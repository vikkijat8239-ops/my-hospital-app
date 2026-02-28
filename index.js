const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to your Mumbai Database
mongoose.connect(process.env.MONGO_URI);

// Define what an Appointment looks like
const Appointment = mongoose.model('Appointment', { name: String });

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; padding-top: 50px;">
        <h1>🏥 City General Hospital</h1>
        <input type="text" id="pName" placeholder="Enter Your Name" style="padding: 10px;">
        <button onclick="book()" style="padding: 10px; background: green; color: white;">Confirm Booking</button>
        <script>
          function book() {
            const name = document.getElementById('pName').value;
            fetch('/save?name=' + name).then(() => alert('Success! Saved to Database.'));
          }
        </script>
      </body>
    </html>
  `);
});

// The part that actually saves to MongoDB
app.get('/save', async (req, res) => {
  const newAppt = new Appointment({ name: req.query.name });
  await newAppt.save();
  res.send('Saved');
});

app.listen(process.env.PORT || 3000);
