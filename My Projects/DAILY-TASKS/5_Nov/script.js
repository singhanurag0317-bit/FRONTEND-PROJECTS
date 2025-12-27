const chess = document.querySelector(".chessboard");

const oddrow = `<div class="square"></div>`.repeat(8);
const evenrow = `<div class="square-rev"></div>`.repeat(8);

const completehtml = `${oddrow} ${evenrow}`.repeat(4);
chess.innerHTML = completehtml;