import { exec } from 'child_process'

exec('pm2 start dist/server.js --name api');