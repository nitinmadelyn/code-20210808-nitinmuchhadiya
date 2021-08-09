const memoizeBMI = (fn) => {
  const results = {};
  return (...args) => {
    const params = JSON.stringify(args);
    if (!results[params]) {
      results[params] = fn(...args);
    }
    return results[params];
  };
};

const calculateBMI = memoizeBMI((person) => {
  if (typeof person.WeightKg !== "number") {
    throw new TypeError(
      "Expected number for `weight`, but received: " + typeof person.WeightKg
    );
  }
  if (typeof person.HeightCm !== "number") {
    throw new TypeError(
      "Expected number for `height`, but received: " + typeof person.HeightCm
    );
  }
  const BMI = (
    person.WeightKg /
    ((person.HeightCm * person.HeightCm) / 10000)
  ).toFixed(2);
  const BMICategoryAndHealthRisk = getBMICategoryAndHealthRisk(BMI);

  return { ...person, ...BMICategoryAndHealthRisk };
});

const getBMICategoryAndHealthRisk = (BMI) => {
  let healthRisk;

  if (BMI <= 18.4)
    healthRisk = {
      BMI: BMI,
      BMICategory: "UnderWeight",
      healthRisk: "Malnutrition Risk",
    };
  else if (BMI <= 24.9)
    healthRisk = {
      BMI: BMI,
      BMICategory: "NormalWeight",
      healthRisk: "Low Risk",
    };
  else if (BMI <= 29.9)
    healthRisk = {
      BMI: BMI,
      BMICategory: "OverWeight",
      healthRisk: "Enhanced Risk",
    };
  else if (BMI <= 34.9)
    healthRisk = {
      BMI: BMI,
      BMICategory: "ModeratelyObese",
      healthRisk: "Medium Risk",
    };
  else if (BMI <= 39.9)
    healthRisk = {
      BMI: BMI,
      BMICategory: "SeverelyObese",
      healthRisk: "High Risk",
    };
  else if (BMI >= 40)
    healthRisk = {
      BMI: BMI,
      BMICategory: "VerySeverelyObese",
      healthRisk: "Very High Risk",
    };

  return healthRisk;
};

const dataForBMICalculation = (people, BMICategory) => {
  if (people.length === 0) {
    throw new Error("No data found.");
  }
  const results = { data: [], [BMICategory]: 0 };
  results.data = people.map((person) => {
    const BMIStats = calculateBMI(person);
    if (BMIStats.BMICategory === BMICategory) results[BMICategory]++;

    return BMIStats;
  });

  return results;
};

//sample data
const people = [
  { Gender: "Male", HeightCm: 171, WeightKg: 96 },
  { Gender: "Male", HeightCm: 161, WeightKg: 85 },
  { Gender: "Male", HeightCm: 180, WeightKg: 77 },
  { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  { Gender: "Female", HeightCm: 150, WeightKg: 70 },
  { Gender: "Female", HeightCm: 167, WeightKg: 82 },
];

//sample call
//dataForBMICalculation(people, "OverWeight");

module.exports = dataForBMICalculation;

module.exports.handler = async function(event, context) {
  return 'Hello World!';
};
