
	

    function cuenta(){ 
        numCaracteres = document.formulario.mensajeOriginal.value.length 
        document.formulario.numCaracteres.value = numCaracteres 
    } 
    function cuentaModif(){ 
        numCaracteresModificado = document.formulario.mensajeModificado.value.length 
        document.formulario.numCaracteresModificado.value = numCaracteresModificado 
      }  
    function minuscula(){
        
        const string=document.formulario.mensajeOriginal.value;
        stringMinuscula=string.toLowerCase();
        document.formulario.mensajeOriginal.value = stringMinuscula;
    }
    function acento(){
        
        const string=document.formulario.mensajeOriginal.value;
        stringSinAcento=string.replace(/á/g,'a');
        stringSinAcento=stringSinAcento.replace(/é/g,'e');
        stringSinAcento=stringSinAcento.replace(/í/g,'i');
        stringSinAcento=stringSinAcento.replace(/ó/g,'o');
        stringSinAcento=stringSinAcento.replace(/ú/g,'u');
        document.formulario.mensajeOriginal.value = stringSinAcento;
    }

    function encriptar(){
        
        const string=document.formulario.mensajeOriginal.value;
        stringEncriptado=string.replace(/e/g,'enter');
        stringEncriptado=stringEncriptado.replace(/i/g,'imes');
        stringEncriptado=stringEncriptado.replace(/a/g,'ai');
        stringEncriptado=stringEncriptado.replace(/o/g,'ober');
        stringEncriptado=stringEncriptado.replace(/u/g,'ufati');
        document.formulario.mensajeModificado.value = stringEncriptado;
    }
    
    function desencriptar(){
        
        const string=document.formulario.mensajeOriginal.value;
        stringDesencriptado=string.replace(/ufati/g,'u');
        stringDesencriptado=stringDesencriptado.replace(/ober/g,'o');
        stringDesencriptado=stringDesencriptado.replace(/ai/g,'a');
        stringDesencriptado=stringDesencriptado.replace(/imes/g,'i');
        stringDesencriptado=stringDesencriptado.replace(/enter/g,'e');
        document.formulario.mensajeModificado.value = stringDesencriptado;
    }
    
    function copiaTexto () {
        var txt = document.getElementById("mensajeModificado").value;
        navigator.clipboard.writeText(txt)
        
    }
    function infoTextoCopiado () {
        var mensaje = "El texto modificado fue copiado en portapapeles";
        document.formulario.mensajeModificado.placeholder = mensaje;
    }
    
    function habilitarBoton(){
        
        document.formulario.boton2.disabled=false;
    }

    function borrarTexto () {
        document.getElementById ("mensajeModificado").value = "";
        infoTextoCopiado ()
    }

    function ocultarTablero() {
        var visible=document.getElementById("soloMuñeco");
        var txt=document.getElementById("mensajeModificado").value;
                  
            if(visible.style.display==="none" && txt===""){
                visible.style.display = "block";          
            }else{
                visible.style.display = "none";              
       }

    }
