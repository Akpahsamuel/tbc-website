export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  objectPosition?: string;
};

export const TEAM: TeamMember[] = [
  { name: "Kwame Stalwart", role: "Convener & Chairperson", image: "/images/team/kwame.jpg", objectPosition: "center 20%" },
  { name: "Yini", role: "Technical Team Lead", image: "/images/team/yini-portrait.png", objectPosition: "center 15%" },
  { name: "Lion Prado", role: "Technical Team", image: "/images/team/lionanime.jpeg", objectPosition: "center 100%" },
  { name: "Pablo", role: "Community Team", image: "/images/team/pablo.JPG", objectPosition: "center 15%" },
  { name: "Nii Obodai Ashare", role: "Design Lead", image: "/images/team/nii-obodai-ashare.jpg", objectPosition: "center 20%" },
  { name: "Francisca Mailiana Zonky", role: "Secretary & Operations Lead", image: "/images/team/mailliana.PNG", objectPosition: "center 20%" },
  { name: "Peter Okai", role: "Secretary & Operations", image: "/images/team/Peter.jpeg", objectPosition: "center 20%" },
  { name: "Juliet Edeh", role: "Community Lead", image: "/images/team/uju.JPG", objectPosition: "center 25%" },
  { name: "Akosua Osei", role: "Partnerships & Growth", image: "/images/team/akosua.JPG", objectPosition: "center 20%" },
  { name: "Wasiu Jimoh (Evergenius)", role: "Partnerships & Growth", image: "/images/team/Evergenius.jpg", objectPosition: "center 20%" },
  { name: "Ola", role: "Community Team", image: "/images/team/Bello.jpg", objectPosition: "center 15%" },
  { name: "Gideon", role: "Design Team", image: "/images/team/Gideon.PNG", objectPosition: "center 20%" },
  { name: "Kweku Tech", role: "Media Lead", image: "/images/team/kweku.jpg", objectPosition: "center 5%" },
];
