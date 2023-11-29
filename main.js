const btn_start = document.getElementById('btn-game');

btn_start.addEventListener('click', () => { 
    let board = new battleship();
    document.querySelector(".main-body").innerHTML = board.show_board();
    document.getElementById("attack-body").innerHTML = attack_creator();
});
