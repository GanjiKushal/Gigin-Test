let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
let map = new Map();
function sortedArray(arr) {
  let newArr = [...new Set(arr)];
  for (let i = 0; i < newArr.length; i++) {
    if (map.has(newArr[i])) {
      map.set(newArr[i], 1 + map.get(newArr[i]));
    } else {
      map.set(newArr[i], 1);
    }
  }
}
sortedArray(arr1);
sortedArray(arr2);
sortedArray(arr3);
console.log(map)
let ans = [];
for (let [key, value] of map) {
  if (value == 3) {
    ans.push(key);
  }
}
console.log(ans);
