const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
          root: rootSelector,
          swiper:'[data-js-slider-swiper]',
      }

  constructor(rootElement){
        this.rootElement = rootElement
        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
        this.init()
    }

    init(){
          new Swiper(this.swiperElement, {
          slidesPerView:'auto', 
          spaceBetween: 48,
          centeredSlides: true,
          observer: true,          // следить за самим swiper-контейнером
          observeParents: true,    // следить за родителями контейнера
          observeSlideChildren: true, 
      
          
          pagination: {
              el: '.swiper-pagination',
              clickable:true
            },
    
    });
    }
}

class SliderCollection {
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((element)=>{
            new Slider(element)
        })
         
    }
}



export default SliderCollection