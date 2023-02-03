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

          <View style={DescriptionStyles.imageContainer}>
            {route.params.link.map((each, index) => (
              <Image
                key={index}
                style={{
                  width: 380,
                  height:
                    (380 / Image.resolveAssetSource(each).width) *
                    Image.resolveAssetSource(each).height,
                  marginBottom: 15,
                  borderWidth: 5,
                  borderColor: "cyan",
                  borderRadius: 20,
                }}
                source={each}
                resizeMode="contain"
              />
            ))}
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
});
