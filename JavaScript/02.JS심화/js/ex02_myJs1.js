let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')





let margin = document.getElementById('margin')
let border = document.getElementById('border')

const move = ()=>{
    box1.style.marginLeft = '0px'
    box2.style.marginLeft = '100px'
    box3.style.marginLeft = '200px'
    box4.style.marginLeft = '300px'
}

margin.addEventListener('click',()=>{
    move()
})

border.addEventListener('click',()=>{
    move()
    box1.style.borderStartEndRadius = '50px'
    box1.style.borderEndStartRadius = '50px'

    box2.style.borderStartEndRadius = '50px'
    box2.style.borderEndStartRadius = '50px'

    box3.style.borderStartEndRadius = '50px'
    box3.style.borderEndStartRadius = '50px'

    box4.style.borderStartEndRadius = '50px'
    box4.style.borderEndStartRadius = '50px'
})