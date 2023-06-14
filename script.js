let MyLibrary = []
let main = document.querySelector("main")
let add_button = document.querySelector("button")

add_button.addEventListener("click", () => {
    if (document.querySelector("#name").value == "" || document.querySelector("#author").value == "" || document.querySelector("#pages").value == "") return
    let new_book = new Book(document.querySelector("#name").value, document.querySelector("#author").value, document.querySelector("#pages").value)
    document.querySelector("#name").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    addBookToLibrary(new_book)
})

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
}

function addBookToLibrary(book) {
    MyLibrary.push(book)
    display()
}


function display() {
    for (let i = 0; i < document.querySelectorAll("main div").length; i++) {
        main.removeChild(main.lastChild)
    }

    for (let i = 0; i < MyLibrary.length; i++) {
        let book_html = document.createElement("div")
        let name_element = document.createElement("h2")
        let author_element = document.createElement("h3")
        let pages_element = document.createElement("div")
        let remove = document.createElement("div")
        remove.classList.add("remove")
        remove.textContent = "×"
        remove.setAttribute("data-index", `${i}`)

        remove.addEventListener("click", (element) => {
            MyLibrary.splice(element.target.getAttribute("data-index"), 1)
            display()
        })
        name_element.textContent = MyLibrary[i].name
        author_element.textContent = MyLibrary[i].author
        pages_element.textContent = `Pages: ${MyLibrary[i].pages}`
        book_html.append(name_element, author_element, pages_element, remove)
        main.append(book_html)
    }
}

