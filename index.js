/*const textInput = document.querySelector("#textInput");
const wordCount =document.querySelector("#wordCount");
textInput.addEventListener("input", ()=>{
    const text =textInput.value.trim();
    const word =text.spilt(/\s+/).filter(word => word.length >0);
    wordCount.textContent = word.length
})*/
const textInput =  document.querySelector("#textInput"); 
const wordCount = document.querySelector("#wordCount"); 

textInput.addEventListener("input", ()=> {
    const text = textInput.value.trim(); 

    const word = text.split(/\s+/).filter(word => word.length > 0 );

    wordCount.textContent = word.length


})