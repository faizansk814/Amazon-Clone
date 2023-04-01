
  
$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
       dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    });
});

$(document).ready(function(){
  $('.slider2').slick({
    autoplay: false,
    autoplaySpeed: 1000,
     dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
  });
  $('.slide-prev').click(function(e){ 
    //e.preventDefault(); 
$('.slider2').slick('slickPrev');
} );

$('.slide-next').click(function(e){
//e.preventDefault(); 
$('.slider2').slick('slickNext');
} );  
});

$(document).ready(function(){
  $('.slider3').slick({
    autoplay: false,
    autoplaySpeed: 1000,
     dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:true
  });
  $('.slide-previous').click(function(e){ 
    //e.preventDefault(); 
$('.slider3').slick('slickPrev');
} );

$('.slide-nexting').click(function(e){
//e.preventDefault(); 
$('.slider3').slick('slickNext');
} );
});

let gotoaccount=document.getElementById("gotoaccount")
let userdata=JSON.parse(localStorage.getItem("user"))||[]

gotoaccount.addEventListener('click',()=>{
  if(userdata.length==0){
    window.location.href="signup.html"
  }else{
    window.location.href="accounts.html"
  }
})