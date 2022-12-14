
export class MyWebscoket{
    websocket:WebSocket  ;
    apiUrl:string ;
    contructor(apiUrl:string){
        console.log('apiUrl ',apiUrl) ;
         this.apiUrl  = apiUrl ;
    }
    openEvent(evt:Event) {
        console.log('connection established');
    }  
    sendMessage() {
        // var time = new Date().toTimeString();
        // websocket.send(time + ' ' + messageField.value);
        // messageField.value = '';
    }
    onMessage(evt:Event) {
        // var label = document.createElement('p');
        // label.style.wordWrap = "break-word";
        // label.innerHTML = evt.data;
        // messageArea.appendChild(label);
    }
    onError(evt:Event) {
        console.log('an error occurred')
    }
}
















































































































