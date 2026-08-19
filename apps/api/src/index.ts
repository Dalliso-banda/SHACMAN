import express from 'express';
import { User } from '@repo/types'; // Importing from your shared package!

const app = express();
const PORT = 5000;

app.use(express.json());

// A test endpoint utilizing the monorepo shared structure
app.get('/api/dealer', (req, res) => {
  const dealerInfo: User = {
    id: "shacman-api-01",
    name: "SHACMAN Zambia Main Office",
    role: "admin"
  };
  
  res.json(dealerInfo);
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running locally at http://localhost:${PORT}`);
});

