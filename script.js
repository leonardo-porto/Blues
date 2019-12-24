let notaE1 = document.getElementById('nE1')
let notaE2 = document.getElementById('nE2')
let notaE3 = document.getElementById('nE3')
let notaE4 = document.getElementById('nE4')
let notaE5 = document.getElementById('nE5')
let notaE6 = document.getElementById('nE6')
let notaE7 = document.getElementById('nE7')
let notaE8 = document.getElementById('nE8')
let notaE9 = document.getElementById('nE9')
let notaE10 = document.getElementById('nE10')
let notaE11 = document.getElementById('nE11')
let notaE12 = document.getElementById('nE12')
let notaE13 = document.getElementById('nE13')
let notaE14 = document.getElementById('nE14')
let notaE15 = document.getElementById('nE15')
let notaE16 = document.getElementById('nE16')

let notasE = [notaE1, notaE2, notaE3, notaE4, notaE5, notaE6, notaE7, notaE8, notaE9, notaE10, notaE11, notaE12, notaE13, notaE14, notaE15, notaE16]

let notaB1 = document.getElementById('nB1')
let notaB2 = document.getElementById('nB2')
let notaB3 = document.getElementById('nB3')
let notaB4 = document.getElementById('nB4')
let notaB5 = document.getElementById('nB5')
let notaB6 = document.getElementById('nB6')
let notaB7 = document.getElementById('nB7')
let notaB8 = document.getElementById('nB8')
let notaB9 = document.getElementById('nB9')
let notaB10 = document.getElementById('nB10')
let notaB11 = document.getElementById('nB11')
let notaB12 = document.getElementById('nB12')
let notaB13 = document.getElementById('nB13')
let notaB14 = document.getElementById('nB14')

let notasB = [notaB1, notaB2, notaB3, notaB4, notaB5, notaB6, notaB7, notaB8, notaB9, notaB10, notaB11, notaB12, notaB13, notaB14]



let notaA1 = document.getElementById('nA1')
let notaA2 = document.getElementById('nA2')
let notaA3 = document.getElementById('nA3')
let notaA4 = document.getElementById('nA4')
let notaA5 = document.getElementById('nA5')
let notaA6 = document.getElementById('nA6')
let notaA7 = document.getElementById('nA7')
let notaA8 = document.getElementById('nA8')
let notaA9 = document.getElementById('nA9')
let notaA10 = document.getElementById('nA10')
let notaA11 = document.getElementById('nA11')
let notaA12 = document.getElementById('nA12')
let notaA13 = document.getElementById('nA13')
let notaA14 = document.getElementById('nA14')
let notaA15 = document.getElementById('nA15')

let notasA = [notaA1, notaA2, notaA3, notaA4, notaA5, notaA6, notaA7, notaA8, notaA9, notaA10, notaA11, notaA12, notaA13, notaA14, notaA15]



let botaoE = document.getElementById('e7')
let botaoA = document.getElementById('a7')
let botaoB = document.getElementById('b7')



botaoE.onmouseout = function () {

    for (i = 0; i < 16; i++){

        notasE[i].style.backgroundColor = 'gray'

    }

    for (i = 0; i < 15; i++){

        notasA[i].style.backgroundColor = 'gray'

    }

 
     
}

botaoB.onmouseout = function () {

    

    for (i = 0; i < 14; i++){

        notasB[i].style.backgroundColor = 'gray'

    }   
    
    for (i = 0; i < 15; i++){

        notasA[i].style.backgroundColor = 'gray'

    }    

      
}

botaoA.onmouseout = function () {

    for (i = 0; i < 16; i++){

        notasE[i].style.backgroundColor = 'gray'

    }

    for (i = 0; i < 15; i++){

        notasA[i].style.backgroundColor = 'gray'

    }
       
}



botaoE.onmouseover = function () {

    for (i = 0; i < 14; i++){

        notasB[i].style.display = 'none'

    }  

   

    for (i = 0; i < 16; i++){

        notasE[i].style.display = 'block'

    }

    notaE1.style.backgroundColor = 'greenyellow'
    notaE2.style.backgroundColor = 'orange'
    notaE3.style.backgroundColor = 'blue'
    notaE4.style.backgroundColor = 'greenyellow'
    notaE5.style.backgroundColor = 'greenyellow'
    notaE6.style.backgroundColor = 'orange'
    notaE7.style.backgroundColor = 'greenyellow'
    notaE8.style.backgroundColor = 'orange'
    notaE9.style.backgroundColor = 'blue'
    notaE10.style.backgroundColor = 'greenyellow'
    notaE11.style.backgroundColor = 'greenyellow'
    notaE12.style.backgroundColor = 'orange'
    notaE13.style.backgroundColor = 'greenyellow'
    notaE14.style.backgroundColor = 'orange'
    notaE15.style.backgroundColor = 'blue'
    notaE16.style.backgroundColor = 'greenyellow'


    for (i = 0; i < 15; i++){

        notasA[i].style.display = 'none'

    }

    
    
    
}

botaoA.onmouseover = function () {
    
    for (i = 0; i < 14; i++){

        notasB[i].style.display = 'none'

    }  
   
    
    for (i = 0; i < 15; i++){

        notasA[i].style.display = 'block'

    }
   

    for (i = 0; i < 16; i++){

        notasE[i].style.display = 'none'

    }

    notaA1.style.backgroundColor = 'greenyellow'
    notaA2.style.backgroundColor = 'orange'
    notaA3.style.backgroundColor = 'greenyellow'
    notaA4.style.backgroundColor = 'orange'
    notaA5.style.backgroundColor = 'blue'
    notaA6.style.backgroundColor = 'greenyellow'
    notaA7.style.backgroundColor = 'greenyellow'
    notaA8.style.backgroundColor = 'orange'
    notaA9.style.backgroundColor = 'greenyellow'
    notaA10.style.backgroundColor = 'orange'
    notaA11.style.backgroundColor = 'blue'
    notaA12.style.backgroundColor = 'greenyellow'
    notaA13.style.backgroundColor = 'greenyellow'
    notaA14.style.backgroundColor = 'orange'
    notaA15.style.backgroundColor = 'greenyellow'
}

botaoB.onmouseover = function () {

    notaB1.style.backgroundColor = "greenyellow"
    notaB2.style.backgroundColor = "orange"
    notaB3.style.backgroundColor = "greenyellow"
    notaB4.style.backgroundColor = "orange"
    notaB5.style.backgroundColor = "blue"
    notaB6.style.backgroundColor = "greenyellow"
    notaB7.style.backgroundColor = "greenyellow"
    notaB8.style.backgroundColor = "orange"
    notaB9.style.backgroundColor = "greenyellow"
    notaB10.style.backgroundColor = "orange"
    notaB11.style.backgroundColor = "blue"
    notaB12.style.backgroundColor = "greenyellow"
    notaB13.style.backgroundColor = "greenyellow"
    notaB14.style.backgroundColor = "orange"

    for (i = 0; i < 14; i++){

        notasB[i].style.display = 'block'

    }  
 
   
    

    for (i = 0; i < 16; i++){

        notasE[i].style.display = 'none'

    }

    for (i = 0; i < 15; i++){

        notasA[i].style.display = 'none'

    }

    
}

