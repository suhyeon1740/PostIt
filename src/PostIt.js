class PostIt {
    constructor(contents, id, x, y, color) {
        this.contents = contents
        this.id = id
        this.x = x
        this.y = y
        this.color = color
    }
    setStyle() {
        return `left: ${this.x}px; top: ${this.y}px`
    }
    render() {
        return `<div class="postit ${this.color}" data-id="${this.id}" draggable="true" style="${this.setStyle()}">
            <header class="${this.color}-header" data-target="postIt" >
                <span data-target="expend">▼</span>
                <span data-target="close">X</span>
            </header>
            <textarea data-target="postIt" >${this.contents}</textarea>
        </div>`
    }
    setPosition(e) {
        this.shiftX = e.clientX - e.target.getBoundingClientRect().left
        this.shiftY = e.clientY - e.target.getBoundingClientRect().top
    }
    
}

export default PostIt
