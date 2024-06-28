reverse the array:
Problem Description
You are given a constant array A.
You are required to return another array which is the reversed form of the input array.
Problem Constraints:
1 <= A.size() <= 10000
1 <= A[i] <= 10000
Approach:
start from both the sides i.e from left and right and swap the elements.
  Tc=O(N) SC=o(N).
solve:function(A){
  let left=0;
  let right=A.length-1;
  while(left<right){
    let temp=A[left];
    A[left]=A[right];
    A[right]=temp;
    left++;
    right--;
  }
  return A;
}

approach 2: its an inbuilt function for inplace reverse in js.Time Complexity: O(n) The reverse method typically has linear time complexity.Auxiliary Space Complexity: O(1)
Additional space is not used to store the reversed array, as the in-built array method “reverse()” swaps the values in a given range in in-place fashion.
let reversedArray = originalArray.slice().reverse();
console.log(reversedArray);
