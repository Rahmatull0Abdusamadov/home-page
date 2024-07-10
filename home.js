// lesson3 
// function test(number){
//     if(number == 1){
//         return 1
//     }
//     else {
//         return 0
//     }
// }
// console.log(test(1));
// task2
// function test(a,b){
//     return x=-b/a;
// }
// console.log(4,5);

// task3
// function test(n) {
//     let a = 1;
//     let b = 1; 
//     let c=0;
//     for (let i = 3; i<=n; i++) {
//      a=a+b;
//      a=b 
//      b=c; 
//     }
//     return c;
// }
// console.log(test(5));

// // task4
// function test(a){
//  let cnt=1;
//  for(let i=0;i<=a;i++){
//     cnt*=2;
//     if(a == cnt){
//         return true;
//     }
//  }
//  return false;
// }
// console.log(test(16));

// task5
// function test(a){
//    if(a/10>a%10)return true;
//    else{
//     return false
//    }  
// }
// console.log(test(72));

    // lesson 4
      // task1
    // function test(a) {
    //     for(let i=2;i<a;i++){
    //         if(a%i==0) return false
    //     }
    //     let cnt=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)) cnt++;
    //     let ans=0;
    //     for(let i=a;i>0;i=Math.floor(i/10)){
    //         ans+=(i%10)*Math.pow(10,cnt);cnt--;
    //     }
    //     ans/=10
    //     return ans==a;
    // }
    // console.log(test(131));
    // task3
    // function test(a){
    //  let cnt=1;
    //  for(let i=0;i<=a;i++){
    //     cnt*=2;
    //     if(a == cnt){
    //         return true;
    //     }
    //  }
    //  return false;
    // }
    // console.log(test(16 ));

    // task4
    //     function sumOfPrime(a, b) {
    //         let  sum = a + b;
    //   for(let i=2;i<sum;i++){
    //     if(sum%i==0)return false;
    //   }
    //   return true;
    //     }
    //   console.log(sumOfPrime(5,7));

    // task5
        // function test(n) {
        //     let a = 0;
        //     let b = 1; 
        //     let c=0;
        //     for (let i = 2; i<=n; i++) {
        //     c=a+b;
        //     a=b 
        //     b=c; 
        //     }
        //     return c;
        // }
        // console.log(test(5));

        // task6    
        // function test(a,b){
        //     return a**b;
        // }
        // console.log(test(10,10));
    
        // task 7
    // function test(a){
    //    if(a/10>a%10)return true;
    //    else{
    //     return false
    //    }  
    // }
    // console.log(test(27));

    // task9
//   function test(a){
//     let sum=0;
//     for(let i=1;i<=a;i++){
//         sum+=(a-i+1)*(a-i+1)
//     }
//     return sum
//   }
//   console.log(test(4));






// home work5
// task1
// function test(a,b,c,d){
//     return Math.floor((c*100+d)/(a*100+b))
// }
// console.log(test(1,70,3,80));
// task2
// function test(a,b,c){
//     if(a<b && b<c)||(a>b && b>c){
//         a*=a;
//         b*=b;
//         c*=c;
//     }
//     else{
//         a=-a;
//         b=-b
//         c=-c
//     }
//     return a,b,c
// }
// console.log(test(3,6,9));
// task3
//  function test(a){
//     let a1 =a+1;
//     let a2 =a-1;
//   return "next:" + a1  + " prev:" + a2;
//  }console.log(test(3)); 

// task4
// function test(a){
//     if(a>0)a-=2;
//     else if(a<0)a+=1;
//      else if(a==0)a+=10;
//   return a;
// }
// console.log(test(3));

// task 6
// function sag(a) {
// if (a<=1) {
//         return false; }
//     let sum=0;
//     for (let i=1; i<=a/2; i++) {
//         if (a%i == 0) {
//             sum+=i;
//         }
//     }
//     return sum==a;
//  }
//  console.log(sag(28));       
// console.log(sag(32));  
// console.log(sag(496));

// TASK 5
// function test(a,b){
//     let x=1;
//     for (let i=1;i<Math.min(a,b);i++){
//             if(a%i==0 && b%i==0) x=i;
//     }
//     return a*b/x     
// }console.log(test(4,6));
// console.log(test(3,8));
// console.log(test(2,6));

// Task 7
// function test(a){
// for( let i=a;i>0;i=Math.floor(i/10)){
// let x=i%10;
// for(let j=Math.floor(j/10);j>0;i=Math.floor(j/10)){
//   if(j%10==x)return false;
// }
// }
// return true;
// }
// console.log(test(1234));



// task9
// function test(a){
// let cnt=1;
// while(a>1){
//     if(a%2==1) a=a*3+1;
//     else a=a/2;
//     cnt++;
// }
// return cnt;
// }
// console.log(test(23));

// task10
// function task(a){
//     let fact=1;
//       for(let i=1;i<=a;i++)fact*=i;
//       let sum=0,cnt=0;
//       for(let i=fact;i>0;i=Math.floor(i/10))cnt++;
//       for(let i=fact;i>0;i=Math.floor(i/10)){
//         sum+=(i%10)*Math.pow(10,cnt);
//         cnt--;
//       }
//       sum/=10;
//       return sum;
//       }
//       console.log(task(4));

// task8


     
