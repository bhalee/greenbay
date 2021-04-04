import express from 'express';
import { api, system } from './routes';
const app = express();
const PORT = process.env.PORT;

app.use('/api', api);
app.use('/system', system);

app.listen(PORT, () => {
  console.log(`Backend server running on ${PORT}`)
});
export default app;