import supertest from 'supertest';
import app from '../server/index';

const request = supertest(app);

export default request;

