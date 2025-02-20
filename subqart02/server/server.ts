import app from '../router.js';
import http from 'http';

const port = process.env.PORT || '3030';

app.set('port', port);

const server = http.createServer(app);

server.listen(port), () => console.log(`Server is running on http://localhost:${port}`);
