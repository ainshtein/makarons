// -------- SLIDER ------- //
;$(document).ready(function() {

  $(".owl-carousel").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true,
      autoPlay : true,

      items:1,
      margin:0,
      autoHeight:true

      // responsive:{
      //   0:{
      //       items:1,
      //   },
      //   480:{
      //       items:1,
      //       nav:false
      //   },
      //   768:{
      //       items:1,
      //       nav:true,
      //       // loop:false
      //   },
      //   992:{
      //       items:1,
      //       nav:true,
      //       // loop:false
      //   }
      // }
  });
});