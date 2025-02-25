import http from 'http';

import app from '../router.js';
import test_mongodb from '../databases/test_databases/test_mongodb.js';

const port = process.env.PORT || '3030';

app.set('port', port);

const server = http.createServer(app);

test_mongodb().then(() => {
	try{
		server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
	}catch(err){
		console.log("Can't connect to the server!" + err);
	}
}).catch((err: any) => console.log('Invalid database connection...!', err));
