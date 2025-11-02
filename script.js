// Ask user’s age and check if eligible to vote. If age >= 18 → “Eligible”, else → “Not eligible”

function userAge() {
    let age = prompt("Enter your age: ")

    if (age === null || isNaN(age) || age.trim() === "") {
        console.error("Please enter age properly!")
    } else {
        age = +age;
        if (age >= 18) console.log("Eligible")
        else console.log("Not Elligible")
    }
}

// userAge()

// Print multiplication table of 5.Use loop to print 5 × 1 to 5 × 10.

function tableof5() {
    console.group("Table of 5")
    for (let i = 1; i <= 10; i++) {
        console.log(`5 * ${i} = ${5 * i}`)
    }
    console.groupEnd()
}

// tableof5()

// Count how many numbers between 1 and 15 are greater than 8. Loop and count conditionally.

function numGreat8() {
    let count = 0;
    for (let i = 1; i <= 15; i++) {
        if (i > 8) count++;
    }
    console.log("Number greater than 8 between 1 and 15 are", count)
}

// numGreat8()

// Ask user for password and print access status. Hardcoded correct password. Compare with user input.
function passwordCheck() {
    let password = "ab1256";
    let userInp = prompt("Enter Password: ")

    if (userInp === null || userInp.trim() === "") {
        console.warn("Password not entered properly!")
    } else if (userInp.trim() === password) {
        console.log("Success!")
    } else {
        console.error("Wrong Password!")
    }
}

// passwordCheck()


// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

function passwordCheck() {
    let password = "ab1256";
    let attempts = 3;

    while (attempts > 0) {
        let userInp = prompt("Enter Password: ")

        if (userInp === null || userInp.trim() === "") {
            console.warn("Password not entered properly!")
        } else if (userInp.trim() === password) {
            console.log("Success!");
            break;
        } else {
            console.error("Wrong Password!");
        }
        attempts--;
    }

    if (attempts === 0) console.log("Account locked!")
}

// passwordCheck()

// Ask user for words until they type “stop”. Count how many times they typed “yes”. Loop until "stop" is typed. Count "yes".

function loopYes() {
    let userInp = "";
    let count = 0;
    while (userInp !== "stop") {
        userInp = prompt("Type 'stop' for stopping:")
        if (userInp === null) continue;
        userInp = userInp.trim().toLowerCase();
        if (userInp === "yes") count++
    }

    console.log(`User typed "yes" ${count} times`)
}

// loopYes();

// Print numbers divisible by 7 from 1 to 50. Use modulo % and loop.

function divisibleBy7() {
    for (let i = 1; i <= 50; i++) {
        if (i % 7) { }
        else console.log(i)
    }
}

// divisibleBy7()

// Sum of all odd numbers from 1 to 30. Add only odd numbers. Print final sum.

function sumOfOdd() {
    let sum = 0;
    for (let i = 1; i <= 30; i += 2) {
        sum += i
    }

    console.log(`Sum of odd numbers from 1 to 30 is ${sum}`)
}

// sumOfOdd()

// Keep asking number until user enters an even number. Use while loop. Stop only if input is even.

function loopEven() {
    while (true) {
        let userInp = prompt("Enter a even number to stop:")
        if (userInp === null) continue;
        userInp = +userInp.trim();
        if (isNaN(userInp)) continue;
        if (userInp % 2 === 0) break;
    }
}

// loopEven()

// Print numbers between two user inputs. Input start and end using prompt() → print all between.

function printRange() {
    let inp1 = prompt("Enter start number:");
    let inp2 = prompt("Enter end number:");

    if (inp1 === null || inp2 === null) {
        console.warn("Don't Cancel");
        return;
    }

    inp1 = inp1.trim();
    inp2 = inp2.trim();

    if (inp1 === "" || inp2 === "") {
        console.warn("Don't Make Empty inputs");
        return;
    }

    if (isNaN(inp1) || isNaN(inp2)) {
        console.error("One or Both of the input was not a number");
        return;
    }

    for (let i = inp1; i <= inp2; i++) {
        console.log(i)
    }
}

// printRange()

// Print only first 3 odd numbers from 1 to 20. Stop with break after 3 odd prints.

function firts3odd() {
    let count = 0;
    for (let i = 1; i <= 20; i += 2) {
        if (count === 3) break;
        console.log(i)
        count++;
    }
}

// firts3odd()

// Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

function loopPositive() {
    let count = 0;
    let pos = 0;
    while (count < 5) {
        let inp1 = prompt("Enter start number:");
        if (inp1 === null) {
            console.warn("Don't Cancel");
            continue;
        }
        inp1 = inp1.trim();
        if (inp1 === "") {
            console.warn("Don't Make Empty input");
            continue;
        }

        if (isNaN(inp1)) {
            console.warn("Input was not a number");
            continue;
        }

        inp1 = +inp1;

        if(inp1 > 0) pos++;
        count++;
    }

    console.log(`User entered ${pos} positive numbers`)
}

// loopPositive()

// ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct Else → print “Insufficient balance” Displaying ques.txt.

function atmSim() {
    let bal = 1000;
    let withdrawal = null;
    let count = 0
    while (count < 3) {
        withdrawal = prompt("Enter withdrawal amount:");
        if (withdrawal === null) {
            console.warn("Don't Cancel");
            continue;
        }
        withdrawal = withdrawal.trim();
        if (withdrawal === "") {
            console.warn("Don't Make Empty Withdrawal");
            continue;
        }

        if (isNaN(withdrawal)) {
            console.warn("Amount was not a number");
            continue;
        }

        withdrawal = +withdrawal;

        if(withdrawal <= bal) {
            bal -= withdrawal;
            console.log("User withdrawed:",withdrawal)
            console.log("Current balance:",bal)
        }else {
            console.log("Insufficient balance")
        }

        count++;
    }
}

// atmSim()