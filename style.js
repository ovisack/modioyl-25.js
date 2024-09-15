document.addEventListener("DOMContentLoaded", 
    function(){
        const sections=
    document.querySelectorAll('section');  
    


for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px'
    section.style.borderRadius='15px'
    section.style.paddingLeft='8px'
    section.style.backgroundColor='lightgray'
}
})
document.addEventListener("DOMContentLoaded",
function(){
    const sections=
document.getElementById('places-container');

for(const placesContainer of sections){
    placesContainer.style.backgroundColor='yellow-bg'
}

})