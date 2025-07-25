function changebackground(color){
    document.body.style.backgroundColor=color; // this function does only one thing but we might need multif=ple functionality to take place upon clicking the same button once.

}
const darkbutton = document.getElementById('blackbutton'); // this way, we can acces the element
darkbutton.addEventListener('click', function(){
    changebackground('black');
})
// now we can add as many functionality we want on the click of this button 




// create button that toggles between dark and light mode
const themebutton = document.getElementById('themebutton')
themebutton.addEventListener('click',()=>{
    const currcolor= document.body.style.backgroundColor;
    if(!currcolor || currcolor == 'white'){
        changebackground('black')
        themebutton.innerText='light mode'
    }
    else {
        changebackground('white') 
        themebutton.innerText='dark mode'
    }
})