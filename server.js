



const express = require('express');
const app = express();
const vultr = require('vultr');
const tensorflow = require('tensorflow');

app.use(express.json());

app.post('/analyze', async (req, res) => {
  const amount = req.body.amount;
  const aiResponse = await tensorflow.predict(amount);
  const sustainableInvestment = vultr.getSustainableInvestment(aiResponse);
  res.json({ recommendation: sustainableInvestment });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


