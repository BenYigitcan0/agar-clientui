function test() {
  console.log("REQUEST ATILIYOR");
  GM_xmlhttpRequest({
    method: "POST",
    url: "https://axymxyglob.netlify.app/.netlify/functions/checkKey",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ key: "ABC123" }),

    onload: function(res) {
              console.log("RESPONSE GELDİ:", res.responseText);
      try {
        const data = JSON.parse(res.responseText);

        if (data.valid) {
               let code = data.code.trim();
          code = code.replace(/\\n/g, "\n");

    //runCode(data.code)
          /*  const v = new Function(code);
            v(code);*/
          eval(code);
        } else {
          console.log("Geçersiz key");
        }
      } catch (e) {
        console.log("Parse hatası:", res.responseText);
      }
    },

    onerror: function(err) {
      console.log("REQUEST HATA:", err);
    }
  });
}

function runCode(code) {
  const script = document.createElement("script");
  script.textContent = code;
  document.documentElement.appendChild(script);

  // 💥 DOMContentLoaded kaçtıysa manuel tetikle
/* code = code.replace(
  /document\.addEventListener\("DOMContentLoaded",\s*\(.*?\)\s*=>\s*{([\s\S]*?)}\);/,
  "$1"
);*/

  //script.remove();
}

window.addEventListener("load", () => {
  test();
});