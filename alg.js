const win = function (x, y, black, gridNum) {
  //get all buttons and put values in an array
  let btnArr = Array.from(document.querySelectorAll('.button'))

  let directionA = x
  let directionB = x;
  let currentChess = black ? "⚫" : "⚪"
  while (directionA >= 0) {
    directionA--
    if (btnArr[directionA * gridNum + y].innerHTML != currentChess) {
      directionA++;
      break;
    }
  }

  while (directionB < gridNum) {
    directionB++
    if (btnArr[directionB * gridNum + y].innerHTML != currentChess) {
      directionB--;
      break;
    }
  }

  if (directionB - directionA >= 4) {
    return true
  }

  directionA = y
  directionB = y;
  while (directionA >= 0) {
    directionA--
    if (btnArr[x * gridNum + directionA].innerHTML != currentChess) {
      directionA++;
      break;
    }
  }

  while (directionB < gridNum) {
    directionB++
    if (btnArr[x * gridNum + directionB].innerHTML != currentChess) {
      directionB--;
      break;
    }
  }

  if (directionB - directionA >= 4) {
    return true
  }

  let directionAX = x
  let directionAY = y
  let directionBX = x
  let directionBY = y

  while (directionAX >= 0 && directionAY >= 0) {
    directionAX--
    directionAY--
    if (btnArr[directionAX * gridNum + directionAY].innerHTML != currentChess) {
      directionAX++
      directionAY++
      break;
    }
  }

  while (directionBX < gridNum && directionBY < gridNum) {
    directionBX++
    directionBY++
    if (btnArr[directionBX * gridNum + directionBY].innerHTML != currentChess) {
      directionBX--
      directionBY--
      break
    }
  }

  if (directionBY - directionAY >= 4) {
    return true
  }

  while (directionAX < gridNum && directionAY >= 0) {
    directionAX++
    directionAY--
    if (btnArr[directionAX * gridNum + directionAY].innerHTML != currentChess) {
      directionAX--
      directionAY++
      break;
    }
  }

  while (directionBX >= 0 && directionBY < gridNum) {
    directionBX--
    directionBY++
    if (btnArr[directionBX * gridNum + directionBY].innerHTML != currentChess) {
      directionBX++
      directionBY--
      break
    }
  }

  if (directionBY - directionAY >= 4) {
    return true
  }
  return false
}