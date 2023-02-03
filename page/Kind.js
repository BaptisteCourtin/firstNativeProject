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

          {route.params.link.map((each) => (
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
