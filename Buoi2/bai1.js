/**
 * bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
Input: [0, 5, 4, 2, 8]
Output: 19
 */

const arr = [0, 5, 4, 2, 8]
function sumArr(){
    let sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum
}
console.log(sumArr())