const angle1 = 20;
const angle2 = 40;
const angle3 = 120;

if (angle1 + angle2 + angle3 == 180) {
  console.log(true);
} else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("Erro");
} else {
  console.log(false);
}
