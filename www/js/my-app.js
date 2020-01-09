var pj1=[0,0,0,0,0,0,0,0,0,0,0];
var pj2=[0,0,0,0,0,0,0,0,0,0,0];
var pj3=[0,0,0,0,0,0,0,0,0,0,0];
var pj4=[0,0,0,0,0,0,0,0,0,0,0];
var pj5=[0,0,0,0,0,0,0,0,0,0,0];
var pj6=[0,0,0,0,0,0,0,0,0,0,0];
var tot1=0;
var tot2=0;
var tot3=0;
var tot4=0;
var tot5=0;
var tot6=0;
var nombrej1=''; 
var nombrej2;
var nombrej3;
var nombrej4;
var nombrej5;
var nombrej6;
var boton = "nada";
var jug = 0;
var pos = 0;
var val = 0;
var cantjug = 2;

function cambarr(valor){
    
    
        switch(jug){
            case 1: pj1[pos-1]= val*valor;
            
                    break;
    	    case 2: pj2[pos-1]= val*valor;
    	    
                    break;
                    
    	    case 3: pj3[pos-1]= val*valor;
    	    
                    break;                    

    	    case 4: pj4[pos-1]= val*valor;
    	    
                    break;
                    
    	    case 5: pj5[pos-1]= val*valor;
    	    
                    break;                    
            
    	    case 6: pj6[pos-1]= val*valor;
    	    
                    break;            
            
        }
}

function tacha(){
    
    switch(jug){
     
     case 1: pj1[pos-1]=0;
             break;
     case 2: pj2[pos-1]=0;
             break;
    
     case 3: pj3[pos-1]=0;
             break;
     case 4: pj4[pos-1]=0;
             break;
        
     case 5: pj5[pos-1]=0;
             break;
             
     case 6: pj6[pos-1]=0;
             break;
             
            
     
    }
     
     
}
    
    




    
    
function calctot(){
 
	switch(jug){
   
	case 1:    
        tot1=0;
	    for(var i=0;i<11;i++){
	           tot1+=pj1[i];  
    	} 
    	 
    	$$('#totj1').text(tot1);
	    break;
	
	case 2:    
        tot2=0;
	    for(var i=0;i<11;i++){
	           tot2+=pj2[i];  
    	} 
       	$$('#totj2').text(tot2);
    	break;
    	
	case 3:    
        tot3=0;
	    for(var i=0;i<11;i++){
	           tot3+=pj3[i];  
    	} 
       	$$('#totj3').text(tot3);
    	break;
    	
	case 4:    
        tot4=0;
	    for(var i=0;i<11;i++){
	           tot4+=pj4[i];  
    	} 
       	$$('#totj4').text(tot4);
    	break;
    	
	case 5:    
        tot5=0;
	    for(var i=0;i<11;i++){
	           tot5+=pj5[i];  
    	} 
       	$$('#totj5').text(tot5);
    	break;
    	
	case 6:    
        tot6=0;
	    for(var i=0;i<11;i++){
	           tot6+=pj6[i];  
    	} 
       	$$('#totj6').text(tot6);
    	break;
    	
    	
    	

	}
	
}


function todoA0(){    
    $$('.color-gray').text('-');    
    for (var i=0; i<11; i++){        
        pj1[i]=0;
        pj2[i]=0;
        pj3[i]=0;
        pj4[i]=0;
        pj5[i]=0;
        pj6[i]=0;
    }
}


// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
         
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/anota/',
        url: 'anota.html',
      },
      
      
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
    
 });  


// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
});



$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    $$('#iniciar').on('click',function(){
        nombrej1= $$('#pl1').val();
        nombrej2= $$('#pl2').val();
        nombrej3= $$('#pl3').val();
        nombrej4= $$('#pl4').val();
        nombrej5= $$('#pl5').val();
        nombrej6= $$('#pl6').val();
        
        
        
        
        
    });
        
    $$("#agrjug2").on("click", function (){
            cantjug=2; 
            $$("#j3").removeClass("visible").addClass("oculto");        
            $$("#j4").removeClass("visible").addClass("oculto");        
            $$("#j5").removeClass("visible").addClass("oculto");        
            $$("#j6").removeClass("visible").addClass("oculto");        
    });
    $$("#agrjug3").on("click", function (){
            cantjug=3; 
            $$("#j3").removeClass("oculto").addClass("visible");   
            $$("#j4").removeClass("visible").addClass("oculto");        
            $$("#j5").removeClass("visible").addClass("oculto");        
            $$("#j6").removeClass("visible").addClass("oculto");  
    });
    $$("#agrjug4").on("click", function (){
            cantjug=4;
            $$("#j3").removeClass("oculto").addClass("visible");
            $$("#j4").removeClass("oculto").addClass("visible");         
            $$("#j5").removeClass("visible").addClass("oculto");        
            $$("#j6").removeClass("visible").addClass("oculto");  
    });    
    $$("#agrjug5").on("click", function (){
            cantjug=5;
            $$("#j3").removeClass("oculto").addClass("visible");
            $$("#j4").removeClass("oculto").addClass("visible");        
            $$("#j5").removeClass("oculto").addClass("visible");       
            $$("#j6").removeClass("visible").addClass("oculto");  
    });      
        $$("#agrjug6").on("click", function (){
            cantjug=6;    
            $$("#j3").removeClass("oculto").addClass("visible");
            $$("#j4").removeClass("oculto").addClass("visible");        
            $$("#j5").removeClass("oculto").addClass("visible");        
            $$("#j6").removeClass("oculto").addClass("visible");        
    });      

        
        
        
    
    });
    
    





$$(document).on('page:init', '.page[data-name="anota"]', function () {
    
    $$('#puntos1').text(nombrej1);
    $$('#puntos2').text(nombrej2);
    $$('#puntos3').text(nombrej3);
    $$('#puntos4').text(nombrej4);
    $$('#puntos5').text(nombrej5);
    $$('#puntos6').text(nombrej6);
    
    switch(cantjug){
        
        case 3: $$(".j3").removeClass("oculto").addClass("visible");
                $$(".j4").removeClass("visible").addClass("oculto");
                $$(".j5").removeClass("visible").addClass("oculto");
                $$(".j6").removeClass("visible").addClass("oculto");
                break;
                
       case 4:  $$(".j3").removeClass("oculto").addClass("visible");
                $$(".j4").removeClass("oculto").addClass("visible");
                $$(".j5").removeClass("visible").addClass("oculto");
                $$(".j6").removeClass("visible").addClass("oculto");
                break;
                
      case 5:   $$(".j3").removeClass("oculto").addClass("visible");
                $$(".j4").removeClass("oculto").addClass("visible");
                $$(".j5").removeClass("oculto").addClass("visible");
                $$(".j6").removeClass("visible").addClass("oculto");
                break;
                
      case 6:   $$(".j3").removeClass("oculto").addClass("visible");
                $$(".j4").removeClass("oculto").addClass("visible");
                $$(".j5").removeClass("oculto").addClass("visible");
                $$(".j6").removeClass("oculto").addClass("visible");
                break;
                
      default:  $$(".j3").removeClass("visible").addClass("oculto");
                $$(".j4").removeClass("visible").addClass("oculto");
                $$(".j5").removeClass("visible").addClass("oculto");
                $$(".j6").removeClass("visible").addClass("oculto");
                break;            
        
    }
    



 var acnum = app.actions.create({
        
  closeByOutsideClick: true,
  convertToPopover: true,
  buttons: [
   
    {
      text: '1',
      onClick: function () {
          
          cambarr(1);
          $$('#d'+pos+'j'+jug).text(pos);
          calctot(); 
    }    
    },
    
    {
      text: '2',
      onClick: function () {
          cambarr(2);
           $$('#d'+pos+'j'+jug).text(2*pos);
          calctot();  
      }
    },
    
    {
      text: '3',
      onClick: function () {
          cambarr(3);
           $$('#d'+pos+'j'+jug).text(3*pos);
          calctot();  
      }
    },
    
    {
      text: '4',
      onClick: function () {
          cambarr(4);
           $$('#d'+pos+'j'+jug).text(4*pos);
          calctot();   
      }
    },
    
    {
      text: '5',
          onClick: function () {
          cambarr(5);
           $$('#d'+pos+'j'+jug).text(5*pos);
          calctot();
      }
    },
    
    
    
    {
      text: 'Tachar',
      color: 'red',
      onClick: function () {
      tacha();
           $$('#d'+pos+'j'+jug).text('x');
          calctot();
      }
    },
  ]
});    
    
var acesp  = app.actions.create({
  loseByOutsideClick: true,
  convertToPopover: true,  
  buttons: [
   
    {
      text: 'Servido',
      onClick: function () {
        val+=5;
        cambarr(1);
        $$('#d'+pos+'j'+jug).text(val);
        calctot();
      }
    },
    
    {
      text: 'No servido',
      onClick: function () {        
        cambarr(1);
        $$('#d'+pos+'j'+jug).text(val);
        calctot();        
      }
    },
    
    {
      text: 'Tachar',
      color: 'red',
      onClick: function () {
        tacha();
        
        $$('#d'+pos+'j'+jug).text('x');
        calctot();      
      }
    },
  ]
});   
   




 
 
   

$$(".dado").on("click", function(){
    boton = this.id;
    if(boton.length==5){
        
         jug = parseInt(boton.substring(4,5));
         pos = parseInt(boton.substring(1,3));
    }else{
      
        jug =  parseInt(boton.substring(3,4));
        pos =  parseInt(boton.substring(1,2));
    }
    
    
    });
    
    
$$('#d1j1').on('click',function(){acnum.open(); val=1;});
$$('#d2j1').on('click',function(){acnum.open();val=2;});
$$('#d3j1').on('click',function(){acnum.open();val=3;});        
$$('#d4j1').on('click',function(){acnum.open();val=4;});
$$('#d5j1').on('click',function(){acnum.open();val=5;});
$$('#d6j1').on('click',function(){acnum.open();val=6;});        
$$('#d7j1').on('click',function(){acesp.open();val=20;});     
$$('#d8j1').on('click',function(){acesp.open();val=30;});  
$$('#d9j1').on('click',function(){acesp.open();val=40;}); 
$$('#d10j1').on('click',function(){acesp.open();val=50;});   
$$('#d11j1').on('click',function(){acesp.open();val=100;});
$$('#d1j2').on('click',function(){acnum.open(); val=1;});
$$('#d2j2').on('click',function(){acnum.open();val=2;});
$$('#d3j2').on('click',function(){acnum.open();val=3;});        
$$('#d4j2').on('click',function(){acnum.open();val=4;});
$$('#d5j2').on('click',function(){acnum.open();val=5;});
$$('#d6j2').on('click',function(){acnum.open();val=6;});        
$$('#d7j2').on('click',function(){acesp.open();val=20;});     
$$('#d8j2').on('click',function(){acesp.open();val=30;});  
$$('#d9j2').on('click',function(){acesp.open();val=40;}); 
$$('#d10j2').on('click',function(){acesp.open();val=50;});   
$$('#d11j2').on('click',function(){acesp.open();val=100;});
$$('#d1j3').on('click',function(){acnum.open(); val=1;});
$$('#d2j3').on('click',function(){acnum.open();val=2;});
$$('#d3j3').on('click',function(){acnum.open();val=3;});        
$$('#d4j3').on('click',function(){acnum.open();val=4;});
$$('#d5j3').on('click',function(){acnum.open();val=5;});
$$('#d6j3').on('click',function(){acnum.open();val=6;});        
$$('#d7j3').on('click',function(){acesp.open();val=20;});     
$$('#d8j3').on('click',function(){acesp.open();val=30;});  
$$('#d9j3').on('click',function(){acesp.open();val=40;}); 
$$('#d10j3').on('click',function(){acesp.open();val=50;});   
$$('#d11j3').on('click',function(){acesp.open();val=100;});
$$('#d1j4').on('click',function(){acnum.open(); val=1;});
$$('#d2j4').on('click',function(){acnum.open();val=2;});
$$('#d3j4').on('click',function(){acnum.open();val=3;});        
$$('#d4j4').on('click',function(){acnum.open();val=4;});
$$('#d5j4').on('click',function(){acnum.open();val=5;});
$$('#d6j4').on('click',function(){acnum.open();val=6;});        
$$('#d7j4').on('click',function(){acesp.open();val=20;});     
$$('#d8j4').on('click',function(){acesp.open();val=30;});  
$$('#d9j4').on('click',function(){acesp.open();val=40;}); 
$$('#d10j4').on('click',function(){acesp.open();val=50;});   
$$('#d11j4').on('click',function(){acesp.open();val=100;});
$$('#d1j5').on('click',function(){acnum.open(); val=1;});
$$('#d2j5').on('click',function(){acnum.open();val=2;});
$$('#d3j5').on('click',function(){acnum.open();val=3;});        
$$('#d4j5').on('click',function(){acnum.open();val=4;});
$$('#d5j5').on('click',function(){acnum.open();val=5;});
$$('#d6j5').on('click',function(){acnum.open();val=6;});        
$$('#d7j5').on('click',function(){acesp.open();val=20;});     
$$('#d8j5').on('click',function(){acesp.open();val=30;});  
$$('#d9j5').on('click',function(){acesp.open();val=40;}); 
$$('#d10j5').on('click',function(){acesp.open();val=50;});   
$$('#d11j5').on('click',function(){acesp.open();val=100;});
$$('#d1j6').on('click',function(){acnum.open(); val=1;});
$$('#d2j6').on('click',function(){acnum.open();val=2;});
$$('#d3j6').on('click',function(){acnum.open();val=3;});        
$$('#d4j6').on('click',function(){acnum.open();val=4;});
$$('#d5j6').on('click',function(){acnum.open();val=5;});
$$('#d6j6').on('click',function(){acnum.open();val=6;});        
$$('#d7j6').on('click',function(){acesp.open();val=20;});     
$$('#d8j6').on('click',function(){acesp.open();val=30;});  
$$('#d9j6').on('click',function(){acesp.open();val=40;}); 
$$('#d10j6').on('click',function(){acesp.open();val=50;});   
$$('#d11j6').on('click',function(){acesp.open();val=100;});    
     




    


    

$$('#reinicio').on('click', function(){
    app.dialog.confirm('¿Quieres reiniciar?', function(){
        todoA0();
    });
    });
    

$$('#teminar').on('click', function(){
    
    app.dialog.confirm('¿Seguro que quieres terminar?', function(){
        todoA0();
        mainView.router.navigate('#');
        
       
    });   
    
});
});