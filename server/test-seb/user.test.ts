import request from './jest.setup';

beforeAll(async () => {
  const userData = { firstName: 'test', email: 'test@example.com', password: 'password123' };
  await request.post('/register').send(userData);
});
afterAll(async () => {
});

describe('User Registration and Login', () => {

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

  it('should fail to log in a user with an wrong email', async () => {
    const userData = { email: 'wrong@example.com', password: 'password123' };
    const response = await request.post('/login').send(userData);
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
  });


  
  it('should get a recipe for a user with id number ', async () => {
    const userData = '65f06c83b7a88402af8c84be';
    const response = await request.get(`/dashboard/${userData}`);

    //const response = await request.get('/dashboard/:id').send(userData);
   expect(response.status).toBe(200);
   expect(response.body.success).toBe(true);
  });
});




  // Add more tests here...

