// // 100 Функций из Undercore
// //console.log()
// //1






// // document.getElementById('btn-one').onclick = function(){
// //     alert(pluck(stooges, 'name'))
// // }
// // document.getElementById('btn-two').onclick = function(){
// //     alert(sample([1, 2, 3, 4, 5, 6], 3));
// //     alert(sample([1, 2, 3, 4, 5, 6]));
// // }
// // document.getElementById('btn-three').onclick = function(){
// //     alert( size( [1, 2, 3, 4, 5] ) );
// //     alert('3')
// // }

// //1
// let stooges = [{name: 'Krista', age: 20}, {name: 'Umir', age: 20}, {name: 'Mikasa', age: 20}]
// function pluck(arr, key) {
//      return arr.map(function(item) {
//        return item[key]
//       });
// }
// console.log(pluck(stooges, 'name'))



// //2
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

// function sample(arr, j = 1) {
//     let arrayFinal = []
//     for(let g = 0; g < j; g++) {

//         arrayFinal.push(arr[getRandomInt(0, arr.length)])
//     }

//     return arrayFinal
// }

// console.log(sample([1, 2, 3, 4, 5, 6], 3));
// console.log(sample([1, 2, 3, 4, 5, 6]));


// //3 
// console.log( size( [1, 2, 3, 4, 5] ) );
// console.log( size( {one: 1, two: 2, three: 3} ) );
// function size(elem) {
//     if (elem.length >= 0){
//        return elem.length
//     } else {
//         let count = 0
//         for (const key in elem) {
//             count ++
//         }
//         console.log(count)
//     }
// }

// //4 
// console.log(first([6,5,4,8,9,10], 5))

// function first(array, n = 1) {
//     let arr = [];
//     for (let i = 0; i < n; i++){
//         arr.push(array[i])
//     }
//     return arr
// }

// //5
// console.log(last([6,5,4,8,9,10], 3))
// function last(array, n) {
//     let arr = []
//     for(let i = 1; i < n+1; i++ ) {
//         arr.push( array[array.length - i]) // push или unshift 
//                                            // Смотря какой порядок нужен
//     }
//     return arr
// }

// //6 
//  function some(arr) {
//      let result = false
//      arr.forEach(function(element) {
//         if(element == true) {
//             console.log('dsdsdsds')
//             result = true
//          } 
//      });
//      return result
// }
//  console.log(some([null, 0, true, false]) )

//  // 7
//  function keys(obj) {
//     let arr = []
//     for (const key in obj) {
//         arr.push(key)
//     }
//     return arr
//  }
//  console.log( keys({one:'hey', two:'my', three: 'friend', sayHello: function() {console.log('Hello')}}) )

//  //8
//  function mapObject(obj, fn) {
//     for (const key in obj) {
//         obj[key] = fn(obj[key])

//     }
//     console.log(obj)
//  }
//  mapObject( {start: 5, end: 12}, function(val, key) {
//     return val + 5;
//   });

// //9
// function pairs(obj) {
//     let arr = []
//     for (const key in obj) {
//         arr.push([key, obj[key]])
//     }
//     return arr
// }
// console.log(pairs({one: 1, two: 2, three: 3}));

// //10
// function invert(obj) {
//     let object = {}
//     for (const key in obj) {
//         object[obj[key]] = key
//     }
//     return object
// }

// console.log(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}));


// //11
// function object(arr, values) {
//     let i = 0;
//     let obj = {}

//     if (values === undefined) {
//         arr.forEach((elem)=> {
//          obj[elem[0]] = elem[1]
//         })
//         return obj
//     }

//     arr.forEach((elem) => {
//         obj[elem] = values[i]
//         i++;
//     })
//         return obj
// }

// console.log(object([['moe', 30], ['larry', 40], ['curly', 50]]));
// console.log(object(['moe', 'larry', 'curly'], [30, 40, 50]));

// //12
// function delay(fn, timeout) {
//     setTimeout(() =>{
//         fn()
//     }, timeout)
// }
// delay(() => {console.log('timeout')}, 1000)

// //13 
// function defer(fn) {
//     setTimeout(fn, 0)
// }

// defer(function(){ console.log('Defer') });


// //14
// function isFinite (num) {
//     if (num === Infinity) {
//         console.log('Бесконечность')
//     } else if (num === -Infinity) {
//         console.log('-Бесконечность')
//     }
//     console.log ('Нормальное число')
// }

// isFinite (-1000)


// //15

// function isNull (num) {
//     if (num === null) {
//         return true
//     }
//     return false
// }
// console.log(isNull(10))

// //16

// function zip(arr1, arr2 , arr3) {
//     let array = [];
//     for (let i = 0; i < arr1.length; i++ ) {
//         array.push([arr1[i], arr2[i], arr3[i]]);
//     }
//     return array
// }

// console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));

// //17

// function unzip ([arr1, arr2 , arr3]) {
//     let array = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         array.push( [arr1[i], arr2[i], arr3[i]] )
//     }
//     return array

// }

// console.log(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]));


// //18
// function shuffle (arr) {
//     for( let i = 0; i < arr.length; i++){
//         let num = getRandomInt(1, arr.length - 1)

//         let a = arr[num - 1]
//         let b = arr[num + 1]

//         arr[num - 1] = b;
//         arr[num + 1] = a


//     }
//     return arr

// }

// console.log(shuffle([1, 2, 3, 4, 5, 6]));


// //19
// function sample (arr, num = 1) {

//     let array = []

//     for (let i = 0;  i < num; i++) {
//         let elem = getRandomInt(0, arr.length)
//         array.push(arr[elem])
//     }
//     return array
// }

// console.log(sample([1, 2, 3, 4, 5, 6]));
// console.log(sample([1, 2, 3, 4, 5, 6], 3));


// //20
// function initial (arr, num) {
    
//     for ( let i = 0; i < num; i++) {
//         arr.pop()
//     }
//     return arr
// }

// console.log(initial([5, 4, 3, 2, 1]));
// console.log(initial([5, 4, 3, 2, 1], 3));

// //21

// function filter (arr, func) {
//     let array = []
//     for ( let i = 0; i < arr.length; i++) {
//         if(func(arr[i])) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }


// console.log(filter( [1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }))

// //22
// let listOfPlays = [

//     {title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1612},
//     {title: "Love of Life", author: "Jack London", year: 1905},
//     {title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1966}

// ]
// function where (arr, filter) {

//     let array = [];
//     for (const key in filter) {
//         console.log(filter[key])

//         for( let i = 0; i < arr.length; i++) {
            
//             if (arr[i][key] == filter[key] ) {
//                 array.push(arr[i])
//             }



//         }
//     }
//     console.log(array)
    
//     for( let i = 0; i < array.length; i++) {

//        let elem = array[i]
//        let idex = i

//         for (let j = 0; j < array.length; j++ ) {
        
//             if(j == idex) {

//                 console.log('break')
//                 break

//             }
//             if(array[j] == elem) {
//                delete array[j];
//             }

//         }
//     }
//     console.log(array)

// }

// where(listOfPlays, {author: "Shakespeare", year: 1611});

// //23
// function compare(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }

// function invoke (arr, sort) {
//     if (sort == 'sort') {
//         arr.forEach((elem) => {
//             elem.sort(compare);
//             alert(elem);
//         });
//         return arr
//     }
// }

// //24

// function sample (arr, num = 1) {
//     let array = []
//     for(let i = 0; i < num; i++){
//         array.push(arr[getRandomInt(0, arr.length)])
//     }
//     console.log('array')
//     console.log(array)

// }
// sample([1, 2, 3, 4, 5, 6], 3)


// //25

// function without(arr, ...num) {
//     arr.forEach((element, int) => {
//         num.forEach((elem) => {
//             if(element == elem) {
//                 console.log('----------------')
//                 // arr.splice(int, 1)
//                 delete arr[int]
//             }
//         })
//     })
//     let array = []
//     arr.forEach((elem) => {
//         array.push(elem)
//     })
//     console.log(array)
// }

// without([1, 2, 1, 0, 3, 1, 4], 0, 1);






// // // Промисы \\\\

// // console.log('request data...')

// // // setTimeout(() => {
// // //     console.log('prepairing data...')

// // //     const backendData = {
// // //         server: 'avs',
// // //         port: 2000,
// // //         status: 'working'
// // //     }

// // //     
    

// // // }, 2000)



// // const p = new Promise(function(resolve, reject) {

// //     setTimeout(() => {
// //         console.log('prepairing data...')
// //         const backendData = {
// //             server: 'avs',
// //             port: 2000,
// //             status: 'working'
// //         }
// //         resolve(backendData) // передаем параметр 
// //     }, 2000)

// // })

// // p.then((data) => {
// //     return new Promise((resolve, reject) => {

// //         setTimeout(() => {
// //             data.modified = true
// //             resolve(data)
// //         }, 2000)

// //     })

    
// // })

// // .then((ClientData) => {
// //     console.log('data receives',  ClientData)
// //     ClientData.fromprom = true;
// //     return ClientData

// // }).then(data => {
// //     console.log('data modified',  data)
// // })
// // .catch(err => console.error('error', err))
// // .finally(() => {
// //     console.log('finally')
// // })


// // const sleep = ms => {
// //     return new Promise(resolve => {
// //         setTimeout(() => resolve(ms), ms)
// //     })
// // }

// // sleep(6000).then(sec => {
// //     console.log('After', sec)
// // })

// // Promise.all([sleep(8000), sleep(12000)]) // Ждем все промисы
// //     .then(() => {
// //         console.log('All full')
// //     })

// // Promise.race([sleep(8000), sleep(12000)]) // Не ждём все а только 1ый
// //     .then(() => {
// //         console.log('race full')
// //     })


// //Гибкая настройка объектов


// const person = Object.create(
//     {
//         calculateAge() {
//             console.log(new Date().getFullYear() - this.birthYear)
//         }
//     }, //Прототип объекта его свойства или методы
//     {
//         name: { // Поля можно настраивать 
//                 // Изменять видимость
//                 // Изменять возможность редактирования
//                 // Изменять возможность удаления
//             value: 'Haruki Sudzumia'
//         },
//         birthYear: {
//             value: '2004'
//         },
//         status: {
//             value: 'God'
//         },

//         stringFn: {
//             get() {
//                 // Тут можно динамически вычислять что угодно или играть код менять цвет фона или что угодно
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value) {
//                 document.body.style.background = 'red'
//                 console.log('set sting fn', value)
//                 // Вслучает поппытки изменения значения срабатывает код 
//             }
//         }
//     }
// )

// console.log(person)





class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Squere extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = options.size + 'px'
        this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Squere({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Squere({
    selector: '#box2',
    size: 150,
    color: 'blue',
})

class Circle extends Squere {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = options.radius +'%'
        
    }
}

let circle = new Circle({
    selector: '#circle',
    size: 130,
    color: 'green',
    radius: 50
})

const delay = ms => {
    return new Promise(r => {
        setTimeout(() => {
            r()
        }, ms)
    })
}



let url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchTodos () {
    console.log('fetch start')
    return  delay(2000)
    .then(() => fetch(url))
    .then(responce => responce.json())
}

fetchTodos()
    .then( data => {
    console.log('data:', data)
})
.catch (e => console.error(e))