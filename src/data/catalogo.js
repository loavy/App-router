export const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficcao cientifica",
    nota: "9.1",
    duracao: "2h 49min",
    ano: "2014",
    classificacao: "10+",
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    destaque: "Viagem espacial, familia e tempo em uma historia grandiosa.",
  },
  {
    id: 2,
    titulo: "A Origem",
    genero: "Acao / suspense",
    nota: "8.8",
    duracao: "2h 28min",
    ano: "2010",
    classificacao: "14+",
    imagem: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    destaque: "Um assalto dentro de sonhos, com camadas de realidade.",
  },
  {
    id: 3,
    titulo: "Homem-Aranha no Aranhaverso",
    genero: "Animacao",
    nota: "8.7",
    duracao: "1h 57min",
    ano: "2018",
    classificacao: "10+",
    imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    destaque: "Um visual vibrante para apresentar Miles Morales.",
  },
  {
    id: 4,
    titulo: "Duna",
    genero: "Aventura / fantasia",
    nota: "8.0",
    duracao: "2h 35min",
    ano: "2021",
    classificacao: "14+",
    imagem: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    destaque: "Politica, deserto e destino em Arrakis.",
  },
  {
    id: 5,
    titulo: "Oppenheimer",
    genero: "Drama historico",
    nota: "8.6",
    duracao: "3h",
    ano: "2023",
    classificacao: "16+",
    imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    destaque: "Um retrato intenso sobre ciencia, poder e consequencias.",
  },
  {
    id: 6,
    titulo: "Barbie",
    genero: "Comedia / fantasia",
    nota: "7.4",
    duracao: "1h 54min",
    ano: "2023",
    classificacao: "12+",
    imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    destaque: "Uma aventura colorida sobre identidade e mudanca.",
  },
];

export const categorias = [
  { nome: "Lancamentos", total: 18, icone: "sparkles-outline" },
  { nome: "Mais vistos", total: 42, icone: "flame-outline" },
  { nome: "Familia", total: 15, icone: "people-outline" },
  { nome: "Classicos", total: 27, icone: "albums-outline" },
];

export const continuarAssistindo = [
  { ...filmes[0], progresso: "72%" },
  { ...filmes[3], progresso: "38%" },
  { ...filmes[5], progresso: "54%" },
];

export const favoritos = [filmes[0], filmes[2], filmes[4]];

export const planos = [
  {
    nome: "Basico",
    preco: "R$ 14,90",
    periodo: "/mes",
    destaque: "Para assistir sozinho",
    beneficios: ["1 tela", "HD", "Catalogo completo"],
  },
  {
    nome: "Plus",
    preco: "R$ 24,90",
    periodo: "/mes",
    destaque: "Melhor custo-beneficio",
    beneficios: ["2 telas", "Full HD", "Downloads offline"],
  },
  {
    nome: "Premium",
    preco: "R$ 39,90",
    periodo: "/mes",
    destaque: "Para toda a casa",
    beneficios: ["4 telas", "4K", "Perfis para familia"],
  },
];
