let barToast = {
    success: function(config){
        let toastBackground = document.createElement('div');
        let toastContainer  = document.createElement('div');
        let toastBody       = document.createElement('div');
    
        let toastIcon       = document.createElement('div');
        let toastText       = document.createElement('div');
    
        toastBackground .appendChild(toastContainer);
        toastContainer  .appendChild(toastBody);
        toastBody       .appendChild(toastIcon);
        toastBody       .appendChild(toastText);

        if(config.position == 'top'){
            toastBackground.style.position  = "absolute";
            toastBackground.style.left      = "50%";
            toastBackground.style.top       = "5%";
            toastBackground.style.transform = "translate(-50%, -5%)";
        }
        else if(config.position == 'bottom'){
            toastBackground.style.position  = "absolute";
            toastBackground.style.left      = "50%";
            toastBackground.style.bottom    = "5%";
            toastBackground.style.transform = "translate(-50%, -5%)";
        }
    
        toastContainer  .setAttribute("style",`max-width: 300px; overflow: hidden; white-space: nowrap; background-color: ${config.bgColor}; color: ${config.color}; box-shadow: 0px 0px 8px 0px #efefef; border-left: 5px solid #3BE234; border-radius: 5px`);
        toastBody       .setAttribute("style","height: 100%; box-sizing: border-box; padding: 10px; display: flex; align-items: center;");
        toastText       .setAttribute("style","font-size: 15px; font-family: Arial; margin-left: 10px");
        toastIcon       .setAttribute("style","width: 15px; min-width: 15px; height: 15px; min-height: 15px; padding: 3px; border-radius: 50%; background-color: #3BE234");
    
        toastText.innerText = config.text;
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>`;
    
        document.body.appendChild(toastBackground);
        console.log(toastBackground);
    },
}
