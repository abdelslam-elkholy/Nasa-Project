const request = require("supertest");
const app = require("../../app");

describe("Test Get /Launches", () => {
  test("It Should response with 200 success", async () => {
    const response = await request(app).get("/launches").expect(200);
  });
});

describe("Test Post / Launches", () => {
  test("It Should response with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
        launchDate: "January , 4 , 2028 ",
      })
      .expect(201);
  });

  test("It Should catch missing required", () => {});
  test("It Should catch missing invalid dates", () => {});
});
