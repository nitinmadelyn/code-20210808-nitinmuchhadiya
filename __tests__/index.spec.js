const calculateBMI = require("../app/index");
const peopleJSON = require("./people.json");
const peopleErrorJSON = require("./people-error.json"); 

describe("BMI calculator test", () => {
  test("should calculate BMI, BMI Category, Health risk with total number of people Over Weighted", () => {
    const BMI = calculateBMI(peopleJSON, "OverWeight");
    const expectedResult = {
      data: [
        {
          Gender: "Male",
          HeightCm: 151,
          WeightKg: 63,
          BMI: "27.63",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Female",
          HeightCm: 163,
          WeightKg: 62,
          BMI: "23.34",
          BMICategory: "NormalWeight",
          healthRisk: "Low Risk",
        },
        {
          Gender: "Male",
          HeightCm: 164,
          WeightKg: 70,
          BMI: "26.03",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Male",
          HeightCm: 168,
          WeightKg: 79,
          BMI: "27.99",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Male",
          HeightCm: 159,
          WeightKg: 71,
          BMI: "28.08",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
      ],
      OverWeight: 4,
    };
    expect(BMI).toEqual(expectedResult);
  });

  test("should calculate BMI, BMI Category, Health risk with total number of people Over Weighted (memoize)", () => {
    const BMI = calculateBMI(peopleJSON, "OverWeight");
    const expectedResult = {
      data: [
        {
          Gender: "Male",
          HeightCm: 151,
          WeightKg: 63,
          BMI: "27.63",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Female",
          HeightCm: 163,
          WeightKg: 62,
          BMI: "23.34",
          BMICategory: "NormalWeight",
          healthRisk: "Low Risk",
        },
        {
          Gender: "Male",
          HeightCm: 164,
          WeightKg: 70,
          BMI: "26.03",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Male",
          HeightCm: 168,
          WeightKg: 79,
          BMI: "27.99",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
        {
          Gender: "Male",
          HeightCm: 159,
          WeightKg: 71,
          BMI: "28.08",
          BMICategory: "OverWeight",
          healthRisk: "Enhanced Risk",
        },
      ],
      OverWeight: 4,
    };
    expect(BMI).toEqual(expectedResult);
  });

  //same height & weight calculation using memoization
  test("should throw an error for invalid height/weight values", () => {
    expect(() => {
      calculateBMI(peopleErrorJSON, "OverWeight");
    }).toThrow();
    
  });

  //error test for invalid params
  //test("should throw an error for invalid parameters", () => {
  //  expect(() => {
  //    calculateBMI("96", 171);
  //  }).toThrow();
  //});

  //test("should throw an error on invalid parameters", () => {
  //  expect(() => {
  //    calculateBMI(96, "171");
  //  }).toThrow();
  //});

  //test("should throw an error on invalid parameters", () => {
  //  expect(() => {
  //    calculateBMI("96", "171");
  //  }).toThrow();
  //});
});
