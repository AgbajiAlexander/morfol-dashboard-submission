const request = require('supertest');
const app = require('./api');

describe('GET /api/user/:id', () => {
  it('should return 400 if no user ID is provided', async () => {
    const res = await request(app).get('/api/user/');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('User ID is required');
  });

  it('should return 404 for a non-existing user', async () => {
    const res = await request(app).get('/api/user/404');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('User not found');
  });

  it('should return 200 and user data for a valid ID', async () => {
    const res = await request(app).get('/api/user/123');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', '123');
    expect(res.body).toHaveProperty('name', 'John Doe');
  });
});
