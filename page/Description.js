import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Linking,
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

          <View>
            {route.params.link.map((each, index) => (
              <View key={index} style={DescriptionStyles.imageContainer}>
                <Image
                  style={{
                    width: 380,
                    height:
                      (380 / Image.resolveAssetSource(each.link).width) *
                      Image.resolveAssetSource(each.link).height,
                    borderWidth: 5,
                    borderColor: "cyan",
                    borderRadius: 20,
                  }}
                  source={each.link}
                  resizeMode="contain"
                />
                {each.twitter && (
                  <Text
                    style={DescriptionStyles.twitter}
                    onPress={() =>
                      Linking.openURL(
                        `https://twitter.com/${each.twitter.split("@")[1]}`
                      )
                    }
                  >
                    {each.twitter}
                  </Text>
                )}
              </View>
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
