let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
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
    console.log(myLeads)
})

// Log out the items in the myLeads array using a for loop 

for (let i = 0; i < myLeads.length; i++) {
    olEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // console.log(myLeads[i])

}
