const express = require('express');
const mongoose = require('mongoose');
const app = express();

// This connects your website to the Mumbai database
mongoose.connect(process.env.MONGO_URI);

// This creates the 'Medical Record' format
const Appointment = mongoose.model('Appointment', { 
  patientName: String, 
  doctor: String, 
  time: { type: Date, default: Date.now } 
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; background-color: #f4f7f6; padding: 20px;">
        <h1 style="color: #2c3e50;">🏥 City General Hospital</h1>
        <div style="background: white; padding: 30px; border-radius: 15px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
          <h3>Book an Appointment</h3>
          <input type="text" id="pName" placeholder="Enter Patient Name" style="padding: 12px; width: 250px; border-radius: 5px; border: 1px solid #ccc;"><br><br>
          <button onclick="bookNow()" style="background: #27ae60; color: white; padding: 12px 25px; border: none; border-radius: 5px; cursor: pointer;">Confirm Booking</button>
        </div>
        <script>
          function bookNow() {
            const name = document.getElementById('pName').value;
            if(!name) return alert('Please enter a name');
            // This part sends the name to the server
            fetch('/save?name=' + name)
              .then(() => alert('Success! Appointment for ' + name + ' is now saved in the database.'));
          }
        </script>
      </body>
    </html>
  `);
});

// This part takes the name and puts it into MongoDB
app.get('/save', async (req, res) => {
  const newAppt = new Appointment({ patientName: req.query.name, doctor: 'Dr. Sharma' });
  await newAppt.save();
  res.send('Saved');
});

app.listen(process.env.PORT || 3000);
