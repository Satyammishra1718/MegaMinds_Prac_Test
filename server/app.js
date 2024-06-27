import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(
  {
    origin:["https://mega-minds-prac-test.vercel.app"],
    methods:["GET", "POST"],
    credentials:true,
  }
));
app.use(express.json());

app.use("/api",routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
