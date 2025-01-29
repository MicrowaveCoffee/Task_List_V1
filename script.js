const main = document.querySelector('.main')
const myInput = createMyElement(main, 'input', 'myInput')
const myButton = createMyElement(main, 'button', 'btn')

const myUL = createMyElement(main, 'ul', 'myUL')


//attempting local storage but ran out of time.
// const storage = window.localStorage
// storage.addEventListener('onload',() => {
//     console.log('test')
// })

myButton.textContent = 'Add Item'
myButton.addEventListener('click', addItem)



function addItem() {
    const myLI = createMyElement(myUL, 'li', 'myLI')
    const span1 = createMyElement(myUL, 'span', 'span1')
    const span2 = createMyElement(myUL, 'span', 'span2')
    const span3 = createMyElement(myUL, 'span', 'span3')
    
    span1.textContent = myInput.value
    span2.textContent = 'Edit'
    span2.addEventListener('click', () => {
        console.log('test')
        if(span2.textContent === 'Edit') {
            span1.setAttribute('contenteditable', true)
            span2.textContent = 'Save'
        }else {
            span1.setAttribute('contenteditable', false)
            span2.textContent = 'Edit'
        }
    })
    span3.textContent = 'Delete'
    span3.addEventListener('click', () => {
        span1.remove()
        span2.remove()
        span3.remove()
    })
    
}




function createMyElement(parent,myElement,elementClass) {
    const element = document.createElement(myElement)
    element.classList.add(elementClass)
    parent.append(element)
    return element
}
