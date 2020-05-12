;(function() {
  'use strict'

  var SvgTimer = function() {
    var count = 3
    return function() {
      count -= 1
      if (count == 0) {
        var $svg01 = $('#name-svg01 svg').drawsvg({
          duration: 1500,
          stagger: 400,
          easing: 'linear'
        })
        var $svg02 = $('#name-svg02 svg').drawsvg({
          duration: 1500,
          stagger: 400,
          easing: 'linear'
        })

        // 順番にアニメーション
        $svg01.drawsvg('animate')
        setTimeout(function() {
          $svg02.drawsvg('animate')
        }, 1500)
      }
    }
  }
  var svgTimer = SvgTimer()

  // logo01.pngが読み込まれたら
  var logo01 = new Image()
  logo01.onload = svgTimer
  logo01.src = 'img/logo01.png'

  // logo02.pngが読み込まれたら
  var logo02 = new Image()
  logo02.onload = svgTimer
  logo02.src = 'img/logo02.png'

  // DOMの準備が完了したら
  jQuery(document).ready(svgTimer)
})()
