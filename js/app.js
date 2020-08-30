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


//11
function object(arr, values) {
    let i = 0;
    let obj = {}

    if (values === undefined) {
        arr.forEach((elem)=> {
         obj[elem[0]] = elem[1]
        })
        return obj
    }

    arr.forEach((elem) => {
        obj[elem] = values[i]
        i++;
    })
        return obj
}

console.log(object([['moe', 30], ['larry', 40], ['curly', 50]]));
console.log(object(['moe', 'larry', 'curly'], [30, 40, 50]));

//12
function delay(fn, timeout) {
    setTimeout(() =>{
        fn()
    }, timeout)
}
delay(() => {console.log('timeout')}, 1000)

//13 
function defer(fn) {
    setTimeout(fn, 0)
}

defer(function(){ console.log('Defer') });


//14
function isFinite (num) {
    if (num === Infinity) {
        console.log('Бесконечность')
    } else if (num === -Infinity) {
        console.log('-Бесконечность')
    }
    console.log ('Нормальное число')
}

isFinite (-1000)


//15

function isNull (num) {
    if (num === null) {
        return true
    }
    return false
}
console.log(isNull(10))

//16

function zip(arr1, arr2 , arr3) {
    let array = [];
    for (let i = 0; i < arr1.length; i++ ) {
        array.push([arr1[i], arr2[i], arr3[i]]);
    }
    return array
}

console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));

//17

function unzip ([arr1, arr2 , arr3]) {
    let array = [];
    
    for (let i = 0; i < arr1.length; i++) {
        array.push( [arr1[i], arr2[i], arr3[i]] )
    }
    return array

}

console.log(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]));


//18
function shuffle (arr) {
    for( let i = 0; i < arr.length; i++){
        let num = getRandomInt(1, arr.length - 1)

        let a = arr[num - 1]
        let b = arr[num + 1]

        arr[num - 1] = b;
        arr[num + 1] = a


    }
    return arr

}

console.log(shuffle([1, 2, 3, 4, 5, 6]));
