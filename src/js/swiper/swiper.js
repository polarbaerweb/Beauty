import Swiper from 'swiper/bundle';


export const swiper = new Swiper(".swiper", getConfiguration );

function getConfiguration ()
{
	const config =  {
		direction: 'horizontal',
		loop: true
	}

	return config
}

export class SwiperOperation {
  constructor() {
    this.swiper_container = swiper;
    this.slides = document.querySelectorAll(".slide-button");
    this.slide_type = "";
    this._getSlideMethod = this._getSlideMethod.bind(this);
  }

  attachMethodToButton() {
    this.slides.forEach(element => {
      this.slide_type = element.dataset.slide_type;
      element.addEventListener("click", this._getSlideMethod());
    });
  }

  _getSlideMethod() {
    const method = {
      prev: () => this.swiper_container.slidePrev(1000),
      next: () => this.swiper_container.slideNext(1000),
    };

    return method[this.slide_type];
  }
}
