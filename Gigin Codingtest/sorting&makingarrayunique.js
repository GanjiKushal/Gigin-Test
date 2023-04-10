let arr=[1,6,3,7,6,9,6,2]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
let Arr=[...new Set(arr)]
console.log(Arr);
