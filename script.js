const display = document.querySelector("#entrada_texto");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "igual") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (btn.id === "AC") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.textContent;
        }
    });
});
