export default class ProductsController {
  constructor() {}

  async getProducts(req, res, next) {
    try {
      const products = [
        {
          id: 1,
          nome: "Homem-Aranha articulado",
          disponivel: true,
          preco: 79.9,
          categoria: "Action Figure",
          descricao: "Boneco articulado do Homem-Aranha com alta mobilidade.",
          estoque: 12
        },
        {
          id: 2,
          nome: "Funko Pop Dexter",
          disponivel: true,
          preco: 99.9,
          categoria: "Colecionáveis",
          descricao: "Figura Funko Pop do personagem Dexter Morgan.",
          estoque: 5
        },
        {
          id: 3,
          nome: "Capa da Akatsuki",
          disponivel: false,
          preco: 120.0,
          categoria: "Cosplay",
          descricao: "Capa preta com nuvens vermelhas da Akatsuki.",
          estoque: 0
        },
        {
          id: 4,
          nome: "Capinha do Naruto",
          disponivel: false,
          preco: 35.0,
          categoria: "Acessórios",
          descricao: "Capinha de celular temática do Naruto.",
          estoque: 0
        },
      ];

      res.json({ productsList: products });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;

      const products = [
        {
          id: 1,
          nome: "Homem-Aranha articulado",
          disponivel: true,
          preco: 79.9,
          categoria: "Action Figure",
          descricao: "Boneco articulado do Homem-Aranha com alta mobilidade.",
          estoque: 12
        },
        {
          id: 2,
          nome: "Funko Pop Dexter",
          disponivel: true,
          preco: 99.9,
          categoria: "Colecionáveis",
          descricao: "Figura Funko Pop do personagem Dexter Morgan.",
          estoque: 5
        },
        {
          id: 3,
          nome: "Capa da Akatsuki",
          disponivel: false,
          preco: 120.0,
          categoria: "Cosplay",
          descricao: "Capa preta com nuvens vermelhas da Akatsuki.",
          estoque: 0
        },
        {
          id: 4,
          nome: "Capinha do Naruto",
          disponivel: false,
          preco: 35.0,
          categoria: "Acessórios",
          descricao: "Capinha de celular temática do Naruto.",
          estoque: 0
        },
      ];

      const product = products.find(p => p.id === Number(id));

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}
