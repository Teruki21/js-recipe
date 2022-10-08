const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const tiemsButton = document.getElementById("times-button")
const minusButton = document.getElementById("minus-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

// 発展1
minusButton.onclick = function () {
  count -= 1
  display.textContent = count
}

tiemsButton.onclick = function () {
  count *= 2
  display.textContent = count
}

// 発展3
const display2 = document.getElementById("display2")
const display3 = document.getElementById("display3")
const no0 = document.getElementById("no0")
const no1 = document.getElementById("no1")
const no2 = document.getElementById("no2")
const no3 = document.getElementById("no3")
const no4 = document.getElementById("no4")
const no5 = document.getElementById("no5")
const no6 = document.getElementById("no6")
const no7 = document.getElementById("no7")
const no8 = document.getElementById("no8")
const no9 = document.getElementById("no9")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const times = document.getElementById("times")
const div = document.getElementById("div")
const equ = document.getElementById("equ")
const C = document.getElementById("C")

let x = 0
let y = 0
let z = 0
// z=1 +, z=2 -, z=3 *, z=4 /

no0.onclick = function () {
  x = x * 10 + 0
  display2.textContent = x
}
no1.onclick = function () {
  x = x * 10 + 1
  display2.textContent = x
}
no2.onclick = function () {
  x = x * 10 + 2
  display2.textContent = x
}
no3.onclick = function () {
  x = x * 10 + 3
  display2.textContent = x
}
no4.onclick = function () {
  x = x * 10 + 4
  display2.textContent = x
}
no5.onclick = function () {
  x = x * 10 + 5
  display2.textContent = x
}
no6.onclick = function () {
  x = x * 10 + 6
  display2.textContent = x
}
no7.onclick = function () {
  x = x * 10 + 7
  display2.textContent = x
}
no8.onclick = function () {
  x = x * 10 + 8
  display2.textContent = x
}
no9.onclick = function () {
  x = x * 10 + 9
  display2.textContent = x
}

add.onclick = function () {
  y = x
  z = 1
  display3.textContent = "+" + y
  x = 0
  display2.textContent = 0
}

sub.onclick = function () {
  y = x
  z = 2
  display3.textContent = "-" + y
  x = 0
  display2.textContent = 0
}

times.onclick = function () {
  y = x
  z = 3
  display3.textContent = "×" + y
  x = 0
  display2.textContent = 0
}

div.onclick = function () {
  y = x
  z = 4
  display3.textContent = "÷" + y
  x = 0
  display2.textContent = 0
}

equ.onclick = function () {
  if (y === 0) {
    z = 0
  } else {
    // 足し算
    if (z === 1) {
      x = x + y
    }
    // 引き算
    if (z === 2) {
      x = y - x
    }
    // 掛け算
    if (z === 3) {
      x = x * y
    }
    // 割り算
    if (z === 4) {
      x = y / x
    }

    display2.textContent = x
    display3.textContent = 0
    y = 0
    z = 0
  }
}

C.onclick = function () {
  x = 0
  y = 0
  z = 0
  display2.textContent = 0
  display3.textContent = ""
}
