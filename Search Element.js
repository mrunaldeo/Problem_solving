Search Element
Problem Description
You are given an integer T (number of test cases). You are given array A and an integer B for each test case. You have to tell whether B is present in array A or not.
Problem Constraints
1 <= T <= 10
1 <= A <= 10^5
1 <= A[i], B <= 10^9
Brute force approach:Tc=O(N),SC=O(1)
 function(a,b){
   let ans = 0;
   for( let i = 0; i < n; i++){
        // If a[i] is equal to b, we found element
        if(a[i] == b)
                ans = 1;
        }
        console.log(ans);
 }
}
