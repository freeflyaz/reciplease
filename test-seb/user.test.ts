import request from './setup';
import mongoose from '../server/db';

afterAll(async () => {
  // If you have a method to close your server, call it here
  // e.g., server.close();
  
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
    const userData = { email: 'test@example.com', password: 'password123' };
    const response = await request.post('/register').send(userData);
    expect(response.status).toBe(409);
    expect(response.body.success).toBe(false);
  });

  // Add more tests here...
});
