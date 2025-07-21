import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const process = require('process');
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenvConfig({ path: join(__dirname, '.env') });

const config = {
  email: {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASS 
  },
  port: parseInt(process.env.PORT, 10)
};

export default config;
