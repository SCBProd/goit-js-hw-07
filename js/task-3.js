const pepe = document.querySelector("#name-input");
const faaa = document.querySelector("#name-output");

pepe.addEventListener("input", () => {
    const trimmedValue = pepe.value.trim(); // зберігаємо обрізане значення
    if (trimmedValue === "") {
        faaa.textContent = "Anonymous"; 
    } else {
        faaa.textContent = trimmedValue;  
    }
});
