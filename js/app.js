// 100 Функций из Undercore
//console.log()
//1






// document.getElementById('btn-one').onclick = function(){
//     alert(pluck(stooges, 'name'))
// }
// document.getElementById('btn-two').onclick = function(){
//     alert(sample([1, 2, 3, 4, 5, 6], 3));
//     alert(sample([1, 2, 3, 4, 5, 6]));
// }
// document.getElementById('btn-three').onclick = function(){
//     alert( size( [1, 2, 3, 4, 5] ) );
//     alert('3')
// }

//1
let stooges = [{name: 'Krista', age: 20}, {name: 'Umir', age: 20}, {name: 'Mikasa', age: 20}]
function pluck(arr, key) {
     return arr.map(function(item) {
       return item[key]
      });
}
console.log(pluck(stooges, 'name'))



//2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sample(arr, j = 1) {
    let arrayFinal = []
    for(let g = 0; g < j; g++) {

        arrayFinal.push(arr[getRandomInt(0, arr.length)])
    }

    return arrayFinal
}

console.log(sample([1, 2, 3, 4, 5, 6], 3));
console.log(sample([1, 2, 3, 4, 5, 6]));


//3 
console.log( size( [1, 2, 3, 4, 5] ) );
console.log( size( {one: 1, two: 2, three: 3} ) );
function size(elem) {
    if (elem.length >= 0){
       return elem.length
    } else {
        let count = 0
        for (const key in elem) {
            count ++
        }
        console.log(count)
    }
}

//4 
console.log(first([6,5,4,8,9,10], 5))

function first(array, n = 1) {
    let arr = [];
    for (let i = 0; i < n; i++){
        arr.push(array[i])
    }
    return arr
}

//5
console.log(last([6,5,4,8,9,10], 3))
function last(array, n) {
    let arr = []
    for(let i = 1; i < n+1; i++ ) {
        arr.push( array[array.length - i]) // push или unshift 
                                           // Смотря какой порядок нужен
    }
    return arr
}

//6 
 function some(arr) {
     let result = false
     arr.forEach(function(element) {
        if(element == true) {
            console.log('dsdsdsds')
            result = true
         } 
     });
     return result
}
 console.log(some([null, 0, true, false]) )

 // 7
 function keys(obj) {
    let arr = []
    for (const key in obj) {
        arr.push(key)
    }
    return arr
 }
 console.log( keys({one:'hey', two:'my', three: 'friend', sayHello: function() {console.log('Hello')}}) )

 //8
 function mapObject(obj, fn) {
    for (const key in obj) {
        obj[key] = fn(obj[key])

    }
    console.log(obj)
 }
 mapObject( {start: 5, end: 12}, function(val, key) {
    return val + 5;
  });

//9
function pairs(obj) {
    let arr = []
    for (const key in obj) {
        arr.push([key, obj[key]])
    }
    return arr
}
console.log(pairs({one: 1, two: 2, three: 3}));

//10
function invert(obj) {
    let object = {}
    for (const key in obj) {
        object[obj[key]] = key
    }
    return object
}

console.log(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}));