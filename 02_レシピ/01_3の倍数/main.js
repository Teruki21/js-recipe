// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

// 発展1 1 ~ 引数までのFizzBuzzを表示する関数 FizzBuzz
const FizzBuzz = function (number) {
  for (let m = 1; m <= number; ++m) {
    if (m % 3 === 0 && m % 5 == 0) {
      console.log("FizzBuzz")
    } else if (m % 3 === 0) {
      console.log("Fizz")
    } else if (m % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(m)
    }
  }
}

// 発展2 3が含む時のプログラム
const genkiFunction3 = function (number) {
  for (let n = 1; n <= number; ++n) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      let k = n
      // 3を含むか判別
      while (k > 0) {
        if (k % 10 === 3) {
          console.log(`${n}!!!!!!!`)
          break
        } else {
          k /= 10
        }
      }
      if (k === 0) {
        console.log(n)
      }
    }
  }
}
