import app from './src/app/index.js';
import { APP_PORT } from './src/config/config.default.js';

app.listen(APP_PORT, () => {
	console.log(`已启动服务，监听端口：http://localhost:${APP_PORT}`);
});