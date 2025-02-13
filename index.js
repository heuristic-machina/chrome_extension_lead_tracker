let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let olEl = document.getElementById("ol-el")
console.log(olEl)

const container = document.getElementById('container')

container.innerHTML = '<button onclick="buy()">Buy!</button>'

function buy() {
    container.innerHTML +="<p>Thanks for your purchase!</p>"
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value = ""
    // call renderLeads() function
    renderLeads()
})

// wrap for loop in renderLeads() function
function renderLeads() {
    // Log out the items in the myLeads array using a for loop 
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" +myLeads[i] + "</a></li>"
        // console.log(listItems)
    }
    olEl.innerHTML = listItems
}
