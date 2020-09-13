export default class Menu {
    constructor($app) {
        this.$app = $app
        this.render() //나중에
    }
    render() {
        const ul = document.createElement("ul")
        ul.innerHTML = this.getTemplate()
        ul.classList.add("menu")
        this.$app.append(ul)
        this.$menu = ul
        this.hideMenu()
        this.setClass()
    }
    removeMenu() {
        document.querySelector('.menu').remove()
    }
    hideMenu() {
        this.$menu.style.display = "none"
    }
    showMenu({ clientX, clientY }) {
        this.hideMenu()
        this.$menu.style.left = `${clientX}px`
        this.$menu.style.top = `${clientY}px`
        this.$menu.style.display = "block"
    }
}