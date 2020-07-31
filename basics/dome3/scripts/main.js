let sltH = document.querySelector('#SltH')
let sltB = document.querySelector('#SltB')

sltH.onclick = function() {
  window.getComputedStyle(sltB, null).height === '0px' ? sltB.style.height = "148px" :  sltB.style.height = "0"
  window.getComputedStyle(sltB, null).height === '0px' ? sltB.style.borderBottom = "2px solid #6bcdf2" :  sltB.style.borderBottom = "none"
}