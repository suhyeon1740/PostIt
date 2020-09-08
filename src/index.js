import App from "./App.js"

const data = [
    {
        contents: "A",
        id: 1,
        x: 10,
        y: 10,
        color: "yellow",
    },
    {
        contents: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur enim repudiandae alias, odit, sapiente est numquam iusto quaerat beatae repellat vitae dignissimos, optio laudantium quas reiciendis. Mollitia eveniet laborum accusantium.
            Sint impedit aliquam porro maiores quod aperiam. Enim rerum veritatis ipsam non nisi ipsum illo, fugit ea, facere aspernatur tenetur neque ab a sit beatae sequi? Expedita, necessitatibus. Tempore, corporis?
            Labore laborum nisi quidem nam corrupti recusandae esse. In, qui reprehenderit fuga delectus fugit quas saepe dicta, autem voluptate ducimus sequi ut. Commodi, sit totam suscipit repudiandae nesciunt distinctio hic.
            Officiis laudantium, error voluptas alias architecto delectus ut quae sed. Distinctio recusandae vero corporis, atque consectetur eligendi perferendis alias dignissimos. Fuga accusantium non aperiam ea quas laborum, sunt id! Explicabo.
            Quia nisi sapiente voluptatem, consectetur veritatis libero. Explicabo dicta corporis, maiores nesciunt nulla cupiditate, laudantium laboriosam possimus, eaque sequi temporibus odit eius fuga quaerat dignissimos quam. Impedit, officia quia. Unde.
            Veritatis, eius illo obcaecati ea iste unde, voluptas aut dicta exercitationem ullam in fuga corporis dolore soluta odit, praesentium quos vitae quidem numquam adipisci. Accusantium repudiandae odio aliquam maxime eaque?
            Maxime distinctio ullam impedit vel esse delectus ex omnis minus tempora quae necessitatibus dolorem id nobis excepturi, deleniti unde corrupti voluptatibus a minima aliquid explicabo repellendus nulla in! Tempore, natus.
            Perspiciatis omnis nihil voluptatum doloremque atque natus? Ea quod quos exercitationem consequatur culpa deserunt pariatur obcaecati, expedita, quis illo temporibus earum blanditiis aut? Dicta reprehenderit velit repudiandae, consequuntur excepturi maxime?
            Neque quos accusamus quasi nam consectetur. Voluptates eveniet quo error earum, id aspernatur molestiae quaerat. Aperiam minima incidunt iusto eius ratione provident illum asperiores explicabo earum! Ipsa quos recusandae temporibus.
            Corporis obcaecati laudantium, blanditiis numquam alias quo, deleniti quam suscipit odio quisquam id culpa eum dolor dolore expedita, nesciunt atque aspernatur consequuntur quidem adipisci? Voluptate, non. Quibusdam, magni? Repellat, accusamus?`,
        id: 2,
        x: 300,
        y: 300,
        color: "blue",
    },
]
const app = new App(data, document.querySelector("#app"))
app.$app.addEventListener("dragstart", (e) => {
    // if (e.target.dataset.target != "header") return
    app.move(e)
})

app.$app.addEventListener("dragover", (e) => {
    // if (e.target.dataset.target != "header") return
    e.preventDefault()
    // dropEffect를 move로 설정.
    e.dataTransfer.dropEffect = "move"
})

app.$app.addEventListener("drop", (e) => {
    app.drop(e)
})

app.$app.addEventListener("click", (e) => {
    switch (e.target.dataset.target) {
        case "postIt":
            app.changeZIndex(1)
            app.setSelectedDom(e.target.parentNode.dataset.id)
            break
        case "close":
            app.remove(e.target.parentNode.parentNode.dataset.id)
            break        
    }
})
