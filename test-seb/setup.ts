import supertest from 'supertest';
import app from '../server/index'; // Adjust this path to where your Express app is exported

const request = supertest(app);

export default request;
