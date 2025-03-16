import tshirtClassic from "../assets/images/t-shirt.png";
import skinnyPants from "../assets/images/pants.png";
import hoodieComfort from "../assets/images/hoodie.png";
import prokitSleeves from "../assets/images/sleeves.png";
import prokitJacket from "../assets/images/jacket.png";
import sportShorts from "../assets/images/shorts.png";

const products = [
  {
    id: 1,
    name: "T-shirt NAVI 'Be Brave Like Ukraine'",
    category: "T-shirts",
    price: 25,
    image: tshirtClassic,
    description:
      "NAVI t-shirt with Ukrainian-themed prints. For those who believe that light will defeat darkness. With Ukraine in the heart.",
  },
  {
    id: 2,
    name: "NAVI Pants",
    category: "Pants",
    price: 50,
    image: skinnyPants,
    description:
      "NAVI 2022 pro kit track pants. With NAVI and Puma logos and bright yellow panels along the length of the leg. Let everyone know that you support NAVI.",
  },
  {
    id: 3,
    name: "NAVI x PUMA Hoodie",
    category: "Hoodies",
    price: 40,
    image: hoodieComfort,
    description:
      "Obsession with the game. Obsession with winning. The black hoodie piece from NAVI x PUMA 2025 collection is complemented with a printed design on the front and logotypes of NAVI and PUMA on the right sleeve.",
  },
  {
    id: 4,
    name: "NAVI Pro Kit Sleeves",
    category: "Sleeves",
    price: 35,
    image: prokitSleeves,
    description:
      "Effortless movement for precision gameplay. These sleeves offer smooth glide on any surface. Redesigned for the latest NAVI 2025 pro kit. Look like NAVI — play like NAVI. Comes with a pair of sleeves.",
  },
  {
    id: 5,
    name: "NAVI Pro Kit Jacket",
    category: "Jackets",
    price: 45,
    image: prokitJacket,
    description:
      "Retro vibes meet modern versatility in the NAVI Pro Kit Jacket. Featuring a sleek, throwback design, this jacket is more than just a style statement—it transforms into a short-sleeved version for ultimate adaptability. Whether you’re gearing up for a match or heading out, this jacket’s got you covered.",
  },
  {
    id: 6,
    name: "NAVI Shorts 'Sport'",
    category: "Shorts",
    price: 30,
    image: sportShorts,
    description:
      "Stay cool and agile in the NAVI Sweat Shorts, designed for peak performance and supreme comfort. Whether you're dominating the virtual arena or hitting the streets, these shorts—in PUMA Black for a sleek look or Team Violet for a dash of playfulness—are your go-to for any activity.",
  },
];

export default products;
