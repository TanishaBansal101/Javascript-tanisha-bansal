/*const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
}
for (const key in myObject) {
    console.log(key);
}*/

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
}
for (const key in myObject) {
    //console.log(myObject[key]);
    console.log(key , 'shortcut is for',myObject[key]);
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

// for-in loop is not used for map
const map=new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United State of America")
map.set('IN',"India")

for (const key in map) {
    console.log(key);
}