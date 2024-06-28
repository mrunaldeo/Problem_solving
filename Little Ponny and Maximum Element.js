Little Ponny and Maximum Element
Problem Description
Little Ponny is given an array, A, of N integers. In a particular operation, he can set any element of the array equal to -1.
He wants your help in finding out the minimum number of operations required such that the maximum element of the resulting array is B. If it is not possible, then return -1.
Problem Constraints
1 <= |A| <= 10^5
1 <= A[i] <= 10^9
brute force:
Check if B exists in the array A. If not, return -1.
Count the number of elements greater than B. These are the elements we need to set to -1.
The count from step 2 is the number of operations required.
  TC=O(N) sc=O(1)
module.exports = { 
	solve : function(A, B){
 let n = A.length;
	    let cnt = 0, flag = 0;
	    for(let i = 0 ; i < n; i++) {
	        if(A[i] > B)
	            cnt++;
	        if(A[i] == B)
	            flag = 1;
	    }
	    if(flag)
	        return cnt;
	    return -1;
	
	}
};
