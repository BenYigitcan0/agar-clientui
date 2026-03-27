var selectSkinModalAjax = 0,
  selectSkinName = "1",
  port = 443,
  CONNECTION_URL = "pop1.agar.live:" + port,
  playGameClickEvent = 0,
  Uping,
  Uuptime,
  Uplayers,
  Sfreeze = false
  gameBackground = false
  cColor = "#111"
  bColor = "#FF00ff"
  bLength = 100
  ignoreList = [];

function appendHtmlChild() {
  localStorage.gameMode &&
    localStorage.gameMode != undefined &&
    localStorage.gameMode != null &&
    (document.querySelector(
      '#gamemode [value="' + localStorage.gameMode + '"]',
    ).selected = true);
  localStorage.playerNick &&
  localStorage.playerNick != undefined &&
  localStorage.playerNick != null
    ? (document.getElementById("nick").value = localStorage.playerNick)
    : (document.getElementById("nick").value = "BaytaR");
  localStorage.skin &&
  localStorage.skin != undefined &&
  localStorage.skin != null
    ? ((document.getElementById("defaultSkin").src =
        localStorage.skin == 396 ? "https://cdn.agarz.com/!eyeless_jack!.png" : localStorage.skin == 397 ? "https://cdn.agarz.com/!kanaki!.png" : localStorage.skin == 398 ? "https://cdn.agarz.com/ado148.png" : localStorage.skin == 399 ? "https://cdn.agarz.com/ata.png" : localStorage.skin == 400 ? "https://cdn.agarz.com/ataturk-buyuk.png" : localStorage.skin == 401 ? "https://cdn.agarz.com/atat%C3%BCrk.png" : "https://agar.live/skins/" + localStorage.skin + ".png"),
      (selectSkinName = localStorage.skin))
    : (document.getElementById("defaultSkin").src =
        "https://agar.live/skins/361.png");
}
document.addEventListener("DOMContentLoaded", (_0x42fa1b) => {
  getScript(
    "https://www.google.com/recaptcha/api.js?render=6LcnrKQUAAAAADohV5Cksikz89WSP-ZPHNA7ViZm",
  );

  // console.log("Game is ready");
  appendHtmlChild();
  setserver(CONNECTION_URL);
});

function getScript(_0x353d13, _0x2d7ad3) {
  const _0x1a021b = document.createElement("script");
  _0x1a021b.src = _0x353d13;
  _0x1a021b.onload = _0x2d7ad3;
  document.body.appendChild(_0x1a021b);
};
(function (_0x1154df, _0x5c642d) {
  _0x1154df.setserver = function () {
    var _0x7f4387 = document.getElementById("gamemode").value;
    _0x7f4387 != _0x33ee7e &&
      ((CONNECTION_URL = _0x7f4387),
      (_0x33ee7e = _0x7f4387),
      _0xde92b2(CONNECTION_URL),
      (localStorage.gameMode = _0x7f4387));
  };
  _0x1154df.mobile_OpenSettings = function () {
    document.getElementById("mobile_settingsModal").style.display = "block";
  };
  _0x1154df.mobile_CloseSettings = function () {
    document.getElementById("mobile_settingsModal").style.display = "none";
  };
  _0x1154df.mobile_OpenSelectSkinPage = function () {
    selectSkinModalAjax == 0 &&
      getScript("./skins.js?=v1", () => (selectSkinModalAjax = 1));
  };
  _0x1154df.selectSkinPage = function () {
    selectSkinModalAjax == 0 &&
      selectSkinModalAjax == 0 &&
      getScript("./skins.js?=v1", () => (selectSkinModalAjax = 1));
  };
  _0x1154df.closeSkinPage = function () {
    selectskinmodalclose();
  };
  _0x1154df.setSkinListClick = function (_0x17415e) {
    if(_0x17415e < 395){
    document.getElementById("defaultSkin").src =
      "https://agar.live/skins/" + _0x17415e + ".png";
    } else {
          if(_0x17415e == 396){
          document.getElementById("defaultSkin").src =
      "https://cdn.agarz.com/!eyeless_jack!.png";
    } else if(_0x17415e == 397){
          document.getElementById("defaultSkin").src =
      "https://cdn.agarz.com/!kanaki!.png";
    } else if(_0x17415e == 398){
          document.getElementById("defaultSkin").src =
      "https://cdn.agarz.com/ado148.png";
    } else if(_0x17415e == 399){
          document.getElementById("defaultSkin").src =
     "https://cdn.agarz.com/ata.png";
    } else if(_0x17415e == 400){
          document.getElementById("defaultSkin").src =
      "https://cdn.agarz.com/ataturk-buyuk.png";
    }else if(_0x17415e == 401){
          document.getElementById("defaultSkin").src =
      "https://cdn.agarz.com/atat%C3%BCrk.png";
    }
  }
    closeSkinPage();
    localStorage.skin = _0x17415e;
    selectSkinName = _0x17415e;
    console.log(_0x17415e + " 'skin update'");
  };
  const input = document.getElementById('urlInput');
const panelC = document.querySelector(".main-login-area-center");
const panelR = document.querySelector(".main-login-area-right");
const panelL = document.querySelector(".main-login-area-left");
const skinPanel = document.querySelector("#mlartb-skin-panel");
const leftPanelsArea = document.querySelector(".main-login-area-left-panel-box");
const imageBg = document.querySelector(".circle");
var imageBgNew = new Image();

imageBg.addEventListener('click', (e) => {
 console.log(e);
  if (!gameBackground) {
    imageBgNew.crossOrigin = 'anonymous';
    imageBgNew.src = "imgs/hex2.webp";

    imageBgNew.onload = function () {
      gameBackground = true;
      imageBg.classList.add('active');
    };

  } else {
    imageBgNew.src = "";
    imageBg.classList.remove('active');
    gameBackground = false;
  }
});

  input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const url = input.value.trim();
  if (url) {
        panelC.style.backgroundImage = `url('${url}')`;
    panelC.style.backgroundSize = 'cover';
    panelC.style.backgroundPosition = 'center';
            panelR.style.backgroundImage = `url('${url}')`;
    panelR.style.backgroundSize = 'cover';
    panelR.style.backgroundPosition = 'center';
            panelL.style.backgroundImage = `url('${url}')`;
    panelL.style.backgroundSize = 'cover';
    panelL.style.backgroundPosition = 'center';
            skinPanel.style.backgroundImage = `url('${url}')`;
    skinPanel.style.backgroundSize = 'cover';
    skinPanel.style.backgroundPosition = 'center';
            leftPanelsArea.style.backgroundImage = `url('${url}')`;
    leftPanelsArea.style.backgroundSize = 'cover';
    leftPanelsArea.style.backgroundPosition = 'center';
  }
   const img = new Image();
  img.crossOrigin = 'anonymous'; // CORS için
  img.src = url;
}
});

function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  return "#" + result.map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

   const c1 = document.getElementById("color1");
        const r1 = document.getElementById("realColor1");

        c1.onclick = () => r1.click();
          r1.oninput = (e) => {
            c1.style.background = e.target.value;
            cColor = e.target.value;
        };

        // COLOR 2 (farklı görev)
        const c2 = document.getElementById("color2");
        const r2 = document.getElementById("realColor2");

        c2.onclick = () => r2.click();
        r2.oninput = (e) => {
            c2.style.background = e.target.value;
            bColor = e.target.value;
        };

         document.getElementById("range").oninput = (e) => {
            bLength = e.target.value;
        };

        var Feed = false;
        var imlost = 25;
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 89) {
              playGame();
            }else if (e.keyCode == 81) {
        Feed = true;
                    setTimeout(fukherriteindapussie, imlost);
            }
          });
                  window.addEventListener("keyup", (e) => {
          if (e.keyCode == 87) {
        Feed = false;
    }
  });
  function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87});
        window.onkeyup({keyCode: 87});
        setTimeout(fukherriteindapussie, imlost);
    }
}

  function _0x1d0b7d(
    _0x40b698,
    _0x58f698,
    _0x4fa260,
    _0x117797,
    _0x3df4b9,
    _0x2db189,
  ) {
    if (
      _0x40b698 <= _0x3df4b9 &&
      _0x3df4b9 <= _0x4fa260 &&
      _0x58f698 <= _0x2db189 &&
      _0x2db189 <= _0x117797
    ) {
      return true;
    }
    return false;
  }
  Element.prototype.hide = function () {
    this.style.visibility = "hidden";
    if (this.style.opacity == 1) {
      this.style.opacity = 0;
    }
  };
  Element.prototype.show = function (_0x3429ba) {
    this.style.visibility = "visible";
    var _0x86be29 = this;
    _0x3429ba &&
      ((this.style.transition = "opacity " + _0x3429ba + "s ease 0s"),
      setTimeout(function () {
        _0x86be29.style.opacity = 1;
      }, 20));
  };
  var _0x2dd0ca = "https://agar.live/skins/",
    _0x1abc67 = "createTouch" in document,
    _0x2adf4e = [],
    _0x3e66be = 100,
    _0x39a218 = 20,
    _0x323587 = "!",
    _0xd37afc = 0,
    _0x370936 = 0,
    _0x3d769c = 0,
    _0xdfc219 = _0x1154df.location.protocol,
    _0x37fdcd = "https:" == _0xdfc219,
    _0xe72a47,
    _0x16b27b,
    _0x4fc920,
    _0x1afb5a,
    _0x4e0f0e,
    canvasWidth,
    canvasHeight,
    _0x2cf3cf = null,
    _0x41adc2 = null,
    _0x4f5429 = 0,
    _0x1f0529 = 0,
    nodesOnScreen = [],
    playerCells = [],
    nodesOnScreen2 = [],
    playerCells2 = [],
    nodes = {},
    nodelist = [],
    mynodelist,
    mynodelist2,
    nodes2 = {},
    nodelist2 = [],
    _0x551ae1 = [],
    _0x225ef1 = [],
    _0x573162 = "Lider Tablosu",
    _0x48203d = [],
    _0x7a7861 = 0,
    _0x2aaf30 = 0,
    _0x4232df = -1,
    _0x4ddae1 = -1,
    _0xe1267f = 0,
    _0x443ee3 = Date.now(),
    _0x40174c = 0,
    _0x2be5c9 = 0,
    timestamp = 0,
    _0x22b0f0 = 0,
    _0x12d6c2 = 0,
    _0x55af78 = 10000,
    _0x13322c = 10000,
    _0x1402f0 = 1,
    _0x5d5ae3 = false,
    _0x23ab14 = false,
    _0x319c56 = false,
    ua = false,
    _0x4fea95 = 0,
    _0x2bc39b = 0,
    _0x456030 = false,
    _0x16e8c8 = false,
    _0x2eb996 = false,
    _0x2582ca = 0.4,
    _0x7ac7be = false,
    _0x2653d4 = false,
    _0x18263b = false,
    _0x1b6830 = (_0x4f5429 = ~~((_0x22b0f0 + _0x55af78) / 2)),
    _0x552165 = (_0x1f0529 = ~~((_0x12d6c2 + _0x13322c) / 2)),
    _0x503f66 = 1,
    _0x33ee7e = "",
    _0xd46307 = null,
    _0x1c7fca = true,
    _0x1fbd55 = false,
    _0x3a03fd = 0,
    _0x35d3df = 0,
    _0x46e881 = 0,
    _0x52f418 = 0,
    wsServer,
    _0x3bf563 = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
    _0x339536 = 0.4,
    _0x3167b9 =
      "ontouchstart" in _0x1154df &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ),
    _0x14a358 = false,
    _0x3dce4b = document.createElement("canvas");
  _0x1154df.isSpectating = false;
  var _0x2c6c3e = Date.now();

  function _0x2c91e6() {
    const _0x172f79 = document.querySelector("#chat_textbox");
    var _0x4bd8d0 = "ontouchstart" in document.documentElement;
    if (_0x4bd8d0 == true) {
    } else {
    }
    if (localStorage.noSkin == null) {
      localStorage.noSkin = false;
    }
    _0x5d5ae3 = localStorage.noSkin === "true";
    document.getElementById("noSkin").checked = _0x5d5ae3;
    if (localStorage.noNames == null) {
      localStorage.noNames = true;
    }
    _0x23ab14 = localStorage.noNames === "true";
    document.getElementById("noNames").checked = _0x23ab14;
    if (localStorage.noColor == null) {
      localStorage.noColor = false;
    }
    _0x319c56 = localStorage.noColor === "true";
    document.getElementById("noColor").checked = _0x319c56;
    if (localStorage.showDarkTheme == null) {
      localStorage.showDarkTheme = true;
    }
    _0x456030 = localStorage.showDarkTheme === "true";
    document.getElementById("darkTheme").checked = _0x456030;
    if (localStorage.hideChat == null) {
      localStorage.hideChat = false;
    }
    _0x2653d4 = localStorage.hideChat === "true";
    document.getElementById("hideChat").checked = _0x2653d4;
    _0x2653d4
      ? (document.getElementById("chat_textbox").style.display = "none")
      : (document.getElementById("chat_textbox").style.display = "block");
    if (localStorage.smoothRender == null) {
      localStorage.smoothRender = 0.4;
    }
    _0x2582ca = localStorage.smoothRender;
    document.getElementById("smoothRender").checked = _0x2582ca == 2;
    if (localStorage.transparentRender == null) {
      localStorage.transparentRender = false;
    }
    _0x7ac7be = localStorage.transparentRender === "true";
    document.getElementById("transparentRender").checked = _0x7ac7be;
    if (localStorage.showScore == null) {
      localStorage.showScore = false;
    }
    _0x16e8c8 = localStorage.showScore === "true";
    document.getElementById("showScore").checked = _0x16e8c8;
    if (localStorage.zoom == null) {
      localStorage.zoom = false;
    }
    _0x18263b = localStorage.zoom === "true";
    document.getElementById("getZoom").checked = _0x18263b;
    document.getElementById("canvas").focus();
    var _0x404848 = false,
      _0x470893;
    _0x4fc920 = _0xe72a47 = document.getElementById("canvas");
    _0x16b27b = _0x4fc920.getContext("2d");
    _0x4fc920.onmousemove = function (_0x302370) {
      _0x7a7861 = _0x302370.clientX;
      _0x2aaf30 = _0x302370.clientY;
      _0x439b61();
    };
    _0x4fc920.onmousedown = function (_0x3a6755) {
      var _0x4b074d = _0x3a6755.clientX,
        _0x2edce9 = _0x3a6755.clientY,
        _0x4deced = new Date().getTime() - _0xd37afc;
      _0x4deced > 5000 &&
        _0x4b074d >= 0 &&
        _0x4b074d <= 0 + _0x3e66be &&
        _0x2edce9 >= -15 - _0x39a218 &&
        _0x2edce9 <= -15 &&
        (_0x512281(_0x323587), (_0xd37afc = new Date().getTime()));
    };
    _0x1abc67 &&
      (_0x4fc920.addEventListener("touchstart", _0x549cd7, false),
      _0x4fc920.addEventListener("touchmove", _0x59057e, false),
      _0x4fc920.addEventListener("touchend", _0x316e0b, false));
    _0x4fc920.onmouseup = function () {};
    /firefox/i.test(navigator.userAgent)
      ? document.addEventListener("DOMMouseScroll", _0x38a98f, false)
      : (document.body.onmousewheel = _0x38a98f);
    _0x4fc920.onfocus = function () {
      _0x404848 = false;
    };
    document.getElementById("chat_textbox").onblur = function () {
      _0x404848 = false;
    };
    document.getElementById("chat_textbox").onfocus = function () {
      _0x404848 = true;
    };

    var _0x57307f = false,
      _0x3cb1b5 = false,
      _0x501f6d = false;
    _0x1154df.onkeydown = function (_0x1f4f29) {
      var _0x52100a =
        document.getElementById("main-login-section").style.visibility;
      switch (_0x1f4f29.keyCode) {
        case 32:
          !_0x57307f &&
            !_0x404848 &&
            _0x52100a == "hidden" &&
            (_0x5474e3(), _0x1519d9(17), (_0x57307f = true));
          break;
        case 51:
          var msg = dataView(1);
          msg.setUint8(0, 17);
          wsSend(msg);
          break;
        case 52:
          var msg = dataView(1);
          msg.setUint8(0, 17);
          wsSend(msg);
          break;
        case 81:
          !_0x3cb1b5 &&
            _0x52100a == "hidden" &&
            (_0x1519d9(18), (_0x3cb1b5 = true));
          break;
        case 84:
          clearChat();
          break;
        case 87:
          !_0x501f6d &&
            !_0x404848 &&
            _0x52100a == "hidden" &&
            (_0x5474e3(), _0x1519d9(21), (_0x501f6d = true));
          break;
        case 70:
          !_0x404848 &&
            (Sfreeze == false
              ? ((Sfreeze = true), _0x105918("Game stopped."))
              : ((Sfreeze = false), _0x105918("Game resumed.")));
          break;
        case 67:
          !_0x404848 && _0x512281("psx2psx2");
          break;
        case 27:
          _0x4620f0("fast");
          _0x1154df.isSpectating = false;
          break;
        case 13:
          if (_0x404848) {
            _0x404848 = false;
            document.getElementById("chat_textbox").blur();
            _0x470893 = _0x512281(
              document.getElementById("chat_textbox").value,
            );
            if (document.getElementById("chat_textbox").value > 0) {
              _0x512281(_0x470893);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            !_0x1c7fca &&
              (document.getElementById("chat_textbox").focus(),
              (_0x404848 = true));
          }
          break;
      }
    };
    _0x1154df.onkeyup = function (_0x4c2933) {
      switch (_0x4c2933.keyCode) {
        case 32:
          _0x57307f = false;
          break;
        case 87:
          _0x501f6d = false;
          break;
        case 81:
          _0x3cb1b5 && (_0x1519d9(19), (_0x3cb1b5 = false));
          break;
      }
    };
    _0x1154df.onblur = function () {
      _0x501f6d = _0x3cb1b5 = _0x57307f = false;
    };
    _0x1154df.onresize = _0x3cca80;
    _0x3cca80();
    _0x1154df.requestAnimationFrame
      ? _0x1154df.requestAnimationFrame(_0x4a98c2)
      : setInterval(_0x5cf431, 16.666666666666668);
    document.getElementById("main-login-section").style.visibility = "visible";
  }
  (function () {
    var _0x2ccdd2 = function (_0x5308eb) {
      if (_0x5308eb.keyCode === 69) {
        for (var _0x1e526c = 0; _0x1e526c < 10; ++_0x1e526c) {
          setTimeout(function () {
            window.onkeydown({
              keyCode: 87,
            });
            window.onkeyup({
              keyCode: 87,
            });
          }, _0x1e526c * 50);
        }
      }
    };
    window.addEventListener("keydown", _0x2ccdd2);
  })();

  document.querySelectorAll("label").forEach((el) => {
    if (
      el.textContent.trim() === "Clear Chat" ||
      el.textContent.trim() === "Share Location"
    ) {
      el.remove();
    }
  });

  function _0x105918(_0x21f089) {
    let _0x1d6ffc = "";
    _0x1d6ffc == "" && (_0x1d6ffc = _0x21f089);
    let _0x49804d = document.getElementById("nn");
    _0x49804d.style.position = "absolute";
    _0x49804d.style.display = "block";
    _0x49804d.style.top = "200px";
    _0x49804d.style.fontSize = "20px";
    _0x49804d.style.color = "red";
    _0x49804d.style.zIndex = "2000";
    _0x49804d.style.textAlign = "center";
    _0x49804d.style.width = "100%";
    _0x49804d.innerHTML = _0x1d6ffc;
    _0x49804d.style.opacity = 1;
    _0x49804d.style.fontSize = "7em";
    setTimeout(function () {
      _0x49804d.style.display = "none";
    }, 500);
  }

  function _0x38a98f(_0x339cc0) {
    _0x18263b
      ? ((_0x339536 *= Math.pow(
          0.9,
          _0x339cc0.wheelDelta / -120 || _0x339cc0.detail || 0,
        )),
        0.4 > _0x339536 && (_0x339536 = 0.4),
        _0x339536 > 10 / _0x1402f0 && (_0x339536 = 10 / _0x1402f0))
      : ((_0x339536 *= Math.pow(
          0.9,
          _0x339cc0.wheelDelta / -120 || _0x339cc0.detail || 0,
        )),
        0.01 > _0x339536 && (_0x339536 = 0.01),
        _0x339536 > 4 / _0x1402f0 && (_0x339536 = 4 / _0x1402f0));
  }

  function _0x439b61() {
    _0x4232df = (_0x7a7861 - canvasWidth / 2) / _0x1402f0 + _0x4f5429;
    _0x4ddae1 = (_0x2aaf30 - canvasHeight / 2) / _0x1402f0 + _0x1f0529;
  }

  function _0x455917() {
    _0x1c7fca = false;
    document.getElementById("main-login-section").hide(1);
  }

  function _0x4620f0(_0x2d44ba) {
    _0x1c7fca = true;
    _0x2d44ba == "fast"
      ? document.getElementById("main-login-section").show(0.2)
      : document.getElementById("main-login-section").show(0.5);
  }

  function _0x1dcff8() {
    document.getElementById("stats_hightesmass").innerHTML = _0x2bc39b;
    document.getElementById("stats_timealive").innerHTML = _0xdd7d12(
      (Date.now() - _0x443ee3) / 1000,
    );
    document.getElementById("stats_topposition").innerHTML =
      0 == _0x40174c ? ":(" : _0x40174c;
    document.getElementById("infoOverlays").show(0.5);
  }

  function _0x30f669() {
    if (null == _0x225ef1) {
      return 0;
    }
    for (var _0x11b9af = 0; _0x11b9af < _0x225ef1.length; ++_0x11b9af) {
      if (-1 != nodesOnScreen.indexOf(_0x225ef1[_0x11b9af].id)) {
        return _0x11b9af + 1;
      }
    }
    return 0;
  }

  function _0x52210d(_0x5bbcc8, _0x2cea99) {
    if (_0x5bbcc8.indexOf("{") != -1 && _0x5bbcc8.indexOf("}") != -1) {
      var _0x12169c = _0x5bbcc8.indexOf("{"),
        _0x454cf5 = _0x5bbcc8.indexOf("}"),
        _0x262bb5 = _0x5bbcc8.slice(_0x454cf5 + 1);
      return (
        _0x2cea99 &&
          (_0x262bb5 == ""
            ? (_0x262bb5 = "UnnamedCell")
            : (_0x262bb5 = _0x5bbcc8.slice(_0x454cf5 + 1))),
        [_0x5bbcc8.slice(_0x12169c + 1, _0x454cf5), _0x262bb5]
      );
    } else {
      return ["", _0x5bbcc8];
    }
  }

  function _0xdd7d12(_0x597c71) {
    _0x597c71 = ~~_0x597c71;
    var _0x2f3a97 = (_0x597c71 % 60).toString();
    return (
      (_0x597c71 = (~~(_0x597c71 / 60)).toString()),
      2 > _0x2f3a97.length && (_0x2f3a97 = "0" + _0x2f3a97),
      _0x597c71 + ":" + _0x2f3a97
    );
  }

  function _0xde92b2(_0x1ec878) {
    if (_0x41adc2) {
      _0x41adc2.onopen = null;
      _0x41adc2.onmessage = null;
      _0x41adc2.onclose = null;
      try {
        _0x41adc2.close();
      } catch (_0xd99386) {
        console.log("Connection not closed");
      }
      _0x41adc2 = null;
    }
    var _0x54f62b = CONNECTION_URL;
    _0x1ec878 = "wss://" + _0x54f62b;
    nodesOnScreen = [];
    playerCells = [];
    nodesOnScreen2 = [];
    playerCells2 = [];
    nodes = {};
    nodelist = [];
    _0x551ae1 = [];
    _0x225ef1 = [];
    mynodelist = [];
    mynodelist2 = [];
    nodes2 = {};
    nodelist2 = [];
    _0x573162 = "RESTART";
    this.countdown = 3599;
    _0x4fc920 = _0xd46307 = null;
    _0x2bc39b = 0;
    _0x4fea95 = 0;
    _0x2be5c9 = 0;
    _0x41adc2 = new WebSocket(_0x1ec878, ["protocol1", "protocol2"]);
    _0x41adc2.binaryType = "arraybuffer";
    _0x41adc2.onopen = _0x4508d4;
    _0x41adc2.onmessage = _0x506b57;
    _0x41adc2.onclose = _0x173bfb;
    _0x41adc2.onerror = function (_0x10ae64) {
      console.log(_0x10ae64);
    };
  }

  function handleOpen() {
    return 1;
  }

  function sendAllNodesJSON() {
    return;
    if (!wsServer || wsServer.readyState !== WebSocket.OPEN) return;

    const safeNodeList = nodelist.map(node => ({
      id: node.id,
      x: node.ox,
      y: node.oy,
      size: node.oSize,
      color: node.color,
        ox: node.ox,
        oy: node.oy, oSize: node.oSize,
        ka: node.ka,
        la: node.la,
        isVirus: node.isVirus,
        isAgitated: node.isAgitated,
        nx: node.nx,
        ny: node.ny,
        nSize: node.nSize,
        updateCode: node.updateCode,
        updateTime: node.updateTime,
        flag: node.flag,
      uName: node.name || node.uName || "",
    }));

    wsServer.send(JSON.stringify(safeNodeList));
  }
  function selectOptionByValue(selectElement, optionValueToSelect) {
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === optionValueToSelect) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  }

  function handleMessage(event) {
    var offset = 0;
    const opcode = event.getUint8(offset++);

    switch (opcode) {
      case 16:
        updateNodes3(event, offset);
        break;
      case 17:
        handleOpcode17(event, offset);
        break;
    }

    return;
       const data = JSON.parse(event.data);
    console.log(data);
     if (!Array.isArray(data)) return; // güvenlik önlemi
    for (let node of data) {
      // Aynı id’ye sahip bir node zaten varsa atla
      if (!nodelist.some(n => n.id === node.id)) {
        mynodelist.push(new Cell(node.id, node.x, node.y,node.size, node.color, node.uName));
      }
    }
  }

  function handleOpcode17(_0x2076cc, offset) {
    var count = _0x2076cc.getUint32(offset, true);
    offset += 4;
    for (var i = 0; i < count; i++) {
      var nodeId = _0x2076cc.getUint32(offset, true);
      offset += 4;
      var node = nodes2[nodeId];
      if (node != null) {
        node.destroy2();
      }
    }
    return offset;
  }

      function cloneBuffer(view) {
      const len = view.byteLength;
      const buf = new ArrayBuffer(len);
      const clone = new DataView(buf);
      for (let i = 0; i < len; i++) {
          clone.setUint8(i, view.getUint8(i));
      }
      return buf;
  }

  function dataView(_0x4d4661) {
    return new DataView(new ArrayBuffer(_0x4d4661));
  }

  function _0x13b31b(_0x9710ef) {
    if (_0x41adc2) _0x41adc2.send(_0x9710ef.buffer);
  }

  function wsSend(_0x9710ef) {
    wsServer.send(_0x9710ef.buffer);
  }

  function _0x3007c8() {
    _0x20007f();
    _0x152ba2();
  }

  function _0x4508d4() {
    var msg = dataView(5);
    msg.setUint8(0, 254);
    msg.setUint32(1, 4, true);
    _0x13b31b(msg);
    var msg;
    msg = dataView(5);
    msg.setUint8(0, 255);
    msg.setUint32(1, 1332175218, true);
    _0x13b31b(msg);
       grecaptcha.ready(function () {
      grecaptcha
        .execute("6LcnrKQUAAAAADohV5Cksikz89WSP-ZPHNA7ViZm", {
          action: "play_game",
        })
        .then(function (_0x24fd90) {
          _0x1d7f75(_0x24fd90);
        }).catch(function (_0x24fd90) {
          })
    });
    playGameClickEvent == 1 && _0x3007c8();
  }

  function _0x173bfb() {
    playGameClickEvent = 0;
    var msg = dataView(1);
    msg.setUint8(0, 17);
    wsSend(msg);
    // console.log("Connection closed");
    _0x41adc2 = null;
    _0x4620f0("fast");
    _0x1154df.isSpectating = false;
  }

  function _0x506b57(_0x1f8d26) {
    try {
      handleWsMessages(new DataView(_0x1f8d26.data));
    } catch (_0x496a06) {
      console.log("Ws Message could not be sent");
    }
  }

  function mywsms(_0x1f8d26) {
    try {
      handleMessage(new DataView(_0x1f8d26.data));
    } catch (_0x496a06) {
       console.log('Ws Message could not be sent');
    }
  }

  var time = 0;
  function handleWsMessages(_0x1956d7) {
    function _0x26a109() {
      var _0x2a43d9 = "",
        _0x56402e;
      while ((_0x56402e = _0x1956d7.getUint16(offset, true)) != 0) {
        offset += 2;
        _0x2a43d9 += String.fromCharCode(_0x56402e);
      }
      return ((offset += 2), _0x2a43d9);
    }
    var offset = 0,
      _0xf47615 = false;
    240 == _0x1956d7.getUint8(offset) && (offset += 5);
    switch (_0x1956d7.getUint8(offset++)) {
      case 16:
        //const now = Date.now();
        //if (now - time > 5) {
        //time = now;

        if (wsServer && wsServer.readyState === WebSocket.OPEN) {
          try {
            wsServer.send(_0x1956d7.buffer);
          } catch (e) {
            // console.error("İkinci socket’e gönderim hatası:", e);
          }
        }

        //}
        updateNodes(_0x1956d7, offset);
        break;
      case 17:
        ((_0x1b6830 = _0x1956d7.getFloat32(offset, true)),
          (offset += 4),
          (_0x552165 = _0x1956d7.getFloat32(offset, true)),
          (offset += 4),
          (_0x503f66 = _0x1956d7.getFloat32(offset, true)),
          (offset += 4));
        break;
      case 20:
        ((playerCells = []), (nodesOnScreen = []));
        break;
      case 21:
        ((_0x3a03fd = _0x1956d7.getInt16(offset, true)),
          (offset += 2),
          (_0x35d3df = _0x1956d7.getInt16(offset, true)),
          (offset += 2));
        !_0x1fbd55 &&
          ((_0x1fbd55 = true),
          (_0x46e881 = _0x3a03fd),
          (_0x52f418 = _0x35d3df));
        break;
      case 32:
        nodesOnScreen.push(_0x1956d7.getUint32(offset, true));
        (nodesOnScreen2.push(_0x1956d7.getUint32(offset, true)), (offset += 4));
        break;
      case 48:
        ((_0xf47615 = true), (_0x14a358 = true));
        break;
      case 49:
        !_0xf47615 && (_0x14a358 = false);
        _0xd46307 = null;
        var _0x582a10 = _0x1956d7.getUint32(offset, true);
        ((offset += 4), (_0x225ef1 = []));
        for (_0x160c99 = 0; _0x160c99 < _0x582a10; ++_0x160c99) {
          var _0x3f42dd = _0x1956d7.getUint32(offset, true);
          offset += 4;
          _0x225ef1.push({
            id: _0x3f42dd,
            name: _0x26a109(),
          });
        }
        _0x1cc94d();
        break;
      case 50:
        _0xd46307 = [];
        var _0x19788a = _0x1956d7.getUint32(offset, true);
        offset += 4;
        for (var _0x160c99 = 0; _0x160c99 < _0x19788a; ++_0x160c99) {
          _0xd46307.push(_0x1956d7.getFloat32(offset, true));
          offset += 4;
        }
        _0x1cc94d();
        break;
      case 64:
        ((_0x22b0f0 = _0x1956d7.getFloat64(offset, true)),
          (offset += 8),
          (_0x12d6c2 = _0x1956d7.getFloat64(offset, true)),
          (offset += 8),
          (_0x55af78 = _0x1956d7.getFloat64(offset, true)),
          (offset += 8),
          (_0x13322c = _0x1956d7.getFloat64(offset, true)),
          (offset += 8),
          (_0x1b6830 = (_0x55af78 + _0x22b0f0) / 2),
          (_0x552165 = (_0x13322c + _0x12d6c2) / 2),
          (_0x503f66 = 5));
        console.log(_0x22b0f0, _0x12d6c2, _0x55af78, _0x13322c);
        0 == playerCells.length &&
          ((_0x4f5429 = _0x1b6830),
          (_0x1f0529 = _0x552165),
          (_0x1402f0 = _0x503f66));
        break;
      case 90:
        ((Uping = new Date() - latency),
          (Uuptime = _0x1956d7.getFloat64(offset, true)),
          (offset += 8),
          (Uplayers = _0x1956d7.getFloat64(offset, true)),
          (offset += 8));
        break;
      case 92:
        this.gameName = "";
        var _0xad9cb8;
        while ((_0xad9cb8 = _0x1956d7.getUint16(offset, true)) != 0) {
          offset += 2;
          this.gameName += String.fromCharCode(_0xad9cb8);
        }
        break;
      case 96:
        this.countdown = _0x1956d7.getUint16(offset, true);
        break;
      case 97:
        _0x573162 = "";
        var _0xad9cb8;
        while ((_0xad9cb8 = _0x1956d7.getUint16(offset, true)) != 0) {
          offset += 2;
          _0x573162 += String.fromCharCode(_0xad9cb8);
        }
        break;
      case 109:
        _0x492247(_0x1956d7, offset);
        break;
    }
  }

  function _0x492247(_0xa31417, _0x34eaad) {
    function _0x1d4d71() {
      var _0x478ac3 = "",
        _0x523e66;
      while ((_0x523e66 = _0xa31417.getUint16(_0x34eaad, true)) != 0) {
        _0x34eaad += 2;
        _0x478ac3 += String.fromCharCode(_0x523e66);
      }
      return ((_0x34eaad += 2), _0x478ac3);
    }
    var _0x4d4989 = _0xa31417.getUint8(_0x34eaad++);
    _0x4d4989 & 2 && (_0x34eaad += 4);
    _0x4d4989 & 4 && (_0x34eaad += 8);
    _0x4d4989 & 8 && (_0x34eaad += 16);
    var _0xc965b9 = _0xa31417.getUint8(_0x34eaad++),
      _0x24c98f = _0xa31417.getUint8(_0x34eaad++),
      _0x3fb0eb = _0xa31417.getUint8(_0x34eaad++),
      _0x490cfb = ((_0xc965b9 << 16) | (_0x24c98f << 8) | _0x3fb0eb).toString(
        16,
      );
    while (_0x490cfb.length > 6) {
      _0x490cfb = "0" + _0x490cfb;
    }
    _0x490cfb = "#" + _0x490cfb;
    _0x48203d.push({
      name: _0x52210d(_0x1d4d71())[1],
      color: _0x490cfb,
      message: _0x1d4d71(),
      time: Date.now(),
    });
  }

  let serverNodes = [];
  let localNodes = [];
  let lastWsSendTime = 0;
  function updateNodes(_0x2076cc, offset) {
    timestamp = +new Date();
    var _0x20ce4f = Math.random();
    ua = false;
    var _0x272c41 = _0x2076cc.getUint16(offset, true);
    offset += 2;
    for (_0x35e59d = 0; _0x35e59d < _0x272c41; ++_0x35e59d) {
      var _0x27b968 = nodes[_0x2076cc.getUint32(offset, true)],
        _0x22218e = nodes[_0x2076cc.getUint32(offset + 4, true)];
      offset += 8;
      _0x27b968 &&
        _0x22218e &&
        (_0x22218e.destroy(),
        (_0x22218e.ox = _0x22218e.x),
        (_0x22218e.oy = _0x22218e.y),
        (_0x22218e.oSize = _0x22218e.size),
        (_0x22218e.nx = _0x27b968.x),
        (_0x22218e.ny = _0x27b968.y),
        (_0x22218e.nSize = _0x22218e.size),
        (_0x22218e.updateTime = timestamp));
    }
    for (var _0x35e59d = 0; ; ) {
      var _0x85d8cc = _0x2076cc.getUint32(offset, true);
      offset += 4;
      if (0 == _0x85d8cc) {
        break;
      }
      ++_0x35e59d;
      var _0xc2d3bd,
        _0x1fee82,
        _0x30582f = _0x2076cc.getInt16(offset, true);
      offset += 2;
      _0x1fee82 = _0x2076cc.getInt16(offset, true);
      offset += 2;
      _0xc2d3bd = _0x2076cc.getInt16(offset, true);
      offset += 2;
      for (
        var _0x2d8deb = _0x2076cc.getUint8(offset++),
          _0x1d7d68 = _0x2076cc.getUint8(offset++),
          _0x1e07e = _0x2076cc.getUint8(offset++),
          _0x461718 = (
            (_0x2d8deb << 16) |
            (_0x1d7d68 << 8) |
            _0x1e07e
          ).toString(16);
        6 > _0x461718.length;
      ) {
        _0x461718 = "0" + _0x461718;
      }
      var _0x569f7c = "#" + _0x461718,
        _0x3c289c = _0x2076cc.getUint8(offset++),
        _0x3a2263 = !!(_0x3c289c & 1),
        _0x134132 = !!(_0x3c289c & 16);
      _0x3c289c & 2 && (offset += 4);
      _0x3c289c & 4 && (offset += 8);
      _0x3c289c & 8 && (offset += 16);
      for (var _0x515f62, _0x18b2ec = ""; ; ) {
        _0x515f62 = _0x2076cc.getUint16(offset, true);
        offset += 2;
        if (0 == _0x515f62) {
          break;
        }
        _0x18b2ec += String.fromCharCode(_0x515f62);
      }
      var node = null;
      if (!nodes2.hasOwnProperty(_0x85d8cc)) {
        nodes.hasOwnProperty(_0x85d8cc)
          ? ((node = nodes[_0x85d8cc]),
            node.updatePos(),
            (node.ox = node.x),
            (node.oy = node.y),
            (node.oSize = node.size),
            (node.color = _0x569f7c))
          : ((node = new Cell(
              _0x85d8cc,
              _0x30582f,
              _0x1fee82,
              _0xc2d3bd,
              _0x569f7c,
              _0x18b2ec,
            )),
            nodelist.push(node),
            (nodes[_0x85d8cc] = node),
            (node.ka = _0x30582f),
            (node.la = _0x1fee82));
        node.isVirus = _0x3a2263;
        node.isAgitated = _0x134132;
        node.nx = _0x30582f;
        node.ny = _0x1fee82;
        node.nSize = _0xc2d3bd;
        node.updateCode = _0x20ce4f;
        node.updateTime = timestamp;
        node.flag = _0x3c289c;
        _0x18b2ec && node.setName(_0x18b2ec);
        -1 != nodesOnScreen.indexOf(_0x85d8cc) &&
          -1 == playerCells.indexOf(node) &&
          ((document.getElementById("main-login-section").style.visibility =
            "hidden"),
          playerCells.push(node),
          1 == playerCells.length &&
            ((_0x4f5429 = node.x), (_0x1f0529 = node.y)));
      }
    }
    _0x272c41 = _0x2076cc.getUint32(offset, true);
    offset += 4;
    for (_0x35e59d = 0; _0x35e59d < _0x272c41; _0x35e59d++) {
      var _0x5d727f = _0x2076cc.getUint32(offset, true);
      offset += 4;
      node = nodes[_0x5d727f];
      null != node && node.destroy();
    }
    // ua && 0 == playerCells.length && _0x1dcff8('slow');
    playerCells.length == 0 &&
      false == true &&
      ((_0x370936 = 0), (_0x3d769c = 0));
  }

  function updateNodes3(_0x2076cc, offset) {
    timestamp = +new Date();
    var _0x20ce4f = Math.random();
    // ua = false;
    var _0x272c41 = _0x2076cc.getUint16(offset, true);
    offset += 2;
    for (_0x35e59d = 0; _0x35e59d < _0x272c41; ++_0x35e59d) {
      var _0x27b968 = nodes2[_0x2076cc.getUint32(offset, true)],
        _0x22218e = nodes2[_0x2076cc.getUint32(offset + 4, true)];
      offset += 8;
      _0x27b968 &&
        _0x22218e &&
        (_0x22218e.destroy2(),
        (_0x22218e.ox = _0x22218e.x),
        (_0x22218e.oy = _0x22218e.y),
        (_0x22218e.oSize = _0x22218e.size),
        (_0x22218e.nx = _0x27b968.x),
        (_0x22218e.ny = _0x27b968.y),
        (_0x22218e.nSize = _0x22218e.size),
        (_0x22218e.updateTime = timestamp));
    }
    for (var _0x35e59d = 0; ; ) {
      var _0x85d8cc = _0x2076cc.getUint32(offset, true);
      _0x85d8cc = _0x85d8cc;
      offset += 4;
      if (0 == _0x85d8cc) {
        break;
      }
      ++_0x35e59d;
      var _0xc2d3bd,
        _0x1fee82,
        _0x30582f = _0x2076cc.getInt16(offset, true);
      offset += 2;
      _0x1fee82 = _0x2076cc.getInt16(offset, true);
      offset += 2;
      _0xc2d3bd = _0x2076cc.getInt16(offset, true);
      offset += 2;
      for (
        var _0x2d8deb = _0x2076cc.getUint8(offset++),
          _0x1d7d68 = _0x2076cc.getUint8(offset++),
          _0x1e07e = _0x2076cc.getUint8(offset++),
          _0x461718 = (
            (_0x2d8deb << 16) |
            (_0x1d7d68 << 8) |
            _0x1e07e
          ).toString(16);
        6 > _0x461718.length;
      ) {
        _0x461718 = "0" + _0x461718;
      }
      var _0x569f7c = "#" + _0x461718,
        _0x3c289c = _0x2076cc.getUint8(offset++),
        _0x3a2263 = !!(_0x3c289c & 1),
        _0x134132 = !!(_0x3c289c & 16);
      _0x3c289c & 2 && (offset += 4);
      _0x3c289c & 4 && (offset += 8);
      _0x3c289c & 8 && (offset += 16);
      for (var _0x515f62, _0x18b2ec = ""; ; ) {
        _0x515f62 = _0x2076cc.getUint16(offset, true);
        offset += 2;
        if (0 == _0x515f62) {
          break;
        }
        _0x18b2ec += String.fromCharCode(_0x515f62);
      }
      var node = null;
      if (!nodes.hasOwnProperty(_0x85d8cc)) {
        nodes2.hasOwnProperty(_0x85d8cc)
          ? ((node = nodes2[_0x85d8cc]),
            node.updatePos2(),
            (node.ox = node.x),
            (node.oy = node.y),
            (node.oSize = node.size),
            (node.color = _0x569f7c))
          : ((node = new Cell(
              _0x85d8cc,
              _0x30582f,
              _0x1fee82,
              _0xc2d3bd,
              _0x569f7c,
              _0x18b2ec,
            )),
            nodelist2.push(node),
            (nodes2[_0x85d8cc] = node),
            (node.ka = _0x30582f),
            (node.la = _0x1fee82));
        node.isVirus = _0x3a2263;
        node.isAgitated = _0x134132;
        node.nx = _0x30582f;
        node.ny = _0x1fee82;
        node.nSize = _0xc2d3bd;
        node.updateCode = _0x20ce4f;
        node.updateTime = timestamp;
        node.flag = _0x3c289c;
        _0x18b2ec && node.setName(_0x18b2ec);
        -1 != nodesOnScreen.indexOf(_0x85d8cc) &&
          -1 == playerCells.indexOf(node) &&
          ((document.getElementById("main-login-section").style.visibility =
            "hidden"),
          playerCells.push(node),
          1 == playerCells.length &&
            ((_0x4f5429 = node.x), (_0x1f0529 = node.y)));
      }
    }
    _0x272c41 = _0x2076cc.getUint32(offset, true);
    offset += 4;
    for (_0x35e59d = 0; _0x35e59d < _0x272c41; _0x35e59d++) {
      var _0x5d727f = _0x2076cc.getUint32(offset, true);
      offset += 4;
      node = nodes2[_0x5d727f];
      null != node && node.destroy2();
    }
    // ua && 0 == playerCells.length && _0x1dcff8('slow');
  }

        function updateNodes2(_0x2076cc, offset) {
          timestamp = +new Date();
          var _0x20ce4f = Math.random();
          ua = false;
          var _0x272c41 = _0x2076cc.getUint16(offset, true);
          offset += 2;
          for (_0x35e59d = 0; _0x35e59d < _0x272c41; ++_0x35e59d) {
              var _0x27b968 = nodes2[_0x2076cc.getUint32(offset, true)],
                  _0x22218e = nodes2[_0x2076cc.getUint32(offset + 4, true)];
              offset += 8;
              _0x27b968 && _0x22218e && (_0x22218e.destroy2(), _0x22218e.ox = _0x22218e.x, _0x22218e.oy = _0x22218e.y, _0x22218e.oSize = _0x22218e.size, _0x22218e.nx = _0x27b968.x, _0x22218e.ny = _0x27b968.y, _0x22218e.nSize = _0x22218e.size, _0x22218e.updateTime = timestamp);
          }
          for (var _0x35e59d = 0;;) {
              var _0x85d8cc = _0x2076cc.getUint32(offset, true);
              offset += 4;
              if (0 == _0x85d8cc) {
                  break;
              }
              ++_0x35e59d;
              var _0xc2d3bd, _0x1fee82, _0x30582f = _0x2076cc.getInt16(offset, true);
              offset += 2;
              _0x1fee82 = _0x2076cc.getInt16(offset, true);
              offset += 2;
              _0xc2d3bd = _0x2076cc.getInt16(offset, true);
              offset += 2;
              for (var _0x2d8deb = _0x2076cc.getUint8(offset++), _0x1d7d68 = _0x2076cc.getUint8(offset++), _0x1e07e = _0x2076cc.getUint8(offset++), _0x461718 = (_0x2d8deb << 16 | _0x1d7d68 << 8 | _0x1e07e).toString(16); 6 > _0x461718.length;) {
                  _0x461718 = '0' + _0x461718;
              }
              var _0x569f7c = '#' + _0x461718,
                  _0x3c289c = _0x2076cc.getUint8(offset++),
                  _0x3a2263 = !!(_0x3c289c & 1),
                  _0x134132 = !!(_0x3c289c & 16);
              _0x3c289c & 2 && (offset += 4);
              _0x3c289c & 4 && (offset += 8);
              _0x3c289c & 8 && (offset += 16);
              for (var _0x515f62, _0x18b2ec = '';;) {
                  _0x515f62 = _0x2076cc.getUint16(offset, true);
                  offset += 2;
                  if (0 == _0x515f62) {
                      break;
                  }
                  _0x18b2ec += String.fromCharCode(_0x515f62);
              }
              var node = null;
              nodes2.hasOwnProperty(_0x85d8cc) ? (node = nodes2[_0x85d8cc], node.updatePos(), node.ox = node.x, node.oy = node.y, node.oSize = node.size, node.color = _0x569f7c) : (node = new Cell(_0x85d8cc, _0x30582f, _0x1fee82, _0xc2d3bd, _0x569f7c, _0x18b2ec), nodelist2.push(node), nodes2[_0x85d8cc] = node, node.ka = _0x30582f, node.la = _0x1fee82);
              node.isVirus = _0x3a2263;
              node.isAgitated = _0x134132;
              node.nx = _0x30582f;
              node.ny = _0x1fee82;
              node.nSize = _0xc2d3bd;
              node.updateCode = _0x20ce4f;
              node.updateTime = timestamp;
              node.flag = _0x3c289c;
              _0x18b2ec && node.setName(_0x18b2ec);
                        1 != nodesOnScreen2.indexOf(_0x85d8cc) && -1 == playerCells2.indexOf(node) && (document.getElementById('main-login-section').style.visibility = 'hidden', playerCells2.push(node), 1 == playerCells2.length && (_0x4f5429 = node.x, _0x1f0529 = node.y));
          }
  _0x272c41 = _0x2076cc.getUint32(offset, true);
  offset += 4;

  for (_0x35e59d = 0; _0x35e59d < _0x272c41; _0x35e59d++) {
      var _0x5d727f = _0x2076cc.getUint32(offset, true);
      offset += 4;

      node = nodes2[_0x5d727f];
          node.destroy2();
  }
                 // playerCells2.length == 0 && false == true && (_0x370936 = 0, _0x3d769c = 0);
        }

  function _0x5474e3() {
    var _0x21dd44;
    if (_0x2cbf37() && Sfreeze != true) {
      _0x21dd44 = _0x7a7861 - canvasWidth / 2;
      var _0xd11589 = _0x2aaf30 - canvasHeight / 2;
      64 <= _0x21dd44 * _0x21dd44 + _0xd11589 * _0xd11589 &&
        !(
          0.01 > Math.abs(_0x5668bb - _0x4232df) &&
          0.01 > Math.abs(_0x12d92b - _0x4ddae1)
        ) &&
        ((_0x5668bb = _0x4232df),
        (_0x12d92b = _0x4ddae1),
        (_0x21dd44 = dataView(21)),
        _0x21dd44.setUint8(0, 16),
        _0x21dd44.setFloat64(1, _0x4232df, true),
        _0x21dd44.setFloat64(9, _0x4ddae1, true),
        _0x21dd44.setUint32(17, 0, true),
        _0x13b31b(_0x21dd44));
    }
  }

  function _0x152ba2() {
    if (_0x2cbf37()) {
      var _0x44cabc = dataView(1);
      _0x44cabc.setUint8(0, 27);
      _0x13b31b(_0x44cabc);
    }
  }

  function _0x20007f() {
    var _0xdbb0c7 = document.getElementById("nick").value;
    localStorage.playerNick = _0xdbb0c7;
    selectSkinName != "" &&
      (_0xdbb0c7 = "{" + selectSkinName + "}" + _0xdbb0c7);
    if (_0x2cbf37()) {
      var _0x3e378b = dataView(1 + 2 * _0xdbb0c7.length);
      _0x3e378b.setUint8(0, 107);
      for (var _0x1d34f4 = 0; _0x1d34f4 < _0xdbb0c7.length; ++_0x1d34f4) {
        _0x3e378b.setUint16(
          1 + 2 * _0x1d34f4,
          _0xdbb0c7.charCodeAt(_0x1d34f4),
          true,
        );
      }
      _0x13b31b(_0x3e378b);
    }
  }

  function _0x1d7f75(_0x349f7e) {
    var _0x41260f = dataView(1 + 2 * _0x349f7e.length);
    _0x41260f.setUint8(0, 50);
    for (var _0x53d5b = 0; _0x53d5b < _0x349f7e.length; ++_0x53d5b) {
      _0x41260f.setUint16(
        1 + 2 * _0x53d5b,
        _0x349f7e.charCodeAt(_0x53d5b),
        true,
      );
    }
    _0x13b31b(_0x41260f);
  }

  function _0x512281(_0x15ad21) {
    if (_0x2cbf37() && _0x15ad21.length < 200 && _0x15ad21.length > 0) {
      var _0x268806 = dataView(2 + 2 * _0x15ad21.length),
        _0x9b9b3e = 0;
      _0x268806.setUint8(_0x9b9b3e++, 109);
      _0x268806.setUint8(_0x9b9b3e++, 0);
      for (var _0xc567ed = 0; _0xc567ed < _0x15ad21.length; ++_0xc567ed) {
        _0x268806.setUint16(_0x9b9b3e, _0x15ad21.charCodeAt(_0xc567ed), true);
        _0x9b9b3e += 2;
      }
      _0x13b31b(_0x268806);
    }
  }

  function _0x2cbf37() {
    return null != _0x41adc2 && _0x41adc2.readyState == _0x41adc2.OPEN;
  }

  function _0x1519d9(_0x759b8d) {
    if (_0x2cbf37()) {
      var _0x51d083 = dataView(1);
      _0x51d083.setUint8(0, _0x759b8d);
      _0x13b31b(_0x51d083);
    }
  }

  function _0x4a98c2() {
    _0x5cf431();
    _0x1154df.requestAnimationFrame(_0x4a98c2);
    // sendAllNodesJSON();
  }

  function _0x3cca80() {
    window.scrollTo(0, 0);
    canvasWidth = _0x1154df.innerWidth;
    canvasHeight = _0x1154df.innerHeight;
    _0xe72a47.width = canvasWidth;
    _0xe72a47.height = canvasHeight;
    _0x5cf431();
  }

  function _0x951755() {
    var _0x563629;
    return (
      (_0x563629 = Math.max(canvasHeight / 1080, canvasWidth / 1920)),
      _0x563629 * _0x339536
    );
  }

  function _0x44fc5b() {
    if (0 != playerCells.length) {
      for (
        var _0x234bb3 = 0, _0x31e00c = 0;
        _0x31e00c < playerCells.length;
        _0x31e00c++
      ) {
        _0x234bb3 += playerCells[_0x31e00c].size;
      }
      _0x234bb3 = Math.pow(Math.min(64 / _0x234bb3, 1), 0.4) * _0x951755();
      _0x1402f0 = (9 * _0x1402f0 + _0x234bb3) / 10;
    }
  }

  var lastCalledTime; ////
  var timeout;
  var fps;
  var displayfps;
  setInterval(function () {
    displayfps = fps;
  }, 1000 / 2);

  function _0x5cf431() {
    if (!lastCalledTime) {
      lastCalledTime = Date.now();
      fps = 60;
      displayfps = fps;
    } else {
      delta = (Date.now() - lastCalledTime) / 1000;
      lastCalledTime = Date.now();
      fps = 1 / delta;
    }
    _0x16b27b.clearRect(0, 0, canvasWidth, canvasHeight);
    _0x16b27b.fillStyle = _0x456030 ? cColor : "#fff";
    _0x16b27b.fillRect(0, 0, canvasWidth, canvasHeight);
    var _0x448cd4,
      _0x56c4ef = Date.now();
    ++_0xe1267f;
    var _0x17ac81 = Date.now() - _0x2c6c3e;
    _0x17ac81 > 50 && ((_0x2c6c3e = Date.now()), _0x5474e3());
    timestamp = _0x56c4ef;
    if (0 < playerCells.length) {
      _0x44fc5b();
      var _0x508a96 = (_0x448cd4 = 0);
      for (var _0x4a53dc = 0; _0x4a53dc < playerCells.length; _0x4a53dc++) {
        playerCells[_0x4a53dc].updatePos();
        _0x448cd4 += playerCells[_0x4a53dc].x / playerCells.length;
        _0x508a96 += playerCells[_0x4a53dc].y / playerCells.length;
      }
      _0x1b6830 = _0x448cd4;
      _0x552165 = _0x508a96;
      _0x503f66 = _0x1402f0;
      _0x4f5429 = (_0x4f5429 + _0x448cd4) / 2;
      _0x1f0529 = (_0x1f0529 + _0x508a96) / 2;
    } else {
      // Oyuncu öldüğünde kamera sabit kalır
      _0x4f5429 = _0x4f5429;
      _0x1f0529 = _0x1f0529;
      // Zoom’u da sabit tut
      _0x1402f0 = 1 * _0x951755(); //_0x503f66 * _0x951755();
    }
    _0x439b61();
    // _0x16b27b.fillStyle = _0x456030 ? "#111111" : "#fff";
    // _0x16b27b.fillRect(0, 0, canvasWidth, canvasHeight);

    const merged = [...nodelist, ...nodelist2].filter(Boolean);

    // id’ye göre tekrarlananları temizle
    const seen = new Set();
    const allNodes = merged.filter((node) => {
      if (seen.has(node.id)) return false;
      seen.add(node.id);
      return true;
    });

    allNodes.sort((a, b) => {
      const idA = Number(a.id) || 0;
      const idB = Number(b.id) || 0;
      return a.size == b.size ? idA - idB : a.size - b.size;
    });

    // nodelist.sort(function (_0x3e2c64, _0x58cf05) {
    //   return _0x3e2c64.size == _0x58cf05.size
    //     ? _0x3e2c64.id - _0x58cf05.id
    //     : _0x3e2c64.size - _0x58cf05.size;
    // });
    //         nodelist2.sort(function (_0x3e2c64, _0x58cf05) {
    //   return _0x3e2c64.size == _0x58cf05.size
    //     ? _0x3e2c64.id - _0x58cf05.id
    //     : _0x3e2c64.size - _0x58cf05.size;
    // });
    _0x16b27b.save();
    _0x16b27b.translate(canvasWidth / 2, canvasHeight / 2);
    _0x16b27b.scale(_0x1402f0, _0x1402f0);
    _0x16b27b.translate(-_0x4f5429, -_0x1f0529);
    _0x16b27b.strokeStyle = bColor ? bColor : "#FF00ff";
    _0x16b27b.lineWidth = bLength ? bLength : 100;
    _0x16b27b.lineCap = "round";
    _0x16b27b.lineJoin = "round";
    _0x16b27b.beginPath();
    _0x16b27b.moveTo(_0x22b0f0, _0x12d6c2);
    _0x16b27b.lineTo(_0x55af78, _0x12d6c2);
    _0x16b27b.lineTo(_0x55af78, _0x13322c);
    _0x16b27b.lineTo(_0x22b0f0, _0x13322c);
    _0x16b27b.closePath();
    _0x16b27b.stroke();

     if(gameBackground){
		var pat = _0x16b27b.createPattern(imageBgNew, "repeat");
		_0x16b27b.rect(0, 0, canvasWidth, canvasHeight);
		_0x16b27b.fillStyle = pat;
		_0x16b27b.fill();}

    _0x7ac7be == true
      ? (_0x16b27b.globalAlpha = 0.6)
      : (_0x16b27b.globalAlpha = 1);
    for (let node of allNodes) {
      node.drawOneCell(_0x16b27b);
    }
    //         for (_0x4a53dc = 0; _0x4a53dc < nodelist2.length; _0x4a53dc++) {
    //   nodelist2[_0x4a53dc].drawOneCell(_0x16b27b);
    // }
    // for (_0x4a53dc = 0; _0x4a53dc < nodelist.length; _0x4a53dc++) {
    //   nodelist[_0x4a53dc].drawOneCell(_0x16b27b);
    // }

    if (_0x1fbd55) {
      _0x46e881 = (3 * _0x46e881 + _0x3a03fd) / 4;
      _0x52f418 = (3 * _0x52f418 + _0x35d3df) / 4;
      _0x16b27b.save();
      _0x16b27b.strokeStyle = "#FFAAAA";
      _0x16b27b.lineWidth = 10;
      _0x16b27b.lineCap = "round";
      _0x16b27b.lineJoin = "round";
      _0x16b27b.globalAlpha = 0.5;
      _0x16b27b.beginPath();
      for (_0x4a53dc = 0; _0x4a53dc < playerCells.length; _0x4a53dc++) {
        _0x16b27b.moveTo(playerCells[_0x4a53dc].x, playerCells[_0x4a53dc].y);
        _0x16b27b.lineTo(_0x46e881, _0x52f418);
      }
      _0x16b27b.stroke();
      _0x16b27b.restore();
    }
    _0x16b27b.restore();
    _0x1afb5a &&
      _0x1afb5a.width &&
      _0x16b27b.drawImage(_0x1afb5a, canvasWidth - _0x1afb5a.width - 10, 10);
    if (!_0x2653d4) {
      if (_0x4e0f0e != null && _0x4e0f0e.width > 0) {
        _0x16b27b.drawImage(_0x4e0f0e, 0, canvasHeight - _0x4e0f0e.height - 50);
      }
    }
    _0x4fea95 = _0x3af1d3();
    _0x2bc39b = Math.max(_0x2bc39b, _0x4fea95);
    _0x16b27b.globalAlpha = 0.8;
    _0x456030 == true
      ? (_0x16b27b.fillStyle = "#FFFFFF")
      : (_0x16b27b.fillStyle = "#000000");
    _0x16b27b.font = "24px Ubuntu";
    _0x16b27b.fillText("Score: " + _0x4fea95, 10, 34);
    _0x16b27b.fillText("Max: " + _0x2bc39b, 10, 60);
    if (this.countdown < 3600) {
      var _0x4fda26 = "",
        _0x48083a = Math.floor(this.countdown / 60);
      _0x48083a < 10 && (_0x4fda26 += "0");
      _0x4fda26 += _0x48083a + ":";
      var _0x261599 = this.countdown % 60;
      _0x261599 < 10 && (_0x4fda26 += "0");
      _0x4fda26 += _0x261599;
      _0x16b27b.globalAlpha = 0.4;
      _0x456030 == false
        ? (_0x16b27b.fillStyle = "#000000")
        : (_0x16b27b.fillStyle = "#DDDDDD");
      _0x16b27b.globalAlpha = 0.8;
      _0x456030 == true
        ? (_0x16b27b.fillStyle = "#FF0000")
        : (_0x16b27b.fillStyle = "#0000FF");
      _0x16b27b.font = "15px Ubuntu";
      _0x16b27b.fillText("Latency " + Uping + " ms;", 10, 90);
      _0x16b27b.fillText("Uptime " + Uuptime + " sec;", 10, 110);
      _0x16b27b.fillText("Restart " + _0x4fda26, 10, 130);
      _0x16b27b.fillText("Players " + Uplayers + ";", 10, 150);
      var displayFps = ~~displayfps;
      _0x16b27b.fillText("FPS " + displayFps + ";", 10, 170);
    }
    if (_0x2cbf37()) {
      _0x16b27b.globalAlpha = 1;
      _0x16b27b.font = "16px Ubuntu";
      var _0x473451 = "share",
        _0x5bf63c =
          Math.round(_0x4f5429 / 1000) +
          " , " +
          Math.round(_0x1f0529 / 1000) +
          " " +
          _0x473451;
      _0x3e66be = _0x16b27b.measureText(_0x5bf63c).width;
      _0x39a218 = 16;
      _0x323587 =
        "*** " +
        Math.round(_0x4f5429 / 1000) +
        " , " +
        Math.round(_0x1f0529 / 1000) +
        " ***";
      _0x456030 == true
        ? (_0x16b27b.fillStyle = "#FFFFFF")
        : (_0x16b27b.fillStyle = "#000000");
      _0x16b27b.fillText(_0x5bf63c, 0, -15);
    }
    if (_0x2653d4 == false) {
      var _0x1865c9 = 0;
      for (var _0x42d0b2 = _0x48203d.length - 1; _0x42d0b2 >= 0; _0x42d0b2--) {
        _0x1865c9++;
        if (_0x1865c9 > 15) {
          break;
        }
        var _0xc6a056 = _0x48203d[_0x42d0b2].name.trim();
        _0xc6a056 == "" && (_0xc6a056 = "Agar.io");
        var _0x1612c2 = _0x48203d[_0x42d0b2].message.trim(),
          _0x3a44c9 = " : " + _0x1612c2,
          _0x5cdd26 = _0x3a44c9.toLowerCase(),
          _0x4e5aac = _0x5cdd26.replace(
            /[^a-zA-ZğüşıöçĞÜŞİÖÇ@)(!,?:^0-9 ]/g,
            "",
          );
        _0x16b27b.font = "18px Arial";
        _0x48203d[_0x42d0b2].name_x = 15;
        _0x48203d[_0x42d0b2].name_y = canvasHeight - 30 - 20 * _0x1865c9;
        _0x48203d[_0x42d0b2].name_w = _0x16b27b.measureText(_0xc6a056).width;
        _0x48203d[_0x42d0b2].name_h = 18;
        _0x48203d[_0x42d0b2].msg_x = 15 + _0x48203d[_0x42d0b2].name_w;
        _0x48203d[_0x42d0b2].msg_y = _0x48203d[_0x42d0b2].name_y;
        _0x48203d[_0x42d0b2].msg_w = _0x16b27b.measureText(_0x3a44c9).width;
        _0x48203d[_0x42d0b2].msg_h = _0x48203d[_0x42d0b2].name_h;
        _0x16b27b.fillStyle = _0x48203d[_0x42d0b2].color;
        _0x16b27b.fillText(
          _0xc6a056,
          _0x48203d[_0x42d0b2].name_x,
          _0x48203d[_0x42d0b2].name_y,
        );
        _0x456030 == true
          ? (_0x16b27b.fillStyle = "#FFFFFF")
          : (_0x16b27b.fillStyle = "#000000");
        _0x16b27b.fillText(
          _0x4e5aac,
          _0x48203d[_0x42d0b2].msg_x,
          _0x48203d[_0x42d0b2].msg_y,
        );
      }
    }
    var _0x579343 = Date.now() - _0x56c4ef;
    _0x579343 > 16.666666666666668
      ? (_0xdce442 -= 0.01)
      : _0x579343 < 15.384615384615385 && (_0xdce442 += 0.01);
    0.4 > _0xdce442 && (_0xdce442 = 0.4);
    1 < _0xdce442 && (_0xdce442 = 1);
    _0xafbc37();
  }

  function _0xafbc37() {
    if (playerCells.length == 0) {
      return;
    }
    _0x16b27b.save();

    function _0xe0aca4(_0x5cbe4f, _0x910ea2) {
      return !_0x910ea2
        ? _0x5cbe4f
        : _0xe0aca4(_0x910ea2, _0x5cbe4f % _0x910ea2);
    }
    _0x16b27b.beginPath();
    _0x16b27b.fillStyle = "rgba(0,0,0,.25)";
    _0x16b27b.lineWidth = 1.5;
    var _0x356b6f = canvasWidth - 200 - 10,
      _0x402af6 = canvasHeight - 200 - 5;
    _0x16b27b.rect(_0x356b6f, _0x402af6, 200, 200);
    _0x16b27b.lineWidth = 1.25;
    var _0x3fed4d = _0x4f5429 / (_0x55af78 - _0x22b0f0),
      _0x4c8419 = _0x1f0529 / (_0x13322c - _0x12d6c2),
      _0x24dde3 = _0x3fed4d * 200 + _0x356b6f + 100 - 100,
      _0x4a2b0b = _0x4c8419 * 200 + _0x402af6 + 100 - 100,
      _0x4ab1d3 = (bh = 200),
      _0x46b621 = -1,
      _0xd386e4 = -1;
    for (var _0x5df9eb = 0; _0x5df9eb <= _0x4ab1d3; _0x5df9eb += 40) {
      if (_0x5df9eb != _0x4ab1d3) {
        var _0x51e9c9 = 0.5 + _0x5df9eb + _0x356b6f,
          _0x180c33 = _0x402af6;
        _0x1d0b7d(
          _0x51e9c9,
          _0x180c33,
          _0x51e9c9 + 40,
          _0x180c33 + bh,
          _0x24dde3,
          _0x4a2b0b,
        ) && (_0x46b621 = _0x51e9c9);
        if (_0x5df9eb == 0) {
          continue;
        }
        _0x16b27b.moveTo(0.5 + _0x5df9eb + _0x356b6f, _0x402af6);
        _0x16b27b.lineTo(0.5 + _0x5df9eb + _0x356b6f, bh + _0x402af6);
      }
      _0x456030 == true
        ? (_0x16b27b.fillStyle = "#FFFFFF")
        : (_0x16b27b.fillStyle = "#000000");
      _0x16b27b.font = "700 18px ubuntu";
      _0x16b27b.textAlign = "center";
      _0x16b27b.strokeStyle = "white";
      _0x16b27b.lineWidth = 1;
      _0x16b27b.globalAlpha = 0.35;
      for (var _0x3b6bae = 0; _0x3b6bae < 5; _0x3b6bae++) {
        _0x16b27b.fillText(
          String.fromCharCode(_0x3b6bae + 65) + _0x5df9eb / 40,
          0.5 + _0x5df9eb + _0x356b6f - 20,
          _0x402af6 + 25.5 + _0x3b6bae * 40,
        );
      }
    }
    for (var _0x171dc9 = 0; _0x171dc9 <= bh; _0x171dc9 += 40) {
      if (_0x171dc9 != bh) {
        var _0x51e9c9 = _0x356b6f,
          _0x180c33 = 0.5 + _0x171dc9 + _0x402af6;
        _0x1d0b7d(
          _0x51e9c9,
          _0x180c33,
          _0x51e9c9 + _0x4ab1d3,
          _0x180c33 + 40,
          _0x24dde3,
          _0x4a2b0b,
        ) && (_0xd386e4 = _0x180c33);
        if (_0x171dc9 == 0) {
          continue;
        }
        _0x16b27b.moveTo(_0x356b6f, 0.5 + _0x171dc9 + _0x402af6);
        _0x16b27b.lineTo(_0x4ab1d3 + _0x356b6f, 0.5 + _0x171dc9 + _0x402af6);
      }
    }
    playerCells.length > 0 &&
      _0x46b621 > -1 &&
      _0xd386e4 > -1 &&
      ((_0x16b27b.fillStyle = "#ccff00"),
      (_0x16b27b.globalAlpha = 0.3),
      _0x16b27b.fillRect(_0x46b621, _0xd386e4, 40, 40));
    _0x16b27b.globalAlpha = 1;
    _0x16b27b.strokeStyle = "rgba(255,255,255,.2)";
    _0x16b27b.stroke();
    _0x16b27b.closePath();
    for (var _0x3b6bae = 0; _0x3b6bae < playerCells.length; _0x3b6bae++) {
      var _0x5c0015 = playerCells[_0x3b6bae],
        _0x32d79b = _0x5c0015.ox / (_0x55af78 - _0x22b0f0),
        _0x5cddea = _0x5c0015.oy / (_0x13322c - _0x12d6c2),
        _0x5df9eb = _0x32d79b * 200 + _0x356b6f + 100 - 100,
        _0x171dc9 = _0x5cddea * 200 + _0x402af6 + 100 - 100,
        _0x1f8273 = Math.max(2, _0x5c0015.size / 100);
      _0x16b27b.fillStyle = _0x5c0015.color;
      if (_0x3b6bae == 0) {
        _0x16b27b.font = "bold " + (14 + _0x1f8273) + "px Ubuntu";
        var _0x2b16c5 = _0x16b27b.measureText(_0x5c0015.name);
        _0x16b27b.strokestyle = "black";
      }
      _0x16b27b.beginPath();
      _0x16b27b.strokeStyle = "black";
      _0x16b27b.lineWidth = 1;
      _0x16b27b.globalAlpha = 1;
      _0x16b27b.arc(_0x5df9eb, _0x171dc9, _0x1f8273, 0, 2 * Math.PI);
      _0x16b27b.stroke();
      _0x16b27b.fill();
      _0x16b27b.closePath();
    }
    _0x16b27b.restore();
  }

  function _0x2b6f28() {
    _0x16b27b.fillStyle = _0x456030 ? "#111111" : "#F2FBFF";
    _0x16b27b.fillRect(0, 0, canvasWidth, canvasHeight);
    _0x16b27b.save();
    _0x16b27b.strokeStyle = _0x456030 ? "#AAAAAA" : "#000000";
    _0x16b27b.globalAlpha = 0.2;
    _0x16b27b.scale(_0x1402f0, _0x1402f0);
    var _0x93dde = canvasWidth / _0x1402f0,
      _0x16907d = canvasHeight / _0x1402f0;
    for (
      var _0x1ebf45 = -0.5 + ((-_0x4f5429 + _0x93dde / 2) % 50);
      _0x1ebf45 < _0x93dde;
      _0x1ebf45 += 50
    ) {
      _0x16b27b.beginPath();
      _0x16b27b.moveTo(_0x1ebf45, 0);
      _0x16b27b.lineTo(_0x1ebf45, _0x16907d);
      _0x16b27b.stroke();
    }
    for (
      _0x1ebf45 = -0.5 + ((-_0x1f0529 + _0x16907d / 2) % 50);
      _0x1ebf45 < _0x16907d;
      _0x1ebf45 += 50
    ) {
      _0x16b27b.beginPath();
      _0x16b27b.moveTo(0, _0x1ebf45);
      _0x16b27b.lineTo(_0x93dde, _0x1ebf45);
      _0x16b27b.stroke();
    }
    _0x16b27b.restore();
  }

  function _0x3af1d3() {
    for (
      var _0x4ab1db = 0, _0x3016b9 = 0;
      _0x3016b9 < playerCells.length;
      _0x3016b9++
    ) {
      _0x4ab1db += playerCells[_0x3016b9].getScore();
    }
    return _0x4ab1db;
  }

  function _0x1cc94d() {
    _0x1afb5a = null;
    var _0x574ace = 200;
    null != _0xd46307 && (_0x574ace = 200);
    if (null != _0xd46307 || 0 != _0x225ef1.length) {
      _0x1afb5a = document.createElement("canvas");
    }
    var _0x3f2f0d = _0x1afb5a.getContext("2d"),
      _0xa0e9cf = 110;
    _0xa0e9cf =
      null == _0xd46307 ? _0xa0e9cf + 24 * _0x225ef1.length : _0xa0e9cf + 180;
    var _0x581137 =
      Math.min(0.22 * canvasHeight, Math.min(200, 0.3 * canvasWidth)) / 200;
    _0x1afb5a.width = _0x574ace * _0x581137;
    _0x1afb5a.height = _0xa0e9cf * _0x581137;
    _0x3f2f0d.scale(_0x581137, _0x581137);
    _0x3f2f0d.globalAlpha = 0.4;
    _0x3f2f0d.fillStyle = "#000000";
    _0x3f2f0d.fillRect(0, 0, 200, _0xa0e9cf);
    _0x3f2f0d.globalAlpha = 1;
    _0x3f2f0d.fillStyle = "#FFFFFF";
    var _0x251b42,
      _0x4d066e = [
        "#FF0000",
        "#0002fe",
        "#33E660",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
      ];
    if (null == _0xd46307) {
      _0x3f2f0d.fillStyle = "yellow";
      _0x3f2f0d.font = "16px Ubuntu";
      var _0x55f3b9 = new Image();
      _0x55f3b9.onload = function () {
        _0x3f2f0d.drawImage(_0x55f3b9, 70, 0);
      };
      _0x55f3b9.src = "./imgs/lbfirst.png";
      _0x3f2f0d.fillText(
        _0x573162,
        70 - _0x3f2f0d.measureText(this.lastWinner).width / 2,
        80,
      );
      for (_0x251b42 = 0; _0x251b42 < _0x225ef1.length; ++_0x251b42) {
        c = _0x225ef1[_0x251b42].name.split("*")[0] || "Unnamed Cell";
        c = _0x52210d(c)[1];
        c == "" && (c = "Unnamed Cell");
        -1 != nodesOnScreen.indexOf(_0x225ef1[_0x251b42].id)
          ? (playerCells[0].name && (c = _0x52210d(playerCells[0].name)[1]),
            c == "" && (c = "Unnamed Cell"),
            (_0x3f2f0d.fillStyle = "#FFAAAA"),
            !_0x14a358 && (c = _0x251b42 + 1 + ". " + c))
          : ((_0x3f2f0d.fillStyle = _0x4d066e[_0x251b42]),
            !_0x14a358 && (c = _0x251b42 + 1 + ". " + c));
        _0x3f2f0d.fillText(c, 10, 110 + 25 * _0x251b42);
      }
    } else {
      for (_0x251b42 = c = 0; _0x251b42 < _0xd46307.length; ++_0x251b42) {
        var _0x1d03dd = c + _0xd46307[_0x251b42] * Math.PI * 2;
        _0x3f2f0d.fillStyle = _0x3bf563[_0x251b42 + 1];
        _0x3f2f0d.beginPath();
        _0x3f2f0d.moveTo(100, 140);
        _0x3f2f0d.arc(100, 140, 80, c, _0x1d03dd, false);
        _0x3f2f0d.fill();
        c = _0x1d03dd;
      }
    }
  }

  function Cell(
    _0x39b709,
    _0x3da54c,
    _0x6b6308,
    _0x21a90b,
    _0x4b5169,
    _0x2c8a27,
  ) {
    this.id = _0x39b709;
    this.ox = this.x = _0x3da54c;
    this.oy = this.y = _0x6b6308;
    this.oSize = this.size = _0x21a90b;
    this.color = _0x4b5169;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(_0x2c8a27);
  }

  wsServer = new WebSocket("wss://my-websocket-server.prosuo15.workers.dev/websocket?room=lobby");
  wsServer.binaryType = "arraybuffer";
  wsServer.onopen = () => console.log("WS Open");
  wsServer.onmessage = mywsms;
  wsServer.onclose = function () {
    return;
  };
  wsServer.onerror = function (_0x10ae64) {
    return;
  };

  function _0x2a421a(_0x1b0cd5, _0x3a0236, _0x30be8b, _0x489244) {
    _0x1b0cd5 && (this["_size"] = _0x1b0cd5);
    _0x3a0236 && (this["_color"] = _0x3a0236);
    this["_stroke"] = !!_0x30be8b;
    _0x489244 && (this["_strokeColor"] = _0x489244);
  }
  _0x1154df.playGame = function () {
    _0x4fea95 = 0;
    _0x2bc39b = 0;
    _0x455917();
    _0x41adc2 == null || _0x41adc2.readyState == 2 || _0x41adc2.readyState == 3
      ? ((playGameClickEvent = 1), _0xde92b2())
      : _0x3007c8();
    _0x443ee3 = Date.now();
    _0x40174c = 0;
  };
  _0x1154df.spectate = function () {
    _0x1154df.isSpectating = true;
    _0x455917();
    _0x41adc2 == null || _0x41adc2.readyState == 2 || _0x41adc2.readyState == 3
      ? _0xde92b2()
      : _0x1519d9(1);
  };
  _0x1154df.setHideSkins = function (_0x47d6d5) {
    _0x47d6d5 = document.getElementById("noSkin").checked;
    _0x5d5ae3 = _0x47d6d5;
    localStorage.noSkin = _0x47d6d5;
  };
  _0x1154df.setHideNames = function (_0x558819) {
    _0x558819 = document.getElementById("noNames").checked;
    _0x23ab14 = _0x558819;
    localStorage.noNames = _0x558819;
  };
  _0x1154df.setDarkTheme = function (_0x3974c8) {
    _0x3974c8 = document.getElementById("darkTheme").checked;
    _0x456030 = _0x3974c8;
    localStorage.showDarkTheme = _0x3974c8;
  };
  _0x1154df.setNoColor = function (_0x2a16ec) {
    _0x2a16ec = document.getElementById("noColor").checked;
    _0x319c56 = _0x2a16ec;
    localStorage.noColor = _0x2a16ec;
  };
  _0x1154df.setSmooth = function (_0x4e8408) {
    _0x4e8408 = document.getElementById("smoothRender").checked;
    _0x2582ca = _0x4e8408 ? 2 : 0.4;
    localStorage.smoothRender = _0x4e8408 ? 2 : 0.4;
  };
  _0x1154df.setTransparent = function (_0x4dcbc2) {
    _0x4dcbc2 = document.getElementById("transparentRender").checked;
    _0x7ac7be = _0x4dcbc2;
    localStorage.transparentRender = _0x4dcbc2;
  };
  _0x1154df.setShowScore = function (_0x176b58) {
    _0x176b58 = document.getElementById("showScore").checked;
    _0x16e8c8 = _0x176b58;
    localStorage.showScore = _0x176b58;
  };
  _0x1154df.setSimpleGreen = function (_0xd6833a) {
    _0xd6833a = document.getElementById("simpleGreen").checked;
    _0x2eb996 = _0xd6833a;
    localStorage.simpleGreen = _0xd6833a;
  };
  _0x1154df.setHideChat = function (_0x1a509b) {
    _0x1a509b = document.getElementById("hideChat").checked;
    _0x2653d4 = _0x1a509b;
    localStorage.hideChat = _0x1a509b;
    _0x1a509b
      ? (document.getElementById("chat_textbox").style.display = "none")
      : (document.getElementById("chat_textbox").style.display = "block");
  };
  _0x1154df.setZoom = function (_0x3b15f3) {
    _0x3b15f3 = document.getElementById("getZoom").checked;
    _0x18263b = _0x3b15f3;
    localStorage.zoom = _0x3b15f3;
  };
  _0x1154df.clearChat = function (_0x23c44f) {
    _0x48203d = [];
  };
  _0x1154df.shareLocation = function (_0x10a4b1) {
    _0x512281("psx2psx2");
  };
  setInterval(function () {
    var _0x91f4f9 = _0x30f669();
    0 != _0x91f4f9 &&
      (++_0x2be5c9,
      0 == _0x40174c && (_0x40174c = _0x91f4f9),
      (_0x40174c = Math.min(_0x40174c, _0x91f4f9)));
  }, 1000);
  setInterval(function () {
    _0x2cbf37() &&
      ((msg = dataView(5)),
      msg.setUint8(0, 90),
      msg.setUint32(1, 123456789, true),
      (latency = new Date()),
      _0x13b31b(msg));
  }, 1000);
  var _0x5668bb = -1,
    _0x12d92b = -1,
    _0xdce442 = 1,
    _0x460680 = {},
    _0x4837a9 = {},
    removedNodes2 = [],
    _0x4ae9a1 = ["_canvas'blob"];
  Cell.prototype = {
    id: 0,
    points: null,
    pointsAcc: null,
    name: null,
    skinName: null,
    hasSkinName: false,
    nameCache: null,
    sizeCache: null,
    x: 0,
    y: 0,
    size: 0,
    ox: 0,
    oy: 0,
    oSize: 0,
    nx: 0,
    ny: 0,
    nSize: 0,
    flag: 0,
    updateTime: 1,
    updateCode: 1,
    drawTime: 1,
    destroyed: false,
    isVirus: false,
    isAgitated: false,
    wasSimpleDrawing: true,
    destroy: function () {
      if (this.destroyed) return;
      var _0x2c9ad8;
      for (_0x2c9ad8 = 0; _0x2c9ad8 < nodelist.length; _0x2c9ad8++) {
        if (nodelist[_0x2c9ad8] == this) {
          nodelist.splice(_0x2c9ad8, 1);
          break;
        }
      }
      delete nodes[this.id];
      _0x2c9ad8 = playerCells.indexOf(this);
      -1 != _0x2c9ad8 && ((ua = true), playerCells.splice(_0x2c9ad8, 1));
      _0x2c9ad8 = nodesOnScreen.indexOf(this.id);
      -1 != _0x2c9ad8 && nodesOnScreen.splice(_0x2c9ad8, 1);
      this.destroyed = true;
      _0x551ae1.push(this);
    },
    destroy2: function () {
      if (this.destroyed) return;
      var _0x2c9ad8;
      for (_0x2c9ad8 = 0; _0x2c9ad8 < nodelist2.length; _0x2c9ad8++) {
        if (nodelist2[_0x2c9ad8] == this) {
          nodelist2.splice(_0x2c9ad8, 1);
          break;
        }
      }
      delete nodes2[this.id];
      _0x2c9ad8 = playerCells.indexOf(this);
      -1 != _0x2c9ad8 && ((ua = true), playerCells.splice(_0x2c9ad8, 1));
      _0x2c9ad8 = nodesOnScreen.indexOf(this.id);
      -1 != _0x2c9ad8 && nodesOnScreen.splice(_0x2c9ad8, 1);
      this.destroyed = true;
      removedNodes2.push(this);
    },
    getNameSize: function () {
      return Math.max(~~(0.3 * this.size), 24);
    },
    setName: function (_0x33c324) {
      (this.name = _0x33c324) &&
        (null == this.nameCache
          ? ((this.nameCache = new _0x2a421a(
              this.getNameSize(),
              "#FFFFFF",
              true,
              "#000000",
            )),
            this.nameCache.setValue(this.name))
          : (this.nameCache.setSize(this.getNameSize()),
            this.nameCache.setValue(this.name)));
    },
    setSkinName: function (_0x2f2cc1) {
      this.skinName = _0x2f2cc1;
    },
    createPoints: function () {
      for (
        var _0x4f6652 = this.getNumPoints();
        this.points.length > _0x4f6652;
      ) {
        var _0x121419 = ~~(Math.random() * this.points.length);
        this.points.splice(_0x121419, 1);
        this.pointsAcc.splice(_0x121419, 1);
      }
      0 == this.points.length &&
        0 < _0x4f6652 &&
        (this.points.push({
          ref: this,
          size: this.size,
          x: this.x,
          y: this.y,
        }),
        this.pointsAcc.push(Math.random() - 0.5));
      while (this.points.length < _0x4f6652) {
        var _0x51082f = ~~(Math.random() * this.points.length),
          _0x25a973 = this.points[_0x51082f];
        this.points.splice(_0x51082f, 0, {
          ref: this,
          size: _0x25a973.size,
          x: _0x25a973.x,
          y: _0x25a973.y,
        });
        this.pointsAcc.splice(_0x51082f, 0, this.pointsAcc[_0x51082f]);
      }
    },
    getNumPoints: function () {
      if (0 == this.id) {
        return 16;
      }
      var _0xbb338f = 10;
      if (20 > this.size) {
        _0xbb338f = 0;
      }
      if (this.isVirus) {
        _0xbb338f = 30;
      }
      var _0x216633 = this.size;
      if (!this.isVirus) {
        _0x216633 *= _0x1402f0;
      }
      _0x216633 *= _0xdce442;
      if (this.flag & 32) {
        _0x216633 *= 0.25;
      }
      return ~~Math.max(_0x216633, _0xbb338f);
    },
    movePoints: function () {
      this.createPoints();
      for (
        var _0x3f9575 = this.points,
          _0x141f04 = this.pointsAcc,
          _0x374cc3 = _0x3f9575.length,
          _0x48405f = 0;
        _0x48405f < _0x374cc3;
        ++_0x48405f
      ) {
        var _0x46a559 = _0x141f04[(_0x48405f - 1 + _0x374cc3) % _0x374cc3],
          _0x1bedcf = _0x141f04[(_0x48405f + 1) % _0x374cc3];
        _0x141f04[_0x48405f] +=
          (Math.random() - 0.5) * (this.isAgitated ? 3 : 1);
        _0x141f04[_0x48405f] *= 0.7;
        10 < _0x141f04[_0x48405f] && (_0x141f04[_0x48405f] = 10);
        -10 > _0x141f04[_0x48405f] && (_0x141f04[_0x48405f] = -10);
        _0x141f04[_0x48405f] =
          (_0x46a559 + _0x1bedcf + 8 * _0x141f04[_0x48405f]) / 10;
      }
      for (
        var _0x326611 = this,
          _0x4c4c63 = this.isVirus
            ? 0
            : (this.id / 1000 + timestamp / 10000) % (2 * Math.PI),
          _0x2f658e = 0;
        _0x2f658e < _0x374cc3;
        ++_0x2f658e
      ) {
        var _0x4d0969 = _0x3f9575[_0x2f658e].size,
          _0x963d36 = _0x3f9575[(_0x2f658e - 1 + _0x374cc3) % _0x374cc3].size,
          _0x40e749 = _0x3f9575[(_0x2f658e + 1) % _0x374cc3].size;
        if (
          15 < this.size &&
          null != _0x2cf3cf &&
          20 < this.size * _0x1402f0 &&
          0 != this.id
        ) {
          var _0x4c3100 = false,
            _0x31ffe4 = _0x3f9575[_0x2f658e].x,
            _0x595b4e = _0x3f9575[_0x2f658e].y;
          _0x2cf3cf.retrieve2(
            _0x31ffe4 - 5,
            _0x595b4e - 5,
            10,
            10,
            function (_0x27dd26) {
              _0x27dd26.ref != _0x326611 &&
                25 >
                  (_0x31ffe4 - _0x27dd26.x) * (_0x31ffe4 - _0x27dd26.x) +
                    (_0x595b4e - _0x27dd26.y) * (_0x595b4e - _0x27dd26.y) &&
                (_0x4c3100 = true);
            },
          );
          ((!_0x4c3100 && _0x3f9575[_0x2f658e].x < _0x22b0f0) ||
            _0x3f9575[_0x2f658e].y < _0x12d6c2 ||
            _0x3f9575[_0x2f658e].x > _0x55af78 ||
            _0x3f9575[_0x2f658e].y > _0x13322c) &&
            (_0x4c3100 = true);
          _0x4c3100 &&
            (0 < _0x141f04[_0x2f658e] && (_0x141f04[_0x2f658e] = 0),
            (_0x141f04[_0x2f658e] -= 1));
        }
        _0x4d0969 += _0x141f04[_0x2f658e];
        0 > _0x4d0969 && (_0x4d0969 = 0);
        _0x4d0969 = this.isAgitated
          ? (19 * _0x4d0969 + this.size) / 20
          : (12 * _0x4d0969 + this.size) / 13;
        _0x3f9575[_0x2f658e].size =
          (_0x963d36 + _0x40e749 + 8 * _0x4d0969) / 10;
        _0x963d36 = (2 * Math.PI) / _0x374cc3;
        _0x40e749 = this.points[_0x2f658e].size;
        this.isVirus && 0 == _0x2f658e % 2 && (_0x40e749 += 5);
        _0x3f9575[_0x2f658e].x =
          this.x + Math.cos(_0x963d36 * _0x2f658e + _0x4c4c63) * _0x40e749;
        _0x3f9575[_0x2f658e].y =
          this.y + Math.sin(_0x963d36 * _0x2f658e + _0x4c4c63) * _0x40e749;
      }
    },
    updatePos: function () {
      if (0 == this.id) {
        return 1;
      }
      var _0x5cc491;
      _0x5cc491 = (timestamp - this.updateTime) / 120;
      _0x5cc491 = 0 > _0x5cc491 ? 0 : 1 < _0x5cc491 ? 1 : _0x5cc491;
      var _0x25d5d5 = 0 > _0x5cc491 ? 0 : 1 < _0x5cc491 ? 1 : _0x5cc491;
      this.getNameSize();
      if (this.destroyed && 1 <= _0x25d5d5) {
        var _0x4be2bb = _0x551ae1.indexOf(this);
        -1 != _0x4be2bb && _0x551ae1.splice(_0x4be2bb, 1);
      }
      return (
        (this.x = _0x5cc491 * (this.nx - this.ox) + this.ox),
        (this.y = _0x5cc491 * (this.ny - this.oy) + this.oy),
        (this.size = _0x25d5d5 * (this.nSize - this.oSize) + this.oSize),
        _0x25d5d5
      );
    },
    updatePos2: function () {
      if (0 == this.id) {
        return 1;
      }
      var _0x5cc491;
      _0x5cc491 = (timestamp - this.updateTime) / 120;
      _0x5cc491 = 0 > _0x5cc491 ? 0 : 1 < _0x5cc491 ? 1 : _0x5cc491;
      var _0x25d5d5 = 0 > _0x5cc491 ? 0 : 1 < _0x5cc491 ? 1 : _0x5cc491;
      this.getNameSize();
      if (this.destroyed && 1 <= _0x25d5d5) {
        var _0x4be2bb = removedNodes2.indexOf(this);
        -1 != _0x4be2bb && removedNodes2.splice(_0x4be2bb, 1);
      }
      return (
        (this.x = _0x5cc491 * (this.nx - this.ox) + this.ox),
        (this.y = _0x5cc491 * (this.ny - this.oy) + this.oy),
        (this.size = _0x25d5d5 * (this.nSize - this.oSize) + this.oSize),
        _0x25d5d5
      );
    },
    shouldRender: function () {
      return 0 == this.id
        ? true
        : !(
            this.x + this.size + 40 < _0x4f5429 - canvasWidth / 2 / _0x1402f0 ||
            this.y + this.size + 40 <
              _0x1f0529 - canvasHeight / 2 / _0x1402f0 ||
            this.x - this.size - 40 > _0x4f5429 + canvasWidth / 2 / _0x1402f0 ||
            this.y - this.size - 40 > _0x1f0529 + canvasHeight / 2 / _0x1402f0
          );
    },
    getScore: function () {
      var _0x2012c3 = ~~((this.nSize * this.nSize) / 100);
      return _0x2012c3;
    },
    drawOneCell: function (_0x4c36dc) {
      if (this.shouldRender()) {
        var _0x3ed467 =
          0 != this.id &&
          !this.isVirus &&
          !this.isAgitated &&
          _0x2582ca > _0x1402f0;
        if (5 > this.getNumPoints()) {
          _0x3ed467 = true;
        }
        if (this.wasSimpleDrawing && !_0x3ed467) {
          for (var _0x3640bb = 0; _0x3640bb < this.points.length; _0x3640bb++) {
            this.points[_0x3640bb].size = this.size;
          }
        }
        this.wasSimpleDrawing = _0x3ed467;
        _0x4c36dc.save();
        this.drawTime = timestamp;
        _0x3640bb = this.updatePos();
        this.destroyed && (_0x4c36dc.globalAlpha *= 1 - _0x3640bb);
        _0x4c36dc.lineWidth = 10;
        _0x4c36dc.lineCap = "round";
        _0x4c36dc.lineJoin = this.isVirus ? "miter" : "round";
        _0x319c56
          ? ((_0x4c36dc.fillStyle = "#FFFFFF"),
            (_0x4c36dc.strokeStyle = "#AAAAAA"))
          : ((_0x4c36dc.fillStyle = this.color),
            (_0x4c36dc.strokeStyle = this.color));
        _0x4c36dc.beginPath();
        _0x4c36dc.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        _0x4c36dc.closePath();
        _0x3640bb = null;
        !this.isAgitated &&
          !_0x5d5ae3 &&
          ":teams" != _0x33ee7e &&
          ((this.skinName = this.name.toLowerCase()),
          (li = _0x52210d(this.skinName)),
          !this.isAgitated && this.skinName != ""
            ? (!_0x460680.hasOwnProperty(this.skinName) &&
                ((_0x460680[this.skinName] = new Image()),
                (_0x460680[this.skinName].src =
                  parseInt(li[0]) == 396 ? "https://cdn.agarz.com/!eyeless_jack!.png" : parseInt(li[0]) == 397 ? "https://cdn.agarz.com/!kanaki!.png" : parseInt(li[0]) == 398 ? "https://cdn.agarz.com/ado148.png" : parseInt(li[0]) == 399 ? "https://cdn.agarz.com/ata.png" : parseInt(li[0]) == 400 ? "https://cdn.agarz.com/ataturk-buyuk.png" : parseInt(li[0]) == 401 ? "https://cdn.agarz.com/atat%C3%BCrk.png" : "https://agar.live/skins/" + li[0] + ".png"),
                (_0x460680[this.skinName].onload = function () {
                  _0x4837a9[this.src] = true;
                })),
              0 != _0x460680[this.skinName].width &&
              _0x460680[this.skinName].complete
                ? (_0x3640bb = _0x460680[this.skinName])
                : (_0x3640bb = null))
            : (_0x3640bb = null));
        _0x3640bb = (_0x1cb80f = _0x3640bb)
          ? -1 != _0x4ae9a1.indexOf(this.skinName)
          : false;
        _0x3ed467 || _0x4c36dc.stroke();
        _0x4c36dc.fill();
        !(null == _0x1cb80f || _0x3640bb) &&
          _0x4837a9.hasOwnProperty(_0x1cb80f.src) &&
          (_0x4c36dc.save(),
          _0x4c36dc.clip(),
          _0x4c36dc.drawImage(
            _0x1cb80f,
            this.x - this.size,
            this.y - this.size,
            2 * this.size,
            2 * this.size,
          ),
          _0x4c36dc.restore());
        (_0x319c56 || 15 < this.size) &&
          !_0x3ed467 &&
          ((_0x4c36dc.strokeStyle = "#000000"),
          (_0x4c36dc.globalAlpha *= 0.1),
          _0x4c36dc.stroke());
        _0x4c36dc.globalAlpha = 1;
        null != _0x1cb80f &&
          _0x3640bb &&
          _0x4837a9.hasOwnProperty(_0x1cb80f.src) &&
          _0x4c36dc.drawImage(
            _0x1cb80f,
            this.x - 2 * this.size,
            this.y - 2 * this.size,
            4 * this.size,
            4 * this.size,
          );
        _0x3640bb = false; //-1 != playerCells.indexOf(this);
        if (0 != this.id) {
          var _0x3ed467 = ~~this.y;
          (!_0x23ab14 || _0x3640bb) &&
            this.name &&
            ((_0x4c36dc.globalAlpha = 1),
            (_0x4c36dc.font = Math.max(~~(0.3 * this.size), 24) + "px Ubuntu"),
            (_0x4c36dc.fillStyle = "#FFF"),
            (_0x4c36dc.textAlign = "center"),
            _0x4c36dc.fillText(_0x52210d(this.name)[1], this.x, this.y));
          if (
            _0x16e8c8 == true &&
            !this.isAgitated &&
            ~~((this.size * this.size) / 100) >= 20 &&
            this.isVirus == false
          ) {
            _0x4c36dc.globalAlpha = 1;
            _0x4c36dc.font = this.getNameSize() + "px Ubuntu";
            var _0x467122 = this.getScore() + "";
            _0x4c36dc.fillStyle = "#FFF";
            _0x4c36dc.textAlign = "center";
            _0x4c36dc.textBaseline = "middle";
            _0x4c36dc.fillText(
              _0x467122,
              this.x,
              this.y + this.getNameSize() + 13,
            );
          }
        }
        _0x4c36dc.restore();
      }
    },
  };
  _0x2a421a.prototype = {
    _value: "",
    _color: "#000000",
    _stroke: false,
    _strokeColor: "#000000",
    _size: 16,
    _canvas: null,
    _ctx: null,
    _dirty: false,
    _scale: 1,
    setSize: function (_0x1670b9) {
      this["_size"] != _0x1670b9 &&
        ((this["_size"] = _0x1670b9), (this["_dirty"] = true));
    },
    setScale: function (_0x16badb) {
      this["_scale"] != _0x16badb &&
        ((this["_scale"] = _0x16badb), (this["_dirty"] = true));
    },
    setStrokeColor: function (_0x3db234) {
      this["_strokeColor"] != _0x3db234 &&
        ((this["_strokeColor"] = _0x3db234), (this["_dirty"] = true));
    },
    setValue: function (_0x49ffb1) {
      _0x49ffb1 != this["_value"] &&
        ((this["_value"] = _0x49ffb1), (this["_dirty"] = true));
    },
    render: function () {
      null == this["_canvas"] &&
        ((this["_canvas"] = document.createElement("canvas")),
        (this["_ctx"] = this["_canvas"].getContext("2d")));
      if (this["_dirty"]) {
        this["_dirty"] = false;
        var _0x5fee74 = this["_canvas"],
          _0x2a0428 = this["_ctx"],
          _0x1dc48b = this["_value"],
          _0x2ff3b7 = this["_scale"],
          _0x11da08 = this["_size"],
          _0x12c1e6 = _0x11da08 + "px Ubuntu";
        _0x2a0428.font = _0x12c1e6;
        var _0x1e2739 = ~~(0.2 * _0x11da08);
        _0x5fee74.width =
          (_0x2a0428.measureText(_0x1dc48b).width + 6) * _0x2ff3b7;
        _0x5fee74.height = (_0x11da08 + _0x1e2739) * _0x2ff3b7;
        _0x2a0428.font = _0x12c1e6;
        _0x2a0428.scale(_0x2ff3b7, _0x2ff3b7);
        _0x2a0428.globalAlpha = 1;
        _0x2a0428.lineWidth = 3;
        _0x2a0428.strokeStyle = this["_strokeColor"];
        _0x2a0428.fillStyle = this["_color"];
        this["_stroke"] &&
          _0x2a0428.strokeText(_0x1dc48b, 3, _0x11da08 - _0x1e2739 / 2);
        _0x2a0428.fillText(_0x1dc48b, 3, _0x11da08 - _0x1e2739 / 2);
      }
      return this["_canvas"];
    },
    getWidth: function () {
      return _0x16b27b.measureText(this["_value"]).width + 6;
    },
  };
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    });
  _0x1154df.onload = _0x2c91e6;
})(window, window.jQuery);
(function () {
  var _0x1f677a = function (_0x550daa) {
    if (_0x550daa.keyCode === 17) {
      for (var _0x5c71e8 = 0; _0x5c71e8 < 4; ++_0x5c71e8) {
        setTimeout(function () {
          window.onkeydown({
            keyCode: 32,
          });
          window.onkeyup({
            keyCode: 32,
          });
        }, _0x5c71e8 * 50);
      }
    }
  };
  window.addEventListener("keydown", _0x1f677a);
})();
