import Menu from "./Menu.js"

export default class PostItMenu extends Menu {
    getTemplate() {
        return `
            <li>서식 조정 기능
                <ul>
                    <li data-menu="background">
                        배경 색상 변경
                        <div class="set-background">
                            <span class="yellow" data-color="yellow"></span>
                            <span class="red" data-color="red"></span>
                            <span class="blue" data-color="blue"></span>
                            <span class="pink" data-color="pink"></span>
                            <span class="orange" data-color="orange"></span>
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
        this.$menu.classList.add('postIt-menu')
    }
    menuClick(e) {
        console.log('click')
        switch (e.target.dataset.menu) {

        }
    }
}
