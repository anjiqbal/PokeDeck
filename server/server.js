import express from 'express'
import cors from 'cors'
const app = express();
const port = 3001;

// Configure middleware, routes, and other server settings
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send('Backend is working!');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});