function mincost(arr)
{ 
//write your code here
// return the min cost
let sum=0;
let arrSort = arr.sort((a, b) => a - b);  // Sorting in ascending order
for (let i = 0; i < arrSort.length - 1; i++) {
  let result = arrSort[i] + arrSort[i + 1];
  arrSort.splice(i, 2);
  arrSort.push(result);
  arrSort.sort((a, b) => a - b);
  i--;
  sum=sum+result
}
return sum
  
}

module.exports=mincost;
