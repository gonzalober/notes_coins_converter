// FLOAT TO POUND
const floatToPound = (amount, notes) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= notes[0]) {
      let left = amount - notes[0];
      return [notes[0]].concat(floatToPound(left, notes));
    } else {
      notes.shift();
      return floatToPound(amount, notes);
    }
  }
};
// FLOAT TO COIN
const floatCoins = (amount, array) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= array[0]) {
      let left = amount - array[0];
      //console.log("LEFT--->", left);
      return [array[0]].concat(floatCoins(left, array));
    } else {
      array.shift();
      return floatCoins(amount, array);
    }
  }
};

const converter = () => {
  const myFloat = document.getElementById("uservalue").value;
  console.log(myFloat);
  if (isNaN(myFloat) === true) return "must be an integer or float input";
  let coins = [50, 20, 10, 5, 2, 1];
  let pounds = [50, 20, 10, 5, 1];
  let arrStr = myFloat.toString().split(".");
  let penceNumber = parseInt(arrStr[1]);
  let poundNumber = parseInt(arrStr[0]);
  if (Number.isInteger(penceNumber)) {
    let poundArray = floatToPound(poundNumber, pounds);
    //console.log(floatToPound(poundNumber, pounds));
    let poundResult = [];
    for (let i = 0; i < poundArray.length; i++) {
      poundResult.push(`£${poundArray[i]}`);
    }
    let penceArray = floatCoins(penceNumber, coins);
    let penceResult = [];
    for (let i = 0; i < penceArray.length; i++) {
      penceResult.push(`${penceArray[i]}p`);
    }
    showResult(poundResult.concat(penceResult));
  } else {
    let poundArray = floatToPound(poundNumber, pounds);
    let poundResult = [];
    for (let i = 0; i < poundArray.length; i++) {
      poundResult.push(`£${poundArray[i]}`);
    }
    showResult(poundResult);
  }
};

const showResult = (arr) => {
  let html = "";
  arr.map((x) => (html += `${x}<br/>`));
  console.log(html);
  document.getElementById("results").innerHTML = html;
};

//console.log(converter(120));

//module.exports = converter;
