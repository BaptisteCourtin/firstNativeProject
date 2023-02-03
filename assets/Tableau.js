// laisser le ../assets car va dans page
const Tableau = [
  {
    titleLogo: "Protogen",
    logo: require("../assets/myAssets/logo/protoLogo.jpg"),
    versPage: "Description",
    title: "Protogen",
    link: [(link1 = require("../assets/myAssets/protogenFull.png"))],
  },
  {
    titleLogo: "Dragons",
    logo: require("../assets/myAssets/logo/dragonLogo.jpg"),
    versPage: "Kind",
    title: "Kind of Dragons",
    link: [
      {
        titleLogo: "Western Dragon",
        logo: require("../assets/myAssets/logo/logoDragon.jpg"),
        versPage: "Description",
        title: "Western Dragon",
        link: [
          (link1 = require("../assets/myAssets/dragon/dragon-nasuno_Posi.png")),
          (link2 = require("../assets/myAssets/dragon/dragon1-Spareribs_777.png")),
          (link3 = require("../assets/myAssets/dragon/dragon2-gamazo_ooo.png")),
        ],
      },
      {
        titleLogo: "Asian Dragon",
        logo: require("../assets/myAssets/logo/logoEasternDragon.jpg"),
        versPage: "Description",
        title: "Asian Dragon",
        link: [
          (link1 = require("../assets/myAssets/dragon/easternDragon-ArtByZephra.png")),
          (link2 = require("../assets/myAssets/dragon/easternDragon-Azany_artist.jpg")),
          (link3 = require("../assets/myAssets/dragon/easternDragon-nasuno_Posi.png")),
        ],
      },
      {
        titleLogo: "Aquatic Dragon",
        logo: require("../assets/myAssets/logo/logoDragon.jpg"),
        versPage: "Description",
        title: "Aquatic Dragon",
        link: [
          (link1 = require("../assets/myAssets/dragon/aquaticDragon-GlowingSpirit_.png")),
          (link2 = require("../assets/myAssets/dragon/aquaticDragon-nasuno_Posi.png")),
        ],
      },
      {
        titleLogo: "Dragonnet",
        logo: require("../assets/myAssets/logo/logoEasternDragon.jpg"),
        versPage: "Description",
        title: "Dragonnet",
        link: [(link1 = require("../assets/myAssets/dragon/dragonnet.png"))],
      },
      {
        titleLogo: "Hydre",
        logo: require("../assets/myAssets/logo/logoHydre.jpg"),
        versPage: "Description",
        title: "Oriental Dragon",
        link: [(link1 = require("../assets/myAssets/dragon/hydre.jpg"))],
      },
      {
        title: "Wyvern",
        link: require("../assets/myAssets/logo/LogoWyvern.png"),
        versPage: "Description",
        title: "Wyvern",
        link: [
          (link1 = require("../assets/myAssets/dragon/wyvern2-GlowingSpirit_.png")),
          (link2 = require("../assets/myAssets/dragon/wyvern-GlowingSpirit_.png")),
        ],
      },
    ],
  },
  {
    titleLogo: "Synth",
    logo: require("../assets/myAssets/logo/synthLogo.jpg"),
    versPage: "Description",
    title: "Synth",
    link: [
      (link1 = require("../assets/myAssets/synthFace.png")),
      (link2 = require("../assets/myAssets/synthFaceReal.png")),
    ],
  },
];

export default Tableau;
