const figure = document.getElementById("figure")

// 発展2
let a = 0

figure.onclick = function () {
  if (a === 0) {
    figure.classList.add("rounded")
    a += 1
  } else if (a === 1) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
    a += 1
  } else if (a === 2) {
    figure.classList.remove("triangle")
    a = 0
  }
}

// 発展1 クリック中に変化
//figure.onmousedown = function () {
//  figure.classList.toggle("rounded")
//}
