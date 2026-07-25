export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  objectPosition?: string;
};

export const TEAM: TeamMember[] = [
  { name: "Kwame Stalwart", role: "Convener & Chairperson", image: "/images/kwame.jpg", objectPosition: "center 20%" },
  { name: "Yini", role: "Technical Team Lead", image: "/images/yini-portrait.png", objectPosition: "center 15%" },
  { name: "Lion Prado", role: "Technical Team", image: "/images/lionanime.jpeg", objectPosition: "center 100%" },
  { name: "Pablo", role: "Technical Team", image: "/images/pablo.JPG", objectPosition: "center 15%" },
  { name: "Nii Obodai Ashare", role: "Design Lead", image: "/images/nii-obodai-ashare.jpg", objectPosition: "center 20%" },
  { name: "Francisca Mailiana Zonky", role: "Secretary & Operations Lead", image: "/images/mailliana.PNG", objectPosition: "center 20%" },
  { name: "Peter Okai", role: "Secretary & Operations", image: "/images/Peter.jpeg", objectPosition: "center 20%" },
  { name: "Juliet Ann", role: "Community Lead", image: "/images/uju.JPG", objectPosition: "center 25%" },
  { name: "Akosua Osei", role: "Partnerships & Growth", image: "/images/akosua.JPG", objectPosition: "center 20%" },
  { name: "Wasiu Jimoh (Evergenius)", role: "Partnerships & Growth", image: "/images/Evergenius.jpg", objectPosition: "center 20%" },
  { name: "Ola", role: "Core Team", image: "/images/bello.jpg", objectPosition: "center 15%" },
  { name: "Gideon", role: "Core Team", image: "/images/Gideon.PNG", objectPosition: "center 20%" },
];
