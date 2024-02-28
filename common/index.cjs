import module from "module";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = module.createRequire(import.meta.url);

module.exports = require(__dirname, "./src");
