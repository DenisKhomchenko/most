/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 894:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/lozad/dist/lozad.min.js
var lozad_min = __webpack_require__(59);
var lozad_min_default = /*#__PURE__*/__webpack_require__.n(lozad_min);
// EXTERNAL MODULE: ./node_modules/micromodal/dist/micromodal.es.js
var micromodal_es = __webpack_require__(650);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vlitejs/dist/vlite.js
var vlite = __webpack_require__(739);
var vlite_default = /*#__PURE__*/__webpack_require__.n(vlite);
// EXTERNAL MODULE: ./node_modules/delegate-it/index.js
var delegate_it = __webpack_require__(500);
;// CONCATENATED MODULE: ./src/components/modal-media/ModalVideo.js





var ModalVideo = /*#__PURE__*/function () {
  function ModalVideo() {
    (0,classCallCheck/* default */.Z)(this, ModalVideo);

    this.modalId = 'video';
    this.videoPlayerInstance = null;
    this.findElements();
    this.initState();
    this.attachEvents();
  }

  (0,createClass/* default */.Z)(ModalVideo, [{
    key: "findElements",
    value: function findElements() {
      this.modal = document.querySelector("#".concat(this.modalId));
      this.modalPreloader = this.modal.querySelector('[data-entity="preloader"]');
      this.modalVideoPlayer = this.modal.querySelector('[data-entity="video-player"]');
      this.modalVideo = this.modal.querySelector('[data-entity="video"]');
    }
  }, {
    key: "initState",
    value: function initState() {
      this.state = {
        source: '',
        videoPlayerProcessing: 'idle',
        modalVisibility: 'hidden'
      };
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(document.body, '[data-entity="modal-video-executor"]', 'click', this.clickExecutorHandler.bind(this));
      (0,delegate_it/* default */.Z)(this.modal, '[data-entity="modal-video-pause"]', 'click', this.clickPauseButtonHandler.bind(this));
    }
  }, {
    key: "clickPauseButtonHandler",
    value: function clickPauseButtonHandler() {
      this.state.modalVisibility = 'hidden';
      this.renderVideoPlayer();
    }
  }, {
    key: "clickExecutorHandler",
    value: function clickExecutorHandler(event) {
      var executorMediaSrc = event.delegateTarget.dataset.videoSrc;

      if (!executorMediaSrc) {
        throw new Error('ModalVideo: media source value is not correct');
      }

      if (!this.videoPlayerInstance) {
        this.initVideoPlayer();
      }

      this.state.modalVisibility = 'shown';

      if (this.state.source === executorMediaSrc) {
        this.renderModal(this.modalId);
        this.renderVideoPlayer();
        return;
      }

      this.state.source = executorMediaSrc;
      this.renderVideo();
      this.renderModal(this.modalId);
    }
  }, {
    key: "initVideoPlayer",
    value: function initVideoPlayer() {
      var _this = this;

      this.videoPlayerInstance = new (vlite_default())(this.modalVideo, {
        bigPlay: false,
        onReady: function onReady() {
          _this.state.videoPlayerProcessing = 'finished';

          _this.renderVideoPlayer();
        }
      });
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      window.MicroModal.show(this.modalId);
    }
  }, {
    key: "renderVideoPlayer",
    value: function renderVideoPlayer() {
      if (this.state.modalVisibility === 'hidden') {
        this.videoPlayerInstance.player.pause();
      }

      if (this.state.modalVisibility === 'shown') {
        this.videoPlayerInstance.player.play();
      }

      if (this.state.videoPlayerProcessing === 'finished') {
        this.modalVideoPlayer.classList.add('video_loaded');
      }
    }
  }, {
    key: "renderVideo",
    value: function renderVideo() {
      this.modalVideo.setAttribute('src', this.state.source);
    }
  }]);

  return ModalVideo;
}();

/* harmony default export */ var modal_media_ModalVideo = (ModalVideo);
;// CONCATENATED MODULE: ./src/components/modal-media/scripts.js


var initModalVideo = function initModalVideo() {
  new modal_media_ModalVideo();
};

/* harmony default export */ var scripts = (initModalVideo);
;// CONCATENATED MODULE: ./src/components/header/Header.js




var Header = /*#__PURE__*/function () {
  function Header(rootElement) {
    (0,classCallCheck/* default */.Z)(this, Header);

    this.rootElement = rootElement;
    this.findElements();
    this.initUiState();
    this.attachEvents();
  }

  (0,createClass/* default */.Z)(Header, [{
    key: "findElements",
    value: function findElements() {
      this.menu = this.rootElement.querySelector('[data-entity="menu"]');
      this.iconMenu = this.rootElement.querySelector('[data-entity="burger-menu-icon"]');
      this.iconClose = this.rootElement.querySelector('[data-entity="burger-close-icon"]');
    }
  }, {
    key: "initUiState",
    value: function initUiState() {
      this.uiState = {
        menuVisibility: 'hidden'
      };
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(this.rootElement, '[data-entity="burger"]', 'click', this.burgerClickHandler.bind(this));
    }
  }, {
    key: "burgerClickHandler",
    value: function burgerClickHandler() {
      this.uiState.menuVisibility = this.uiState.menuVisibility === 'hidden' ? 'shown' : 'hidden';
      this.renderRootState();
      this.renderIconType();
      this.renderMenuVisibility();
    }
  }, {
    key: "renderRootState",
    value: function renderRootState() {
      if (this.uiState.menuVisibility === 'hidden') {
        this.rootElement.classList.remove('header_expanded');
      }

      if (this.uiState.menuVisibility === 'shown') {
        this.rootElement.classList.add('header_expanded');
      }
    }
  }, {
    key: "renderMenuVisibility",
    value: function renderMenuVisibility() {
      if (this.uiState.menuVisibility === 'hidden') {
        this.menu.classList.remove('header__menu_shown');
      }

      if (this.uiState.menuVisibility === 'shown') {
        this.menu.classList.add('header__menu_shown');
      }
    }
  }, {
    key: "renderIconType",
    value: function renderIconType() {
      if (this.uiState.menuVisibility === 'hidden') {
        this.iconClose.classList.remove('header__burger-icon_shown');
        this.iconClose.classList.add('header__burger-icon_hidden');
        this.iconMenu.classList.add('header__burger-icon_shown');
        this.iconMenu.classList.remove('header__burger-icon_hidden');
      }

      if (this.uiState.menuVisibility === 'shown') {
        this.iconMenu.classList.add('header__burger-icon_hidden');
        this.iconMenu.classList.remove('header__burger-icon_shown');
        this.iconClose.classList.add('header__burger-icon_shown');
        this.iconClose.classList.remove('header__burger-icon_hidden');
      }
    }
  }]);

  return Header;
}();

/* harmony default export */ var header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/header/scripts.js


var initHeaderComponent = function initHeaderComponent() {
  var elements = Array.from(document.querySelectorAll('[data-entity="header"]'));
  elements.forEach(function (element) {
    new header_Header(element);
  });
};

/* harmony default export */ var header_scripts = (initHeaderComponent);
;// CONCATENATED MODULE: ./src/components/card-question/CardQuestion.js




var CardQuestion = /*#__PURE__*/function () {
  function CardQuestion(rootElement) {
    (0,classCallCheck/* default */.Z)(this, CardQuestion);

    this.rootElement = rootElement;
    this.initUiState();
    this.attachEvents();
  }

  (0,createClass/* default */.Z)(CardQuestion, [{
    key: "initUiState",
    value: function initUiState() {
      var hasElementShownClass = this.rootElement.classList.contains('card-question_expanded');
      var initialAnswerVisibilityState = hasElementShownClass ? 'shown' : 'hidden';
      this.uiState = {
        answerVisibility: initialAnswerVisibilityState
      };
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(this.rootElement, '[data-entity="card-question-toggler"]', 'click', this.togglerClickHandler.bind(this));
    }
  }, {
    key: "togglerClickHandler",
    value: function togglerClickHandler() {
      this.uiState.answerVisibility = this.uiState.answerVisibility === 'hidden' ? 'shown' : 'hidden';
      this.renderRootState();
    }
  }, {
    key: "renderRootState",
    value: function renderRootState() {
      if (this.uiState.answerVisibility === 'hidden') {
        this.rootElement.classList.remove('card-question_expanded');
        this.rootElement.classList.add('card-question_collapsed');
      }

      if (this.uiState.answerVisibility === 'shown') {
        this.rootElement.classList.remove('card-question_collapsed');
        this.rootElement.classList.add('card-question_expanded');
      }
    }
  }]);

  return CardQuestion;
}();

/* harmony default export */ var card_question_CardQuestion = (CardQuestion);
;// CONCATENATED MODULE: ./src/components/card-question/scripts.js


var initCardQuestionComponents = function initCardQuestionComponents() {
  var elements = Array.from(document.querySelectorAll('[data-entity="card-question"]'));
  elements.forEach(function (element) {
    new card_question_CardQuestion(element);
  });
};

/* harmony default export */ var card_question_scripts = (initCardQuestionComponents);
;// CONCATENATED MODULE: ./src/components/video-player/VideoPlayer.js





var VideoPlayer = /*#__PURE__*/function () {
  function VideoPlayer(rootElement) {
    (0,classCallCheck/* default */.Z)(this, VideoPlayer);

    this.rootElement = rootElement;
    this.findElements();
    this.initUiState();
    this.initVideoPlayer();
    this.attachEvents();
  }

  (0,createClass/* default */.Z)(VideoPlayer, [{
    key: "findElements",
    value: function findElements() {
      this.videoElement = this.rootElement.querySelector('[data-entity="video"]');
    }
  }, {
    key: "initUiState",
    value: function initUiState() {
      this.uiState = {
        videoVisibility: 'hidden'
      };
    }
  }, {
    key: "initVideoPlayer",
    value: function initVideoPlayer() {
      this.videoPlayerInstance = new (vlite_default())(this.videoElement, {
        bigPlay: false,
        autoHideDelay: 0
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(this.rootElement, '[data-entity="play-button"]', 'click', this.playButtonClickHandler.bind(this));
      this.videoPlayerInstance.player.on('pause', this.videoPauseHandler.bind(this));
    }
  }, {
    key: "playButtonClickHandler",
    value: function playButtonClickHandler() {
      this.uiState.videoVisibility = 'shown';
      this.renderRootState();
      this.videoPlayerInstance.player.play();
    }
  }, {
    key: "videoPauseHandler",
    value: function videoPauseHandler() {
      this.uiState.videoVisibility = 'hidden';
      this.renderRootState();
    }
  }, {
    key: "renderRootState",
    value: function renderRootState() {
      if (this.uiState.videoVisibility === 'shown') {
        this.rootElement.classList.add('video_playing');
        this.rootElement.classList.remove('video_paused');
      }

      if (this.uiState.videoVisibility === 'hidden') {
        this.rootElement.classList.remove('video_playing');
        this.rootElement.classList.add('video_paused');
      }
    }
  }]);

  return VideoPlayer;
}();

/* harmony default export */ var video_player_VideoPlayer = (VideoPlayer);
;// CONCATENATED MODULE: ./src/components/card-review/CardReviewTypeText.js




var CardReviewTypeText = /*#__PURE__*/function () {
  function CardReviewTypeText(rootElement) {
    (0,classCallCheck/* default */.Z)(this, CardReviewTypeText);

    this.rootElement = rootElement;
    this.findElements();

    if (this.isContentOverflow()) {
      this.renderExpander();
      this.initUiState();
      this.attachEvents();
    }
  }

  (0,createClass/* default */.Z)(CardReviewTypeText, [{
    key: "isContentOverflow",
    value: function isContentOverflow() {
      var maxHeight = this.content.offsetHeight;
      var actualHeight = this.contentText.offsetHeight;
      if (actualHeight > maxHeight) return true;
      return false;
    }
  }, {
    key: "findElements",
    value: function findElements() {
      this.content = this.rootElement.querySelector('[data-entity="content"]');
      this.contentText = this.rootElement.querySelector('[data-entity="content-text"]');
      this.author = this.rootElement.querySelector('[data-entity="author"]');
      this.expander = this.rootElement.querySelector('[data-entity="expander"]');
      this.modal = document.querySelector('#review-detail');
      this.modalContent = this.modal.querySelector('[data-entity="content"]');
      this.modalTitle = this.modal.querySelector('[data-entity="title"]');
    }
  }, {
    key: "renderExpander",
    value: function renderExpander() {
      this.expander.classList.add('card-review__button-more_shown');
    }
  }, {
    key: "initUiState",
    value: function initUiState() {
      this.authorValue = this.author.textContent;
      this.uiState = {
        contentVisibility: 'hidden'
      };
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(this.rootElement, '[data-entity="expander"]', 'click', this.expanderClickHandler.bind(this));
    }
  }, {
    key: "expanderClickHandler",
    value: function expanderClickHandler() {
      this.uiState = 'shown';
      this.renderContentModal();
    }
  }, {
    key: "renderContentModal",
    value: function renderContentModal() {
      this.modalTitle.textContent = this.authorValue;
      this.modalContent.innerHTML = this.content.textContent;
      window.MicroModal.show('review-detail');
    }
  }]);

  return CardReviewTypeText;
}();

/* harmony default export */ var card_review_CardReviewTypeText = (CardReviewTypeText);
;// CONCATENATED MODULE: ./src/components/card-review/scripts.js



var initCardReviewTypeVideoComponents = function initCardReviewTypeVideoComponents() {
  var elements = Array.from(document.querySelectorAll('[data-entity="card-review-video"]'));
  elements.forEach(function (element) {
    new video_player_VideoPlayer(element);
  });
};

var initCardReviewTypeTextComponents = function initCardReviewTypeTextComponents() {
  var elements = Array.from(document.querySelectorAll('[data-entity="card-review-text"]'));
  elements.forEach(function (element) {
    new card_review_CardReviewTypeText(element);
  });
};

var initCardReviewComponents = function initCardReviewComponents() {
  initCardReviewTypeVideoComponents();
  initCardReviewTypeTextComponents();
};

/* harmony default export */ var card_review_scripts = (initCardReviewComponents);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(99);
;// CONCATENATED MODULE: ./src/components/section-reviews/Slider.js




var Slider = /*#__PURE__*/function () {
  function Slider(rootElement) {
    (0,classCallCheck/* default */.Z)(this, Slider);

    this.rootElement = rootElement;
    this.findElements();
    this.init();
  }

  (0,createClass/* default */.Z)(Slider, [{
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
      this.slider = new swiper_esm/* default */.ZP(this.sliderStage, {
        modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl],
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
}();

/* harmony default export */ var section_reviews_Slider = (Slider);
;// CONCATENATED MODULE: ./src/components/section-reviews/scripts.js


var initSectionReviews = function initSectionReviews() {
  var elements = document.querySelectorAll('[data-entity="reviews-slider"]');
  elements.forEach(function (element) {
    new section_reviews_Slider(element);
  });
};

/* harmony default export */ var section_reviews_scripts = (initSectionReviews);
;// CONCATENATED MODULE: ./src/components/section-specialists/Slider.js





var Slider_Slider = /*#__PURE__*/function () {
  function Slider(rootElement) {
    (0,classCallCheck/* default */.Z)(this, Slider);

    this.rootElement = rootElement;
    this.findElements();
    this.initUiState();
    this.initSlider();
    this.attachEvents();
  }

  (0,createClass/* default */.Z)(Slider, [{
    key: "findElements",
    value: function findElements() {
      this.sliderStage = this.rootElement.querySelector('[data-entity="slider-stage"]');
      this.sliderNavPrev = this.rootElement.querySelector('[data-entity="slider-nav-prev"]');
      this.sliderNavNext = this.rootElement.querySelector('[data-entity="slider-nav-next"]');
      this.sliderPagination = this.rootElement.querySelector('[data-entity="slider-pagination"]');
      this.sliderTabs = Array.from(this.rootElement.querySelectorAll('[data-entity="slider-tab"]'));
    }
  }, {
    key: "initUiState",
    value: function initUiState() {
      this.uiState = {
        currentActiveSlideIndex: 0
      };
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.slider = new swiper_esm/* default */.ZP(this.sliderStage, {
        modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl],
        slidesPerView: 1,
        breakpoints: {
          0: {
            spaceBetween: 16,
            pagination: {
              el: this.sliderPagination,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }
          },
          720: {
            spaceBetween: 24,
            pagination: {
              el: this.sliderPagination,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }
          },
          1024: {
            spaceBetween: 16,
            navigation: {
              prevEl: this.sliderNavPrev,
              nextEl: this.sliderNavNext
            }
          },
          1260: {
            spaceBetween: 24,
            navigation: {
              prevEl: this.sliderNavPrev,
              nextEl: this.sliderNavNext
            }
          }
        }
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      (0,delegate_it/* default */.Z)(this.rootElement, '[data-entity="slider-tab"]', 'click', this.tabClickHandler.bind(this));
      this.slider.on('slideChange', this.sliderChangeHandler.bind(this));
    }
  }, {
    key: "tabClickHandler",
    value: function tabClickHandler(event) {
      var targetSlideIndex = event.delegateTarget.dataset.slideIndex || 0;
      this.updateUiState(targetSlideIndex);
      this.renderActiveSlide();
      this.renderActiveTab();
    }
  }, {
    key: "sliderChangeHandler",
    value: function sliderChangeHandler() {
      this.updateUiState(this.slider.activeIndex);
      this.renderActiveTab();
    }
  }, {
    key: "updateUiState",
    value: function updateUiState(targetIndex) {
      this.uiState.currentActiveSlideIndex = +targetIndex;
    }
  }, {
    key: "renderActiveSlide",
    value: function renderActiveSlide() {
      var currentActiveSlideIndex = this.uiState.currentActiveSlideIndex;
      this.slider.slideTo(currentActiveSlideIndex);
    }
  }, {
    key: "renderActiveTab",
    value: function renderActiveTab() {
      var currentActiveSlideIndex = this.uiState.currentActiveSlideIndex;
      this.sliderTabs.forEach(function (sliderTab, index) {
        sliderTab.classList.remove('section-specialist__tab_active');

        if (index === currentActiveSlideIndex) {
          sliderTab.classList.add('section-specialist__tab_active');
        }
      });
    }
  }]);

  return Slider;
}();

/* harmony default export */ var section_specialists_Slider = (Slider_Slider);
;// CONCATENATED MODULE: ./src/components/section-specialists/scripts.js


var initSectionSpecialists = function initSectionSpecialists() {
  var elements = document.querySelectorAll('[data-entity="specialists-slider"]');
  elements.forEach(function (element) {
    new section_specialists_Slider(element);
  });
};

/* harmony default export */ var section_specialists_scripts = (initSectionSpecialists);
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
;// CONCATENATED MODULE: ./src/init.js







 // import initSectionOffers from '@components/section-offers/scripts.js';



var init = function init() {
  var observer = lozad_min_default()();
  observer.observe();
  micromodal_es/* default.init */.Z.init({
    disableScroll: true
  });
  scripts();
  header_scripts();
  card_question_scripts();
  section_reviews_scripts();
  card_review_scripts();
  section_specialists_scripts(); // initSectionOffers();
};

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(894); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_scripts.js.map