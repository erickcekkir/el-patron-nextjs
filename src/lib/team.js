const team = [
  {
    id: "matheus-sanches",
    name: "Matheus-Sanches",
    role: "Barbeiro Junior",
    image: "/imgs/matheus.png",
  },
  {
    id: "raphael-rosas",
    name: "Raphael Rosas",
    role: "Especialista em Barba",
    image: "/imgs/raphael.png",
  },
  {
    id: "cristiano-rosa",
    name: "Cristiano Rosa",
    role: "Barbeira Sênior",
    image: "/imgs/cristiano.png",
  },
  {
    id: "ian-morais",
    name: "Ian Morais",
    role: "Aprendiz",
    image: "/imgs/ian.png",
  },
];

export async function getTeam() {
  return team;
}
