async function test() {
  console.log("REQUEST ATILIYOR");

  try {
    const res = await fetch(
      "https://axymxyglob.netlify.app/.netlify/functions/checkKey",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "ABC123" }),
      },
    );

    const text = await res.text();
    console.log("RESPONSE GELDİ:", text);

    try {
      const data = JSON.parse(text);

      if (data.valid) {
        let code = data.code.trim();
        code = code.replace(/\\n/g, "\n");

        /*eval(`
  window.addEventListener("load", () => {
    ${code}
  });
`);*/
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const safeAPI = {
//   canvas,
//   ctx,
//   log: console.log
// };

// const fn = new Function("api", code);
// fn(safeAPI);
  const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        
        // DEĞİŞMEYEN PARAMETRE İSİMLERİ
        // Obfuscate edilmiş kod içinde bu isimlerle çağıracağız
        const sandbox = {
          canvas: canvas,
          ctx: ctx,
          log: console.log,
          alert: alert,
          Window,
          document,
          requestAnimationFrame: requestAnimationFrame
        };
        
        // Parametre isimlerini sabitle
        const paramNames = Object.keys(sandbox).join(',');
        const paramValues = Object.values(sandbox);
        
        // Fonksiyonu oluştur
        const fn = new Function(paramNames, code);
        
        // Çalıştır
        fn(...paramValues);
        //runCode(code);
      } else {
        console.log("Geçersiz key");
      }
    } catch (e) {
      console.error("Parse hatası:", text);
    }
  } catch (err) {
    console.error("REQUEST HATA:", err);
  }
}

function runCode(code) {
  try {
    const script = document.createElement("script");
    //script.textContent = code;
    script.textContent = `
    (function(){
      ${code}
    })();
  `;
    document.documentElement.appendChild(script);
  } catch (err) {
    console.error("Kod çalıştırma hatası:", err);
  }
}

window.addEventListener("load", test);
