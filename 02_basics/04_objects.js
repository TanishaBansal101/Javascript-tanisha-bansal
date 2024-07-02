//Singleton object
//const tinderUser = new Object()

//Non-Singleton object
const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Tanisha"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "tanisha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tanisha",
            lastname: "Bansal"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1 ,obj2}
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('LoggedIn'));

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "tanisha"
}

//course.courseInstructor

//const {courseInstructor} = course
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//{
//  "name": "tanisha",
//    "coursename": "javasvript",
//  "price": "free"
//}

[
    {},
    {},
    {}
]