
function activar(num){
    var i;
    for(i=1; i<6; i++)
    {
        paginaOferta =  document.getElementsByClassName(i);
        console.log(paginaOferta);    
        paginacion = document.getElementById(i);
        if(i == num)
        {
            paginaOferta[0].style.display = 'block';
            paginacion.classList.add("active");
        }else{
            paginacion.classList.remove("active");
            paginaOferta[0].style.display = 'none';
        }
       
    }
}

function anterior(){
    activo = document.getElementsByClassName("active");
    var valor = parseInt(activo[0].getAttribute('id'));
    if(valor > 1){
        valor= valor-1;
        activar(valor);
    }else{
        console.log(valor);
    }

}
function proxima(){
    activo = document.getElementsByClassName("active");
    var valor = parseInt(activo[0].getAttribute('id'));
    if(valor < 5){    
    valor=valor+1;
        activar(valor);
    }else{
        console.log(valor);
    }
}

