// OVERALL
//  câu 1:
// Đối tượng Array trong JavaScript là đối tượng toàn cục được dùng để xây dựng nên các mảng; là những đối tượng cấp cao và giống một dạng danh sách.
// câu 2:
// Object là một danh sách các item, mỗi item là một cặp name-value , trong đó value có thể là: các kiểu dữ liệu cơ bản, function, hay cũng có thể là một object khác (kiểu dữ liệu phức hợp).
// câu 3:
// Mảng (Arrays) : thứ tự dữ liệu là quan trọng nhất 
// đối tượng (Object) : tiêu đề thông tin là quan trọng nhất 
// EXEMPLE :
// var a = [],            // these are the same
//     b = new Array(),   // a and b are arrays with length 0

//     c = ['foo', 'bar'],           // these are the same
//     d = new Array('foo', 'bar'),  // c and d are arrays with 2 strings

//     // these are different:
//     e = [3]             // e.length == 1, e[0] == 3
//     f = new Array(3),   // f.length == 3, f[0] == undefined

// ;
// câu 5:
// property là 1 thuộc tính của Object 
// câu 6:
// method là 1 phương thức của Object




// FUNCTION WITH ARRAY: 
// câu 1:
let is_arr = function(arr){
    console.log(Array.isArray(arr))
}
// câu 2:
let clone_arr = function(arr){
    return arr.slice(0)
}
//câu 3:
let first =  function(arr, n) {
    if (arr == null) 
    return void 0;
  if (n == null) 
    return arr[0];
  if (n < 0)
    return [];
  return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// câu 4:
let last = function(arr,n){
    if (arr == null)
        return void 0 ; 
    if (n == null)
        return arr[arr.length -1];
        return arr.slice(Math.max(arr.length-n,0));
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
// câu 5:
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()) 
console.log(myColor.join())
console.log(myColor.join('+'))
// câu 6:
let num=window.prompt();
let str = num.toString();
let result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));

// câu 7:
let word = prompt();
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let KetQua = [];
for (let x=0 ; x < word.length; x++){
  if (UPPER.indexOf(word[x])!== -1)
  {
    KetQua.push(word[x].toLowerCase());
  }
  else if (LOWER.indexOf(word[x] !== -1))
  {
    KetQua.push(word[x].toUpperCase());
  }
  else 
  {
    KetQua.push(word[x]);
  }
}
console.log(KetQua.join(''));
// câu 8:
let so = [ 1 ,2 ,3, 4, 5 ],
s = 0 ,
p = 1,
i;
for (let i=0 ; i<so.length ; i++)
{
  s += so[i];
  p *= so[i];
}
console.log ('sum : ' + s + 'product : '+ p )



// FUNCTION WITH OBJECT:
// câu 1:
let student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };
// câu 2:
console.log(student);
delete student.rollno ;
console.log(student);
// câu 3:

// câu 4:
var library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];
for (i=0 ; i< library.length ; i++)
{
  let Book= "'" + library[i].title + "'" + " by "+ library[i].author ;
  if (library[i].readingStatus)
  {
    console.log("already read " + Book )
  }
  else 
  {
    console.log("you haven't finished reading yet" + Book )
  }
}
// câu 5:
function my_Clock() 
{
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();
  