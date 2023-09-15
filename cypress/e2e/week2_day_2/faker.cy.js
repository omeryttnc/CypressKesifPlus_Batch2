import faker from "faker";
describe("faker kullanimi", () => {
  it("faker 1", () => {
    // java Faker faker = new Faker()
    // ES6 oncesinde  const {faker} = require('faker')

    // String name = "omer" + " ali" + " kesif plus"

    const firstName = "omer";
    const lastName = "ali";
    const fullName = firstName + " " + lastName;
    const fullNameJavascript = `${firstName} ${lastName}`;

    console.log(`faker name ${faker.name.firstName()}`);
    console.log(`faker last name ${faker.name.lastName()}`);
    console.log(`email ${faker.internet.email()}`);
    console.log(`phone number ${faker.phone.phoneNumber("90########")}`);
  });
});
