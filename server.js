const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const { multerErrorHandler } = require("./utils/multer");
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB Error: ", err));

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const travelStoryRoutes = require('./routes/travelStoryRoutes');
const imageRoutes = require('./routes/imageRoutes');

// endpoints
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/travel-stories', travelStoryRoutes);
app.use('/api/images', imageRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
