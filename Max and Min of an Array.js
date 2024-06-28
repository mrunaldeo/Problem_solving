 Max and Min of an Array
Problem Description:
Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents 
the length of the array followed by the N elements of the input array A.
Problem constraints:
1 <= N <= 1000
1 <= A <= 1000
brute force: Initilize min and max value. iterate till n and find min and max.
function minmaxvalue(arr){
const inputArray = input.split(' ').map(Number);
    const N = inputArray[0];
    const A = inputArray.slice(1, N + 1);
    let max = A[0];
    let min = A[0];
    for (let i = 1; i < N; i++) {
        if (A[i] > max) {
            max = A[i];
        }
        if (A[i] < min) {
            min = A[i];
        }
    }
    console.log(`${max} ${min}`);
}
