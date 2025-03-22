const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
