const request = require("supertest");
const app = require("../../app");

const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

// describe("Launches API", () => {});
beforeAll(async () => {
  await mongoConnect();
});

describe("Test Get /Launches", () => {
  test("It Should response with 200 success", async () => {
    const response = await request(app).get("/v1/launches").expect(200);
  });
});

describe("Test Post / Launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-442 b",
    launchDate: "January , 4 , 2028 ",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };

  test("It Should response with 201 success", async () => {
    const response = await request(app)
      .post("/v1/launches")
      .send(completeLaunchData)
      .expect(201)
      .expect("Content-Type", /json/);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);

    // expect(responseDate).toMatchObject(launchDataWithoutDate);
  });

  test("It Should catch missing required", async () => {
    const response = await request(app)
      .post("/v1/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch INPUTS",
    });
  });
  test("It Should catch missing invalid dates", async () => {
    const response = await request(app)
      .post("/v1/launches")
      .send({ ...launchDataWithoutDate, launchDate: "jjj" })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch Date",
    });
  });
});
