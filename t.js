function processOrders(orders) {
  let totalRevenue = 0;
  let successfulOrders = 0;
  let processedOrdersCount = 0;

  let consecutiveSkipped = 0;
  let totalStockFailures = 0;
  let stopMessage = "";

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (consecutiveSkipped === 3 || totalStockFailures === 3) {
      stopMessage = "System stopped due to critical failure";
      break;
    }

    processedOrdersCount++;

    if (!order.stockAvailable) {
      totalStockFailures++;
    }

    if (order.status === "valid" && order.stockAvailable) {
      totalRevenue += order.amount;
      successfulOrders++;
      consecutiveSkipped = 0;
    } else {
      consecutiveSkipped++;
    }

    if (consecutiveSkipped === 3 || totalStockFailures === 3) {
      stopMessage = "System stopped due to critical failure";
      break;
    }
  }

  let result = {
    totalRevenue: totalRevenue,
    successfulOrders: successfulOrders,
    processedOrdersCount: processedOrdersCount
  };

  if (stopMessage) {
    result.stopMessage = stopMessage;
  }

  return result;
}

const testOrders = [
  { id: 1, status: "valid", stockAvailable: true, amount: 100 },
  { id: 2, status: "valid", stockAvailable: true, amount: 200 },
  { id: 3, status: "cancelled", stockAvailable: true, amount: 50 },
  { id: 4, status: "invalid", stockAvailable: false, amount: 70 },
  { id: 5, status: "valid", stockAvailable: false, amount: 150 },
  { id: 6, status: "valid", stockAvailable: true, amount: 300 }
];

console.log(processOrders(testOrders));

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isArraySorted([1, 2, 3, 4, 5]));
console.log(isArraySorted([1, 5, 3, 4]));

function getNumbersGreaterThan(arr, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getNumbersGreaterThan([10, 25, 5, 40, 15], 18));