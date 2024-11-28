let numeroSecreto = Math.floor(Math.random() * 10);
document.querySelector('.btn').addEventListener("click", () => {
let chute = document.querySelector('#chute').value;
if (chute == numeroSecreto) {
      alert("Parabens você acertou");
} else {
      alert(`Tente novamente!`);
}
});