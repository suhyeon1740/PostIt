import Board from "./Board.js"
import PostItMenu from "./PostItMenu.js"
import Store from "./Store.js"
import BoardMenu from "./BoardMenu.js"
import Menu from "./Menu.js"

const board = new Board(Store.getData(), document.querySelector("#board"))
const postItMenu = new PostItMenu(board.$board)
const boardMenu  = new BoardMenu(board.$board)

board.$board.addEventListener("dragstart", (e) => {
    const id = e.target.dataset.id
    const {pageX, pageY, target} = e
    e.dataTransfer.setData("text", id)
    // e.dataTransfer.effectAllowed = "move"
    board.dragStart(id, pageX, pageY, target)
})

board.$board.addEventListener("dragover", (e) => {
    e.preventDefault()
    // dropEffect를 move로 설정.
    e.dataTransfer.dropEffect = "move"
})

board.$board.addEventListener("drop", (e) => {
    e.preventDefault()
    // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
    const id = e.dataTransfer.getData("text")

    
    const {pageX, pageY} = e
    board.drop(id, pageX, pageY)
    Store.updatePosition(id, board.$selected.style.left, board.$selected.style.top)
})

board.$board.addEventListener("click", (e) => {
    Menu.removeMenu()
    switch (e.target.dataset.target) {
        case "postIt":
            board.changeZIndex(1)
            board.setSelectedDom(e.target.parentNode.dataset.id)
            break
        case "close":
            board.remove(e.target.parentNode.parentNode.dataset.id)
            break
        case "foldAndUnfold":
            board.foldAndUnfold(e.target.parentNode.parentNode.dataset.id)
            break
    }
})

board.$board.addEventListener("contextmenu", (e) => {
    e.preventDefault()    
    if (e.target.tagName == "TEXTAREA") {
        postItMenu.render(e)
    } else if (e.target === e.currentTarget) {
        boardMenu.render(e)
    }
})

board.$board.addEventListener("keyup", (e) => {
    Store.updateContents(e.target.parentNode.dataset.id, e.target.value)
})

board.$board.addEventListener("focusout", () => {
    // alert('!÷')
})

// function addTextAreaCallback(textArea, callback, delay) {
//     var timer = null
//     textArea.onkeypress = function () {
//         if (timer) {
//             window.clearTimeout(timer)
//         }
//         timer = window.setTimeout(function () {
//             timer = null
//             callback()
//         }, delay)
//     }
//     textArea = null
// }

// function doAjaxStuff() {
//     console.log('doAjax')
// }
// addTextAreaCallback(document.getElementById("myTextArea"), doAjaxStuff, 1000)