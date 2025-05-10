// let sum=0
// let n= prompt("enter a number:")
// for(let i=1;i<=n; i++){
//     sum=sum+i;
    
// }
// console.log(sum)

// let i=0;
// do{
//     sum=sum+i
//     i++
// }while(i<=n);
// console.log('sum:', sum)

// let str="hello boss"
// let size=0
// for(let i of str){
//     console.log("i=", i)
//     size=size+1;
// }
// console.log(size)

// let student={
//     name: "adi",
//     age: 7.5,
// };
// for(let i in student){
//     console.log("i",i,"value", student[i])
// }

// let i =0
// while(i<=100){
//     if(i%2==0){
//         console.log(i);
//         i++
//     }
// }

// let gameNum=25;
// let a=prompt("guess the number:")
// while(a!=   gameNum){
//     a= prompt("guess the number:")

// }
// console.log("you guessed right")

// let arr1= [250,645,300,900,50]  
// let sum=0
// let i=0
// for(let val of arr1){
//     sum=val/10;
//     arr1[i]= arr1[i]-sum;
//     console.log(arr1[i]);
//     i++
// }
// console.log(arr1.toString())

// let comp=["bloomberg","microsoft","uber","google","IBM","netflix"]
// console.log(comp.shift())
// comp.splice(2,1,"ola")

// const vowels = (str) =>{
//     let count=0;
//     for (let val of str){
//         if(val==='a'||val==='e'||val==='i'||val==='o'||val==='u'){
//             count++;

//         }
//     }
//     return count;

// }

// let arr=[10,20,30,40]

// arr.forEach(function printVal(val){
//     console.log(val*val);
// })

let marks=[85,90,95,90,87,90,67]

let toppers= marks.filter((val) => {
    return val>90;

})
console.log(toppers)