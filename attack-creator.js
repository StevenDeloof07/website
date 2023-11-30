function attack_creator(board) {
    let line = "";
    const body = document.getElementById("attack-body");
    //creates 100 buttons to launch attacks
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            line += "<button type='button' class='attack-btn' id='" + i + "-" + j + "'>X</button>";
        }
        line += "<br>";
    }
    body.innerHTML = line;
    //gives eventlistener to each button
    const buttons = document.querySelectorAll(".attack-btn");
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const main_body = document.getElementById("main-body");
            let x = parseInt(button.id[0]);
            let y = parseInt(button.id[2]);
            main_body.innerHTML = board.attack(x, y);
        });
    });
}