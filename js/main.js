(function (window, document) {

  var dance = false

  var doadance = function (evt) {
    evt.preventDefault()
    dance = !dance
    if (dance) evt.target.src = 'dancer.gif'
    else evt.target.src = 'dancer.png'
  }

  var dancer = document.querySelector('#dancer')
  dancer.addEventListener('click', doadance)
  dancer.addEventListener('touchend', doadance)

  window.cowsay = function (message) {
    var len = message.length
    console.log(`%c  ${''.padEnd(len, '-')}
< ${message} >
  ${''.padEnd(len, '-')}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

    return message
  }

  cowsay("howdy pardner! I'm the console cowsay")

  setTimeout(function () {
    cowsay(`type cowsay("message") if you would have me speak`)
  }, 2000)

})(window, document)
