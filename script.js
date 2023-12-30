const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// For simplicity, we use an in-memory database. In a real application, use a database.
const users = [
  { username: 'user1', passwordHash: '$2b$10$PTeInA7i8a6X8EZRM1LEdOm2CPA.xs4g3VStwA0eSnmvgf/KUS2Zy' }, // Password: password1
  // Add more users as needed
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.passwordHash)) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
