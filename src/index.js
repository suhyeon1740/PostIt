import App from "./App.js"
import Menu from "./Menu.js"
import Store from "./Store.js"

const app = new App(Store.getPostIt(), document.querySelector("#app"))
const menu = new Menu(document.querySelector("#app"))
app.$app.addEventListener("dragstart", (e) => {
    const id = e.target.dataset.id
    const {clientX, clientY, target} = e
    e.dataTransfer.setData("text", id)
    e.dataTransfer.effectAllowed = "move"
    app.move(id, clientX, clientY, target)
})

app.$app.addEventListener("dragover", (e) => {
    // if (e.target.dataset.target != "header") return
    e.preventDefault()
    // dropEffect를 move로 설정.
    e.dataTransfer.dropEffect = "move"
})

app.$app.addEventListener("drop", (e) => {
    e.preventDefault()
    // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
    const id = e.dataTransfer.getData("text")
    const {pageX, pageY} = e
    app.drop(id, pageX, pageY)
    Store.updatePosition(id, app.$selected.style.left, app.$selected.style.top)
})

app.$app.addEventListener("click", (e) => {
    switch (e.target.dataset.target) {
        case "postIt":
            app.changeZIndex(1)
            app.setSelectedDom(e.target.parentNode.dataset.id)
            break
        case "close":
            app.remove(e.target.parentNode.parentNode.dataset.id)
            break
        case "foldAndUnfold":
            app.foldAndUnfold(e.target.parentNode.parentNode.dataset.id)
            break
    }
})

app.$app.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    if (e.target.tagName != "TEXTAREA") return
    menu.showMenu(e)
})