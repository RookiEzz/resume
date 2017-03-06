;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-saoyisao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.388584 542.953989 94.531783 542.953989c-17.705969 0-32.073777-14.366196-32.073777-32.066323 0-17.705244 14.367808-32.072463 32.073777-32.072463l833.855778 0c17.7336 0 32.073777 14.368242 32.073777 32.072463C960.461338 528.587793 946.122184 542.953989 928.388584 542.953989L928.388584 542.953989zM832.17237 927.802054 639.746082 927.802054c-17.7336 0-32.072754-14.33959-32.072754-32.073486 0-17.732873 14.339154-32.072463 32.072754-32.072463l192.426288 0c17.705969 0 32.073777-14.366196 32.073777-32.066323L864.246147 671.238724c0-17.733896 14.334037-32.073486 32.0748-32.073486 17.7336 0 32.067637 14.33959 32.067637 32.073486l0 160.351058C928.388584 884.631836 885.22069 927.802054 832.17237 927.802054L832.17237 927.802054zM351.099486 927.802054l-160.358652 0c-53.04218 0-96.209051-43.171242-96.209051-96.212272L94.531783 671.238724c0-17.733896 14.366784-32.073486 32.067637-32.073486 17.704946 0 32.073777 14.33959 32.073777 32.073486l0 160.351058c0 17.700127 14.397485 32.066323 32.067637 32.066323l160.358652 0c17.705969 0 32.073777 14.33959 32.073777 32.072463C383.173263 913.462464 368.805455 927.802054 351.099486 927.802054L351.099486 927.802054zM126.600444 382.602931c-17.700853 0-32.067637-14.367219-32.067637-32.066323L94.532807 190.18555c0-53.045123 43.167894-96.211249 96.209051-96.211249l160.358652 0c17.705969 0 32.073777 14.367219 32.073777 32.072463 0 17.699104-14.367808 32.066323-32.073777 32.066323l-160.358652 0c-17.670152 0-32.067637 14.402011-32.067637 32.072463L158.674221 350.536608C158.674221 368.236735 144.305389 382.602931 126.600444 382.602931L126.600444 382.602931zM896.320948 382.602931c-17.740763 0-32.0748-14.367219-32.0748-32.066323L864.246147 190.18555c0-17.671475-14.367808-32.072463-32.073777-32.072463L639.746082 158.113087c-17.7336 0-32.072754-14.367219-32.072754-32.066323 0-17.705244 14.339154-32.072463 32.072754-32.072463l192.426288 0c53.04832 0 96.216214 43.166125 96.216214 96.211249L928.388584 350.536608C928.388584 368.236735 914.054547 382.602931 896.320948 382.602931L896.320948 382.602931zM896.320948 382.602931"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-htmal5icon11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M595.634816 461.977723c47.168276 47.168276 47.168276 123.643018 0 170.811294-47.168276 47.168276-123.643018 47.168276-170.811294 0-47.168276-47.168276-47.168276-123.643018 0-170.811294C471.991798 414.809447 548.46654 414.809447 595.634816 461.977723"  ></path>' +
    '' +
    '<path d="M510.228657 736.105081c-105.683994 0-188.722222-83.037205-188.722222-188.721199s83.037205-188.721199 188.722222-188.721199 188.722222 83.037205 188.722222 188.721199S615.912651 736.105081 510.228657 736.105081zM396.995733 169.939437l-67.940368 75.489298-120.781854 0c-41.518602 0-75.488275 33.969673-75.488275 75.489298l0 452.931696c0 41.518602 33.969673 75.489298 75.488275 75.489298l603.90927 0c41.518602 0 75.489298-33.969673 75.489298-75.489298l0-452.931696c0-41.518602-33.969673-75.489298-75.489298-75.489298l-120.781854 0-67.940368-75.489298L396.995733 169.939437z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)