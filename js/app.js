  document.addEventListener( 'DOMContentLoaded', function() {
      var splide = new Splide('.splide', {
          type: 'loop',
          start: 3,
          perPage: 1,
          speed: 1000,
          perMove: 1,
          width: '100%',
          fixedWidth: '540px',
          autoWidth: true,
          fixedHeight: '360px',
          autoHeight: true,
          gap: '30px',
          padding: { left: '20%', right: '20%' },
          pagination: false,
          drag: true,
          autoplay: true,
          interval: 3000,
          keyboard: true,
          breakpoints: {
              640: {
			    fixedWidth: '270px',
                fixedHeight: '180px',
		    },
          },
          reducedMotion: {
                speed      : 0,
                rewindSpeed: 0,
                autoplay   : 'pause',
          },
          classes: {
              	arrows: 'splide__arrows arrows-ctrl',
                arrow : 'splide__arrow btn-arrow',
                prev  : 'splide__arrow--prev btn-arrow-left',
                next  : 'splide__arrow--next btn-arrow-right'
          }
          
    } );
    splide.mount();
  } );