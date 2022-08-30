/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3653:
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

/***/ 8312:
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

/***/ 8942:
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

/***/ 7789:
/***/ (function() {

document.querySelector('.jsCoockiesButton').addEventListener('click', function () {
  window.closeCoockies();
  $.cookie('COOKIE_AGREE', 'Y', {
    expires: 14
  });
});

window.openCoockies = function () {
  document.querySelector('.jsCoockies').classList.add('is-open');
};

window.closeCoockies = function () {
  document.querySelector('.jsCoockies').classList.remove('is-open');
}; // document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(
//         function(){window.openCoockies()} , 2000)
// })

/***/ }),

/***/ 8450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsHeader')) {
    var headerClose = function headerClose() {
      jsHeader.classList.remove('is-active');
      jsHeaderMenu.classList.remove('is-active');
      jsHeaderBurger.classList.remove('is-active');
      body.classList.remove('_backdrop-header');
    };

    var jsHeader = document.querySelector('.jsHeader');
    var jsHeaderMenu = document.querySelector('.jsHeaderMenu');
    var jsHeaderBurger = document.querySelector('.jsHeaderBurger');
    var body = document.querySelector('body');
    jsHeaderBurger.addEventListener('click', function () {
      if (jsHeader.classList.contains('is-active')) {
        headerClose();
      } else {
        jsHeader.classList.add('is-active');
        jsHeaderMenu.classList.add('is-active');
        jsHeaderBurger.classList.add('is-active');
        body.classList.add('_backdrop-header');
      }
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (jsHeader.classList.contains('is-active')) {
        if (!target.closest('.jsHeader')) {
          headerClose();
        }
      }
    });
  }
});

/***/ }),

/***/ 4281:
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

/***/ 1267:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsCoursesBody = document.querySelectorAll('.jsCoursesBody');

  var _loop = function _loop(index) {
    var body = jsCoursesBody[index];
    var content = body.querySelector('.jsCoursesContent');
    var button = body.querySelector('.jsCoursesMore');

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

  for (var index = 0; index < jsCoursesBody.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 5010:
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

window.checkEventCategory = function () {
  var jsEventFilter = document.querySelector('.jsEventFilter');
  var jsEventFilterItem = jsEventFilter.querySelectorAll('.jsEventFilterItem');
  var jsEventFilterBadge = jsEventFilter.querySelectorAll('.jsEventFilterBadge');
  var jsEventFilterAside = jsEventFilter.querySelector('.jsEventFilterAside');

  var _loop3 = function _loop3(index) {
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
    _loop3(index);
  }

  function showItems(category) {
    for (var _index5 = 0; _index5 < jsEventFilterItem.length; _index5++) {
      var item = jsEventFilterItem[_index5];
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
  }

  var _loop4 = function _loop4(_index6) {
    var button = jsEventFilterBadge[_index6];
    var buttonCategory = button.getAttribute('data-category');

    if (button.classList.contains('is-active')) {
      removeBadges();
      button.classList.add('is-active');
      removeItems();
      setTimeout(function () {
        showItems(buttonCategory);
      }, 0);
    }
  };

  for (var _index6 = 0; _index6 < jsEventFilterBadge.length; _index6++) {
    _loop4(_index6);
  }

  function removeItems() {
    for (var _index7 = 0; _index7 < jsEventFilterItem.length; _index7++) {
      var item = jsEventFilterItem[_index7];
      item.classList.remove('is-show');
    }
  }

  function removeBadges() {
    for (var _index8 = 0; _index8 < jsEventFilterBadge.length; _index8++) {
      var button = jsEventFilterBadge[_index8];
      button.classList.remove('is-active');
    }
  }
}; // window.checkEventCategory()

/***/ }),

/***/ 4165:
/***/ (function() {

if (document.querySelector('.jsTeacherItem')) {
  var jsTeacherItem = document.querySelectorAll('.jsTeacherItem');
  var jsTeacherMore = document.querySelector('.jsTeacherMore');
  jsTeacherMore.addEventListener('click', function (e) {
    e.preventDefault();
    jsTeacherMore.style.display = 'none';

    for (var index = 0; index < jsTeacherItem.length; index++) {
      var item = jsTeacherItem[index];
      item.style.display = 'block';
    }
  });
}

/***/ }),

/***/ 8059:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lozad/dist/lozad.min.js
var lozad_min = __webpack_require__(7059);
var lozad_min_default = /*#__PURE__*/__webpack_require__.n(lozad_min);
// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/dist/fancybox.esm.js
var fancybox_esm = __webpack_require__(2689);
// EXTERNAL MODULE: ./src/components/header/scripts.js
var scripts = __webpack_require__(8450);
// EXTERNAL MODULE: ./src/components/radio-tumbler/scripts.js
var radio_tumbler_scripts = __webpack_require__(4281);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(2647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js

var regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
var regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var mailElement = document.querySelectorAll('.jsMailMask');
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
    window.inputStatusRemove(input, 'focus');
  };

  input.onfocus = function () {
    window.inputStatusAdd(input, 'focus');
    window.inputStatusRemove(input, 'error');
  };
};

for (var index = 0; index < jsInput.length; index++) {
  _loop(index);
} // let mailInputs = document.querySelectorAll('.jsMailMask');
// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }
// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')


window.inputStatusAdd = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.add('is-' + status);
  } else {
    input.closest('.input').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else {
    input.closest('.input').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    console.log('phone');
    return regexpPhone.test(input.value);
  }
};

window.runMask = function () {
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
    for (var _i = 0; _i < phoneElement.length; _i++) {
      var _mask = (0,esm/* default */.ZP)(phoneElement[_i], phoneMaskSettings);
    }
  }
}; // window.runMask() перезвапуск маски
// EXTERNAL MODULE: ./src/components/accordion/scripts.js
var accordion_scripts = __webpack_require__(3653);
// EXTERNAL MODULE: ./src/components/backdrop/scripts.js
var backdrop_scripts = __webpack_require__(8312);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(7099);
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
        renderBullet: function renderBullet(index) {
          if (index < 9) {
            var thisIndex = index + 1;
            return '<span class="slider__fraction-item"> 0' + thisIndex + '</span>';
          } else {
            var _thisIndex = index + 1;

            return '<span class="slider__fraction-item"> ' + _thisIndex + '</span>';
          }
        },
        bulletActiveClass: "slider__fraction-item--active"
      }
    }
  }
});
var jsSliderIntro = new swiper_esm/* default */.ZP('.jsSliderIntro .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt, swiper_esm/* EffectFade */.xW],
  pagination: {
    el: ".jsSliderIntro .swiper-pagination",
    bulletClass: "slider__pagination-item",
    clickable: true
  },
  navigation: {
    nextEl: '.jsSliderIntro .swiper-button-next',
    prevEl: '.jsSliderIntro .swiper-button-prev'
  },
  loop: false,
  effect: 'fade',
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 45
});
document.addEventListener('DOMContentLoaded', function () {
  var jsAnimationElements = document.querySelector('.jsAnimationElements');
  jsAnimationElements.setAttribute('data-animation', '');
  jsAnimationElements.classList.add('is-animate');
  changeSlide();
  jsSliderIntro.on('slideChange', function () {
    changeSlide();
  });

  function changeSlide() {
    var slideIndex = jsSliderIntro.activeIndex;
    jsAnimationElements.setAttribute('data-animation', slideIndex);
    console.log(slideIndex);
  }
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
    nextEl: '.jsSliderDiplom .swiper-button-next',
    prevEl: '.jsSliderDiplom .swiper-button-prev'
  },
  loop: false,
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
  var jsSliderDiplomLink = document.querySelectorAll('.jsSliderDiplomLink');

  var _loop2 = function _loop2(_index) {
    var item = jsSliderDiplomLink[_index];
    var slideIndex = item.getAttribute('data-slide-index');
    item.addEventListener('click', function (e) {
      e.preventDefault();
      jsSliderDiplom.slideTo(slideIndex);
    });
    jsSliderDiplom.on('slideChange', function () {
      item.classList.remove('is-active');
      jsSliderDiplomLink[jsSliderDiplom.activeIndex].classList.add('is-active');
    });
  };

  for (var _index = 0; _index < jsSliderDiplomLink.length; _index++) {
    _loop2(_index);
  }
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
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(6486);
;// CONCATENATED MODULE: ./src/components/filter/scripts.js

document.addEventListener('DOMContentLoaded', function () {
  var jsFilterGroup = document.querySelectorAll('.jsFilterGroup');
  var body = document.querySelector('body');

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
    var inputEvent = function inputEvent(inputs) {
      for (var _index = 0; _index < inputs.length; _index++) {
        var type = inputs[_index];

        for (var _index2 = 0; _index2 < type.length; _index2++) {
          var item = type[_index2];
          item.addEventListener('change', function () {
            inputsCheck();
          });
          item.addEventListener('input', function () {
            inputsCheck();
          });
        }
      }
    };

    var inputsCheck = function inputsCheck() {
      var typeCheckbox = jsFilter.querySelectorAll('.jsCheckbox:checked').length;
      var typeRadio = jsFilter.querySelectorAll('.jsRadio:checked').length;
      var typeText = jsInputFilled();
      var count = typeCheckbox + typeRadio + typeText;
      jsFilterCount.innerHTML = count;
      return count;

      function jsInputFilled() {
        var filled = 0;

        for (var i = 0; i < jsInput.length; i++) {
          if (jsInput[i].value != '') {
            filled++;
          }
        }

        return filled;
      }
    }; // Filter close/open


    var filterClose = function filterClose() {
      jsFilter.classList.remove('is-active');
      jsFilterContent.classList.remove('is-active');
      body.classList.remove('_backdrop-filter');
    };

    var jsFilter = document.querySelector('.jsFilter');
    var jsFilterTrigger = jsFilter.querySelector('.jsFilterTrigger');
    var jsFilterContent = jsFilter.querySelector('.jsFilterContent');
    var jsFilterClose = jsFilter.querySelector('.jsFilterClose');
    var jsFilterCount = jsFilter.querySelector('.jsFilterCount');
    var jsCheckbox = jsFilter.querySelectorAll('.jsCheckbox');
    var jsRadio = jsFilter.querySelectorAll('.jsRadio');
    var jsInput = jsFilter.querySelectorAll('.jsInput');
    var allInputs = [jsCheckbox, jsRadio, jsInput];
    var checks = 0;
    checks = inputsCheck();
    inputEvent(allInputs);
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (jsFilter.classList.contains('is-active')) {
        if (!target.closest('.jsFilter')) {
          filterClose();
        }
      }
    });
    jsFilterTrigger.addEventListener('click', function () {
      jsFilter.classList.add('is-active');
      jsFilterContent.classList.add('is-active');
      body.classList.add('_backdrop-filter');
    });
    jsFilterClose.addEventListener('click', function () {
      filterClose();
    });
  }
});
// EXTERNAL MODULE: ./src/components/coockies/scripts.js
var coockies_scripts = __webpack_require__(7789);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 1 modules
var bootstrap_esm = __webpack_require__(4712);
;// CONCATENATED MODULE: ./src/components/modal/scripts.js

var modals = document.querySelectorAll('.modal');
var modalCallback = new bootstrap_esm/* Modal */.u_(document.querySelector('#callback'));
var modalCallbackCourse = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackCourse'));
var modalCallbackOk = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackOk'));
var modalCallbackOk2 = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackOk2'));
modals.forEach(function (e) {
  e.addEventListener('shown.bs.modal', function () {
    if (this.querySelector('[autofocus]')) {
      this.querySelector('[autofocus]').focus();
    }
  });
});

window.modalOpen = function () {
  modalCallback.show();
};

window.modalOpenCourse = function () {
  modalCallbackCourse.show();
};

window.modalOpenOk = function () {
  modalCallbackOk.show();
};

window.modalOpenOk2 = function () {
  modalCallbackOk2.show();
};

window.modalHide = function () {
  modalCallback.hide();
};

window.modalHideCourse = function () {
  modalCallbackCourse.hide();
};

window.modalHideOk = function () {
  modalCallbackOk.hide();
};

window.modalHideOk2 = function () {
  modalCallbackOk2.hide();
}; // window.modalOpen()
// window.modalOpenCourse()
// window.modalOpenOk()
// window.modalOpenOk2()
// window.modalHide()
// window.modalHideCourse()
// window.modalHideOk()
// window.modalHideOk2()
// EXTERNAL MODULE: ./src/components/card/card-review/scripts.js
var card_review_scripts = __webpack_require__(8942);
// EXTERNAL MODULE: ./src/components/section/section-events/scripts.js
var section_events_scripts = __webpack_require__(5010);
// EXTERNAL MODULE: ./src/components/section/section-teachers/scripts.js
var section_teachers_scripts = __webpack_require__(4165);
// EXTERNAL MODULE: ./src/components/section/about-courses/scripts.js
var about_courses_scripts = __webpack_require__(1267);
;// CONCATENATED MODULE: ./src/init.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



fancybox_esm/* Fancybox.bind */.KR.bind("[data-fancybox]", {
  Thumbs: {
    autoStart: false
  }
}); //Blocks










 //Cards


 //Sections





var init = function init() {
  var observer = lozad_min_default()();
  observer.observe();
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
});
var smoothLinks = document.querySelectorAll('a[href^="#"]');

var _iterator = _createForOfIteratorHelper(smoothLinks),
    _step;

try {
  var init_loop = function _loop() {
    var smoothLink = _step.value;
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      var id = smoothLink.getAttribute('href');

      if (id != '#') {
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    init_loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(8059); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_scripts.js.map