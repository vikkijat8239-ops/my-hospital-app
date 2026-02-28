const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; background-color: #f4f7f6; padding: 20px;">
        <h1 style="color: #2c3e50;">🏥 City General Hospital</h1>
        <p>Welcome, Vikash. Select a doctor to book an appointment.</p>
        
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 200px;">
            <h3>Dr. Sharma</h3>
            <p style="color: #7f8c8d;">Heart Specialist</p>
            <p><b>Fee: ₹500</b></p>
            <button onclick="alert('Booking confirmed for Dr. Sharma!')" style="background: #27ae60; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Book Now</button>
          </div>

          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 200px;">
            <h3>Dr. Verma</h3>
            <p style="color: #7f8c8d;">Child Specialist</p>
            <p><b>Fee: ₹400</b></p>
            <button onclick="alert('Booking confirmed for Dr. Verma!')" style="background: #27ae60; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Book Now</button>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000);
