// JavaScript Document

//load
$(function() {
  allhide()
  $('#background-hack01').hide()

  topvis()
})

function allhide() {
  $('#background-hack01').hide()
}

function topvis() {
  $('#background-hack01')
      .delay(5000)
      .fadeIn(1500)
}


// fadeIN

$(function() {
  $(' #mainVisual h3,#mainVisual h4, #cont01 h4, #badge')
    .delay(4500)
    .queue(function() {
      $(this).css('opacity', 1)
    })
  // $('#menuButton, #mm_logo img, #btn_bio a, #btn_contact a').delay(5500).queue(function(){
  //          $(this).css("opacity",1);
  //  });
})

// scroll-stop

// $(window).scroll(function(){
//  var windowHeight = $(window).height(),
//      topWindow = $(window).scrollTop();
//  $("#mm_logo,#btn_bio,#btn_contact").each(function(){
//   var targetPosition = $(this).offset().top;
//   if(topWindow < '#cont01'){
//    $(this).addClass("active");
//   } else {
//     $(this).removeClass("active");
//   }
//  });
// });

// menu-fade

// $(function() {
//   $('#mm_logo img,#btn_bio a,#btn_contact a').removeClass('active')
//   var windowHeight = $(window).height()
//   var kv = $('header')
//   var kvTop = kv.offset().top
//   $(window).scroll(function() {
//     if ($(window).scrollTop() > windowHeight - 100) {
//       $('#mm_logo img,#btn_bio a,#btn_contact a').addClass('active')
//     } else {
//       $('#mm_logo img,#btn_bio a,#btn_contact a').removeClass('active')
//     }
//   })
// })

/******************/
/******************/

// mask

// fade

// メニューの開閉処理
$(function() {
  var Menu = function () {
    // bio, menu, access, contact
    this.currentMenu = undefined
    this.timeout = undefined
    this.interval = 1000
  }
  Menu.prototype = {
    getNameFrom$menu: function ($menu) {
      return $menu.length ? $menu.attr('id').split('_')[1] : undefined
    },
    show: function (name) {
      this.currentMenu = name
      $('#btn_' + name).addClass('is-active')
      $('#' + name + '_cont').addClass('is-visible')
      $('#menu_all').addClass('is-visible')
    },
    hide: function (name) {
      if (this.currentMenu === name) {
        this.currentMenu = undefined
      }
      $('#btn_' + name).removeClass('is-active')
      $('#' + name + '_cont').removeClass('is-visible')
      $('#menu_all').removeClass('is-visible')
    },
    toggle: function (name) {
      var self = this
      clearTimeout(self.timeout)
      switch (self.currentMenu) {
        case undefined:
          self.show(name)
          break
        case name:
          self.hide(name)
          break
        default: // 別のメニューを開く
          self.hide(self.currentMenu)
          self.timeout = setTimeout(function () {
            self.show(name)
          }, self.interval)
          break
      }
    }
  }

  var menu = new Menu();

  $('.menu a').on('click', function () {
    var name = menu.getNameFrom$menu($(this).closest('.menu'))
    menu.toggle(name)
  })
})



// gallery


$(function(){
 $('#gallery01,#gallery02,#gallery03,#gallery04').scroll(function(){
  if($(this).hasClass("active")){
   $('#gallery_left').addClass("is-visible");
  } else {
    $('#gallery_left').removeClass("is-visible");
  }
 });
});





// hover

$(function() {
  $('#btn_menu a').hover(function() {
    if ($("#btn_menu a span").hasClass('active')) {
      $("#btn_menu a span").removeClass('active');
      $("#btn_menu a").removeClass('on')
    } else {
      $("#btn_menu a span").addClass('active');
      $("#btn_menu a").addClass('on')
    }
  })
})

$(function() {
  $('#btn_contact a').hover(function() {
    if ($("#btn_contact a span").hasClass('active')) {
      $("#btn_contact a span").removeClass('active');
      $("#btn_contact a").removeClass('on')
    } else {
      $("#btn_contact a span").addClass('active');
      $("#btn_contact a").addClass('on')
    }
  })
})

$(function() {
  $('#btn_access a').hover(function() {
    if ($("#btn_access a span").hasClass('active')) {
      $("#btn_access a span").removeClass('active');
      $("#btn_access a").removeClass('on')
    } else {
      $("#btn_access a span").addClass('active');
      $("#btn_access a").addClass('on')
    }
  })
})

$(function() {
  $('#btn_bio a').hover(function() {
    if ($("#btn_bio a span").hasClass('active')) {
      $("#btn_bio a span").removeClass('active');
      $("#btn_bio a").removeClass('on')
    } else {
      $("#btn_bio a span").addClass('active');
      $("#btn_bio a").addClass('on')
    }
  })
})

// TEL
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
        e.preventDefault();
    });
}



$(document).ready(function() {
  var isGallery = false

  $('#fullpage').fullpage({
    controlArrows: false,
    scrollingSpeed: 1000,
    css3: true,
    easingcss3: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  })
});

