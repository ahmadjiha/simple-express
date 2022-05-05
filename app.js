// a simple express server

const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.json());
// app.use(cors);

app.get('/', (req, res) => {
  console.log('here');
  res.sendFile(path.join(__dirname, '/index.html'));
})


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
})