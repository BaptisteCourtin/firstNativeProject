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
import Tableau from "../assets/Tableau";

export default function HomePage({ navigation }) {
  return (
    Tableau && (
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

            {Tableau.map((each) => (
              <ChooseCard
                title={each.titleLogo}
                link={each.logo}
                onPress={() =>
                  navigation.navigate(each.versPage, {
                    title: each.title,
                    link: each.link,
                  })
                }
              />
            ))}

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
    )
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
