import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

export default request;

