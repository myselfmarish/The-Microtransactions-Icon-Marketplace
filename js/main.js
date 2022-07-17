(() => {
    console.log('Click any icon!');
    
    //elements
    let allIcons = document.querySelectorAll("#iconWrapper div");

    //function
    function logMyId(){
        console.log(this.firstChild.id);
    }
    
        
    //events
    allIcons.forEach(item=>{
        item.addEventListener("click", logMyId);
    })    
})();
    