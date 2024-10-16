
const inputArea = document.querySelector(".large-area--input");

const outputArea = document.querySelector(".large-area--output");

const btnFormat = document.querySelector(".controls_button--format");

const btnMinify = document.querySelector(".controls_button--minify");


btnFormat.addEventListener("click",()=>{
    const formatted = JSON.stringify(JSON.parse(inputArea.value),null,4)
    //    console.log(formatted)
    outputArea.value = formatted ;
})


btnMinify.addEventListener("click", () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));
  //    console.log(minified)
  outputArea.value = minified;
});
