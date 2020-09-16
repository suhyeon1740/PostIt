export default class Menu {
    constructor($app) {
        this.$app = $app
    }
    showMenu({ clientX, clientY }) {
        Menu.removeMenu()
        this.render()
        this.setClass()
        this.setPosition(clientX, clientY)
        this.attachEvent()
    }
    render() {
        const ul = document.createElement("ul")
        ul.innerHTML = this.getTemplate()
        ul.classList.add("menu")
        this.$app.append(ul)
        this.$menu = ul        
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
        this.$menu.addEventListener('click', (e) => {
            this.menuClick(e)
        })
        this.$menu.addEventListener('contextmenu', (e) => {
            this.menuClick(e)
        })
    }
}
