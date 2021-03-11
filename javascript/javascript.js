

//Javascript
//Decalara la variables

var contador1 = 0;
var contador2 = 0;

//Evento onload()
window.onload = function(){
    var texto = "Ukelelia izan zan aurrenego opariya, baino ez bakarra. Opariyan lekua jakiteko pista eskatu: ";
 // 100 es el intervalo de minisegundos en el que se escribirá cada letra.
    maquina("texto1",texto,75);
    $('#ukelele').slideUp( 1000 ).delay( 8000 ).fadeIn( 900 );
    $('#b1').slideUp( 1000 ).delay( 8500 ).fadeIn( 900 );

    //Nuestro código
    // alert("Hola");

    //evento sobre la imagen con id img1


    $("#b1").click((e)=>{
        $("#container1").css("display","none");
        $("#container2").css("display","block");
        texto = "Igandero, ta igandia ez danian re bai, menditik bueltaka ibiltzen zea. Trekkineko zapatila ear hoiek mezi duen akzesoriua berko dituzu ba, ez?";
        maquina("texto2",texto,75);
        $('#img1').slideUp( 1000 ).delay( 11100 ).fadeIn( 900 );
        $('#te1').slideUp( 1000 ).delay( 18000 ).fadeIn( 900 );
        $('#t1').slideUp( 1000 ).delay( 22000 ).fadeIn( 900 );
        $('#b2').slideUp( 1000 ).delay( 23000 ).fadeIn( 900 );
        setTimeout(() => {
            $("#img1").delay( 100000 ).attr("src","fotos/foto1_1.jpg");
        }, 20000);
        
        
    });


    $("#b2").click((e)=>{
        if($("#t1").val().toLowerCase()=="legazpi"){
            $("#container2").css("display","none");
            $("#container3").css("display","block");
            texto = "Ya trekkineko galtzerdiak eukitzia pauso bat da, baino Stravan hasita zeala pauso bat gehio eman ber dezu. Bide oso luzetako ondo etorriko zaizu, fascitisa ez eukitzeko baitare. ";
            maquina("texto3",texto,75);
            $('#img2').slideUp( 1000 ).delay( 15100 ).fadeIn( 900 );
            $('#te2').slideUp( 1000 ).delay( 25000 ).fadeIn( 900 );
            $('#t2').slideUp( 1000 ).delay( 25000 ).fadeIn( 900 );
            $('#b3').slideUp( 1000 ).delay( 26000 ).fadeIn( 900 );
            setTimeout(() => {
                $("#img2").attr("src","fotos/foto2_1.jpg").delay( 200000 );
            }, 20000);
            
        }else{
            contador1 ++;
            if(contador1 == 1){
                alert("Munduko herriyik onena?");
            }else if(contador1 == 2){
                alert("Askotan entzundako herri bat");
            }else if(contador1 == 3){
                alert("AUPA L _ G _ _ P _ !!");
            }else{
                alert("Idatzi legazpi derrepentian!")
            }
            
        }
    });

    $("#b3").click((e)=>{
        if($("#t2").val().toLowerCase()=="porro"){
            $("#container3").css("display","none");
            $("#container4").css("display","block");
            texto = "Azken oparia ailatu da, nik uste onena. Maiderren horrenbeste diru ez gastatzeko baliyoko dizu. Baino seguru nao gehio erabilikozula 'por vicio'.";
            maquina("texto4",texto,75);
            $('#img3').slideUp( 1000 ).delay( 18100 ).fadeIn( 900 );
            $('#fin').slideUp( 1000 ).delay( 20100 ).fadeIn( 900 );
            setTimeout(() => {
                $("#img3").attr("src","fotos/foto3_1.jpg").delay( 300000 );
            }, 20000);
            

        }else{
            contador2 ++;
            if(contador2 == 1){
                alert("Zure aitan paisanua!");
            }else if(contador2 == 2){
                alert("Beai ikustea jun zinan Anoeta");
            }else if(contador2 == 3){
                alert("Egunero entzuten dezu bere abizena");
            }else{
                alert("Pedro.....PORRO")
            }
            
        }
    });

};

function maquina(contenedor,texto,intervalo){
    
    // Calculamos la longitud del texto
    longitud = texto.length;
    // Obtenemos referencia del div donde se va a alojar el texto.
    cnt = document.getElementById(contenedor);
    var i=0;
    // Creamos el timer
    timer = setInterval(function(){
       // Vamos añadiendo letra por letra y la _ al final.
       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
       // Si hemos llegado al final del texto..
       if(i >= longitud){
          // Salimos del Timer y quitamos la barra baja (_)
          clearInterval(timer);
          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
          return true;
       } else {
          // En caso contrario.. seguimos
          i++;
       }},intervalo);
 };
 
 
 