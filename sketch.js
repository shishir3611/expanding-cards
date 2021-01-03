const panels = document.querySelectorAll('.panel');

console.log()

panels.forEach(panel=>{
    panel.addEventListener('click', () => {
        //removeActiveClasses();
        panel.classList.add('active')
        
        console.log('h')
    })
})

//function removeActiveClasses(){

//}