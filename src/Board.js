import PostIt from "./PostIt.js"
// import Menu from "./Menu.js"

export default class Board {
    constructor(data, $board) {
        this.$board = $board
        this.postIts = data.map((postIt) => new PostIt(postIt))
        this.render()
    }
    render() {
        this.postIts.map((postIt) => {
            this.$board.appendChild(postIt.render())
        })
    }
    findPostIt(id) {
        return this.postIts.find((postIt) => postIt.id == id)
    }
    dragStart(id, pageX, pageY, target) {
        this.findPostIt(id).setPosition(pageX, pageY, target)
    }
    drop(id, pageX, pageY) {        
        // const $selected = document.querySelector(`[data-id="${id}"]`)
        this.setSelectedDom(id)

        // 드롭한 위치에서 계산한 요소의 위치 빼기
        // this.$selected.style.left = pageX + "px"
        this.$selected.style.left = pageX - this.findPostIt(id).shiftX + "px"
        this.$selected.style.top = pageY - this.findPostIt(id).shiftY + "px"
    }
    setSelectedDom(id) {
        this.$selected = this.getSelectedDom(id)
        this.changeZIndex(1000)
    }
    getSelectedDom(id) {
        return this.findPostIt(id).$postIt
    }
    changeZIndex(zIndex) {
        if (!this.$selected) return
        this.$selected.style.zIndex = zIndex
    }
    remove(id) {
        this.postIts.splice(this.postIts.indexOf(this.findPostIt(id)), 1)
        this.render()
    }
    foldAndUnfold(id) {
        const $postIt = this.getSelectedDom(id)
        if ($postIt.querySelector("[data-target='foldAndUnfold']").classList.contains("unfold")) {
            this.findPostIt(id).unfold($postIt)
        } else {
            this.findPostIt(id).fold($postIt)
        }
    }
}

