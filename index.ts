#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber:number =  Math.floor(10000 +Math.random()* 90000)
// console.log(randomNumber);

let mybalance : number=0
let answer =await inquirer.prompt(
    [
        {
            name:"students",
             type:"input",
            message:"Enter your student name:",
            validate:function(value){
            if (value .trim() !== ""){
                return true;
            }
            return "Please enter a non empty value.";
         }
        },
        {
           name:"courses",
           type:"list",
           message:"Select the course to enroll",
           choices:["MSoffice","HTML","Javascript","Typescript","python"]
        }
    ])
const tutionfee :{[key:string]:number}={
    "MSoffice":2000,
    "HTML":4000,
    "Javascript":5000,
    "Typescript":6000,
    "python":7000
}
console.log(`\ntution fees:${tutionfee[answer.courses]}/-\n`);
console.log(`Balance:${mybalance}\n`);

let paymentType=await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment method",
        choices:["Banktransfer","Easypaisa","jazzcash"]
    
    },
    {
        name:"amount",
        type:"input",
        messahe:"Transfer money",
        validate:function(value){
            if (value.trim()!==""){
                return true;
            }
            return"Please enter a non empty value.";
        }
    }
]);
console.log(`\n you select payment method ${paymentType.payment}\n`);
const tutionfees=tutionfee[answer.courses];
const paymentAmount=parseFloat(paymentType.amount);
 if (tutionfees ===paymentAmount){
console.log(`congratulation, you have suceesfully enrolled in ${answer.courses}.\n`);
 let ans=await inquirer.prompt(
    [{
        name:"select",
        type:"list",
        message:"what would you like to do next?",
        choices:["view status","exit"]
    }

    ])
    if (ans.select==="view status"){
        console.log("\n******Status*****");
        console.log(`student name: ${answer.student}`);
        console.log(`studentID:${randomNumber}`);
        console.log(`course:${answer.courses}`);
        console.log(`Tution fees paid:${paymentAmount}`);
        console.log(`Balance:${mybalance+=paymentAmount}`);
        
    }else{
        console.log("\n Exiting student managment system");
        
    }
 }else{
    console.log("invalid amount due to course \n");
    
 }


