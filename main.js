let board;
const btn_start = document.getElementById('btn-game');

btn_start.addEventListener('click', () => { 
    board = new battleship();
    const main_body = document.querySelector("#main-body");
    main_body.innerHTML = board.show_board();

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
            let y = parseInt(button.id[0]);
            let x = parseInt(button.id[2]);
            main_body.innerHTML = board.attack(x, y);
        });
    });
});
