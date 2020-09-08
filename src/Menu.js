export default class Menu {
    constructor($app) {
        this.$app = $app
        this.render()
    }
    render() {
        const ul = document.createElement("ul")
        ul.innerHTML = `
            <li>A</li>
            <li>B</li>
        `
        ul.classList.add("menu")
        this.$app.append(ul)
        this.$menu = ul
        this.hideMenu()
    }
    hideMenu() {
        this.$menu.style.display = "none"
    }
    showMenu({clientX, clientY}) {
        this.$menu.style.left = `${clientX}px`
        this.$menu.style.top = `${clientY}px`
        this.$menu.style.display = "block"
    }
}