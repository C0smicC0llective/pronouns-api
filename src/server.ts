import { createApp } from './app';
import { config } from './config';

const app = createApp(); // <-- THIS uses your configured app
const PORT = process.env.PORT || 4000;

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
