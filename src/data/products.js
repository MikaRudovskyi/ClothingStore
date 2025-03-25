import tshirtnavibebravelikeukraine from "../assets/images/t-shirts/NAVI Be Brave Like Ukraine.png";
import navixpumaprokitgameday from "../assets/images/t-shirts/NAVI x PUMA Pro Kit Gameday Jersey.png";
import navixpumatshirteamviolet from "../assets/images/t-shirts/NAVI X PUMA T-SHIRT TEAM VIOLET.png";
import navixpumatshirtglowingpink from "../assets/images/t-shirts/NAVI X PUMA T-SHIRT GLOWING PINK.png";
import navixpumatshirtpumablack from "../assets/images/t-shirts/NAVI x PUMA T-Shirt Puma Black.png";
import tshirtvenusvincere from "../assets/images/t-shirts/T-SHIRT VENUS VINCERE.png";
import navixpumaprokitgamedaypants from "../assets/images/pants/NAVI x PUMA Pro Kit Gameday Pants.png";
import navixpumahoodiepumablack from "../assets/images/hoodies/NAVI x PUMA Hoodie Puma black.png";
import navi2025prokitsleevesornament from "../assets/images/sleeves/NAVI 2024 Prokit Sleeves Ornament.png";
import navi2025prokitsleevesborntowin from "../assets/images/sleeves/NAVI 2025 Prokit Sleeves Born to win.png";
import gamingsleeves1mplethings from "../assets/images/sleeves/Gaming sleeves S1MPLE THINGS.png";
import navi2025prokitjacket from "../assets/images/jackets/NAVI 2025 Pro Kit Jacket.png";
import navixpumashortsblack from "../assets/images/shorts/NAVI X PUMA SHORTS BLACK.png";

const products = [
  {
    id: 1,
    name: "T-shirt NAVI 'Be Brave Like Ukraine'",
    category: "T-shirts",
    price: 30,
    image: tshirtnavibebravelikeukraine,
    description:
      "NAVI t-shirt with Ukrainian-themed prints. For those who believe that light will defeat darkness. With Ukraine in the heart.",
  },
  {
    id: 2,
    name: "NAVI x PUMA Pro Kit Gameday Pants",
    category: "Pants",
    price: 35,
    image: navixpumaprokitgamedaypants,
    description:
      "NAVI 2022 pro kit track pants. With NAVI and Puma logos and bright yellow panels along the length of the leg. Let everyone know that you support NAVI.",
  },
  {
    id: 3,
    name: "NAVI x PUMA Hoodie Puma black",
    category: "Hoodies",
    price: 40,
    image: navixpumahoodiepumablack,
    description:
      "Obsession with the game. Obsession with winning. The black hoodie piece from NAVI x PUMA 2025 collection is complemented with a printed design on the front and logotypes of NAVI and PUMA on the right sleeve.",
  },
  {
    id: 4,
    name: "NAVI 2025 Pro Kit Sleeves (Ornament)",
    category: "Sleeves",
    price: 20,
    image: navi2025prokitsleevesornament,
    description:
      "Effortless movement for precision gameplay. These sleeves offer smooth glide on any surface. Redesigned for the latest NAVI 2025 pro kit. Look like NAVI — play like NAVI. Comes with a pair of sleeves.",
  },
  {
    id: 5,
    name: "NAVI 2025 Pro Kit Jacket",
    category: "Jackets",
    price: 100,
    image: navi2025prokitjacket,
    description:
      "Retro vibes meet modern versatility in the NAVI Pro Kit Jacket. Featuring a sleek, throwback design, this jacket is more than just a style statement—it transforms into a short-sleeved version for ultimate adaptability. Whether you’re gearing up for a match or heading out, this jacket’s got you covered.",
  },
  {
    id: 6,
    name: "NAVI X PUMA SHORTS BLACK",
    category: "Shorts",
    price: 50,
    image: navixpumashortsblack,
    description:
      "Stay cool and agile in the NAVI Sweat Shorts, designed for peak performance and supreme comfort. Whether you're dominating the virtual arena or hitting the streets, these shorts—in PUMA Black for a sleek look or Team Violet for a dash of playfulness—are your go-to for any activity.",
  },
  {
    id: 7,
    name: "NAVI 2025 Pro Kit Sleeves (Born to win)",
    category: "Sleeves",
    price: 20,
    image: navi2025prokitsleevesborntowin,
    description:
      "Elevate your game with the NAVI Pro Gaming Sleeves 2025, designed for peak performance and ultimate comfort. These limited-edition sleeves feature state-of-the-art moisture-wicking fabric that keeps you cool under pressure, enhancing your gaming stamina during intense sessions.",
  },
  {
    id: 8,
    name: "Gaming sleeves S1MPLE THINGS",
    category: "Sleeves",
    price: 20,
    image: gamingsleeves1mplethings,
    description:
      "Elevate your game with the NAVI Pro Gaming Sleeves 2025, designed for peak performance and ultimate comfort. These limited-edition sleeves feature state-of-the-art moisture-wicking fabric that keeps you cool under pressure, enhancing your gaming stamina during intense sessions.",
  },
  {
    id: 9,
    name: "NAVI x PUMA Pro Kit Gameday Jersey",
    category: "T-shirts",
    price: 25,
    image: navixpumaprokitgameday,
    description:
      "Gameday NAVI Jersey made in collaboration with PUMA. The vibrant Yellow line rushes through the uniform just like NAVI players rush on their way to trophies. Wear the NAVI Pro Kit and paint the world in black and yellow.",
  },
  {
    id: 10,
    name: "NAVI x PUMA Pro Kit Gameday Jersey",
    category: "T-shirts",
    price: 15,
    image: navixpumatshirtpumablack,
    description:
      "Obsession with the game. Obsession with winning. The T-Shirt from NAVI x PUMA 2023 collection is complemented with a printed design on the front and logotypes of NAVI and PUMA on the back.",
  },
  {
    id: 11,
    name: "T-SHIRT VENUS VINCERE",
    category: "T-shirts",
    price: 10,
    image: tshirtvenusvincere,
    description:
      "This universe needs more NAVI Girls. Declare your existence in this very status with our T-shirt from the women's collection.",
  },
  {
    id: 12,
    name: "NAVI X PUMA T-SHIRT TEAM VIOLET",
    category: "T-shirts",
    price: 20,
    image: navixpumatshirteamviolet,
    description:
      "Command attention on and off the screen with the NAVI Tees in Glowing Pink and Glowing Violet. Engineered for comfort and style, these tees are perfect for intense gaming sessions or a day out. Their vibrant colors symbolize energy and passion, making you the focal point wherever you go.",
  },
  {
    id: 13,
    name: "NAVI X PUMA T-SHIRT GLOWING PINK",
    category: "T-shirts",
    price: 20,
    image: navixpumatshirtglowingpink,
    description:
      "Command attention on and off the screen with the NAVI Tees in Glowing Pink and Glowing Violet. Engineered for comfort and style, these tees are perfect for intense gaming sessions or a day out. Their vibrant colors symbolize energy and passion, making you the focal point wherever you go.",
  },
];

export default products;
