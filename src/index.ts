import 'dotenv/config';
import 'module-alias/register';
import validadeEnv from '@/utils/interfaces/validadeEnv';
import App from './app';
import PostController from '@/resources/post/post.controller';

validadeEnv();

const app = new App([
    new PostController()
], Number(process.env.PORT));

