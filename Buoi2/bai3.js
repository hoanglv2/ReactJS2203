/**
 * bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
Input:	arr1 = ['John', 'Pete', 'Mary']
	arr2 = ['Mary', 'Henry', 'Harry']
Output: ['John', 'Pete', 'Mary', 'Henry']
 */

const arr1 = ['John', 'Peter', 'Mary']
const arr2 = ['Mary', 'Henry', 'Harry']
function noRepeatArr() {
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            arr1.push(element)
        }
    }) 
}
noRepeatArr()
console.log(arr1);