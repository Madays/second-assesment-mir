const request = require('supertest')

const app = require('../app.js')

//Testing get all users endpoint

describe("GET /favs", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/api/favs");
        expect(response.statusCode).toBe(200);
    })
});

 