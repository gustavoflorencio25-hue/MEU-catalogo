// 1. CONFIGURAÇÃO DO BANCO DE DADOS
const supabaseUrl = "https://nqprkasfdqgwmorzvdvv.supabase.co";
const supabaseKey = "sb_publishable_0jgsFgzlsAx5XVZe3deD3w_7Ox9IpMZ";

// Inicia a conexão
const banco = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. FUNÇÃO PARA BUSCAR E DESENHAR OS PRODUTOS
async function carregarCatalogo() {
  // Faz um SELECT * FROM produtos na nuvem
  let { data: produtos, error } = await banco.from("produtos").select("*");

  if (error) {
    console.error("Erro ao buscar dados:", error);
    return;
  }

  let vitrine = document.getElementById("vitrine");
  vitrine.innerHTML = ""; // Limpa a tela

  // Loop para desenhar cada produto na tela
  produtos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "card-produto";
    div.innerHTML = `
            <img src="${item.imagem_url}" width="150">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco}</p>
        `;
    vitrine.appendChild(div);
  });
}

// Roda a função assim que o site abrir
carregarCatalogo();
