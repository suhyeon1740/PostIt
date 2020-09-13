import Menu from "./Menu.js"

export default class PostItMenu extends Menu {
    getTemplate() {
        return `
            <li>서식 조정 기능
                <ul>
                    <li>배경 색상 변경                        
                    </li>
                    <li>글자 크기 선택</li>
                    <li>글자 색상 변경</li>
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
}
