// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   for (const key in me) {
//     const value = Array.isArray(me[key]) ? me[key].join(key === "friends" ? "+" : ",") : me[key];
//     console.log(`${key}: ${value}`);
//   }

//   function createSquareObject(n) {
//     const result = {};
//     for (let i = 1; i <= n; i++) {
//       result[i] = i * i;
//     }
//     return result;
//   }
  
//   console.log(createSquareObject(5)); 
  
//   function createSquareObject(n) {
//     const result = {};
//     for (let i = 1; i <= n; i++) {
//       result[i] = i * i;
//     }
//     return result;
//   }
  
//   console.log(createSquareObject(5)); 

//   const obj = {1: 1, 2: 4, 3: 9, 4: 16, 5: 25};
// const keysSum = Object.keys(obj).reduce((sum, key) => sum + Number(key), 0);
// const valuesSum = Object.values(obj).reduce((sum, value) => sum + value, 0);
// console.log(keysSum + valuesSum); // 65


// function createLengthObject(arr) {
//     const result = {};
//     for (const str of arr) {
//       result[str] = str.length;
//     }
//     return result;
//   }
  
//   console.log(createLengthObject(["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]));
//   const prices = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 };
// const total = Object.values(prices).reduce((sum, price) => sum + price, 0);
// console.log(total); 

// function defineObject(obj) {
//     return Object.keys(obj).every(key => typeof key === "string");
//   }
  
//   console.log(defineObject({ abc: 1, 123: 2, d: 5 })); 

//   function removeFalsyValues(obj) {
//     const result = {};
//     for (const key in obj) {
//       if (obj[key]) result[key] = obj[key];
//     }
//     return result;
//   }
  
//   console.log(removeFalsyValues({ a: false, b: 12, c: true, d: 0 })); 
//   function countOccurrences(arr) {
//     const result = {};
//     for (const num of arr) {
//       result[num] = (result[num] || 0) + 1;
//     }
//     return result;
//   }
  
//   console.log(countOccurrences([7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9]));
//   function createGroupedObject(number) {
//     const str = String(number);
//     const groups = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
//     const result = {};
  
//     let index = 0;
//     for (let i = str.length; i > 0; i -= 3) {
//       result[groups[index]] = str.slice(Math.max(0, i - 3), i);
//       index++;
//     }
//     return result;
//   }
  
//   console.log(createGroupedObject(8945472985629));

  