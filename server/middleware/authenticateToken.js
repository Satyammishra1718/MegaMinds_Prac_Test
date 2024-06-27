  import jwt from 'jsonwebtoken';
  import 'dotenv/config';

  const secretKey = process.env.SECRET_KEY;

  export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded; 
    });
    next();
  };
