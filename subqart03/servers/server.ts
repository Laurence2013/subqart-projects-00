import http from 'http';

import app from '../router.js';
import connectDB from '../databases/mongodb.js';

const port = process.env.PORT || '3030';

app.set('port', port);

connectDB();

const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
