import { createApp } from './app';
import { config } from './config';

const app = createApp(); // <-- THIS uses your configured app
const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pronouns API running on http://localhost:${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});
