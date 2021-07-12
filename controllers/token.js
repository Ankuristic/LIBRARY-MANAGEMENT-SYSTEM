const { sign } = require('jsonwebtoken');

// Create tokens
// ----------------------------------
const createAccessToken = userId => {
  return sign({ userId },  {
    expiresIn: '15m',
  });
};

const createRefreshToken = userId => {
  return sign({ userId },  {
    expiresIn: '7d',
  });
};


module.exports = {
    createAccessToken,
    createRefreshToken,
    
  };