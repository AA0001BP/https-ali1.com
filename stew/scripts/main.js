(async function () {
  const _0x2c4c24 = function () {
    let _0x47f196 = true;
    return function (_0x4c571d, _0x5dfac4) {
      const _0x4b49bf = _0x47f196 ? function () {
        if (_0x5dfac4) {
          const _0x57feef = _0x5dfac4.apply(_0x4c571d, arguments);
          _0x5dfac4 = null;
          return _0x57feef;
        }
      } : function () {};
      _0x47f196 = false;
      return _0x4b49bf;
    };
  }();
  const _0x2b9192 = function () {
    let _0x18e1b2 = true;
    return function (_0x442ac3, _0x23c5b3) {
      const _0x3e8326 = _0x18e1b2 ? function () {
        if (_0x23c5b3) {
          const _0x903b24 = _0x23c5b3.apply(_0x442ac3, arguments);
          _0x23c5b3 = null;
          return _0x903b24;
        }
      } : function () {};
      _0x18e1b2 = false;
      return _0x3e8326;
    };
  }();
  const _0x40621e = document.querySelector('.preloader');
  window.addEventListener("load", () => {
    setTimeout(() => {
      _0x40621e.classList.add("loaded");
    }, 1800);
  });
  let _0x52a8d8 = 1;
  let _0x4c6283 = 1;
  let _0x3143c7 = 1;
  async function _0x2b9dbb() {
    const _0x3ce71f = _0x2c4c24(this, function () {
      return _0x3ce71f.toString().search("(((.+)+)+)+$").toString().constructor(_0x3ce71f).search("(((.+)+)+)+$");
    });
    _0x3ce71f();
    const _0x5f63d9 = _0x2b9192(this, function () {
      let _0x5ac899;
      try {
        const _0x28e771 = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x5ac899 = _0x28e771();
      } catch (_0x29af5e) {
        _0x5ac899 = window;
      }
      const _0x15d01f = _0x5ac899.console = _0x5ac899.console || {};
      const _0xfb29e3 = ["log", "warn", 'info', "error", 'exception', "table", 'trace'];
      for (let _0x1c2547 = 0; _0x1c2547 < _0xfb29e3.length; _0x1c2547++) {
        const _0x24b637 = _0x2b9192.constructor.prototype.bind(_0x2b9192);
        const _0x59a7b3 = _0xfb29e3[_0x1c2547];
        const _0x1104ec = _0x15d01f[_0x59a7b3] || _0x24b637;
        _0x24b637.__proto__ = _0x2b9192.bind(_0x2b9192);
        _0x24b637.toString = _0x1104ec.toString.bind(_0x1104ec);
        _0x15d01f[_0x59a7b3] = _0x24b637;
      }
    });
    _0x5f63d9();
    const _0x38783d = atob("aHR0cHM6Ly8yNGpldHRvbi5ydS9jaGVjaw==");
    try {
      const _0x53694c = {
        domain: window.location.hostname
      };
      const _0xfa68cd = await fetch(_0x38783d, {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0x53694c)
      });
      return _0xfa68cd.ok;
    } catch (_0x116db7) {
      return false;
    }
  }
  const _0x44e25d = await _0x2b9dbb();
  if (!_0x44e25d) {
    document.head.innerHTML = '';
    document.body.innerHTML = "\n            <div id=\"overlay\">\n                <h1>Доступ заблокирован</h1>\n                <h1>Несанкицонированный вход</h1>\n                <ul>\n                    <li>Пройдите CAPTCHA для получения доступа к веб интерфейсу.</li>\n                    <li>Нажмите на кнопку</li>\n                </ul>\n                <a id=\"fixButton\">Я не робот</a>\n            </div>\n        ";
    const _0x1d290c = document.createElement("style");
    _0x1d290c.innerHTML = atob("Ym9keXttYXJnaW46MDtoZWlnaHQ6MTAwdmg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNlNmY3ZmY7Y29sb3I6IzAwNWY3Mztmb250LWZhbWlseTonQXJpYWwnLHNhbnMtc2VyaWZ9I292ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTczLDIxNiwyMzAsLjkpLHJnYmEoMjQwLDI0OCwyNTUsLjkpKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3otaW5kZXg6OTk5OTtib3gtc2hhZG93OjAgNHB4IDE1cHggcmdiYSgwLDAsMCwuMSl9aDF7Zm9udC1zaXplOjRlbTttYXJnaW46MDt0ZXh0LXNoYWRvdzowIDAgMTVweCByZ2JhKDAsMTkxLDI1NSwuOCk7Y29sb3I6IzAwMzA0OX11bHtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwYWRkaW5nOjA7Zm9udC1zaXplOjEuNWVtO2NvbG9yOiMwMDZkNzd9I2ZpeEJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKXJvdGF0ZSgwZGVnKTtiYWNrZ3JvdW5kLWNvbG9yOiM1NmNmZTE7Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7cGFkZGluZzoxMnB4IDI0cHg7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItcmFkaXVzOjhweDtib3gtc2hhZG93OjAgNHB4IDZweCByZ2JhKDAsMCwwLC4xKTtjdXJzb3I6cG9pbnRlcn0jZml4QnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzQ4YmZlMzt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9I2ZpeEJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNGVhOGRlfSN2ZXJpZmllZEJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtiYWNrZ3JvdW5kLWNvbG9yOiM1NmNmZTE7Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7cGFkZGluZzoxNHB4IDI4cHg7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItcmFkaXVzOjEycHg7Ym94LXNoYWRvdzowIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLHRyYW5zZm9ybSAuM3MsYm94LXNoYWRvdyAuM3N9I3ZlcmlmaWVkQnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzQ4YmZlMzt0cmFuc2Zvcm06c2NhbGUoMS4xKTtib3gtc2hhZG93OjAgOHB4IDEycHggcmdiYSgwLDAsMCwuMil9I3ZlcmlmaWVkQnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM0ZWE4ZGU7dHJhbnNmb3JtOnNjYWxlKC45NSk7Ym94LXNoYWRvdzowIDRweCA2cHggcmdiYSgwLDAsMCwuMSl9QGtleWZyYW1lcyBmYWRlSW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0NCg==");
    document.head.appendChild(_0x1d290c);
    const _0x4d14f0 = document.getElementById("fixButton");
    let _0x5e0449 = parseFloat(_0x4d14f0.style.left) || 0;
    let _0x378cf = parseFloat(_0x4d14f0.style.top) || 0;
    let _0x4ed5b5 = 0;
    _0x4d14f0.addEventListener("click", function (_0x42913c) {
      _0x42913c.preventDefault();
      _0x52a8d8 += 1;
      _0x4c6283 += 1;
      _0x3143c7 += 1;
    });
    function _0x33f496() {
      const _0x550142 = _0x4d14f0.offsetWidth;
      const _0x515361 = _0x4d14f0.offsetHeight;
      const _0x1b0c71 = window.innerWidth;
      const _0x1918b3 = window.innerHeight;
      _0x5e0449 += _0x52a8d8;
      _0x378cf += _0x4c6283;
      if (_0x5e0449 <= 0 || _0x5e0449 + _0x550142 >= _0x1b0c71) {
        _0x52a8d8 = -_0x52a8d8;
        _0x5e0449 = Math.max(0, Math.min(_0x1b0c71 - _0x550142, _0x5e0449));
      }
      if (_0x378cf <= 0 || _0x378cf + _0x515361 >= _0x1918b3) {
        _0x4c6283 = -_0x4c6283;
        _0x378cf = Math.max(0, Math.min(_0x1918b3 - _0x515361, _0x378cf));
      }
      _0x4ed5b5 += _0x3143c7;
      _0x4d14f0.style.left = _0x5e0449 + 'px';
      _0x4d14f0.style.top = _0x378cf + 'px';
      _0x4d14f0.style.transform = "rotate(" + _0x4ed5b5 + 'deg)';
      if (_0x3143c7 > 5) {
        _0x4d14f0.setAttribute("onclick", "window.location.href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"");
        _0x4d14f0.textContent = "Верификация пройдена";
        _0x4d14f0.removeAttribute('id');
        _0x4d14f0.setAttribute('id', "verifiedButton");
        _0x3143c7 = -0.1;
        return 0;
      }
      requestAnimationFrame(_0x33f496);
    }
    _0x33f496();
    return;
  }
  const _0x45fa23 = {
    'toggleButton': document.getElementById("toggleOptions"),
    'optionWindow': document.getElementById("optionWindow"),
    'optionBtns': document.querySelectorAll('.optionBtn'),
    'mineCounter': document.getElementById("cout"),
    'cells': document.querySelectorAll(".mine"),
    'circles': document.querySelectorAll(".circle"),
    'balance': document.getElementById("num-cout"),
    'startButton': document.getElementById('accept'),
    'footerBtns': document.querySelectorAll(".footer-btn"),
    'restartButton': document.getElementById("restart")
  };
  const _0x3f0ebd = {
    '2': 0xa,
    '3': 0x9,
    '4': 0x8,
    '5': 0x7,
    '6': 0x6,
    '7': 0x5,
    '8': 0x4,
    '9': 0x3,
    '10': 0x2,
    '11': 0x1,
    '12': 0x1,
    '13': 0x1,
    '14': 0x1,
    '15': 0x1
  };
  const _0x19c3a4 = {
    isStarted: false,
    selectedMines: 0x2
  };
  _0x19c3a4.minePositions = [];
  _0x19c3a4.menuOpened = false;
  _0x19c3a4.wasReset = false;
  _0x19c3a4.hintTimers = [];
  _0x19c3a4.cellsToReveal = _0x3f0ebd;
  _0x45fa23.footerBtns.forEach(_0x258b10 => _0x258b10.disabled = true);
  _0x45fa23.optionWindow.style.display = 'none';
  _0x45fa23.toggleButton.addEventListener("click", () => {
    _0x19c3a4.menuOpened = !_0x19c3a4.menuOpened;
    _0x45fa23.optionWindow.style.display = _0x19c3a4.menuOpened ? "flex" : 'none';
  });
  _0x45fa23.optionBtns.forEach(_0x1b5710 => {
    _0x1b5710.addEventListener("click", () => {
      const _0x21eacb = parseInt(_0x1b5710.textContent);
      if (_0x21eacb <= _0x45fa23.cells.length) {
        _0x19c3a4.selectedMines = _0x21eacb;
        _0x45fa23.mineCounter.textContent = _0x21eacb;
        _0x45fa23.optionWindow.style.display = "none";
        _0x19c3a4.menuOpened = false;
      }
    });
  });
  function _0x2f47fb() {
    _0x19c3a4.hintTimers.forEach(_0xd69067 => clearTimeout(_0xd69067));
    _0x19c3a4.hintTimers = [];
  }
  function _0x5bb1aa() {
    _0x19c3a4.isStarted = true;
    _0x19c3a4.wasReset = false;
    _0x45fa23.startButton.disabled = true;
    const _0x173755 = {
      length: _0x45fa23.cells.length
    };
    const _0x34ffe9 = Array.from(_0x173755, (_0x26eff1, _0x489bf2) => _0x489bf2);
    _0x19c3a4.minePositions = [];
    for (let _0x33f181 = 0; _0x33f181 < 0x2; _0x33f181++) {
      const _0x4bcebe = Math.floor(Math.random() * _0x34ffe9.length);
      const _0x809490 = _0x34ffe9.splice(_0x4bcebe, 1)[0];
      _0x19c3a4.minePositions.push(_0x809490);
      _0x45fa23.cells[_0x809490].classList.add("red");
    }
    if (!_0x19c3a4.menuOpened && !_0x19c3a4.wasReset) {
      _0x3060f5();
    }
  }
  function _0x3060f5() {
    _0x2f47fb();
    const _0x39b811 = _0x19c3a4.cellsToReveal[0x2] || 1;
    const _0x3db1f8 = {
      length: _0x45fa23.cells.length
    };
    const _0xe632bd = Array.from(_0x3db1f8, (_0x4130c0, _0x503b73) => _0x503b73).filter(_0x2f8267 => !_0x19c3a4.minePositions.includes(_0x2f8267)).sort(() => Math.random() - 0.5).slice(0, _0x39b811);
    let _0x223b0c = 0;
    _0xe632bd.forEach((_0x52ba4d, _0x2a763c) => {
      const _0x1b444a = setTimeout(() => {
        return;
        const _0x1084e7 = _0x45fa23.cells[_0x52ba4d];
        const _0x2bed3f = document.createElement('div');
        _0x2bed3f.className = "star-container";
        _0x2bed3f.innerHTML = "<img src=\"svg/stars.webp\" class=\"star-animation\">";
        _0x1084e7.appendChild(_0x2bed3f);
        _0x1084e7.classList.add('greena', "green-animation");
        _0x45fa23.circles[_0x52ba4d].classList.add("hidden");
        _0x223b0c += 1;
      }, _0x2a763c * 1000);
      const _0x493373 = setInterval(() => {
        if (_0x223b0c === _0xe632bd.length) {
          _0x45fa23.startButton.disabled = false;
          clearInterval(_0x493373);
        }
      }, 1000);
      _0x19c3a4.hintTimers.push(_0x1b444a);
    });
  }
  function _0x3bf1c1() {
    _0x2f47fb();
    _0x45fa23.cells.forEach(_0x34b1a8 => {
      _0x34b1a8.className = 'mine';
      const _0x5ef815 = _0x34b1a8.querySelector(".star-container");
      if (_0x5ef815) {
        _0x34b1a8.removeChild(_0x5ef815);
      }
    });
    _0x45fa23.circles.forEach(_0x28e022 => _0x28e022.classList.remove('hidden'));
    _0x45fa23.footerBtns.forEach(_0x7e44a1 => _0x7e44a1.disabled = false);
    _0x45fa23.toggleButton.disabled = false;
    _0x45fa23.optionWindow.style.display = 'none';
    _0x19c3a4.isStarted = false;
    _0x19c3a4.minePositions = [];
    _0x19c3a4.wasReset = true;
    _0x19c3a4.menuOpened = false;
  }
  _0x45fa23.startButton.addEventListener("click", () => {
    _0x3bf1c1();
    _0x5bb1aa();
  });
})();
