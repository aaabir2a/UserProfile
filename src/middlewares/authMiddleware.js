
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('Access denied: No token provided');

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
  console.log('Cookies:', req.cookies);
console.log('Headers:', req.headers);
console.log('Token:', token);
};

