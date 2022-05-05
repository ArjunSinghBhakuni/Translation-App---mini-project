

let getdata = async () => {

 if(create("input_lang").value !== ""){

 try {
     const input = create("input_text").value;

     if (input !== "") {
         const input_lang = create("input_lang").value;

         const output_lang = create("output_lang").value;

         const res = await fetch("https://libretranslate.de/translate", {

             method: "POST",

             body: JSON.stringify({

                 q: input,
                 source: input_lang,
                 target: output_lang,
                 format: "text",
             }),

             headers: {
                 "Content-Type": 'application/json',
             },
         });

         const data = await res.json();
         console.log(data);
         appenddata(data);
     } else {
         create("product").innerText = "Translation";
     }

 } catch (err) {
 };
 }else{
 alert("Select Input Language")
}
};

// onclicking microphone we will be activating texttospeech function;

speechtotext = () => {
 let recognition = new webkitSpeechRecognition();
     recognition.lang = create("input_lang").value;
     recognition.onresult = function(event){
         create("input_text").value = event.results[0][0].transcript;
     }
     recognition.start();

 
};

//debouncing
let id
debounce = (func,delay) => {
 if(id){
     clearTimeout(id);
 }

 id = setTimeout(() => {
     func();
 },delay);
};

const appenddata = (data) => {

 let product = create("product");

 product.innerText = data.translatedText;
}

let create = (id) => {
 return document.getElementById(id);
}
