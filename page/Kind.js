import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import ChooseCard from "../components/ChooseCard";

import KindStyles from "../style/pages/Kind.scss";

const Kind = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../assets/myAssets/bg1.jpg")}
      resizeMode="cover"
      style={KindStyles.bg}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={KindStyles.title}>{route.params.title}</Text>

          {/*
					western dragon
					asian dragon
					hydre
					wyvern
					aquatic dragon
					dragonnet
					*/}

          <ChooseCard
            title={"Western Dragon"}
            link={require("../assets/myAssets/logo/logoDragon.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Western Dragon",
                link1: require("../assets/myAssets/dragon/dragon-nasuno_Posi.png"),
                link2: require("../assets/myAssets/dragon/dragon1-Spareribs_777.png"),
                link3: require("../assets/myAssets/dragon/dragon2-gamazo_ooo.png"),
              })
            }
          />

          <ChooseCard
            title={"Asian Dragon"}
            link={require("../assets/myAssets/logo/logoEasternDragon.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Asian Dragon",
                link1: require("../assets/myAssets/dragon/easternDragon-ArtByZephra.png"),
                link2: require("../assets/myAssets/dragon/easternDragon-Azany_artist.jpg"),
                link3: require("../assets/myAssets/dragon/easternDragon-nasuno_Posi.png"),
              })
            }
          />

          <ChooseCard
            title={"Aquatic Dragon"}
            link={require("../assets/myAssets/logo/logoDragon.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Aquatic Dragon",
                link1: require("../assets/myAssets/dragon/aquaticDragon-GlowingSpirit_.png"),
                link2: require("../assets/myAssets/dragon/aquaticDragon-nasuno_Posi.png"),
              })
            }
          />

          <ChooseCard
            title={"Dragonnet"}
            link={require("../assets/myAssets/logo/logoEasternDragon.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Dragonnet",
                link1: require("../assets/myAssets/dragon/dragonnet.png"),
              })
            }
          />

          <ChooseCard
            title={"Hydre"}
            link={require("../assets/myAssets/logo/logoHydre.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Oriental Dragon",
                link1: require("../assets/myAssets/dragon/hydre.jpg"),
              })
            }
          />

          <ChooseCard
            title={"Wyvern"}
            link={require("../assets/myAssets/logo/LogoWyvern.png")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Wyvern",
                link1: require("../assets/myAssets/dragon/wyvern2-GlowingSpirit_.png"),
                link2: require("../assets/myAssets/dragon/wyvern-GlowingSpirit_.png"),
              })
            }
          />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Kind;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
