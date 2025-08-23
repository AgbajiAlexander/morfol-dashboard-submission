const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  if (userId === '404') {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ id: userId, name: 'John Doe' });
});

module.exports = app;
