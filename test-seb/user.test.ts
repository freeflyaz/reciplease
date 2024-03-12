import request from './jest.setup';
import mongoose from '../server/test_db';

beforeAll(async () => {
  // If you're using Mongoose, for example, you can disconnect like this:
});
afterAll(async () => {
  // If you're using Mongoose, for example, you can disconnect like this:
  await mongoose.disconnect();
});

describe('User Registration and Login', () => {
  
  it('should register a new user successfully', async () => {
    const userData = { firstName: 'test', email: 'test@example.com', password: 'password123' };
    const response = await request.post('/register').send(userData);
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('User created');
  });

  it('should fail to register a user with an existing email', async () => {
    const userData = { firstName: 'test', email: 'test@example.com', password: 'password123' };
    const response = await request.post('/register').send(userData);
    expect(response.status).toBe(409);
    expect(response.body.success).toBe(false);
  });

  it('should log in a user with an existing email', async () => {
    const userData = { email: 'test@example.com', password: 'password123' };
    const response = await request.post('/login').send(userData);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should fail to log in a user with an existing email', async () => {
    const userData = { email: 'wrong@example.com', password: 'password123' };
    const response = await request.post('/login').send(userData);
    expect(response.status).toBe(409);
    expect(response.body.success).toBe(false);
  });

  // Add more tests here...
});
