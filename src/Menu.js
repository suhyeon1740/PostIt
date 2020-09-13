export default class Menu {
    constructor($app) {
        this.$app = $app
    }
    render({ clientX, clientY }) {
        Menu.removeMenu()
        const ul = document.createElement("ul")
        ul.innerHTML = this.getTemplate()
        ul.classList.add("menu")
        this.$app.append(ul)
        this.$menu = ul
        this.setClass()
        this.setPosition(clientX, clientY)
        this.attachEvent()
    }
    static removeMenu() {
        const $menu = document.querySelector('.menu')
        if ($menu) {
            $menu.remove()
        }
    }
    setPosition(clientX, clientY) {
        this.$menu.style.left = `${clientX}px`
        this.$menu.style.top = `${clientY}px`
        this.$menu.style.display = "block"
    }
    attachEvent() {
        this.$menu.addEventListener('click', this.menuClick)
        this.$menu.addEventListener('contextmenu', this.menuClick)
    }
}
