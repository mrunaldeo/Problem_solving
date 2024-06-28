good pair:Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.
arr=[1,2,3,4],b=7
output=1
problem constraints:
1 <= A.size() <= 10^4
1 <= A[i] <= 10^9
1 <= B <= 10^9
brute force:
function goodPairs(arr,b){
  for(let i=0;i<n;i++){
    for(let j=0;j<nj++){
      if(arr[i]+arr[j]==b){
        return 1;
      }
    }
  }
  return 0;
}
console.log(goodPairs([1,2,3,4],7));
optimized approach: Using HashSet (TC=O(N), SC=O(N))
Time Complexity (TC): O(N)
This approach iterates through the array once while performing O(1) average-time operations (add, contains) with a hash set. Therefore, it runs in linear time relative to the size of the array.
Given the constraint 1 <= A.size() <= 10^4, in the worst case, this approach will perform about 10^4 operations, which is efficient for large input sizes.
Space Complexity (SC): O(N)
This approach uses a hash set to store elements of the array. In the worst case, all elements are unique and the hash set will store all N elements.
Given the constraint 1 <= A.size() <= 10^4, the space requirement will be proportional to the input size, which is acceptable.
function goodPairs(arr,b){
   const seen=new Set();
  for(let i=0;i<arr.length;i++){
    if(seen.has(B-arr[i])){
      return 1;
    }
    seen.add(arr[i]);
  }
  return 0;
}
console.log(goodPairs([1,2,3,4],7));
optimized approach:Using Sorting and Two Pointers (TC=O(N*log(N)), SC=O(1))
Time Complexity (TC): O(N*log(N))
This approach first sorts the array, which takes O(N*log(N)) time. After sorting, it uses the two-pointer technique, which runs in O(N) time.
Given the constraint 1 <= A.size() <= 10^4, the sorting step will dominate, resulting in O(10^4 * log(10^4)) = O(10^4 * 4) = O(4 * 10^4) operations, which is efficient.
Space Complexity (SC): O(1)
This approach uses a constant amount of extra space (for pointers and temporary variables), regardless of the size of the input array.
The sorting operation can be done in-place if an in-place sorting algorithm (like QuickSort) is used, which means no additional space is required beyond the input array.
function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}
function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;   
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}
function hasGoodPairWithCustomSort(A, B) {
    quickSort(A, 0, A.length - 1);
    let left = 0;
    let right = A.length - 1;
    while (left < right) {
        let sum = A[left] + A[right];
        if (sum === B) {
            return 1;
        } else if (sum < B) {
            left++;
        } else {
            right--;
        }
    }
    return 0;
}
console.log(hasGoodPairWithCustomSort([1, 2, 3, 4], 7));
