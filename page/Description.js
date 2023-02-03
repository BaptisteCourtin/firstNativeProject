import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import DescriptionStyles from "../style/pages/Description.scss";

const Description = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../assets/myAssets/bg1.jpg")}
      resizeMode="cover"
      style={DescriptionStyles.bg}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={DescriptionStyles.title}>{route.params.title}</Text>

          {/*  faire un map */}

          <View style={DescriptionStyles.imageContainer}>
            <Image
              style={[DescriptionStyles.image, styles.resize]}
              source={route.params.link1}
            />

            {route.params.link2 && (
              <Image
                style={[DescriptionStyles.image, styles.resize]}
                source={route.params.link2}
              />
            )}

            {route.params.link3 && (
              <Image
                style={[DescriptionStyles.image, styles.resize]}
                source={route.params.link3}
              />
            )}
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resize: {
    resizeMode: "contain",
  },
});
