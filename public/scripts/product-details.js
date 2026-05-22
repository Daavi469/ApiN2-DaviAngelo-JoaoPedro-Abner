async function carregarDetalhesProduto() {
  try {
    const path = window.location.pathname.split("/").filter(Boolean);
    const id = path[path.length - 1];

    console.log("ID:", id);

    const response = await fetch(`/api/products/${id}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar produto");
    }

    const produto = await response.json();

    const container = document.getElementById("container-produto");

    if (!produto) {
      container.innerHTML = "<p>Produto não encontrado</p>";
      return;
    }

    container.innerHTML = `
      <div class="card p-3">
        <h3>${produto.nome}</h3>
        <p>${produto.disponivel ? "Disponível" : "Esgotado"}</p>
        <p>ID: ${produto.id}</p>
      </div>
    `;

  } catch (error) {
    console.error(error);

    document.getElementById("container-produto").innerHTML =
      "<p>Erro ao carregar produto</p>";
  }
}

document.addEventListener("DOMContentLoaded", carregarDetalhesProduto);