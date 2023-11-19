/* ========== EXTERNAL MODULES ========== */
import express from 'express';
import cors from 'cors';

/* ========== SYSTEM VARIABLES ========== */
const app = express();
const PORT = 3001;


/* ========== INTERNAL MODULES ========== */
// const {
//   getUser,
//   getUserData,
//   writeUserProfile,
//   updateUserProfile,
// } = require('./controllers');


/* ========== MIDDLEWARE ========== */
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  })
);

/* ========== ROUTES ========== */
/* --- GET --- */
// app.get('/login', getUser); <- for use with database
app.get('/login/:email', (req, res) => res.status(200).json(req.params.email));

// app.get('/user/:uid', getUserData); <- for use with database
app.get('/user/:email', (req, res) => res.status(200).json(req.params.email));

/* --- POST --- */
// app.post('/user/create/:uid', writeUserProfile); <- for use with database
app.post('/user/create/:email', (req, res) => res.status(201).json(req.params.email));

/* --- PUT --- */
// app.put('/user/update/:uid', updateUserProfile); <- for use with database


/* ========== SERVER CONNECTIONS ========== */
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));