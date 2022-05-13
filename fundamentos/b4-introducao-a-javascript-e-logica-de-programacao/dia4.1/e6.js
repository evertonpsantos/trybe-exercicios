const chessPiece = "ROOK";

switch (chessPiece.toLowerCase()) {
   case "bishop":
      console.log("diagonals");
      break;
   case "rook":
      console.log("straight line; right, left, forward and backwards");
      break;
   case "knight":
      console.log("L movement");
      break;
   case "pawn":
      console.log("one square, forward");
      break;
   case "king":
      console.log("one square, any direction");
      break;
   case "queen":
      console.log("any direction");
      break;
   default:
      console.log("insert valid chess piece");
}