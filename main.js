import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "NumberOne",
        type: "number",
        message: "Enter your First Number:",
    },
    {
        name: "NumberTwo",
        type: "number",
        message: "Enter your Second Number:",
    },
    {
        name: "operator",
        type: "list",
        choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)"],
        message: "Select your Operator:"
    }
]);
const { NumberOne, NumberTwo, operator } = answers;
if (NumberOne && NumberTwo && operator) {
    let result = 0;
    if (operator == "Addition(+)") {
        result = NumberOne + NumberTwo;
    }
    else if (operator == "Subtraction(-)") {
        result = NumberOne - NumberTwo;
    }
    else if (operator == "Multiplication(*)") {
        result = NumberOne * NumberTwo;
    }
    else if (operator == "Division(/)") {
        result = NumberOne / NumberTwo;
    }
    console.log("Your Result is :", result);
}
else {
    console.log("Kindly Enter the valid Input!");
}
