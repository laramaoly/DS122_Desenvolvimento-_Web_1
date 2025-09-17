let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
    let texto = document.getElementById("texto").value;
    if (texto == "")
        alert("Por favor, insira seu nome.");
    else 
        alert("Olá, " + texto + "! Bem-vindo(a)!");   
})
