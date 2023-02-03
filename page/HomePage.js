import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import ChooseCard from "../components/ChooseCard";
import HomePageStyles from "../style/pages/HomePage.scss";

export default function HomePage({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/myAssets/bg1.jpg")}
      resizeMode="cover"
      style={HomePageStyles.bg}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={[HomePageStyles.title, HomePageStyles.textShadowBox]}>
            Hello World
          </Text>
          <Image
            style={[HomePageStyles.mainImage, HomePageStyles.shadowBox]}
            source={require("../assets/myAssets/logo/protoLogo.jpg")}
          />
          {/* --- */}
          <ChooseCard
            title={"Protogen"}
            link={require("../assets/myAssets/logo/protoLogo.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Protogen",
                link1: require("../assets/myAssets/protogenFull.png"),
              })
            }
          />
          <ChooseCard
            title={"Dragon"}
            link={require("../assets/myAssets/logo/dragonLogo.jpg")}
            onPress={() =>
              navigation.navigate("Kind", {
                title: "Kind of Dragons",
              })
            }
          />
          <ChooseCard
            title={"Synth"}
            link={require("../assets/myAssets/logo/synthLogo.jpg")}
            onPress={() =>
              navigation.navigate("Description", {
                title: "Protogen",
                link1: require("../assets/myAssets/synthFace.png"),
                link2: require("../assets/myAssets/synthFaceReal.png"),
              })
            }
          />
          {/* --- */}
          <Button
            title="Navigate to second screen with french"
            onPress={() =>
              navigation.navigate("Second", { language: "french" })
            }
          />
          <Button
            title="Navigate to second screen with english"
            onPress={() =>
              navigation.navigate("Second", { language: "english" })
            }
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
