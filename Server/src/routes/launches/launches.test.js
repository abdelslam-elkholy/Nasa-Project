const request = require("supertest");
const app = require("../../app");

describe("Test Get /Launches", () => {
  test("It Should response with 200 success", async () => {
    const response = await request(app).get("/launches");

    expect(response.statusCode).toBe(200);
  });
});

describe("Test Post / Launches", () => {
  test("It Should response with 200 success", () => {});

  test("It Should catch missing required", () => {});
  test("It Should catch missing invalid dates", () => {});
});
