(function() {

    let button;
    function getButton(){
        button = document.querySelector(".share-solution-button");
        console.log("try:",button);
        if(button==null){
            setTimeout(getButton, 1000);
        } else{
            console.log(button);
            if(button){
                button.click();
            }
        }
    }
    getButton();

})();