import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
}

const app = initializeApp(firebaseConfig)
// console.log(app)
const database = getDatabase(app)
console.log(firebaseConfig.databaseURL)

let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let olEl = document.getElementById("ol-el")
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const tabBtn = document.getElementById('tab-btn')

// persist data
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// pull chrome address with tab button
tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
})

// refactored for function reusability
function render(leads) {
    // Log out the items in the myLeads array using a for loop 
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    olEl.innerHTML = listItems
}

// delete button
deleteBtn.addEventListener('dblclick', function() {
    console.log('dbl clicked')
    // clear localStorage, myLeads, DOM
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// input element push to array/local storage
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value = ""
    // persist data
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    // call renderLeads() function
    render(myLeads)
})


// container & button
// const container = document.getElementById('container')
// container.innerHTML = '<button onclick="buy()">Buy!</button>'
// function buy() {
//     container.innerHTML +="<p>Thanks for your purchase!</p>"
// }