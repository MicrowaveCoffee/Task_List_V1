const curList = []

const main = document.querySelector('.main')
const myInput = createMyElement(main, 'input', 'myInput')
myInput.setAttribute('type', 'text')
const myButton = createMyElement(main, 'button', 'btn')
myButton.textContent = 'Add Item'
const myUL = createMyElement(main, 'ul', 'myUL')


let getData = localStorage.getItem('curList');

window.addEventListener('DOMContentLoaded', (e) => {
    if(getData) {
        const tempArr = JSON.parse(getData)
        tempArr.forEach(user => {
            addItem(user)
        });
    }
})


myButton.addEventListener('click', (e) => {
    let userItem = myInput.value
    const myLI = addItem(userItem);
    myInput.value = ''
})

function updater() {
    const myListItems = document.querySelectorAll('.span1')
    curList.length = 0
    myListItems.forEach((el) => {
        curList.push(el.textContent)
    })
    localStorage.setItem('curList', JSON.stringify(curList))
}



function addItem(userItem) {
    curList.push(userItem)
    updater()
    const myLI = createMyElement(myUL, 'li', 'myLI')
    const span1 = createMyElement(myUL, 'span', 'span1')
    span1.textContent = userItem
    const span2 = createMyElement(myUL, 'span', 'span2')
    span2.textContent = 'Edit'
    const span3 = createMyElement(myUL, 'span', 'span3')
    span3.textContent = 'Delete' 
    
    
    span2.addEventListener('click', () => {
        
        if(span2.textContent === 'Edit') {
            span1.setAttribute('contenteditable', true)
            span2.textContent = 'Save'
        }else {
            span1.setAttribute('contenteditable', false)
            span2.textContent = 'Edit'
            updater()
        }
    })
    
    span3.addEventListener('click', () => {
        span1.remove()
        span2.remove()
        span3.remove()
        updater()
    })
    updater()
    return myLI
}




function createMyElement(parent,myElement,elementClass) {
    const element = document.createElement(myElement)
    element.classList.add(elementClass)
    parent.append(element)
    return element
}
