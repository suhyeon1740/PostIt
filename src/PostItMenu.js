import Menu from "./Menu.js"
import Store from "./Store.js"

export default class PostItMenu extends Menu {
    getTemplate() {
        return `
            <li>서식 조정 기능
                <ul>
                    <li data-menu="background">
                        배경 색상 변경
                        <div class="set-background">
                            <span class="yellow" data-menu="background"></span>
                            <span class="red" data-menu="background"></span>
                            <span class="blue" data-menu="background"></span>
                            <span class="pink" data-menu="background"></span>
                            <span class="orange" data-menu="background"></span>
                        </div>
                    </li>
                    <li data-menu="font-size">글자 크기 선택</li>
                    <li data-menu="font-color">글자 색상 변경</li>
                </ul>
            </li>
            <li>접기</li>
            <li><input type="text">초 후 삭제</li>
            <li>삭제하기</li>
        `
    }
    setClass() {
        this.$menu.classList.add("postIt-menu")
    }
    showMenu(e, postIt) {
        super.showMenu(e)
        this.selectPostIt = postIt
    }
    menuClick(e) {
        switch (e.target.dataset.menu) {
            case "background":
                const color = e.target.className
                this.selectPostIt.changeBackground(color)
                Store.updateBackgroundColor(this.selectPostIt.id, color)
                break
            case "font-size":
                const size = 20+'px'
                this.selectPostIt.changeFontSize(size)
                Store.updateFontSize(this.selectPostIt.id, size)
                break
            case "font-color":
                this.selectPostIt.changeFontColor('yellow')
                break
        }
    }
}
