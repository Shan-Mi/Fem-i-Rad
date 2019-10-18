const chessBoard = document.querySelector('#chessBoard')
const winner = document.querySelector('#winner')

//get resetNumberBtn, then call draw function to draw a new chessboard
//call addEventToBtns to add event to every button
const drawNewBoard = document.querySelector('#setNumber')
drawNewBoard.addEventListener('click', function (event) {
  newBoardNum = document.querySelector('#setBoard').value
  if (newBoardNum !== '' && newBoardNum !== null) {
    winner.classList.add('hide')
    chessBoard.classList.remove('hide')
    document.querySelector('.p1').classList.replace('active', 'inactive')
    document.querySelector('.p2').classList.replace('active', 'inactive')
    drawChessBoard(newBoardNum)
    document.querySelector('.p1').classList.replace('inactive', 'active')
  }
  addEventToBtns(newBoardNum)
})

//count how many steps has been gone
//works as a flag to identify player
let count = 0

//show how many steps have gone
const countNumber = document.querySelector('.number')

//click beginGame button to show chessboard
//default size 25*25
const beginGame = document.querySelector('#beginGame')
beginGame.addEventListener('click', function (event) {
  winner.classList.add('hide')
  chessBoard.classList.remove('hide')
  document.querySelector('.p1').classList.replace('active', 'inactive')
  document.querySelector('.p2').classList.replace('active', 'inactive')
  count = 0
  countNumber.innerHTML = '0'
  drawChessBoard(25)
  document.querySelector('.p1').classList.replace('inactive', 'active')
  addEventToBtns(25)
})

//draw chessboard function
const drawChessBoard = function (setNmb) {
  document.getElementById('chessBoard').innerHTML = ""
  count = 0
  countNumber.innerHTML = '0'
  for (let i = 0; i < setNmb; i++) {
    const newDiv = document.createElement('div')
    chessBoard.appendChild(newDiv)
    newDiv.classList.add('divInLine')
    for (let j = 0; j < setNmb; j++) {
      const btn = document.createElement('button')
      btn.classList.add('button')
      newDiv.appendChild(btn)
    }
  }
}

//add event to every click, count++
const addEventToBtns = function (gridNum) {
  const clickBtn = document.querySelectorAll('.button')

  for (let i = 0; i < clickBtn.length; i++) {
    clickBtn[i].addEventListener('click', function (event) {
      let isBlack = false
      if (count % 2 === 0) {
        isBlack = true
        event.currentTarget.innerHTML = '⚫'
        event.currentTarget.disabled = true;
        count++
        document.querySelector('.inactive').classList.replace('inactive', 'active')
        document.querySelector('.active').classList.replace('active', 'inactive')
      } else {
        event.currentTarget.innerHTML = '⚪'
        event.currentTarget.disabled = true;
        count++
        document.querySelector('.active').classList.replace('active', 'inactive')
        document.querySelector('.inactive').classList.replace('inactive', 'active')
      }
      countNumber.innerHTML = 'Count number: ' + count

      let x = Math.trunc(i / gridNum)
      let y = i % gridNum
      let result = win(x, y, isBlack, gridNum)
      if (result) {
        if (isBlack) {
          for (let i = 0; i < clickBtn.length; i++) {
            clickBtn[i].setAttribute('disabled', 'disabled')
            document.querySelector('.p1').classList.replace('active', 'inactive')
            document.querySelector('.p2').classList.replace('active', 'inactive')
            document.querySelector('#winner>p').innerHTML = '⚫ win!'
            winner.classList.remove('hide')
          }
        } else {
          for (let i = 0; i < clickBtn.length; i++) {
            clickBtn[i].setAttribute('disabled', 'disabled')
            document.querySelector('.p1').classList.replace('active', 'inactive')
            document.querySelector('.p2').classList.replace('active', 'inactive')
            document.querySelector('#winner>p').innerHTML = '⚪ win!'
            winner.classList.remove('hide')
          }
        }
      }
    })
  }
}