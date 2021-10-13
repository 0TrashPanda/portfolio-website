function textvlak() {
    textbox=document.getElementById("textbox").value

        velt=parseInt(textbox).toString(2);
        hex=parseInt(textbox).toString(16);
        
        document.getElementById("velt").value=velt
        document.getElementById('hex').value=hex
     }

     function binaryIn() {
        velt=document.getElementById("velt").value

        textbox=parseInt(velt,2)
        hex=parseInt(velt,2).toString(16)
        document.getElementById("textbox").value=textbox
        document.getElementById('hex').value=hex
     }

     function hexa() {
         hex=document.getElementById('hex').value

         textbox=textbox=parseInt(hex,16)
         velt=parseInt(hex,16).toString(2)
         document.getElementById("velt").value=velt
         document.getElementById("textbox").value=textbox
     }