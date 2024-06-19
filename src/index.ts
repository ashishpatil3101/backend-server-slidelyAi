import express from 'express';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(bodyParser.json());
app.use('/', formRoutes);

// Initialize db.json with an empty array if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, '[]');
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
