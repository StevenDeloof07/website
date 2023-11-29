function attack_creator() {
    let buttons = "";
    let row = 1;
    const body = document.getElementById("attack-body");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            buttons += "<button type='button' class='attack-btn' id='${i}-${frodo}'>X</button>";
        }
        buttons += "<br>";
    }
    return buttons;
}