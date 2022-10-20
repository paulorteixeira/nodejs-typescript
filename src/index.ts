import 'dotenv/config';
import 'module-alias/register';
import validadeEnv from '@/utils/interfaces/validadeEnv';
import App from './app';

validadeEnv();

const app = new App([],Number(process.env.PORT));

