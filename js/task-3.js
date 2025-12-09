const pepe = document.querySelector("#name-input");
const faaa = document.querySelector("#name-output");

pepe.addEventListener("input", () => {

    pepe.value = pepe.value.trim();
    if (pepe.value === "") {
        faaa.textContent = "Anonymous"; 
    } else {
        faaa.textContent = pepe.value;  
    }
});
