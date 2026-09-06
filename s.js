
let correctPin = "1234";
let currentBalance = 1000;
let attempts = 0;

function atmSystem(enteredPin, operation, amount = 0, newPin = "") {
  console.log("=== ATM System ===");

  
  if (attempts >= 3) {
    console.log("Error: Account is locked due to 3 incorrect PIN attempts.");
    return;
  }


  if (enteredPin !== correctPin) {
    attempts++;
    console.log(`Error: Incorrect PIN. Attempts remaining: ${3 - attempts}`);
    if (attempts >= 3) {
      console.log("Account has been locked!");
    }
    return;
  }

  attempts = 0;

  switch (operation) {
    case "withdraw":
      if (amount <= 0) {
        console.log("Error: Invalid withdrawal amount.");
      } else if (amount > currentBalance) {
        console.log("Error: Insufficient funds. Available balance: $" + currentBalance);
      } else {
        currentBalance -= amount;
        console.log(`Success: Withdrew $${amount}. New Balance: $${currentBalance}`);
      }
      break;

    case "deposit":
      if (amount <= 0) {
        console.log("Error: Deposit amount must be greater than zero.");
      } else {
        currentBalance += amount;
        console.log(`Success: Deposited $${amount}. New Balance: $${currentBalance}`);
      }
      break;

    case "balance":
      console.log(`Current Balance: $${currentBalance}`);
      break;

    case "changePin":
      if (newPin.length === 4 && !isNaN(newPin)) {
        correctPin = newPin;
        console.log("Success: PIN successfully changed.");
      } else {
        console.log("Error: New PIN must contain exactly 4 digits.");
      }
      break;

    default:
      console.log("Error: Invalid Operation Selected.");
  }
}

atmSystem("1234", "balance");
atmSystem("1234", "withdraw", 200);
atmSystem("1234", "deposit", 500);



function checkoutSystem(customerName, category, price, quantity, couponCode, paymentMethod) {
  console.log("\n=== E-Commerce Checkout Invoice ===");
  console.log(`Customer Name: ${customerName}`);

  let subtotal = price * quantity;
  console.log(`Subtotal: $${subtotal}`);

  let categoryDiscount = 0;
  if (category.toLowerCase() === "electronics") {
    categoryDiscount = subtotal * 0.10; // 10% off
  } else if (category.toLowerCase() === "clothing") {
    categoryDiscount = subtotal * 0.15; // 15% off
  }

  let couponDiscount = 0;
  if (couponCode === "SAVE10") {
    couponDiscount = 10;
  } else if (couponCode === "SAVE20") {
    couponDiscount = 20;
  }

  let paymentDiscount = 0;
  if (paymentMethod.toLowerCase() === "credit_card") {
    paymentDiscount = subtotal * 0.05; 
  }

  let totalDiscounts = categoryDiscount + couponDiscount + paymentDiscount;
  let discountedTotal = subtotal - totalDiscounts;

  if (discountedTotal < 0) {
    discountedTotal = 0;
  }

  let vat = discountedTotal * 0.14;
  let finalAmount = discountedTotal + vat;

  console.log(`Total Discounts: -$${totalDiscounts}`);
  console.log(`VAT (14%): $${vat.toFixed(2)}`);
  console.log(`Final Total: $${finalAmount.toFixed(2)}`);
}

checkoutSystem("Belal Moustafa", "Electronics", 100, 2, "SAVE10", "credit_card");



function studentPortal(studentName, attendance, midterm, finalExam, assignment, tuitionPaid) {
  console.log("\n=== University Student Portal ===");
  console.log(`Student: ${studentName}`);

  if (!tuitionPaid) {
    console.log("Error: Tuition fees are unpaid. Results are locked.");
    return;
  }

  if (attendance < 75) {
    console.log(`Status: FAILED (Low Attendance: ${attendance}%)`);
    return;
  }

  let totalScore = midterm + finalExam + assignment;
  console.log(`Total Score: ${totalScore}/100`);

  let grade = "";
  if (totalScore >= 90) grade = "A";
  else if (totalScore >= 80) grade = "B";
  else if (totalScore >= 70) grade = "C";
  else if (totalScore >= 60) grade = "D";
  else grade = "F";

  let status = totalScore >= 60 ? "PASSED" : "FAILED";
  console.log(`Grade: ${grade} | Status: ${status}`);

  if (totalScore >= 90 && attendance >= 90) {
    console.log("Congratulations! You are eligible for a Full Scholarship 🎉");
  }
}

studentPortal("Belal Moustafa", 88, 28, 48, 18, true);


function isValidParentheses(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log("\n=== LeetCode 1: Valid Parentheses ===");
console.log("s = '()' :", isValidParentheses("()"));       // true
console.log("s = '()[]{}' :", isValidParentheses("()[]{}")); // true
console.log("s = '(]' :", isValidParentheses("(]"));       // false



function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log("\n=== LeetCode 2: Find First Occurrence ===");
console.log("haystack = 'sadbutsad', needle = 'sad' -> Index:", strStr("sadbutsad", "sad")); // 0
console.log("haystack = 'leetcode', needle = 'leeto' -> Index:", strStr("leetcode", "leeto"));  // -1