require('dotenv').config();

const nextConfig = {
  env: {
    MyString: 'string',
    StartTime: Date.now().toString()
  },
};

module.exports = nextConfig;