const request = require('supertest')

const router = require('../routes/index')

//Testing get all users endpoint

describe("GET /favs", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(router).get("/api/favs");
        expect(response.statusCode).toBe(200);
    })
});

 