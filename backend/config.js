import { config as dotenvConfig } from 'dotenv';
dotenvConfig(); // Automatically loads from root .env if available

const config = {
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  port: parseInt(process.env.PORT, 10) || 3000
};

export default config;
