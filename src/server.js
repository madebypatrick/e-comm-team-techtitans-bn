import dotenv from 'dotenv';
import app, { connectDB } from './app';
// import googleOauth from './routes/oauth.route';

dotenv.config();

const { PORT } = process.env;
// app.use(googleOauth);

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🍏 Server is running on: http://localhost:${PORT} ... 🌊`);
  });
})();
