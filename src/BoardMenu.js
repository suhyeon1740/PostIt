import Menu from "./Menu.js"
export default class BoardMenu extends Menu {
    getTemplate() {
        return `
            <li data-menu="new">새로운 포스트잇</li>
            <li data-menu="sort">포스트잇 정렬하기</li>
            <li data-menu="remove-all">전체 삭제</li>
        `
    }
    setClass() {
        this.$menu.classList.add('board-menu')
    }
}
