const modalConteudo = document.querySelector("#modalConteudo");
const informacoes = document.querySelector("#informacoes");
const tableEntrada = document.querySelector("#tableEntrada");
const btn = document.querySelector("#salvarContato");
const btn7 = document.querySelector("#novoContato");
const imagemDiv = document.querySelector("#nomeInput1");
const imagemCeu = new FileReader();

function abrirModal(){
    modal2.style.display = "block"
}
function fecharModal(){
    modal2.style.display = "none"
}

btn.addEventListener("click", (event)=>{
    
   
    let img = document.createElement("td");
    let nome = document.createElement("td");
    let email = document.createElement("td");
    let telefone = document.createElement("td");
    let botaoEditar = document.createElement("button");
    let botaoExcluir = document.createElement("button");


    let coluna = document.createElement("tr");
    let imagem = document.createElement("img");
    imagem.id="imagem";

    imagemCeu.readAsDataURL(nomeInput1.files[0])
    imagemCeu.addEventListener("load", (event)=>{
        imagem.src = event.target.result
    });
    nome.textContent = nomeInput2.value
    email.textContent = nomeInput3.value
    telefone.textContent = nomeInput4.value
    botaoEditar.textContent = "Editar"
    botaoExcluir.textContent = "Excluir"

    img.appendChild(imagem);
    coluna.appendChild(img);
    coluna.appendChild(nome);
    coluna.appendChild(email);
    coluna.appendChild(telefone);
    coluna.appendChild(botaoEditar);
    coluna.appendChild(botaoExcluir);
  
    tableEntrada.appendChild(coluna);

    botaoEditar.onclick = function(){
        modal2.style.display = "block"

    }
    botaoExcluir.onclick = function(){
        img.remove()
        nome.remove()
        email.remove()
        telefone.remove()
        botaoEditar.remove()
        botaoExcluir.remove()
    }
});