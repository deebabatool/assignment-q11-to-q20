//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//name array
let guestArray:string[] = ["jazba","rubab","samina"];

// can not make dinner
let canNotAttend:string = "rubab";
//invite new guest
let newGuest :string = "deeba";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
//console.log(guestArray);


//send message
//guestArray.map((items)=> console.log(`Hello, ${items} you are invited to dinner`))

//console.log("wellcome all we found a bigger dinner table!");

guestArray.unshift("tehmina");
//console.log(guestArray);

let middleGuest:string = "maryum";
let middleIndex = guestArray.length/2;

guestArray.splice(middleIndex,0,middleGuest);

//console.log(guestArray);

guestArray.push("dua");
//console.log(guestArray);

guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`))