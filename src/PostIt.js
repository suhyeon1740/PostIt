class PostIt {
    constructor({ contents, id, x, y, backgroundColor, height }) {
        this.contents = contents
        this.id = id
        this.x = x
        this.y = y
        this.backgroundColor = backgroundColor
        this.height = height
    }
    setStyle() {
        return `left: ${this.x}; top: ${this.y}`
    }
    render() {
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = `<div class="postit ${this.backgroundColor}" data-id="${this.id}"
         draggable="true" style="${this.setStyle()}">
            <header class="${this.backgroundColor}-header" data-target="postIt" >
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
    changeBackground(color) {
        this.$postIt.classList.remove(this.backgroundColor)
        this.$postIt.classList.add(color)
        this.$postIt.querySelector('header').classList.remove(`${this.backgroundColor}-header`)
        this.$postIt.querySelector('header').classList.add(`${color}-header`)
        this.backgroundColor = color
    }
    changeFontSize(size) {
        this.$postIt.querySelector('textarea').style.fontSize = size
    }
    changeFontColor() {

    }
}

export default PostIt
