function calcular (){
    var opcion1=document.getElementById("1").checked;
    var opcion2=document.getElementById("2").checked;
    var opcion3=document.getElementById("3").checked;
    var opcion4=document.getElementById("4").checked;
    var opcion5=document.getElementById("5").checked;
  
    var cant1=document.getElementById("cant1").valueAsNumber;
    var cant2=document.getElementById("cant2").valueAsNumber;
    var cant3=document.getElementById("cant3").valueAsNumber
    var cant4=document.getElementById("cant4").valueAsNumber
    var cant5=document.getElementById("cant5").valueAsNumber
  
    var precio1 =0, precio2=0, precio3=0, precio4=0, precio5=0;
    var total1=0, total2=0, total3=0, total4=0, total5=0;
    var precioFinal;
    
    if(opcion1){
      precio1 = 5000;
      total1 =  precio1 * cant1;
  
    }
    if  (opcion2){
      precio2 = 2000;
      total2 =  precio2 * cant2;
    }
    if  (opcion3){
      precio3 = 1500;
      total3 =  precio3 * cant3;
    }
    if  (opcion4){
      precio4 = 2500;
      total4 =  precio4 * cant4;
    }
    if  (opcion5){
      precio5 = 10000;
      total5 =  precio5 * cant5;
    }
  
    precioFinal  = total1 + total2 + total3 + total4 + total5;
    document.getElementById("resultado").innerHTML="El Precio total es: " +precioFinal;
  }
  
  function borrar (){
      document.getElementById("1").checked="";
      document.getElementById("2").checked="";
      document.getElementById("3").checked="";
      document.getElementById("4").checked="";
      document.getElementById("5").checked="";
  
      document.getElementById("cant1").value="";
      document.getElementById("cant2").value="";
      document.getElementById("cant3").value="";
      document.getElementById("cant4").value="";
      document.getElementById("cant5").value="";
      
      document.getElementById("resultado").innerHTML="";
    
  }