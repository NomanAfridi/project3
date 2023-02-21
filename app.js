// Navbar Sliding 

$("#bars").click(function(){
    $("#panel").slideToggle("slow");
  });
  
  

// Auto typing effect

var typed = new Typed(".autoType" , {
    strings: ["Nouman" , "Web Designer" , "UI Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// var waypoint = new Waypoint({
//   element: document.getElementById('px-offset-waypoint'),
//   handler: function(direction) {
//     notify('I am 20px from the top of the window')
//   },
//   offset: 20 
// })  


// Animations Creation

$(document).ready(function(){
  $('.main').waypoint(function(direction){
    $('.main').addClass('animate__animated animate__fadeInLeft')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.anim1').waypoint(function(direction){
    $('.anim1').addClass('animate__animated animate__fadeInUp')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.anim2').waypoint(function(direction){
    $('.anim2').addClass('animate__animated animate__fadeInUp')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.left').waypoint(function(direction){
    $('.left').addClass('animate__animated animate__fadeInLeft')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.up').waypoint(function(direction){
    $('.up').addClass('animate__animated animate__fadeInUp')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.down').waypoint(function(direction){
    $('.down').addClass('animate__animated animate__fadeInDown')
  }, {
    offset: "500px"
  })
})
$(document).ready(function(){
  $('.right').waypoint(function(direction){
    $('.right').addClass('animate__animated animate__fadeInRight')
  }, {
    offset: "500px"
  })
})

$(document).ready(function(){
  $('.anim3').waypoint(function(direction){
    $('.anim3').addClass('animate__animated animate__fadeInLeft')
  }, {
    offset: "600px"
  })
})
$(document).ready(function(){
  $('.anim4').waypoint(function(direction){
    $('.anim4').addClass('animate__animated animate__fadeInLeft')
  }, {
    offset: "700px"
  })
})
$(document).ready(function(){
  $('.anim5').waypoint(function(direction){
    $('.anim5').addClass('animate__animated animate__fadeInUp')
  }, {
    offset: "700px"
  })
})
$(document).ready(function(){
  $('.anim6').waypoint(function(direction){
    $('.anim6').addClass('animate__animated animate__fadeInRight')
  }, {
    offset: "700px"
  })
})

$(document).ready(function(){
  $('.anim7').waypoint(function(direction){
    $('.anim7').addClass('animate__animated animate__fadeIn')
  }, {
    offset: "800px"
  })
})

$(document).ready(function(){
  $('.anim8').waypoint(function(direction){
    $('.anim8').addClass('animate__animated animate__fadeIn')
  }, {
    offset: "400px"
  })
})