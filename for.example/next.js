//? 1.forEach metodu
// const countries = ['Azerbaijan','Turkey','Italy','Russia','Georgia','Kazagistan']
// countries.forEach((data) => {
//     return data
// })
// console.log(countries);

//? 2.map methodu

// const countries = ['Azerbaijan','Turkey','Italy','Russia','Georgia','Kazagistan']
// const datas = countries.map(data => data.toLocaleUpperCase())
// console.log(datas);


//? 3. filter methodu

// const countries = ['Azerbaijan','Turkey','Italy','Russia','Georgia','Kazagistan']

// const add = countries.filter((data)=> data.includes('i'))
// console.log(add);

// const obj = [
//     {
//         id: 1,
//         name: 'Sedreddin',
//         age: 25,
//     },
//     {
//         id: 2,
//         name: 'Ferid',
//         age: 23,
//     },
//     {
//         id: 3,
//         name: 'Orxan',
//         age: 23,
//     }
// ]

// const add = obj.filter(data => data.age === 23)
// console.log(add);


// ? 4. Every methodu

// const nums = [11,2,4,88,5,70]
// const add = nums.every(data => data >= 2)
// console.log(add);

// const countries = ['Azerbaijan','Algeria','Albania','Argentina','Abxaziya','Aelarus']

// const add = countries.every(function(Ad){
//     return Ad.startsWith('A')
// })
// console.log(add);


// ? 5. some methodu

// const nums = [1,2,3,4,5,6,7]
// const add = nums.some((data) => data >2)
// console.log(add);


// ? 6. find methodu

// const obj = [
//     {
//         id: 1,
//         name: 'Sedreddin',
//         age: 25,
//     },
//     {
//         id: 2,
//         name: 'Ferid',
//         age: 23,
//     },
//     {
//         id: 3,
//         name: 'Orxan',
//         age: 23,
//     }
// ]

// const add = obj.find((data) => data.name === 'Ferid')
// console.log(add);

// const nums = [1,6,3,8,9,10]
// const add = nums.find(data => data > 8)
// console.log(add);



// ? 7 findIndex

// const obj = [
//     {
//         id: 1,
//         name: 'Sedreddin',
//         age: 25,
//     },
//     {
//         id: 2,
//         name: 'Ferid',
//         age: 23,
//     },
//     {
//         id: 3,
//         name: 'Orxan',
//         age: 23,
//     }
// ]

// const add = obj.findIndex((data) => data.name === 'Orxan')
// console.log(add);

//? 8. Sort Methodu
// const nums = [1,20,4,40,80,13,1.7]
// const add = nums.sort((a,b)=>{
//     return b-a
// })
// console.log(add);

// const obj = [
//     {
//         id: 1,
//         name: 'Sedreddin',
//         age: 25,
//     },
//     {
//         id: 2,
//         name: 'Ferid',
//         age: 23,
//     },
//     {
//         id: 3,
//         name: 'Orxan',
//         age: 23,
//     }
// ]

// const add = obj.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(add);


// ! Stringin methodlari.

// ? 1. charAt Methodu.

// const names = 'My name is Sedreddin'
// const add = names.charAt(8)
// console.log(add);

// ? 2. concat Methodu.

// const name = 'Sedreddin'
// const surname = 'Ezizov'
// const sum = name.concat(" ",surname)
// console.log(sum);

// ? 3. indexOf methodu

// const names = 'My name is Sedreddin'
// const add = names.indexOf(a)
// console.log(add);

// ? 4. lastIndexOf methodu

// const names = 'My name is Sedreddin'
// const add = names.lastIndexOf('i')
// console.log(add);

// ? 5. ToUpperCase methodu
// ? 6. ToLowerCase methodu
// ? 7. Trim methodu

// const names = '     My name is Sedreddin'
// console.log(names.trim());

// ? 8. slice methodu
// const names = 'My name is Sedreddin'

// console.log(names.slice(11,20));

// ? 9. substring methodu
// ? 10. replace methodu

// const names = 'My name is Sedreddin'
// const add = names.replace("Sedreddin","Ferid")
// console.log(add);

// ? 11. split methodu
// const names = 'My name is Sedreddin'
// console.log(names.split(","));

// ! 12. valueOf nedir sorusmaq

// ? 13. startsWith methodu

// const names = 'My name is Sedreddin'
// console.log(names.startsWith("my"));

// ? 14. endsWith methodu

// const names = 'My name is Sedreddin'
// console.log(names.endsWith("din"));




//todo code wars....................................................................................

// const person = {
//      name: "Sedreddin",
//      surname: "Ezizov",
//      age: "25",
//      isMarried: false,
//      skills: [
//           'html',
//           'css',
//           'javascript',
//           'bootstrap'
//      ],
//      nam: {
//           nan: 'add',
//           nam: 'yad',
//      },

//      getfullname: function(){
//           return `${this.name} ${this.surname}`
//      }
// }

// console.log(person.getfullname());

// const allNasr = Object.assign({}, person)
// console.log(allNasr);
// allNasr.name="Ferid"
// console.log(allNasr);

// console.log(Object.keys(allNasr));
// console.log(Object.values(allNasr));

// for(let i = 0; i<= 50; i++){
//      if(i == 30){
//           continue
//      }
//      console.log(i);
// }

//Callback

