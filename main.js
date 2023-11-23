// Task 1

// function randomID(length) {
//     let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let id = ''
//     for (let i = 0; i < length; i++) {
//       let random_index = Math.floor(Math.random() * random.length);
//       id += random[random_index]
//     }
//     return id 
//   }

// randomID()

// Task 2

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }

  }
}

let arr = [1, 4, 5, 2, -1, 325, -654, 3545, 5, 75, 3, 43, 8, 9, 76, 8]
bubbleSort(arr)
console.log(arr);