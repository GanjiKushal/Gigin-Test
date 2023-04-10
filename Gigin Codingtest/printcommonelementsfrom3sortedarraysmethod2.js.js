let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
let a=0
let b=0
let c=0
while(a<arr1.length && b<arr2.length && c<arr3.length){
    if(arr1[a]==arr2[b] && arr2[b]==arr3[c]){
        console.log(arr1[a])
        a++
        b++
        c++
    }
    else if(arr1[a]<arr2[b]) a++
    else if(arr2[b]<arr3[c]) b++
    else c++
}

// if(arr1[a]==arr2[b]==arr3[c]){
//     console.log(arr1[a]);
//     a++
//     b++
//     c++
// }
// else if(arr1[a]==arr2[b]<arr3[c]){
//     a++
//     b++
// }
// else if(arr1[a]<arr2[b]>arr3[c]){
//     a++
//     c++
// }
// else if(arr1[a]==arr3[c]<arr2[b]){
//     a++
//     c++
// }
// else if(arr1[a]<arr2[b]==arr[c]){
//     a++
// }