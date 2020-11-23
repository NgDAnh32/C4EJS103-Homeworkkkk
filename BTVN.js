// câu 1:
let dresser = ["socks", "shirts","pants"]
console.log(dresser[1])
// câu 2:
let odds = [1 , 3, 5, 7,9]
let tong = (accumulator, currentValue) => accumulator + currentValue;
console.log(odds.reduce(tong)); 
// câu 3:
var firstName = "Neil";
var middleName = "deGrasse";
var lastName = "Tyson";
var Scientist = [firstName,middleName,lastName];
console.log(Scientist)
// câu 4:
let people = ["Teddy","Cathy","Bobby"]
people[1]="Petter"
// câu 5:
people.push("Barry");
// câu 6:
people.unshift("Alice")
// câu 7:
people.splice(3,0,"John","James");
// câu 8:
people[4]=["Jame",27];
// câu 9:
people.splice(2,1);
people.splice(3,1);
// câu 10:
let rand = people[Math.floor(Math.random() * people.length)];
// câu 11:
