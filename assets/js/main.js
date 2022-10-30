//Active Class
$(document).ready(function(){
	$('.nav-item a').click(function(){
		$('.nav-item a').removeClass("active");
		$(this).addClass("active");
	});
  // Nav menu visible
  if($(window).width() <= 767){
    $('.nav-toggle-btn').click(function(){
      $(this).closest('.nav-items-wrapper').toggleClass('menu-visible');
    });
  }
});

// fixed header
$(window).scroll(function(){
  var scrollTop =$(window).scrollTop();
  if(scrollTop >=100){
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header');
  }
});

// Image Gallery
if ( $(".image-grid-inner").length>0 ){
  lightGallery();
  lightBox();
}

// Window Resize Event
$(window).resize(function(){
  lightGallery();
});

// Document Ready Event
$(document).ready(function(){
  setTimeout(function(){
    $('.image-grid-inner').addClass('loaded');
  },1000);
});


// Light Gallery Function
function lightGallery(){
  $('body').imagesLoaded( function() {
    $('.image-grid-inner').GridHorizontal({
      item: '.image-grid-inner .item',
      minWidth: 400,
      maxRowHeight: 350,
      gutter: 5,
    });
  });
}

// LightBox Function
function lightBox(){
  (function() {
      var $gallery = new SimpleLightbox('.image-grid-inner a', {});
  })();
}