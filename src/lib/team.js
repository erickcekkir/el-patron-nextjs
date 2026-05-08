const team = [
  {
    id: "matheus-sanches",
    name: "Matheus-Sanches",
    role: "Barbeiro Junior",
    image: "/imgs/Screenshot 2026-04-02 at 21.26.09.png",
  },
  {
    id: "raphael-rosas",
    name: "Raphael Rosas",
    role: "Especialista em Barba",
    image: "/imgs/Screenshot 2026-04-02 at 21.26.17.png",
  },
  {
    id: "cristiano-rosa",
    name: "Cristiano Rosa",
    role: "Barbeira Sênior",
    image: "/imgs/Screenshot 2026-04-02 at 21.26.41.png",
  },
  {
    id: "ian-morais",
    name: "Ian Morais",
    role: "Aprendiz",
    image: "/imgs/Screenshot 2026-04-02 at 21.36.14.png",
  },
];

export async function getTeam() {
  return team;
}
