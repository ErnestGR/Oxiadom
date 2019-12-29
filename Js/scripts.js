function resize() {
      if ($(window).width() < 768) {
            $(".card img").attr('src', 'img/03.jpg');
      } else {
            $(".card img").attr('src', 'img/03.2.jpg');
      }
}
resize();
$(window).on('resize', resize);