let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let olEl = document.getElementById("ol-el")
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const tabBtn = document.getElementById('tab-btn')
const tabs = [
    {url: 'test tab'}
]

tabBtn.addEventListener('click', function() {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

// persist data
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

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

// container & button
const container = document.getElementById('container')
container.innerHTML = '<button onclick="buy()">Buy!</button>'
function buy() {
    container.innerHTML +="<p>Thanks for your purchase!</p>"
}

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

