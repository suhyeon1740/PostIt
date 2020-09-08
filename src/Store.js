export default class Store {
    static getPostIt() {
        let postIts
        if (localStorage.getItem("postIts") === null) {
            postIts = []
        } else {
            postIts = JSON.parse(localStorage.getItem("postIts"))
        }
        return postIts
    }
    static updatePosition(id, x, y) {
        const postIts = Store.getPostIt()
        const postIt = postIts.find((postIt) => postIt.id == id)
        postIts.splice(postIts.indexOf(postIt), 1, {
            ...postIt,
            x: x,
            y: y,
        })
        localStorage.setItem("postIts", JSON.stringify(postIts))
    }
}
