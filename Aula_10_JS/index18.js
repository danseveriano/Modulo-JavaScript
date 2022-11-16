class Produto {

  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  };

  salvar() {
    let produto = this.lerDados();

    if (this.validarCampos(produto)) {
      if(this.editId == null){
        this.adicionar(produto);
      } else {
        this.atualizar(this.editId, produto);
      }
        }

    this.listaTabela();
    this.limparCampos();
  };

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    let indice = 0;

    while (indice < this.arrayProdutos.length) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_preço = tr.insertCell();
      let td_editar = tr.insertCell();
      let td_excluir = tr.insertCell();

      td_id.innerText = this.arrayProdutos[indice].id;
      td_produto.innerText = `${this.arrayProdutos[indice].nomeProduto}\n${this.arrayProdutos[indice].descriçãoProduto}\n${this.arrayProdutos[indice].incluidoEm}`;
      td_preço.innerText = this.arrayProdutos[indice].valorProduto;

      td_id.classList.add("center")
      td_editar.classList.add("center")
      td_excluir.classList.add("center")

      let vetorEditar = document.createElement("img")
      let vetorExcluir = document.createElement("img")

      vetorEditar.src = "./Assets/botao-editar.png"
      vetorExcluir.src = "./Assets/lixeira.png"

      td_editar.appendChild(vetorEditar);
      td_excluir.appendChild(vetorExcluir);

      vetorExcluir.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[indice].id +")");
      vetorEditar.setAttribute("onclick", "produto.editar("+ JSON.stringify(this.arrayProdutos[indice]) +")");

      indice++;
    }
  };

  adicionar(produto) {
    produto.valorProduto = parseFloat(produto.valorProduto)
    this.arrayProdutos.push(produto);
    this.id++;
  };

  atualizar(id, produto) {
    let indice = 0;
    while (indice < this.arrayProdutos.length) {
      if(this.arrayProdutos[indice].id == id) {
        this.arrayProdutos[indice].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[indice].descriçãoProduto = produto.descriçãoProduto;
        this.arrayProdutos[indice].valorProduto = produto.valorProduto;
      }
      indice++;
    }

  };

  editar(dados) {
    this.editId = dados.id;

    document.getElementById("produto").value = dados.nomeProduto;
    document.getElementById("descrição").value = dados.descriçãoProduto;
    document.getElementById("valor").value = dados.valorProduto;
  
    document.getElementById("atualizar").innerText = "Atualizar";
  };

  lerDados() {
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.descriçãoProduto = document.getElementById("descrição").value;
    produto.valorProduto = document.getElementById("valor").value;
    produto.incluidoEm = new Date().toISOString();

    return produto;
  };

  validarCampos(produto) {
    let mensagem = "";

    if (produto.nomeProduto == "") {
      mensagem += " - Informe o nome do produto - \n"
    };

    if (produto.descriçãoProduto == "") {
      mensagem += " - Informe as características do produto - \n"
    };

    if (produto.valorProduto == "") {
      mensagem += " - Informe o preço do produto - \n"
    };

    if (mensagem != "") {
      alert(mensagem);
      return false
    };

    return true;

  };

  limparCampos() {
    document.getElementById("produto").value = "";
    document.getElementById("descrição").value = "";
    document.getElementById("valor").value = "";

    document.getElementById("atualizar").innerText = "Salvar";
    this.editId = null
  };

  deletar(id) {
    if (confirm("Deseja mesmo deletar o Produto?" + id)) {
      let indice = 0; 

      while(indice < this.arrayProdutos.length) {
        let tbody = document.getElementById("tbody");
        if (this.arrayProdutos[indice].id == id) {
          this.arrayProdutos.splice(indice, 1);
          tbody.deleteRow(indice);
        };
        indice++;
      };

      alert("- Produto será deletado -")
    }
  }


};

var produto = new Produto();