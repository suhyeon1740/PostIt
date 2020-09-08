class PostIt {
    constructor({contents, id, x, y, color, height}) {
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
        return `<div class="postit ${this.color}" data-id="${this.id}"
         draggable="true" style="${this.setStyle()}">
            <header class="${this.color}-header" data-target="postIt" >
                <span data-target="foldAndUnfold" class="fold"></span>
                <span data-target="close">X</span>
            </header>
            <textarea data-target="postIt" >${this.contents}</textarea>
        </div>`
    }
    setPosition(clientX, clientY, target) {
        this.shiftX = clientX - target.getBoundingClientRect().left
        this.shiftY = clientY - target.getBoundingClientRect().top
    }
    fold($postIt) {
        $postIt.style.height = 0
        $postIt.querySelector('textarea').style.display = 'none'
        $postIt.querySelector("[data-target='foldAndUnfold']").classList.add("unfold")
    }
    unfold($postIt) {
        $postIt.style.height = this.height
        $postIt.querySelector("textarea").style.display = "block"
        $postIt.querySelector("[data-target='foldAndUnfold']").classList.remove("unfold")
    }
}

export default PostIt
