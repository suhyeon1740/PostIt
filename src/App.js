import PostIt from "./PostIt.js"
// import Menu from "./Menu.js"

export default class Board {
    constructor(data, $app) {
        this.$app = $app
        this.postIts = data.map(
            (postIt) => new PostIt(postIt)
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
        this.$selected = this.getSelectedDom(id)
        this.changeZIndex(1000)
    }
    getSelectedDom(id) {
        return document.querySelector(`[data-id="${id}"]`)
    }
    changeZIndex(zIndex) {
        if (!this.$selected) return
        this.$selected.style.zIndex = zIndex
    }
    remove(id) {
        this.postIts.splice(this.postIts.indexOf(this.findPostIt(id)),1)
        this.render()
    }
    foldAndUnfold(id) {
        const $postIt = this.getSelectedDom(id)
        if ($postIt.querySelector("[data-target='foldAndUnfold']").classList.contains('unfold')) {
            this.findPostIt(id).unfold($postIt)                
        } else {
            this.findPostIt(id).fold($postIt)
        }        
    }    
}

