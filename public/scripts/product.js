async function carregarDetalhesProduto() {
  const id = window.location.pathname.split("/").filter(Boolean).pop();

  console.log("ID:", id);

  const response = await fetch(`/api/products/${id}`);

  if (!response.ok) {
    document.getElementById("container-produto").innerHTML =
      "<p>Produto não encontrado</p>";
    return;
  }

  const produto = await response.json();

  document.getElementById("container-produto").innerHTML = `
    <div class="card p-3">
      <h3>${produto.nome}</h3>
      <p>${produto.disponivel ? "Disponível" : "Esgotado"}</p>
      <p>ID: ${produto.id}</p>
    </div>
  `;
}

window.onload = carregarDetalhesProduto;