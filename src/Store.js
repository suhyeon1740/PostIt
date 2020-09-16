export default class Store {
    static postIts
    static getData() {
        if (localStorage.getItem("postIts") === null) {
            Store.postIts = []
        } else {
            Store.postIts = JSON.parse(localStorage.getItem("postIts"))
        }
        return Store.postIts
    }
    static updatePosition(id, x, y) {
        let postIt = Store.getPostIt(id)
        postIt.x = x
        postIt.y = y    
        localStorage.setItem("postIts", JSON.stringify(Store.postIts))
    }
    static getPostIt(id) {
        return Store.postIts.find((postIt) => postIt.id == id)
    }
    static updateContents(id, value) {
        Store.getPostIt(id).contents = value
        localStorage.setItem("postIts", JSON.stringify(Store.postIts))
    }
    static updateBackgroundColor(id, color) {
        let postIt = Store.getPostIt(id)
        postIt.backgroundColor = color        
        localStorage.setItem("postIts", JSON.stringify(Store.postIts))
    }
    static updateFontSize(id, size) {
        let postIt = Store.getPostIt(id)
        postIt.fontSize = size
        localStorage.setItem("postIts", JSON.stringify(Store.postIts))
    }
}
