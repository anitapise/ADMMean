$(window).scroll(function() {
   if($(this).scrollTop() > 50)
   {
       $('.navbar').addClass('affix');
   } else {
       $('.navbar').removeClass('affix');
   }
});
