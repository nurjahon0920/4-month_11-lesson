//////////*-1-*//////////
/*
function getNamesWithGrade(grade, students) {
  let studentListWithGrade = students.map((student) => {
    let grade;
    if (student.percent >= 85 && student.percent <= 100) {
      grade = 5;
    } else if (student.percent >= 70 && student.percent < 85) {
      grade = 4;
    } else if (student.percent >= 60 && student.percent < 70) {
      grade = 3;
    } else {
      grade = 2;
    }
    return {
      ...student,
      grade,
    };
  });
  // return grade;
  return studentListWithGrade.filter((student) => student.grade === grd);
}
console.log(
  getNamesWithGrade(5, [
    { name: "Quincy", percent: 96 },
    { name: "Jason", percent: 84 },
    { name: "Alexis", percent: 100 },
    { name: "Sam", percent: 65 },
    { name: "Katie", percent: 90 },
    { name: "Anna", percent: 75 },
  ])
);
*/
//////////*-2-*//////////
/*
let strings = [`dog`, `chicken`, `cat`, `dog`, `chicken`, `chicken`, `rabbit`];
const count = strings.reduce((acc, el) => {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
console.log(count);
*/
//////////*-3-*//////////
/*
let numbers = [1, 2, 3, 4, 5];
let newArr = numbers.map((el) => el ** 2);
console.log(newArr);
*/
//////////*-4-*//////////
/*
let newArr = [1, -4, 12, 0, -3, 29, -150];
let count = newArr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
console.log(count);
*/
//////////*-5-*//////////
/*
let str = "George Raymond Richard Martin";
let firstLetters = str
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(firstLetters);
*/
//////////*-6-*//////////
/*
let people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
people.sort((a, b) => a.age - b.age);
let agesDifference = people[people.length - 1].age - people[0].age;
console.log(agesDifference);
*/
//////////*-7-*//////////

//////////*-8-*//////////

//////////*-9-*//////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
console.log(products.sort((a, b) => a.id - b.id));
*/
//////////*-10-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
products.sort((a, b) => a.rating - b.rating);
let findRating = products[products.length - 1].rating;
console.log(findRating);
*/
//////////*-11-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
products.sort((a, b) => a.price - b.price);
let findRating = products[0].price;
console.log(findRating);
*/
//////////*-12-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
const totalPrices = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);
console.log(totalPrices);
*/
//////////*-13-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
let names = products.map((product) => product.name);
console.log(names);
*/
//////////*-14-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

let findElementById = (products, id) => {
  return products.find((products) => products.id === id).name;
};

let idToFind = 5;
let productName = findElementById(products, idToFind);
console.log(productName);
*/
//////////*-15-*/////////
/*
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

//////////*-16-*/ ////////

//////////*-17-*/////////

//////////*-18-*/////////

//////////*-19-*/////////

//////////*-20-*/////////

//////////*-21-*/////////

//////////*-22-*/////////

//////////*-23-*/////////

//////////*-24-*/////////

//////////*-25-*/////////

/*
const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
*/
