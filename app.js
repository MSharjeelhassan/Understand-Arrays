// var age = 12;

// if(age ===21){console.log("Condition true")}

// == , === equal to
// != , !== not equal to
// > greater than
// < less than
// >= grater than equal to
// <=less than equal to
// var student=false;

// if(age>=18){console.log("Allow")} else if(student==true){console.log("Allow on student card")} else{console.log("Nikal beta")}
// if(age>=18){console.log ("Allow")} if



// var age = 8;
// var cnic = true;
// var studentCard = true;

// if(age >=18)if (cnic==true){console.log("Allow")};

//  if (age >=18 && cnic==true && studentCard==true){console.log("Allow this person")}else{console.log("Bhag sale")}

// if(age>=18 || cnic==true || studentCard==true){console.log("Chal beta khamoshi sa nikal jaa")}



// var age = prompt("Enter age");
// var cnic = prompt("Enter 5 digit number")
// var studentCard = true;

// if (age >= 18 && cnic.length == 5) {
//     console.log("Mubarak ho chalo jao beta")
// } else { 
//     console.log("Time waste mat karo ghr jao r Sahee NIC ya age dalo") 
// }




var arr = ["asad", "BAQAR", "C","Rahman"]
// console.log(arr)

// arr [3]="saad"

// console.log (arr)

// arr [8]="Rahman Daket"

// console.log (arr)


// arr.push("Last")

// console.log(arr)
// console.log(arr[8])


// push end main add karta hy
// pop end main remove karta hy
// shift start main remove karta hy
// unshift start main zero index sa pehlay kuch bhi add karta hy
// slice jo hy wo aik chunk ya selected part show karta hy console main baqi jo array value hain wo show nai karta
// slice ka format hy likhne ka jo next steps main likhonga, jo last index show karna hy us sa next index ki value likhni hoti hy tb jakar wo apka bataya howa last index show kareyga
// splice main index add aur remove kar saktey hain, r splice ko likhne ka format hy aik, start main ap index ki starting batatey hain r comma ka bad jitne values remove karni hain wo likh lain again after comma ap jo cheez add karna chahtry hain wo likh lain


// arr.pop();
// console.log(arr)
// last main jo C tha wo remove kardia pop na

// arr.shift()
// console.log(arr)
// dakhen start main jo asad tha usey remove kardia


// arr.unshift("Sir basit is our boss")
// console.log(arr)

// unshift zero index sa pehlay add kardayga

// var a = arr.slice(0,3)
// console.log(a)



console.log(arr)

var a=arr.splice(2,0,"1","2","3","4")
console.log(a)
console.log(arr)