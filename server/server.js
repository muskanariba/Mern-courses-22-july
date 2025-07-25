// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();


// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));


// mongoose.connect('mongodb://localhost:27017/courseplatform', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log('MongoDB connection error:', err));


// const courseRoutes = require('./routes/courseRoutes');
// const authRoutes = require('./routes/authRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const userRoutes = require('./routes/userRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// app.use('/api', courseRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api', userRoutes);
// app.use('/api/admin', adminRoutes);
// const path = require('path');
// app.use('/uploads', express.static(path.join(__dirname, 'upload')));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', userRoutes); // /api/users
app.use('/api/admin', adminRoutes);

// Static uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'upload')));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
