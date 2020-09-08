import PostIt from "./PostIt.js"

export default class Board {
    constructor(data, $app) {
        this.$app = $app
        this.postIts = data.map(
            ({ contents, id, x, y, color }) => new PostIt(contents, id, x, y, color)
        )
        this.render()
    }
    render() {
        this.$app.innerHTML = this.postIts.map((postIt) => postIt.render()).join("")
    }
    findPostIt(id) {
        return this.postIts.find((postIt) => postIt.id == id)
    }
    move(e) {
        const id = e.target.dataset.id
        e.dataTransfer.setData("text", id)
        // this.$selected = this.setSelectedDom(e)//document.querySelector(`[data-id="${id}"]`)
        e.dataTransfer.effectAllowed = "move"

        this.selectedObj = this.findPostIt(id)
        this.selectedObj.setPosition(e)
    }
    drop(e) {
        e.preventDefault()
        // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
        const id = e.dataTransfer.getData("text")
        // const $selected = document.querySelector(`[data-id="${id}"]`)
        this.setSelectedDom(id)
        this.$app.appendChild(this.$selected)

        this.$selected.style.left = e.pageX - this.selectedObj.shiftX + "px"
        this.$selected.style.top = e.pageY - this.selectedObj.shiftY + "px"
    }
    setSelectedDom(id) {
        this.$selected = document.querySelector(`[data-id="${id}"]`)
        this.changeZIndex(1000)

    }
    changeZIndex(zIndex) {
        if (!this.$selected) return
        this.$selected.style.zIndex = zIndex
    }
    remove(id) {
        this.postIts.splice(this.postIts.indexOf(this.findPostIt(id)),1)
        this.render()
    }
}

