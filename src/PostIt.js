class PostIt {
    constructor({ contents, id, x, y, color, height }) {
        this.contents = contents
        this.id = id
        this.x = x
        this.y = y
        this.color = color
        this.height = height
    }
    setStyle() {
        return `left: ${this.x}; top: ${this.y}`
    }
    render() {
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = `<div class="postit ${this.color}" data-id="${this.id}"
         draggable="true" style="${this.setStyle()}">
            <header class="${this.color}-header" data-target="postIt" >
                <span data-target="foldAndUnfold" class="fold"></span>
                <span data-target="close">X</span>
            </header>
            <textarea data-target="postIt" >${this.contents}</textarea>
        </div>`
        this.$postIt = tempDiv.firstChild
        return tempDiv.firstChild
    }
    setPosition(pageX, pageY, target) {
        // pageX: 드래그 시작 시 커서 위치
        // target.getBoundingClientRect().left: 요소의 현재 위치
        this.shiftX = pageX - target.getBoundingClientRect().left
        this.shiftY = pageY - target.getBoundingClientRect().top
    }
    fold($postIt) {
        $postIt.style.height = 0
        $postIt.querySelector("textarea").style.display = "none"
        $postIt.querySelector("[data-target='foldAndUnfold']").classList.add("unfold")
    }
    unfold($postIt) {
        $postIt.style.height = this.height
        $postIt.querySelector("textarea").style.display = "block"
        $postIt.querySelector("[data-target='foldAndUnfold']").classList.remove("unfold")
    }
}

export default PostIt
