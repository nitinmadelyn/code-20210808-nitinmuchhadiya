# code-20210808-nitinmuchhadiya

## Steps to install, run test cases

  `npm install`

  `npm run test`

## api endpoint

  `https://xov6q5jdt8.execute-api.ap-south-1.amazonaws.com`

## sample request using curl

  `curl --location --request POST 'https://xov6q5jdt8.execute-api.ap-south-1.amazonaws.com' --header 'Content-Type: application/json' --data-raw '{
    "data": [
        {
            "Gender": "Male",
            "HeightCm": 151,
            "WeightKg": 63,
            "BMI": "BMI = 27.63kg/m2 - Enhanced risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 163,
            "WeightKg": 62,
            "BMI": "BMI = 23.34kg/m2 - Low risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 164,
            "WeightKg": 70,
            "BMI": "BMI = 26.03kg/m2 - Enhanced risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 168,
            "WeightKg": 79,
            "BMI": "BMI = 27.99kg/m2 - Enhanced risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 159,
            "WeightKg": 71,
            "BMI": "BMI = 28.08kg/m2 - Enhanced risk"
        }
    ],
    "totalCountOf": "OverWeight"
}'`

## npm libraries used

  1. jest

## deployment
  - Code has been deployed on aws server using AWS Code Pipeline on Lambda Function + API Gateway
