/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3653:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsAccordion')) {
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

/***/ 8450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var windowHeight = window.innerHeight;

  if (document.querySelector('.jsHeader')) {
    var body = document.querySelector('body');
    window.header = {
      main: document.querySelector('.jsHeader'),
      menu: document.querySelector('.jsHeaderMenu'),
      nav: {
        trigger: document.querySelector('.jsNavTrigger'),
        dropdown: document.querySelector('.jsNavDropdown'),
        toggle: function toggle() {
          window.header.nav.trigger.classList.toggle('is-active');
          window.header.nav.dropdown.classList.toggle('is-active');
        }
      },
      search: {
        main: document.querySelector('.jsSearch'),
        dropdown: document.querySelector('.jsSearchDropdown'),
        trigger: document.querySelector('.jsSearchTrigger'),
        reset: document.querySelector('.jsSearchReset'),
        open: function open() {
          window.header.search.main.classList.add('is-open');
        },
        close: function close() {
          window.header.search.main.classList.remove('is-open');
          window.header.search.main.querySelector('.search-input .jsInput').value = '';

          if (document.querySelector('.jsSearchDropdown .search-dropdown__container')) {
            document.querySelector('.jsSearchDropdown .search-dropdown__container').remove();
          }
        }
      },
      burger: {
        trigger: document.querySelector('.jsHeaderBurger'),
        open: function open() {
          window.header.main.classList.add('is-active');
          window.header.menu.classList.add('is-active');
          window.header.burger.trigger.classList.add('is-active');
          body.classList.add('_backdrop-header');
        }
      },
      close: function close() {
        window.header.main.classList.remove('is-active');
        window.header.menu.classList.remove('is-active');
        window.header.burger.trigger.classList.remove('is-active');
        body.classList.remove('_backdrop-header');
      }
    };
    window.header.burger.trigger.addEventListener('click', function () {
      if (window.header.main.classList.contains('is-active')) {
        window.header.close();
      } else {
        window.header.burger.open();
      }
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (window.header.main.classList.contains('is-active') && (!target.closest('.jsHeader') || target.closest('.jsSearch'))) {
        window.header.close();
      }

      if (window.header.nav.dropdown.classList.contains('is-active') && (!target.closest('.jsNav') || target.closest('.jsSearch'))) {
        window.header.nav.trigger.classList.remove('is-active');
        window.header.nav.dropdown.classList.remove('is-active');
      }

      if (window.header.search.main.classList.contains('is-open') && !target.closest('.jsSearch')) {
        window.header.search.close();
      }

      if (target == document.querySelector('.jsSearchReset')) {
        window.header.search.close();
      }
    });
    window.header.nav.trigger.addEventListener('click', function () {
      window.header.nav.toggle();
    });
    window.header.search.trigger.addEventListener('click', function () {
      if (!window.header.search.main.classList.contains('is-open')) {
        window.header.search.open();
      } else {
        window.header.search.close();
      }
    });

    if (document.querySelector('.jsSearch')) {
      var move = function move(mode) {
        var desktop = document.querySelector('.header__nav');
        var mobile = document.querySelector('.header__button');

        if (mode == 'desktop') {
          desktop.append(item);
        }

        if (mode == 'mobile') {
          mobile.before(item);
        }
      };

      var check = function check() {
        if (window.innerWidth >= 992) {
          move('desktop');
        } else {
          move('mobile');
        }
      };

      var item = window.header.search.main;
      check();
      window.addEventListener("resize", function () {
        check();
      });
    }

    if (document.querySelector('.jsNav')) {
      var _check = function _check() {
        var dropdownLast = dropdownInner.querySelectorAll('.nav__item')[dropdownInner.querySelectorAll('.nav__item').length - 1] ? dropdownInner.querySelectorAll('.nav__item')[dropdownInner.querySelectorAll('.nav__item').length - 1] : '';

        if (nav.offsetWidth < list.offsetWidth + search + moreWidth) {
          // console.log('hide ' + nav.offsetWidth +' ; ' + Number(list.offsetWidth + search + moreWidth));
          hide();
        } else if (nav.offsetWidth >= Number(list.offsetWidth + dropdownLast.offsetWidth + 24 + search + moreWidth)) {
          // console.log('show ' + nav.offsetWidth +' >= ' + list.offsetWidth + ' + ' + dropdownLast.offsetWidth + ' + ' + 24 + ' + ' + search + ' = ' + Number(list.offsetWidth + dropdownLast.offsetWidth + 24 + search + moreWidth));
          show();
        }

        if (dropdownInner.querySelector('.nav__item')) {
          trigger.classList.add('is-visible');
        } else {
          trigger.classList.remove('is-visible');
        }
      };

      var hide = function hide() {
        items = list.querySelectorAll('.nav__item');
        dropdownInner.append(items[items.length - 1]);

        _check();
      };

      var show = function show() {
        var dItems = dropdownInner.querySelectorAll('.nav__item');
        list.append(dItems[dItems.length - 1]);

        _check();
      };

      var mobile = function mobile() {
        if (dropdownInner.querySelector('.nav__item')) {
          var dItems = dropdownInner.querySelectorAll('.nav__item');

          for (var index = 0; index < dItems.length; index++) {
            var _item = dItems[index];
            list.append(_item);
          }
        }
      };

      var checkWidth = function checkWidth() {
        if (window.innerWidth >= 992) {
          _check();
        } else {
          mobile();
        }
      };

      var nav = document.querySelector('.jsNav');
      var list = nav.querySelector('.nav__list');
      var items = list.querySelectorAll('.nav__item');
      var trigger = nav.querySelector('.jsNavTrigger');
      var dropdownInner = nav.querySelector('.nav__dropdown-inner');
      var moreWidth = 24;
      var search = 32 + 24;
      checkWidth();
      window.addEventListener("resize", function () {
        checkWidth();
      });
    }
  }
});

/***/ }),

/***/ 944:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('.jsNumberField');

  var _loop = function _loop(index) {
    var input = inputs[index];
    var parent = input.closest('.input-number');
    var add = parent.querySelector('.jsNumberAdd');
    var sub = parent.querySelector('.jsNumberSub');
    var min = Number(input.getAttribute('data-min'));
    var max = Number(input.getAttribute('data-max'));
    add.addEventListener('click', function () {
      if (input.value < max) {
        input.value++;
      }

      check();
    });
    sub.addEventListener('click', function () {
      if (input.value > min) {
        input.value--;
      }

      check();
    });

    function check() {
      if (input.value == max) {
        add.classList.add('is-disabled');
      } else {
        add.classList.remove('is-disabled');
      }

      if (input.value == min) {
        sub.classList.add('is-disabled');

        if (parent.closest('.card-product')) {
          parent.closest('.card-product').classList.remove('is-added');
        } else if (parent.closest('.product')) {
          parent.closest('.product').classList.remove('is-added');
        }
      } else {
        sub.classList.remove('is-disabled');
      }

      input.size = input.value.length;
    }
  };

  for (var index = 0; index < inputs.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 7410:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').classList.add('is-loaded');
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

      if (link.length < 2) {
        link[0].classList.add('is-active');
        item.querySelector('.jsTumblerItem[data-tab="' + link[0].getAttribute('data-tab') + '"]').classList.add('is-open');
      }
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

/***/ 2363:
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.intro-elements')) {
    var introInit = function introInit() {
      document.querySelector('.intro-elements').classList.add('_run');
      document.querySelector('.jsSliderIntro').classList.add('_run');
    };

    setTimeout(introInit, 500);
  }
});

/***/ }),

/***/ 9729:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsPathAnim')) {
    var first = document.querySelector('.jsPathAnim').getElementById('first');
    var second = document.querySelector('.jsPathAnim').getElementById('second');
    var apple = document.querySelector('.jsPathApple');

    var Visible = function Visible(target) {
      var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
          windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

      if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
        if (target == document.querySelector('.section-path__bg svg').getElementById('first')) {
          setTimeout(function () {
            document.querySelector('.section-path__bg svg').getElementById('1-anim').beginElement();
          }, 500);

          if (!document.querySelector('.jsPathMain').classList.contains('_run')) {
            document.querySelector('.jsPathMain').classList.add('_run');
          }

          if (!document.querySelector('.jsPathElements').classList.contains('_run-main')) {
            document.querySelector('.jsPathElements').classList.add('_run-main');
          }
        }

        if (target == document.querySelector('.section-path__bg svg').getElementById('second')) {
          setTimeout(function () {
            document.querySelector('.section-path__bg svg').getElementById('second-anim').beginElement();
          }, 500);

          if (!document.querySelector('.jsPathTree').classList.contains('_run')) {
            document.querySelector('.jsPathTree').classList.add('_run');
          }

          if (!document.querySelector('.jsPathElements').classList.contains('_run-tree')) {
            document.querySelector('.jsPathElements').classList.add('_run-tree');
          }
        }

        if (target == document.querySelector('.jsPathApple')) {
          setTimeout(function () {
            document.querySelector('.jsPathApple').classList.add('_run');
          }, 2000);
        }
      }

      ;
    };

    window.addEventListener('scroll', function () {
      Visible(first);
      Visible(second);
      Visible(apple);
    });
    Visible(first);
    Visible(second);
    Visible(apple);
  }
});

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

/***/ 8126:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var selects = document.querySelectorAll('.jsSelectLinks');

  var _loop = function _loop(index) {
    var item = selects[index];
    var trigger = item.querySelector('.jsSelectTrigger');
    var placeholder = trigger.querySelector('span');
    var dropdown = item.querySelector('.jsSelectDropdown');
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (item.classList.contains('is-open') && !target.closest('.jsSelectLinks')) {
        item.classList.remove('is-open');
      }
    });
    trigger.addEventListener('click', function () {
      item.classList.toggle('is-open');
    });
  };

  for (var index = 0; index < selects.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 1361:
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
}

var jsInputClear = document.querySelectorAll('.jsInputClear');

var _loop2 = function _loop2(_index) {
  var button = jsInputClear[_index];
  var wrapper = void 0;

  if (button.closest('.input')) {
    wrapper = button.closest('.input');
  } else if (button.closest('.search-input')) {
    wrapper = button.closest('.search-input');
  }

  var input = wrapper.querySelector('.jsInput');
  button.addEventListener('click', function () {
    if (wrapper != undefined & input != undefined) {
      input.value = '';
      window.inputStatusRemove(input, 'error');

      if (wrapper.closest('.jsSearch')) {
        window.header.search.close();
        window.header.search.clear();
      }
    }
  });
};

for (var _index = 0; _index < jsInputClear.length; _index++) {
  _loop2(_index);
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
  } else if (input.closest('.search-input')) {
    input.closest('.search-input').classList.add('is-' + status);
  } else {
    input.closest('.input').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else if (input.closest('.search-input')) {
    input.closest('.search-input').classList.remove('is-' + status);
  } else {
    input.closest('.input').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    // console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    // console.log('phone');
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
// EXTERNAL MODULE: ./src/components/input-number/scripts.js
var input_number_scripts = __webpack_require__(944);
// EXTERNAL MODULE: ./src/components/select-links/scripts.js
var select_links_scripts = __webpack_require__(8126);
// EXTERNAL MODULE: ./src/components/accordion/scripts.js
var accordion_scripts = __webpack_require__(3653);
// EXTERNAL MODULE: ./src/components/backdrop/scripts.js
var backdrop_scripts = __webpack_require__(8312);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(7099);
;// CONCATENATED MODULE: ./src/components/slider/scripts.js

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsSliderIntro')) {
    var slider = document.querySelector('.jsSliderIntro');
    var attr = slider.getAttribute('data-slider-delay');
    var delay;

    if (attr) {
      delay = attr;
    } else {
      delay = 7000;
    }

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
      // autoplay: {delay: delay},
      loop: true,
      effect: 'fade',
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 45
    });

    if (document.querySelector('.jsAnimationElements')) {
      var changeSlide = function changeSlide() {
        var slideIndex = jsSliderIntro.realIndex;
        jsAnimationElements.setAttribute('data-animation', slideIndex);
      };

      var jsAnimationElements = document.querySelector('.jsAnimationElements');
      jsAnimationElements.setAttribute('data-animation', '');
      jsAnimationElements.classList.add('is-animate');
      changeSlide();
      jsSliderIntro.on('slideChange', function () {
        changeSlide();
      });
    }
  }

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
    autoHeight: true,
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
  var jsSliderSpecialist = new swiper_esm/* default */.ZP('.jsSliderSpecialist .slider__inner', {
    modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
    autoHeight: true,
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
    grabCursor: true,
    slidesPerView: 1,
    speed: 750,
    spaceBetween: 60
  });
  var jsSliderProductDetail = new swiper_esm/* default */.ZP('.jsSliderProductDetail .slider__inner', {
    modules: [swiper_esm/* Navigation */.W_, swiper_esm/* EffectFade */.xW, swiper_esm/* Autoplay */.pt],
    loop: true,
    slidesPerView: 1,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.jsSliderProductDetail .swiper-button-next',
      prevEl: '.jsSliderProductDetail .swiper-button-prev'
    }
  });

  if (document.querySelector('.jsSliderSpecialist')) {
    (function () {
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
    })();
  }

  var jsSliderArticleGallery = document.querySelectorAll('.jsSliderArticleGallery');

  for (var index = 0; index < jsSliderArticleGallery.length; index++) {
    var item = jsSliderArticleGallery[index];
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

  var jsSliderProduct = document.querySelectorAll('.jsSliderProduct');

  for (var _index2 = 0; _index2 < jsSliderProduct.length; _index2++) {
    var _item = jsSliderProduct[_index2];
    var sliderProduct = new swiper_esm/* default */.ZP(_item.querySelector('.slider__inner'), {
      modules: [swiper_esm/* Pagination */.tl, swiper_esm/* EffectFade */.xW],
      loop: true,
      slidesPerView: 1,
      speed: 750,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: _item.querySelector('.swiper-pagination'),
        clickable: true,
        bulletClass: "slider__pagination-item"
      }
    });
  }
});
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
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 1 modules
var bootstrap_esm = __webpack_require__(4712);
;// CONCATENATED MODULE: ./src/components/modal/scripts.js

var modals = document.querySelectorAll('.modal');
var modalCallback = new bootstrap_esm/* Modal */.u_(document.querySelector('#callback'));
var modalPayment = new bootstrap_esm/* Modal */.u_(document.querySelector('#payment'));
var modalCallbackCourse = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackCourse'));
var modalCallbackOk = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackOk'));
var modalCallbackOk2 = new bootstrap_esm/* Modal */.u_(document.querySelector('#callbackOk2'));
var modalCart = new bootstrap_esm/* Modal */.u_(document.querySelector('#cart'));
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

window.modalHide = function () {
  modalCallback.hide();
};

window.modalOpenPayment = function () {
  modalPayment.show();
};

window.modalHidePayment = function () {
  modalPayment.hide();
};

window.modalOpenCourse = function () {
  modalCallbackCourse.show();
};

window.modalHideCourse = function () {
  modalCallbackCourse.hide();
};

window.modalOpenOk = function () {
  modalCallbackOk.show();
};

window.modalHideOk = function () {
  modalCallbackOk.hide();
};

window.modalOpenOk2 = function () {
  modalCallbackOk2.show();
};

window.modalHideOk2 = function () {
  modalCallbackOk2.hide();
};

window.modalOpenCart = function () {
  modalCart.show();
};

window.modalHideCart = function () {
  modalCart.hide();
}; // window.modalOpen()
// window.modalOpenCourse()
// window.modalOpenOk()
// window.modalOpenOk2()
// window.modalHide()
// window.modalHideCourse()
// window.modalHideOk()
// window.modalHideOk2()
// window.modalOpenCart()
// window.modalHideCart()


document.addEventListener('DOMContentLoaded', function () {
  window.modal = {
    list: document.querySelectorAll('.modal')
  };

  for (var index = 0; index < window.modal.list.length; index++) {
    var item = window.modal.list[index];
    var id = item.getAttribute('id');
    var itemModal = new bootstrap_esm/* Modal */.u_(item);
    window.modal[id] = itemModal;
  }

  window.modal.list.forEach(function (e) {
    e.addEventListener('shown.bs.modal', function () {
      if (this.querySelector('[autofocus]')) {
        this.querySelector('[autofocus]').focus();
      }
    });
  }); // window.modal.callback.show()
  // window.modal.payment.show()
  // window.modal.callbackCourse.show()
  // window.modal.callbackOk.show()
  // window.modal.callbackOk2.show()
  // window.modal.cart.show()
});
// EXTERNAL MODULE: ./src/components/preloader/scripts.js
var preloader_scripts = __webpack_require__(7410);
// EXTERNAL MODULE: ./src/components/card/card-review/scripts.js
var card_review_scripts = __webpack_require__(8942);
// EXTERNAL MODULE: ./src/components/section/section-intro/scripts.js
var section_intro_scripts = __webpack_require__(2363);
// EXTERNAL MODULE: ./src/components/section/section-path/scripts.js
var section_path_scripts = __webpack_require__(9729);
// EXTERNAL MODULE: ./src/components/section/section-events/scripts.js
var section_events_scripts = __webpack_require__(5010);
// EXTERNAL MODULE: ./src/components/section/section-teachers/scripts.js
var section_teachers_scripts = __webpack_require__(4165);
// EXTERNAL MODULE: ./src/components/section/about-courses/scripts.js
var about_courses_scripts = __webpack_require__(1267);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
;// CONCATENATED MODULE: ./src/components/cookies/scripts.js



var Cookies = /*#__PURE__*/function () {
  function Cookies() {
    (0,classCallCheck/* default */.Z)(this, Cookies);

    if (!Cookies.hasCookiesAcceptation()) {
      this.initComponent();
    }
  }

  (0,createClass/* default */.Z)(Cookies, [{
    key: "initComponent",
    value: function initComponent() {
      this.buildTemplate();
      this.attachEvents();
    }
  }, {
    key: "buildTemplate",
    value: function buildTemplate() {
      this.element = document.createElement('div');
      this.element.classList.add('cookies');
      this.element.innerHTML = "\n        <div class=\"container cookies__container\">\n            <div class=\"cookies__inner\">\n                <div class=\"cookies__text\">C\u0430\u0439\u0442 MostMe.ru \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookie \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0430\u0439\u0442\u043E\u043C, \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430\u0448\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439.</div>\n                <button class=\"button button--border button--white cookies__button jsCookiesButton\" type=\"button\">\n                    <span>\u0425\u043E\u0440\u043E\u0448\u043E</span>\n                </button>\n            </div>\n        </div>\n        ";
      document.body.append(this.element);
      setTimeout(function () {
        document.querySelector('.cookies').classList.add('is-show');
      }, 2000);
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      document.querySelector('.jsCookiesButton').addEventListener('click', function (e) {
        Cookies.createEntity();
        document.querySelector('.cookies').classList.remove('is-show');
        setTimeout(function () {
          _this.element.remove();
        }, 750);
      });
    }
  }], [{
    key: "hasCookiesAcceptation",
    value: function hasCookiesAcceptation() {
      return window.localStorage.getItem('cookiesAcceptation');
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      window.localStorage.setItem('cookiesAcceptation', 'true');
    }
  }]);

  return Cookies;
}();

/* harmony default export */ var cookies_scripts = (Cookies);
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
  new cookies_scripts();
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(1361); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_scripts.js.map