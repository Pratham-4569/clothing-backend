const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "API is running ✅" });
});

app.get('/api/products', (req, res) => {
  res.json([
    { name: "T-Shirt", price: 499 },
    { name: "Hoodie", price: 899 },
    { name: "Jeans", price: 999 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
