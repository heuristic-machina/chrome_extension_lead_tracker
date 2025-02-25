import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js"
import { getDatabase,
        ref,
        push,
        onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
}

const app = initializeApp(firebaseConfig)
// console.log(app)
const database = getDatabase(app)
console.log(firebaseConfig.databaseURL)
const referenceInDB = ref(database, 'leads')


const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let olEl = document.getElementById("ol-el")
const deleteBtn = document.getElementById('delete-btn')

// refactored for function reusability
function render(leads) {
    // Log out the items in the array using a for loop 
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

onValue(referenceInDB, function(snapshot) {
    console.log(snapshot)
})

// delete button
deleteBtn.addEventListener('dblclick', function() {
    console.log('dbl clicked')
})


// input element push to array/local storage
inputBtn.addEventListener('click', function() {

    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})
