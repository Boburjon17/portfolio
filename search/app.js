"use  strict"

let ul = document.querySelector("ul")
let input = document.querySelector(".input")

const GetAPI = async () => {
    const request = await fetch("https://restcountries.com/v3.1/all")
    const data = await request.json()


    return data

}
GetAPI()


async function showcontent() {
    let items = await GetAPI()

    items.forEach(item => {
        let li = document.createElement("li")


        li.innerHTML = `
        <img src="${item.flags.png}" alt=" Message">
                <p >${item.name.common} </p>
        `
        ul.append(li)

    });


}
showcontent()

input.addEventListener("input", async () => {
    let InputValue = input.value.toLowerCase().trim();
    let items = await GetAPI()

      items= items.filter(item => item.name.common.toLowerCase().trim().includes(InputValue))


    ul.innerHTML = ""
    items.forEach(item => {
        let li = document.createElement("li")


        li.innerHTML = `
    <img src="${item.flags.png}" alt=" Message">
            <p >${item.name.common} </p>
    `
        ul.append(li)


    });
});





btn.addEventListener("click", ()=>{
    
})
