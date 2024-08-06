// for of
//["","",""]
//[{},{},{}]

const arr=[3,4,5,6,7,8]
for (const num of arr) {
    console.log(num);
}

const greetings="Nice_to_see_you"
for (const greet of greetings) {
    console.log('Each char is ',greet);
}

// Maps = store unique values

const map=new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United State of America")
map.set('IN',"India")
//console.log(map);

//merge for-of loop and map
for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// it is not applicable for object only for maps
/*const myObject={
    'game1':'NFS',
   'game2':'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}*/

