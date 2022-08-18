/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 653:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsAccordions = document.querySelectorAll('.jsAccordion');

  var _loop = function _loop(index) {
    var item = jsAccordions[index];
    var trigger = item.querySelector('.jsAccordionTrigger');
    var body = item.querySelector('.jsAccordionBody');
    var content = item.querySelector('.jsAccordionContent');
    check();
    trigger.addEventListener('click', function () {
      item.classList.toggle('is-active');
      check();
    });

    function check() {
      if (item.classList.contains('is-active')) {
        body.style.height = content.offsetHeight + 'px';
      } else {
        body.style.height = '';
      }
    }
  };

  for (var index = 0; index < jsAccordions.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 312:
/***/ (function() {

window.backdropOpen = function () {
  var body = document.querySelector('body');
  setTimeout(function () {
    if (!body.classList.contains('_backdrop')) {
      body.classList.add('_backdrop');
    }
  }, 0);
};

window.backdropClose = function () {
  var body = document.querySelector('body');

  if (body.classList.contains('_backdrop')) {
    body.classList.remove('_backdrop');
  }
};

/***/ }),

/***/ 942:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsReviewBody = document.querySelectorAll('.jsReviewBody');

  var _loop = function _loop(index) {
    var body = jsReviewBody[index];
    var content = body.querySelector('.jsReviewContent');
    var button = body.querySelector('.jsReviewMore');

    if (body.offsetHeight < content.offsetHeight) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }

    button.addEventListener('click', function () {
      body.classList.toggle('is-active');

      if (body.classList.contains('is-active')) {
        body.style.maxHeight = content.offsetHeight + 'px';
      } else {
        body.style.maxHeight = '';
      }
    });
  };

  for (var index = 0; index < jsReviewBody.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 642:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsFilterGroup = document.querySelectorAll('.jsFilterGroup');

  var _loop = function _loop(index) {
    var item = jsFilterGroup[index];
    var trigger = item.querySelector('.jsFilterGroupTrigger');
    var body = item.querySelector('.jsFilterGroupBody');
    var content = item.querySelector('.jsFilterGroupContent');
    trigger.addEventListener('click', function () {
      item.classList.toggle('is-active');
      checkClass();
    });

    if (window.innerWidth > 991) {
      checkClass();
    } else {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
      }
    }

    function checkClass() {
      if (item.classList.contains('is-active')) {
        body.style.maxHeight = content.offsetHeight + 'px';
      } else {
        body.style.maxHeight = '';
      }
    }
  };

  for (var index = 0; index < jsFilterGroup.length; index++) {
    _loop(index);
  }

  if (document.querySelector('.jsFilter')) {
    var filterClose = function filterClose() {
      jsFilter.classList.remove('is-active');
      jsFilterContent.classList.remove('is-active');
    };

    var jsFilter = document.querySelector('.jsFilter');
    var jsFilterTrigger = jsFilter.querySelector('.jsFilterTrigger');
    var jsFilterContent = jsFilter.querySelector('.jsFilterContent');
    var jsFilterClose = jsFilter.querySelector('.jsFilterClose');
    var jsFilterClear = jsFilter.querySelectorAll('.jsFilterClear');
    var jsFilterCount = jsFilter.querySelector('.jsFilterCount');
    var jsCheckbox = jsFilter.querySelectorAll('.jsCheckbox');
    var jsRadio = jsFilter.querySelectorAll('.jsRadio');
    var jsInput = jsFilter.querySelectorAll('.jsInput');
    var inputs = [jsCheckbox, jsRadio, jsInput]; // let checks = 0;
    // checks = inputsCheck();
    // inputEvent(jsCheckbox);
    // inputEvent(jsRadio);
    // function inputEvent(type){
    //     for (let index = 0; index < type.length; index++){
    //         let item = type[index];
    //         item.addEventListener('change', function(){
    //             inputsCheck()
    //         })
    //     }
    // }
    // function inputsCheck(){
    //     let ch = jsFilter.querySelectorAll('.jsCheckbox:checked').length;
    //     let rad = jsFilter.querySelectorAll('.jsRadio:checked').length;
    //     let count = ch + rad;
    //     jsFilterCount.innerHTML = count;
    //     //
    //     // console.log('checks count = ' + count);
    //     //
    //     return count;
    // }
    // function inputsClear(){
    //     for (let index = 0; index < inputs.length; index++){
    //         let group = inputs[index];
    //         for (let index = 0; index < group.length; index++){
    //             let groupItem = group[index];
    //             if(group == jsRadio){
    //                 groupItem.checked = false;
    //                 group[0].checked = true;
    //             }
    //             if(group == jsCheckbox){
    //                 groupItem.checked = false;
    //             }
    //             if(group == jsInput){
    //                 groupItem.value = "";
    //             }
    //         }
    //     }
    // }
    // for (let index = 0; index < jsFilterClear.length; index++){
    //     let button = jsFilterClear[index];
    //     button.addEventListener('click', function(e){
    //         e.preventDefault();
    //         inputsClear();
    //         inputsCheck()
    //     })
    // }
    //Open - Close

    document.addEventListener('click', function (e) {
      var target = e.target; // console.log('click');

      if (jsFilter.classList.contains('is-active')) {
        // console.log('submit');
        if (!target.closest('.jsFilter')) {
          filterClose();
          window.backdropClose(); // console.log('close');
        } else {// console.log('not close');
        }
      }
    });
    jsFilterTrigger.addEventListener('click', function () {
      jsFilter.classList.add('is-active');
      jsFilterContent.classList.add('is-active');
      window.backdropOpen();
    });
    jsFilterClose.addEventListener('click', function () {
      filterClose();
      window.backdropClose();
    });
  }
});

/***/ }),

/***/ 450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsHeader')) {
    var headerClose = function headerClose() {
      jsHeader.classList.remove('is-active');
      jsHeaderMenu.classList.remove('is-active');
      jsHeaderBurger.classList.remove('is-active');
    };

    var jsHeader = document.querySelector('.jsHeader');
    var jsHeaderMenu = document.querySelector('.jsHeaderMenu');
    var jsHeaderBurger = document.querySelector('.jsHeaderBurger');
    jsHeaderBurger.addEventListener('click', function () {
      if (jsHeader.classList.contains('is-active')) {
        headerClose();
        window.backdropClose();
      } else {
        jsHeader.classList.add('is-active');
        jsHeaderMenu.classList.add('is-active');
        jsHeaderBurger.classList.add('is-active');
        window.backdropOpen();
      }
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (jsHeader.classList.contains('is-active')) {
        if (!target.closest('.jsHeader')) {
          headerClose();
          window.backdropClose();
        }
      }
    });
  }
});

/***/ }),

/***/ 281:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsTumbler = document.querySelectorAll('.jsTumbler');

  var _loop = function _loop(index) {
    var item = jsTumbler[index];
    var link = item.querySelectorAll('.jsTumblerLink');
    var body = item.querySelectorAll('.jsTumblerItem');
    initTabs();

    var _loop2 = function _loop2(_index) {
      var thisLink = link[_index];
      var thisIndex = thisLink.getAttribute('data-tab');
      thisLink.addEventListener('click', function () {
        clear();
        thisLink.classList.add('is-active');
        item.querySelector('.jsTumblerItem[data-tab="' + thisIndex + '"]').classList.add('is-open');
      });
    };

    for (var _index = 0; _index < link.length; _index++) {
      _loop2(_index);
    }

    function initTabs() {
      initGroup(link);
      initGroup(body);

      function initGroup(group) {
        for (var _index2 = 0; _index2 < group.length; _index2++) {
          var groupItem = group[_index2];
          groupItem.setAttribute('data-tab', _index2);
        }
      }
    }

    function clear() {
      for (var _index3 = 0; _index3 < link.length; _index3++) {
        var linkItem = link[_index3];
        linkItem.classList.remove('is-active');
      }

      for (var _index4 = 0; _index4 < body.length; _index4++) {
        var bodyItem = body[_index4];
        bodyItem.classList.remove('is-open');
      }
    }
  };

  for (var index = 0; index < jsTumbler.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 267:
/***/ (function() {

var jsCoursesBody = document.querySelectorAll('.jsCoursesBody');

var _loop = function _loop(index) {
  var body = jsCoursesBody[index];
  var content = body.querySelector('.jsCoursesContent');
  var button = body.querySelector('.jsCoursesMore');
  button.addEventListener('click', function () {
    body.classList.toggle('is-active');

    if (body.classList.contains('is-active')) {
      body.style.maxHeight = content.offsetHeight;
    } else {
      body.style.maxHeight = '';
    }
  });
};

for (var index = 0; index < jsCoursesBody.length; index++) {
  _loop(index);
}

/***/ }),

/***/ 10:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsEventFilter')) {
    (function () {
      var showItems = function showItems(category) {
        for (var _index = 0; _index < jsEventFilterItem.length; _index++) {
          var item = jsEventFilterItem[_index];
          var itemCategory = item.getAttribute('data-category');

          if (category == 'all') {
            item.classList.remove('is-hide');
            item.classList.add('is-show');
            jsEventFilterAside.classList.remove('is-last');
          } else {
            jsEventFilterAside.classList.add('is-last');

            if (itemCategory == category) {
              item.classList.remove('is-hide');
              item.classList.add('is-show');
            } else {
              item.classList.add('is-hide');
              item.classList.remove('is-show');
            }
          }
        }
      };

      var removeItems = function removeItems() {
        for (var _index3 = 0; _index3 < jsEventFilterItem.length; _index3++) {
          var item = jsEventFilterItem[_index3];
          item.classList.remove('is-show');
        }
      };

      var removeBadges = function removeBadges() {
        for (var _index4 = 0; _index4 < jsEventFilterBadge.length; _index4++) {
          var button = jsEventFilterBadge[_index4];
          button.classList.remove('is-active');
        }
      };

      var jsEventFilter = document.querySelector('.jsEventFilter');
      var jsEventFilterItem = jsEventFilter.querySelectorAll('.jsEventFilterItem');
      var jsEventFilterBadge = jsEventFilter.querySelectorAll('.jsEventFilterBadge');
      var jsEventFilterAside = jsEventFilter.querySelector('.jsEventFilterAside');

      var _loop = function _loop(index) {
        var item = jsEventFilterItem[index];
        var itemCategory = item.getAttribute('data-category');
        checkCategory();

        function checkCategory() {
          if (window.innerWidth < 992) {
            item.style.order = itemCategory;
          } else {
            item.style.order = '';
          }
        }

        window.addEventListener('resize', function () {
          checkCategory();
        });
      };

      for (var index = 0; index < jsEventFilterItem.length; index++) {
        _loop(index);
      }

      var _loop2 = function _loop2(_index2) {
        var button = jsEventFilterBadge[_index2];
        var buttonCategory = button.getAttribute('data-category');
        button.addEventListener('click', function (e) {
          e.preventDefault();
          removeBadges();
          button.classList.add('is-active');
          removeItems();
          setTimeout(function () {
            showItems(buttonCategory);
          }, 0);
        });
      };

      for (var _index2 = 0; _index2 < jsEventFilterBadge.length; _index2++) {
        _loop2(_index2);
      }
    })();
  }
});

/***/ }),

/***/ 964:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lozad/dist/lozad.min.js
var lozad_min = __webpack_require__(59);
var lozad_min_default = /*#__PURE__*/__webpack_require__.n(lozad_min);
// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/dist/fancybox.esm.js
var fancybox_esm = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/header/scripts.js
var scripts = __webpack_require__(450);
// EXTERNAL MODULE: ./src/components/radio-tumbler/scripts.js
var radio_tumbler_scripts = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js

var regexpPhone = (/* unused pure expression or super */ null && (new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}')));
var regexpMail = (/* unused pure expression or super */ null && (new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)));
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var phoneMaskSettings = {
  mask: [{
    mask: '8 (000) 000-00-00',
    startsWith: '8',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '7',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '9',
    lazy: true
  }],
  dispatch: function dispatch(appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    return dynamicMasked.compiledMasks.find(function (m) {
      return number.indexOf(m.startsWith) === 0;
    }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
  }
};

if (phoneElement.length > 0) {
  for (var i = 0; i < phoneElement.length; i++) {
    var mask = (0,esm/* default */.ZP)(phoneElement[i], phoneMaskSettings);
  }
}

var jsInput = document.querySelectorAll('.jsInput');

var _loop = function _loop(index) {
  var input = jsInput[index];

  input.onblur = function () {
    input.closest('.input').classList.remove('is-focused');
  };

  input.onfocus = function () {
    input.closest('.input').classList.add('is-focused');
    input.closest('.input').classList.remove('is-error');
  };
};

for (var index = 0; index < jsInput.length; index++) {
  _loop(index);
}
// EXTERNAL MODULE: ./src/components/accordion/scripts.js
var accordion_scripts = __webpack_require__(653);
// EXTERNAL MODULE: ./src/components/backdrop/scripts.js
var backdrop_scripts = __webpack_require__(312);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(99);
;// CONCATENATED MODULE: ./src/components/slider/scripts.js
 // const jsSlider = new Swiper('.jsSlider .slider__inner', {
// 	modules: [Navigation, Pagination, Autoplay],
// 	autoplay: {
// 		delay: 5000,
// 	},
// 	pagination: {
// 		el: ".jsSlider .swiper-pagination",
// 		clickable: true,
// 		bulletClass: "slider__pagination-item",
// 	},
//     navigation: {
//         nextEl: '.jsSlider .swiper-button-next',
//         prevEl: '.jsSlider .swiper-button-prev',
//     },
// 	loop: false,
// 	slidesPerView: 4,
// 	speed: 600,
// 	centeredSlides: true,
// 	initialSlide: 1,
// 	breakpoints: {
// 		0:{
// 			spaceBetween: 16,
// 			slidesPerView: 1,
// 		},
// 		576: {
// 			spaceBetween: 16,
// 			slidesPerView: 1,
// 		},
// 		768: {
// 			slidesPerView: "auto",
// 			spaceBetween: 24,
// 		},
// 		992: {
// 			spaceBetween: 24,
// 		},
// 	}
// });

var jsSliderReviews = new swiper_esm/* default */.ZP('.jsSliderReviews .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl],
  pagination: {
    el: ".jsSliderReviews .swiper-pagination",
    clickable: true,
    bulletClass: "slider__pagination-item"
  },
  navigation: {
    nextEl: '.jsSliderReviews .swiper-button-next',
    prevEl: '.jsSliderReviews .swiper-button-prev'
  },
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 600,
  breakpoints: {
    0: {
      spaceBetween: 16,
      slidesPerView: 1
    },
    576: {
      spaceBetween: 16,
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 'auto',
      spaceBetween: 16
    },
    1100: {
      slidesPerView: 'auto',
      spaceBetween: 16
    }
  }
});
var jsSliderOffers = new swiper_esm/* default */.ZP('.jsSliderOffers .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
  pagination: {
    el: ".jsSliderOffers .swiper-pagination",
    bulletClass: "slider__pagination-item",
    clickable: true
  },
  navigation: {
    nextEl: '.jsSliderOffers .swiper-button-next',
    prevEl: '.jsSliderOffers .swiper-button-prev'
  },
  loop: true,
  slidesPerView: 1,
  speed: 600,
  centeredSlides: true,
  spaceBetween: 25,
  breakpoints: {
    0: {
      pagination: {
        el: ".jsSliderOffers .swiper-pagination",
        bulletClass: "slider__pagination-item",
        clickable: true
      }
    },
    992: {
      pagination: {
        bulletClass: "slider__fraction-item",
        renderBullet: function renderBullet(index, test) {
          var thisIndex = index + 1;
          return '<span class="slider__fraction-item"> 0' + thisIndex + '</span>';
        },
        bulletActiveClass: "slider__fraction-item--active"
      }
    }
  }
});
var jsSliderIntro = new swiper_esm/* default */.ZP('.jsSliderIntro .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
  pagination: {
    el: ".jsSliderIntro .swiper-pagination",
    bulletClass: "slider__pagination-item",
    clickable: true
  },
  navigation: {
    nextEl: '.jsSliderIntro .swiper-button-next',
    prevEl: '.jsSliderIntro .swiper-button-prev'
  },
  loop: true,
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 45
});

if (window.screen.width < 992) {
  var jsSliderTeachers = new swiper_esm/* default */.ZP('.jsSliderTeachers .slider__inner', {
    modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
    pagination: {
      el: ".jsSliderTeachers .swiper-pagination",
      bulletClass: "slider__pagination-item",
      clickable: true
    },
    loop: false,
    slidesPerView: 2,
    speed: 600,
    spaceBetween: 32,
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }
  });
}

var jsSliderSpecialist = new swiper_esm/* default */.ZP('.jsSliderSpecialist .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
  pagination: {
    el: ".jsSliderSpecialist .swiper-pagination",
    clickable: true,
    bulletClass: "slider__pagination-item"
  },
  navigation: {
    nextEl: '.jsSliderSpecialist .swiper-button-next',
    prevEl: '.jsSliderSpecialist .swiper-button-prev'
  },
  loop: false,
  slidesPerView: 1,
  speed: 750,
  spaceBetween: 60
});
var jsSliderDiplom = new swiper_esm/* default */.ZP('.jsSliderDiplom .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_],
  navigation: {
    nextEl: '.jsSliderDiplomNavigation .swiper-button-next',
    prevEl: '.jsSliderDiplomNavigation .swiper-button-prev'
  },
  loop: true,
  slidesPerView: 1,
  speed: 600,
  centeredSlides: true,
  spaceBetween: 25
});
document.addEventListener('DOMContentLoaded', function () {
  var jsSliderSpecialistLink = document.querySelectorAll('.jsSliderSpecialistLink');

  var _loop = function _loop(index) {
    var item = jsSliderSpecialistLink[index];
    var slideIndex = item.getAttribute('data-slide-index');
    item.addEventListener('click', function (e) {
      e.preventDefault();
      jsSliderSpecialist.slideTo(slideIndex);
    });
    jsSliderSpecialist.on('slideChange', function () {
      item.classList.remove('is-active');
    });
  };

  for (var index = 0; index < jsSliderSpecialistLink.length; index++) {
    _loop(index);
  }

  jsSliderSpecialist.on('slideChange', function () {
    jsSliderSpecialistLink[jsSliderSpecialist.activeIndex].classList.add('is-active');
  });
});
var jsSliderArticleGallery = document.querySelectorAll('.jsSliderArticleGallery');

for (var scripts_index = 0; scripts_index < jsSliderArticleGallery.length; scripts_index++) {
  var item = jsSliderArticleGallery[scripts_index];
  var sliderArticleGallery = new swiper_esm/* default */.ZP(item.querySelector('.slider__inner'), {
    modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
    pagination: {
      el: item.querySelector('.swiper-pagination'),
      clickable: true,
      bulletClass: "slider__pagination-item"
    },
    navigation: {
      nextEl: item.querySelector('.swiper-button-next'),
      prevEl: item.querySelector('.swiper-button-prev')
    },
    loop: false,
    slidesPerView: 1,
    speed: 750,
    spaceBetween: 32
  });
}
// EXTERNAL MODULE: ./src/components/filter/scripts.js
var filter_scripts = __webpack_require__(642);
// EXTERNAL MODULE: ./src/components/card/card-review/scripts.js
var card_review_scripts = __webpack_require__(942);
;// CONCATENATED MODULE: ./src/components/section/section-reviews/Slider.js




var Slider_Slider = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Slider(rootElement) {
    _classCallCheck(this, Slider);

    this.rootElement = rootElement;
    this.findElements();
    this.init();
  }

  _createClass(Slider, [{
    key: "findElements",
    value: function findElements() {
      this.sliderStage = this.rootElement.querySelector('[data-entity="slider-stage"]');
      this.sliderNavPrev = this.rootElement.querySelector('[data-entity="slider-nav-prev"]');
      this.sliderNavNext = this.rootElement.querySelector('[data-entity="slider-nav-next"]');
      this.sliderPagination = this.rootElement.querySelector('[data-entity="slider-pagination"]');
    }
  }, {
    key: "init",
    value: function init() {
      this.slider = new Swiper(this.sliderStage, {
        modules: [Navigation, Pagination],
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
              el: this.sliderPagination,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }
          },
          720: {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
              el: this.sliderPagination,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
            navigation: {
              prevEl: this.sliderNavPrev,
              nextEl: this.sliderNavNext
            }
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
              prevEl: this.sliderNavPrev,
              nextEl: this.sliderNavNext
            }
          }
        }
      });
    }
  }]);

  return Slider;
}()));

/* harmony default export */ var section_reviews_Slider = ((/* unused pure expression or super */ null && (Slider_Slider)));
;// CONCATENATED MODULE: ./src/components/section/section-reviews/scripts.js


var initSectionReviews = function initSectionReviews() {
  var elements = document.querySelectorAll('[data-entity="reviews-slider"]');
  elements.forEach(function (element) {
    new Slider(element);
  });
};

/* harmony default export */ var section_reviews_scripts = ((/* unused pure expression or super */ null && (initSectionReviews)));
// EXTERNAL MODULE: ./src/components/section/section-events/scripts.js
var section_events_scripts = __webpack_require__(10);
// EXTERNAL MODULE: ./src/components/section/about-courses/scripts.js
var about_courses_scripts = __webpack_require__(267);
;// CONCATENATED MODULE: ./src/init.js
 // import MicroModal from 'micromodal';
// import initModalVideo from '@components/modal-media/scripts.js';


fancybox_esm/* Fancybox.bind */.KR.bind("[data-fancybox]", {
  Thumbs: {
    autoStart: false
  }
}); // import initHeaderComponent from '@components/header/scripts.js';
// import initCardQuestionComponents from '@components/card-question/scripts.js';
// import initCardReviewComponents from '@components/card-review/scripts.js';
// import initSectionReviews from '@components/section-reviews/scripts.js';
// import initSectionSpecialists from '@components/section-specialists/scripts.js';
// import initSectionOffers from '@components/section-offers/scripts.js';
//Blocks







 //Cards


 //Sections






var init = function init() {
  var observer = lozad_min_default()();
  observer.observe(); //   MicroModal.init({
  //     disableScroll: true,
  //   });
  //   initModalVideo();
  // initHeaderComponent();
  // initCardQuestionComponents();
  // initSectionReviews();
  // initCardReviewComponents();
  // initSectionSpecialists();
  // initSectionOffers();
};

document.addEventListener("DOMContentLoaded", function (event) {
  function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
      var webP = new Image();

      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };

      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    } // Добавление класса _webp или _no-webp для HTML


    testWebP(function (support) {
      var className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
    });
  }

  isWebp();
}); // if(document.querySelector('.jsAsideSection')){
// 	let jsAsideSection = document.querySelector('.jsAsideSection');
// 	let jsAsideBlock = document.querySelector('.jsAsideBlock');
// 	let jsAsideBlockContent = document.querySelector('.jsAsideBlockContent');
// 	let sectionPos = getCoords(jsAsideSection)
// 	let sectionHeight = jsAsideSection.scrollHeight
// 	let blockHeight = jsAsideBlockContent.scrollHeight
// 	let sectionTop = sectionPos.top;
// 	let sectionBot = sectionTop + sectionHeight - blockHeight
// 	console.log('sectionPos = ' + sectionPos);
// 	console.log('sectionHeight = ' + sectionHeight);
// 	console.log('blockHeight = ' + blockHeight);
// 	console.log('sectionTop = ' + sectionTop);
// 	console.log('sectionBot = ' + sectionBot);
// 	window.addEventListener('scroll', function() {
// 		console.log('window = ' + window.pageYOffset);
// 		console.log('sec size = ' + sectionHeight + '  ;  block size = ' + blockHeight + '  ;  block top = ' + sectionTop + '  ;  block bottom = ' + sectionBot);
// 		if (window.pageYOffset >= sectionTop && sectionBot >= window.pageYOffset) {
// 			jsAsideBlock.style.position = 'fixed';
// 			console.log('1');
// 		} else {
// 			jsAsideBlock.style.position = '';
// 			console.log('2');
// 		}
// 	});
// 	function getCoords(elem) {
// 		let box = elem.getBoundingClientRect();
// 		return {
// 			top: box.top + window.pageYOffset,
// 			right: box.right + window.pageXOffset,
// 			bottom: box.bottom + window.pageYOffset,
// 			left: box.left + window.pageXOffset
// 		};
// 	}
// }

/* harmony default export */ var src_init = (init);
;// CONCATENATED MODULE: ./src/scripts.js

src_init();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 505;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			505: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkup_starter_kit"] = self["webpackChunkmarkup_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(964); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_scripts.js.map