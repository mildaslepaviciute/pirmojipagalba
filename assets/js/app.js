$(document).ready(function () {
  // const header = document.querySelector("header");
  // const hero = document.querySelector(".hero-landing");
  // console.log(hero)

  // function isInViewport(element) {
  //     const rect = element.getBoundingClientRect();
  //     return (rect.y * -1) < element.clientHeight - 80;
  // }

  // if (header){
  //     window.addEventListener("scroll", ()=> {
  //         if (!isInViewport(hero)){
  //             // hero.classList.contains("on-top") && hero.classList.remove("on-top");
  //             !header.classList.contains("scrolled") && header.classList.add("scrolled");
  //             return
  //         }

  //         header.classList.contains("scrolled") && header.classList.remove("scrolled");
  //         return;
  //     })
  // }

  const storiesSwiperSection = document.querySelector(
    ".stories-swiper-section"
  );
  console.log(storiesSwiperSection)
  if (storiesSwiperSection) {
    const swiperStories = new Swiper(".swiper.stories-swiper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".stories-swiper-section .swiper-button-next",
        prevEl: ".stories-swiper-section .swiper-button-prev",
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
        },

        994: {
          slidesPerView: 3,
        },
      },
    });
  }

  const coursesSwiperSection = document.querySelector(
    ".courses-swiper-section"
  );
  if (coursesSwiperSection) {
    const swiperStories = new Swiper(".swiper.courses-swiper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".courses-swiper-section .swiper-button-next",
        prevEl: ".courses-swiper-section .swiper-button-prev",
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
        },

        994: {
          slidesPerView: 3,
        },
      },
    });
  }

  const defibrillatorSwiperSection = document.querySelector(
    ".items-swiper-section"
  );
  console.log(defibrillatorSwiperSection)

  if (defibrillatorSwiperSection) {
    console.log('yra')
    const swiperDefibrillator = new Swiper(".swiper.items-swiper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".items-swiper-section .swiper-button-next",
        prevEl: ".items-swiper-section .swiper-button-prev",
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
        },

        994: {
          slidesPerView: 4,
        },
      },
    });
  }

  const swiperNav = document.querySelector(".custom-swiper-nav");
  const questionsSwiper = new Swiper(".swiper.questions-swiper", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".questions-swiper-wrap .swiper-button-next",
        prevEl: ".questions-swiper-wrap .swiper-button-prev",
    },
    pagination: {
        el: '.questions-swiper-wrap .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `
                        <div class="${className} question-bullet d-flex align-items-center justify-content-between mx-0">
                           <p class="acc-label mr-3">${questionsArray[index]}</p>
                             <img src="assets/img/arrow-right.svg" alt="arrow">
              
                        </div>
                     `
        },
        type: 'bullets'
    },
});

  const sideMenu = document.querySelector(".navbar-collapse");
  const body = document.querySelector("body");
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      body.classList.toggle("no-scroll");
    });
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1279) {
      body.classList.remove("no-scroll");
      return;
    }
    if (sideMenu.classList.contains("show")) {
      body.classList.add("no-scroll");
      return;
    }
  });

  const navigation = document.querySelector(".navbar");
  const filter = document.querySelector(".background-filter");
  const burger = document.querySelector("button.navbar-toggler");
  console.log(filter);

  const addNavEventListeners = () => {
    if (navigation && window.innerWidth > 1279) {
      filter &&
        filter.classList.contains("visible") &&
        filter.classList.remove("visible");
    }
    if (navigation && window.innerWidth < 1280) {
      if (!burger.classList.contains("collapsed")) {
        filter &&
          !filter.classList.contains("visible") &&
          filter.classList.add("visible");
        return;
      }
      filter &&
        filter.classList.contains("visible") &&
        filter.classList.remove("visible");
      return;
    }
  };

  const addBurgerListeners = () => {
    burger.addEventListener("click", () => {
      console.log("click");
      filter.classList.toggle("visible");
    });
  };

  if (burger) {
    console.log("burger");
    addBurgerListeners();
  }
  if (navigation) {
    console.log("nav");
    window.addEventListener("resize", addNavEventListeners);
    addNavEventListeners();
  }
});

$(function () {
  if ($(window).scrollTop() >= 200) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  $(".vedio-icon img").on("click", function () {
    $(this).parent().remove();
    $("video").trigger("play");
  });

  $(".firm").on("click", function () {
    $(".company").removeClass("d-none");
  });
  $(".personal").on("click", function () {
    $(".company").addClass("d-none");
  });

  //  start for range
  // $("#rangeSlider").wRunner({
  //   step: 1,
  //   type: "single",
  //   limits: {
  //     minLimit: 1,
  //     maxLimit: 100,
  //   },
  //   singleValue: 24,
  //   rangeValue: {
  //     minValue: 1,
  //     maxValue: 100,
  //   },
  //   roots: document.body,
  //   divisionsCount: 0,
  //   valueNoteDisplay: true,
  //   theme: "default",
  //   direction: "horizontal",
  // });
  //  end for range
});
//   start  for range
function rangeCounter(e, t) {
  var value = parseInt($(".wrunner__valueNote").text(), 10);
  if (t == 1 && value > 1) {
    value -= 1;
  } else if (t == 2 && value < 100) {
    value += 1;
  }
  $(".wrunner__valueNote").text(value);
  $(".wrunner__pathPassed").css("width", value + "%");
  $(".wrunner__handle").css("left", value + "%");
}
//   end for range
//   start  for range
var num = 0;
$(".dot-nav .nav-item").eq(0).addClass("active");
var numItems = $(".dot-nav .nav-item").length;
function routeH(e, t) {
  var widthCal = 0;
  if (t == 1 && num > 0) {
    $(".dot-nav .nav-item").eq(num).removeClass("active");
    $(".dot-nav .nav-item.active").each(function (i, v) {
      widthCal += $(v).width();
    });
    widthCal -= $(".dot-nav .nav-item")
      .eq(num - 1)
      .width();
    num -= 1;
    // console.log(num);
    $(".opacity-d").css("width", "calc(100% - " + widthCal+ "px)");
    $(".bg-gd").css("width", widthCal + "px");
  } else if (t == 2 && num < numItems - 1) {
    $(".dot-nav .nav-item.active").each(function (i, v) {
      widthCal += $(v).width();
    });
    num += 1;
    $(".dot-nav .nav-item").eq(num).addClass("active");
    // console.log(num);
    $(".opacity-d").css("width", "calc(100% - " + widthCal+ "px)");
    $(".bg-gd").css("width", widthCal + "px");
  }
  if(num == 0) {
    $(".opacity-d").css("width", "93%");
  }
  // console.log(num);
}
//   end for range

if (window.location.pathname == "/" || window.location.pathname == "/defibrillator-network.html") {

    function initMap() {

        const locationsMain = [['Žvėrynas', 54.699483, 25.248765], ['Žirmūnai', 54.699304, 25.301108], ['Antakalnis', 54.691776, 25.300724], ['Naujamiestis', 54.677510, 25.254090], ['Rasos', 54.675564, 25.304069], ['Kauno', 54.671019, 25.270522]];
        const locationsSM = [['Piromontas', 54.694677, 25.276014], ['Kudirkos', 54.686243, 25.268858], ['Senamiestis', 54.683464, 25.288589]]
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: new google.maps.LatLng(54.694677, 25.276014),
            // disableDefaultUI: true,
            mapId: 'c0c3666f05db2f5c',
            draggable: true,
        });
        let marker;
        for (let i = 0; i < locationsMain.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationsMain[i][1], locationsMain[i][2]),
                map: map,
                icon: "assets/img/map-pointer.svg",
            });
        }
            for (let y = 0; y < locationsSM.length; y++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locationsSM[y][1], locationsSM[y][2]),
                    map: map,
                    icon: "assets/img/heartbeat.svg",
                });
            }
            }
}
!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=92)}({1:function(e,t,i){"use strict";t.a=function(){var e=[];return{addHandler:function(t){if("function"==typeof t){for(var i=0;i<e.length;i++)if(e[i]===t)return void console.log("The handler already in the list");e.push(t)}else console.log("The handler must be a function")},removeHandler:function(t){for(var i=0;i<e.length;i++)if(e[i]===t)return void e.splice(i,1);console.log("could not find observer in list of observers")},trigger:function(t){for(var i=e.slice(0),s=0;s<i.length;s++)i[s](t)}}}},2:function(e,t,i){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=new function(){this.isNumber=function(e){return!!(("number"==typeof e||"string"==typeof e)&isFinite(e))},this.toNumber=function(e){return!!this.isNumber(e)&&+e},this.isDOMEl=function(e){return!(!this.isObject(e)||e.constructor===Object||!this.isNumber(e.nodeType)||1!=+e.nodeType)},this.isObject=function(e){return"object"===s(e)&&null!==e},this.isArray=function(e){return!(!this.isObject(e)||e.constructor!==Array)}};t.a=n},92:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(2);function a(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var o=n.a,l=s.a,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.minLimit=0,this.maxLimit=100,this.valuesCount=this.maxLimit-this.minLimit,this.singleValue=40,this.rangeValueMin=0,this.rangeValueMax=20,this.singleSelected=(this.singleValue-this.minLimit)/this.valuesCount*100,this.rangeSelected=(this.rangeValueMax-this.rangeValueMin)/this.valuesCount*100,this.step=1,this.type="single",this.typeConstants={singleValue:"single",rangeValue:"range"},this.addEvents()}var t,i,s;return t=e,(i=[{key:"addEvents",value:function(){this.valueUpdateEvent=l(),this.limitsUpdateEvent=l(),this.stepUpdateEvent=l(),this.percentageUpdateEvent=l(),this.typeUpdateEvent=l()}},{key:"recalculateValue",value:function(){return this.type===this.typeConstants.singleValue?this.setSingleValue(null,!0):this.type===this.typeConstants.rangeValue?this.setRangeValue(null,!0):void 0}},{key:"setAValueTo",value:function(e,t,i){var s=Math.round(+e/this.step)*this.step;s<this.minLimit?(this[t]=this.minLimit,i||console.log("The value was equated to the minimum, because it is less than the minimum value.")):s>this.maxLimit?(this[t]=this.maxLimit,i||console.log("The value was equated to the maximum, because it is more than the maximum value.")):this[t]=s}},{key:"setType",value:function(e){for(var t in this.typeConstants)if(e===this.typeConstants[t])return this.type=e,this.typeUpdateEvent.trigger({type:this.type,typeConstants:Object.assign({},this.typeConstants)}),{type:this.type,typeConstants:Object.assign({},this.typeConstants)}}},{key:"setLimits",value:function(e,t){e=e||{};var i=o.isNumber(e.minLimit)?+e.minLimit:this.minLimit,s=o.isNumber(e.maxLimit)?+e.maxLimit:this.maxLimit;return i<s&&(this.minLimit=i,this.maxLimit=s),i===s&&(this.minLimit=i,this.maxLimit=s+1,t||console.log("Maximum limit was increased by 1, because the minimum limit is equal to the maximum limit.")),i>s&&(this.minLimit=s,this.maxLimit=i,t||console.log("Limits was reversed, because the maximum limit is less than the minimum limit.")),this.valuesCount=this.maxLimit-this.minLimit,this.limitsUpdateEvent.trigger({minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}),{minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}}},{key:"setStep",value:function(e){if(o.isNumber(e)&&!(+e<=0))return this.step=+e,this.stepUpdateEvent.trigger(this.step),this.step}},{key:"setSingleValue",value:function(e,t){return e=o.isNumber(e)?+e:this.singleValue,this.setAValueTo(e,"singleValue",t),this.singleSelected=(this.singleValue-this.minLimit)/this.valuesCount*100,this.valueUpdateEvent.trigger({value:this.singleValue,selected:this.singleSelected}),{value:this.singleValue,selected:this.singleSelected}}},{key:"setRangeValue",value:function(e,t){o.isObject(e)||(e={});var i=o.isNumber(e.minValue)?+e.minValue:this.rangeValueMin,s=o.isNumber(e.maxValue)?+e.maxValue:this.rangeValueMax;if(i===s&&(s+=this.step,t||console.log("The maximum value was increased by step size, because minimum value is equal to maximum value.")),i>s){var n=s;s=i,i=n,t||console.log("The values was reversed, because maximum value is less than minimum value.")}return this.setAValueTo(i,"rangeValueMin",t),this.setAValueTo(s,"rangeValueMax",t),this.rangeSelected=(this.rangeValueMax-this.rangeValueMin)/this.valuesCount*100,this.valueUpdateEvent.trigger({minValue:this.rangeValueMin,maxValue:this.rangeValueMax,selected:this.rangeSelected}),{minValue:this.rangeValueMin,maxValue:this.rangeValueMax,selected:this.rangeSelected}}},{key:"setNearestValue",value:function(e,t,i){if(o.isNumber(e)){e=!1===t?Math.round(+e):Math.round(this.valuesCount*+e/100+this.minLimit);return this.type===this.typeConstants.singleValue?this.setSingleValue(e,i):this.type===this.typeConstants.rangeValue?e<(this.rangeValueMin+this.rangeValueMax)/2?this.setRangeValue({minValue:+e},!0):this.setRangeValue({maxValue:+e},!0):void 0}}},{key:"getType",value:function(){return{type:this.type,typeConstants:Object.assign({},this.typeConstants)}}},{key:"getLimits",value:function(){return{minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}}},{key:"getStep",value:function(){return this.step}},{key:"getValue",value:function(){return this.type==this.typeConstants.singleValue?{value:this.singleValue,selected:this.singleSelected}:this.type==this.typeConstants.rangeValue?{minValue:this.rangeValueMin,maxValue:this.rangeValueMax,selected:this.rangeSelected}:void 0}}])&&a(t.prototype,i),s&&a(t,s),e}();function h(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=s.a,d=n.a,v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$roots=$(document.body),this.divisionsCount=5,this.valueNoteDisplay=!0,this.theme={value:"default",className:"theme",oldValue:null},this.direction={value:"horizontal",className:"direction",oldValue:null},this.directionConstants={horizontalValue:"horizontal",verticalValue:"vertical"},this.$base=$("<div class='wrunner'>"),this.$outer=$("<div class='wrunner__outer'>").appendTo(this.$base),this.$path=$("<div class='wrunner__path'>").appendTo(this.$outer),this.$pathPassed=$("<div class='wrunner__pathPassed'>").appendTo(this.$path),this.$handle=$("<div class='wrunner__handle'>"),this.$handleMin=$("<div class='wrunner__handle'>"),this.$handleMax=$("<div class='wrunner__handle'>"),this.$valueNote=$("<div class='wrunner__valueNote'>"),this.$valueNoteMin=$("<div class='wrunner__valueNote'>"),this.$valueNoteMax=$("<div class='wrunner__valueNote'>"),this.$divisions=$("<div class='wrunner__divisions'>").appendTo(this.$outer),this.divisionsList=[],this.addEvents(),this.addListenners()}var t,i,s;return t=e,(i=[{key:"addEvents",value:function(){this.UIMouseActionEvent=r(),this.themeUpdateEvent=r(),this.directionUpdateEvent=r(),this.stylesAppliedEvent=r(),this.valueNoteDisplayUpdateEvent=r(),this.rootsUpdateEvent=r(),this.divisionsCountUpdateEvent=r(),this.valueNoteDisplayAppliedEvent=r()}},{key:"addListenners",value:function(){$(this.$path).on("mousedown",this.mouseAction.bind(this))}},{key:"updateDOM",value:function(e){e.type===e.typeConstants.singleValue&&(this.$handleMin.detach(),this.$handleMax.detach(),this.$valueNoteMin.detach(),this.$valueNoteMax.detach(),this.$handle.appendTo(this.$path),this.$valueNote.appendTo(this.$outer)),e.type===e.typeConstants.rangeValue&&(this.$handle.detach(),this.$valueNote.detach(),this.$handleMin.appendTo(this.$path),this.$handleMax.appendTo(this.$path),this.$valueNoteMin.appendTo(this.$outer),this.$valueNoteMax.appendTo(this.$outer))}},{key:"mouseAction",value:function(e){var t=!1,i=function(e){var t,i,s,n,a=this.direction.value,o=this.directionConstants;a===o.horizontalValue&&(t=this.$path.outerWidth(),i=this.$path[0].getBoundingClientRect().left,n=e.clientX);a===o.verticalValue&&(t=this.$path.outerHeight(),i=this.$path[0].getBoundingClientRect().top,n=e.clientY);if(s=i+t,n<i-10||n>s+10)return;a===o.horizontalValue&&this.UIMouseActionEvent.trigger((n-i)/t*100);a===o.verticalValue&&this.UIMouseActionEvent.trigger(100-(n-i)/t*100)}.bind(this),s=function(e){var s=$(e.target);if($(document.body).off("mousemove",i),t)return;if(s.is(this.$handle)||s.is(this.$handleMin)||s.is(this.$handleMax))return;i(e)}.bind(this);$(document.body).one("mousemove",function(){return t=!0}),$(document.body).on("mousemove",i),$(document.body).one("mouseup",s)}},{key:"append",value:function(){return this.$base.appendTo(this.$roots),this.$roots}},{key:"setRoots",value:function(e){if(d.isDOMEl($(e)[0]))return this.$roots=$(e),this.rootsUpdateEvent.trigger(this.$roots),this.$roots}},{key:"getRoots",value:function(){return this.$roots}},{key:"setDivisionsCount",value:function(e,t){if(d.isNumber(e)&&!(e<0))return 1==(e=Math.round(+e))&&(e++,t||console.log("Count was increased by one, cause it may not be equal to one.")),this.divisionsCount=+e,this.divisionsCountUpdateEvent.trigger(this.divisionsCount),this.divisionsCount}},{key:"generateDivisions",value:function(){this.$divisions.empty(),this.divisionsList.length=0;for(var e=this.divisionsCount;e>0;e--){var t=$("<div class='wrunner__division'>");this.divisionsList.push(t),t.appendTo(this.$divisions)}}},{key:"getDivisionsCount",value:function(){return this.divisionsCount}},{key:"drawValue",value:function(e,t,i){for(var s,n,a=e.selected,o=this.direction.value,l=this.directionConstants,u=i.type,h=i.typeConstants,r=[this.$pathPassed,this.$handle,this.$handleMin,this.$handleMax,this.$valueNote,this.$valueNoteMin,this.$valueNoteMax],d=0;d<r.length;d++)r[d].attr("style","");u===h.singleValue&&(this.$valueNote.text(e.value),o===l.horizontalValue&&(this.$pathPassed.css("width",a+"%"),this.$handle.css("left",a+"%"),s=this.$path.outerWidth(),n=this.$valueNote.outerWidth(),this.$valueNote.css("left",(s*a/100-n/2)/s*100+"%")),o===l.verticalValue&&(this.$pathPassed.css("height",a+"%"),this.$handle.css("top",100-a+"%"),s=this.$path.outerHeight(),n=this.$valueNote.outerHeight(),this.$valueNote.css("top",100-(s*a/100+n/2)/s*100+"%")));if(u===h.rangeValue){var v,p,c=(e.minValue-t.minLimit)/t.valuesCount*100;this.$valueNoteMin.text(e.minValue),this.$valueNoteMax.text(e.maxValue),o===l.horizontalValue&&(this.$pathPassed.css("width",a+"%"),this.$pathPassed.css("left",c+"%"),this.$handleMin.css("left",c+"%"),this.$handleMax.css("left",c+a+"%"),s=this.$path.outerWidth(),v=this.$valueNoteMin.outerWidth(),p=this.$valueNoteMax.outerWidth(),this.$valueNoteMin.css("left",(s*c/100-v/2)/s*100+"%"),this.$valueNoteMax.css("left",(s*(c+a)/100-p/2)/s*100+"%")),o===l.verticalValue&&(this.$pathPassed.css("height",a+"%"),this.$pathPassed.css("top",100-a-c+"%"),this.$handleMax.css("top",100-c-a+"%"),this.$handleMin.css("top",100-c+"%"),s=this.$path.outerHeight(),v=this.$valueNoteMin.outerHeight(),p=this.$valueNoteMax.outerHeight(),this.$valueNoteMin.css("top",100-(s*c/100+v/2)/s*100+"%"),this.$valueNoteMax.css("top",100-(s*(c+a)/100+p/2)/s*100+"%"))}return e}},{key:"setTheme",value:function(e){if("string"==typeof e)return this.theme.oldValue=this.theme.value,this.theme.value=e,this.themeUpdateEvent.trigger(this.theme.value),this.theme.value}},{key:"getTheme",value:function(){return this.theme.value}},{key:"setDirection",value:function(e){if("string"==typeof e)for(var t in this.directionConstants)if(e===this.directionConstants[t])return this.direction.oldValue=this.direction.value,this.direction.value=e,this.directionUpdateEvent.trigger({value:this.direction.value,constants:Object.assign({},this.directionConstants)}),{value:this.direction.value,constants:Object.assign({},this.directionConstants)}}},{key:"getDirection",value:function(){return{value:this.direction.value,constants:Object.assign({},this.directionConstants)}}},{key:"applyStyles",value:function(){for(var e=[this.theme,this.direction],t=[this.$base,this.$outer,this.$path,this.$pathPassed,this.$divisions,this.$handle,this.$handleMin,this.$handleMax,this.$valueNote,this.$valueNoteMin,this.$valueNoteMax].concat(this.divisionsList),i=0;i<t.length;i++){var s=t[i];for(var n in e){var a=s[0].classList[0],o=e[n].oldValue,l=e[n].value;o&&s.removeClass(a+"_"+e[n].className+"_"+o),s.addClass(a+"_"+e[n].className+"_"+l)}}return this.stylesAppliedEvent.trigger(Object.assign({},this.styles)),Object.assign({},this.styles)}},{key:"setValueNoteDisplay",value:function(e){if("boolean"==typeof e)return this.valueNoteDisplay=e,this.valueNoteDisplayUpdateEvent.trigger(this.valueNoteDisplay),this.valueNoteDisplay}},{key:"applyValueNoteDisplay",value:function(){for(var e=[this.$valueNote,this.$valueNoteMin,this.$valueNoteMax],t=0;t<e.length;t++){var i=e[t][0].classList[0];e[t].removeClass(i+"_display_"+(this.valueNoteDisplay?"hidden":"visible")).addClass(i+"_display_"+(this.valueNoteDisplay?"visible":"hidden"))}return this.valueNoteDisplayAppliedEvent.trigger(this.valueNoteDisplay),this.valueNoteDisplay}},{key:"getValueNoteDisplay",value:function(){return this.valueNoteDisplay}}])&&h(t.prototype,i),s&&h(t,s),e}();function p(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{},this.model=t.model,this.view=t.view,this.addDefaultEvents(),this.applyUserEvents(t.userOptions),this.applyUserOptions(t.userOptions),this.initInstance(),this.triggerEvents()}var t,i,s;return t=e,(i=[{key:"addDefaultEvents",value:function(){this.model.typeUpdateEvent.addHandler(function(e){this.view.updateDOM(this.model.getType()),this.model.recalculateValue()}.bind(this)),this.model.limitsUpdateEvent.addHandler(function(e){this.model.recalculateValue()}.bind(this)),this.model.stepUpdateEvent.addHandler(function(e){this.model.recalculateValue()}.bind(this)),this.model.valueUpdateEvent.addHandler(function(e){this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.rootsUpdateEvent.addHandler(function(e){this.view.append()}.bind(this)),this.view.UIMouseActionEvent.addHandler(function(e){this.model.setNearestValue(e,!0,!0)}.bind(this)),this.view.themeUpdateEvent.addHandler(function(e){this.view.applyStyles(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.directionUpdateEvent.addHandler(function(e){this.view.applyStyles(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.valueNoteDisplayUpdateEvent.addHandler(function(e){this.view.applyValueNoteDisplay(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.divisionsCountUpdateEvent.addHandler(function(e){this.view.generateDivisions(),this.view.applyStyles()}.bind(this))}},{key:"initInstance",value:function(){this.view.updateDOM(this.model.getType()),this.view.generateDivisions(),this.view.append(),this.view.applyValueNoteDisplay(),this.view.applyStyles(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}},{key:"applyUserOptions",value:function(e){e=e||{},this.view.setRoots(e.$roots),void 0!==e.type&&this.model.setType(e.type),void 0!==e.limits&&this.model.setLimits(e.limits),void 0!==e.step&&this.model.setStep(e.step),void 0!==e.singleValue&&this.model.setSingleValue(e.singleValue),void 0!==e.rangeValue&&this.model.setRangeValue(e.rangeValue),void 0!==e.divisionsCount&&this.view.setDivisionsCount(e.divisionsCount),void 0!==e.theme&&this.view.setTheme(e.theme),void 0!==e.direction&&this.view.setDirection(e.direction),void 0!==e.valueNoteDisplay&&this.view.setValueNoteDisplay(e.valueNoteDisplay)}},{key:"applyUserEvents",value:function(e){void 0!==(e=e||{}).onTypeUpdate&&this.onTypeUpdate(e.onTypeUpdate),void 0!==e.onLimitsUpdate&&this.onLimitsUpdate(e.onLimitsUpdate),void 0!==e.onStepUpdate&&this.onStepUpdate(e.onStepUpdate),void 0!==e.onValueUpdate&&this.onValueUpdate(e.onValueUpdate),void 0!==e.onRootsUpdate&&this.onRootsUpdate(e.onRootsUpdate),void 0!==e.onThemeUpdate&&this.onThemeUpdate(e.onThemeUpdate),void 0!==e.onDirectionUpdate&&this.onDirectionUpdate(e.onDirectionUpdate),void 0!==e.onDivisionsCountUpdate&&this.onDivisionsCountUpdate(e.onDivisionsCountUpdate),void 0!==e.onValueNoteDisplayUpdate&&this.onValueNoteDisplayUpdate(e.onValueNoteDisplayUpdate)}},{key:"triggerEvents",value:function(){this.model.type==this.model.typeConstants.singleValue&&this.model.valueUpdateEvent.trigger({value:this.model.singleValue,selected:this.model.singleSelected}),this.model.type==this.model.typeConstants.rangeValue&&this.model.valueUpdateEvent.trigger({minValue:this.model.rangeMinValue,maxValue:this.model.rangeMaxValue,selected:this.model.rangeSelected}),this.model.typeUpdateEvent.trigger({type:this.model.type,typeConstants:Object.assign({},this.model.typeConstants)}),this.model.stepUpdateEvent.trigger(this.model.step),this.model.limitsUpdateEvent.trigger({minLimit:this.model.minLimit,maxLimit:this.model.maxLimit,valuesCount:this.model.valuesCount}),this.view.themeUpdateEvent.trigger(this.view.theme.value),this.view.directionUpdateEvent.trigger({value:this.view.direction.value,constants:Object.assign({},this.view.directionConstants)}),this.view.valueNoteDisplayUpdateEvent.trigger(this.view.valueNoteDisplay),this.view.rootsUpdateEvent.trigger(this.view.$roots),this.view.divisionsCountUpdateEvent.trigger(this.view.divisionsCount)}},{key:"onValueUpdate",value:function(e){this.model.valueUpdateEvent.addHandler(e)}},{key:"onStepUpdate",value:function(e){this.model.stepUpdateEvent.addHandler(e)}},{key:"onLimitsUpdate",value:function(e){this.model.limitsUpdateEvent.addHandler(e)}},{key:"onTypeUpdate",value:function(e){this.model.typeUpdateEvent.addHandler(e)}},{key:"onThemeUpdate",value:function(e){this.view.themeUpdateEvent.addHandler(e)}},{key:"onDirectionUpdate",value:function(e){this.view.directionUpdateEvent.addHandler(e)}},{key:"onValueNoteDisplayUpdate",value:function(e){this.view.valueNoteDisplayUpdateEvent.addHandler(e)}},{key:"onRootsUpdate",value:function(e){this.view.rootsUpdateEvent.addHandler(e)}},{key:"onDivisionsCountUpdate",value:function(e){this.view.divisionsCountUpdateEvent.addHandler(e)}}])&&p(t.prototype,i),s&&p(t,s),e}();function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}!function(e){e.fn.wRunner=function(e){(e=e||{}).$roots=this;var t=new function(){this.Model=u,this.View=v,this.Presenter=c};return function(){var i=new t.Model,s=new t.View,n=new t.Presenter({model:i,view:s,userOptions:e}),a={setType:i.setType.bind(i),setLimits:i.setLimits.bind(i),setStep:i.setStep.bind(i),setSingleValue:i.setSingleValue.bind(i),setRangeValue:i.setRangeValue.bind(i),setNearestValue:i.setNearestValue.bind(i),setRoots:s.setRoots.bind(s),setTheme:s.setTheme.bind(s),setDirection:s.setDirection.bind(s),setValueNoteDisplay:s.setValueNoteDisplay.bind(s),setDivisionsCount:s.setDivisionsCount.bind(s)},o={getType:i.getType.bind(i),getLimits:i.getLimits.bind(i),getStep:i.getStep.bind(i),getValue:i.getValue.bind(i),getRoots:s.getRoots.bind(s),getTheme:s.getTheme.bind(s),getDirection:s.getDirection.bind(s),getValueNoteDisplay:s.getValueNoteDisplay.bind(s),getDivisionsCount:s.getDivisionsCount.bind(s)},l={onTypeUpdate:n.onTypeUpdate.bind(n),onLimitsUpdate:n.onLimitsUpdate.bind(n),onStepUpdate:n.onStepUpdate.bind(n),onValueUpdate:n.onValueUpdate.bind(n),onRootsUpdate:n.onRootsUpdate.bind(n),onThemeUpdate:n.onThemeUpdate.bind(n),onDirectionUpdate:n.onDirectionUpdate.bind(n),onDivisionsCountUpdate:n.onDivisionsCountUpdate.bind(n),onValueNoteDisplayUpdate:n.onValueNoteDisplayUpdate.bind(n)};return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.forEach(function(t){m(e,t,i[t])})}return e}({},a,o,l)}()}}($)}});
//# sourceMappingURL=app.js.map
