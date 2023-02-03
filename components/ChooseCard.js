import { Text, TouchableHighlight, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import chooseCardStyles from "../style/components/chooseCard.scss";

const ChooseCard = ({ logo, title, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={"#4c67de"}
      style={chooseCardStyles.touchableCard}
    >
      <View style={chooseCardStyles.chooseCard}>
        <LinearGradient
          colors={["#ff9f14", "#ff892b", "#fe733c", "#f75e4b", "#ec4c58"]}
          start={{ x: 0, y: 0.25 }}
          style={chooseCardStyles.containerImage}
        >
          <Image style={chooseCardStyles.image} source={logo} />
        </LinearGradient>

        <Text style={chooseCardStyles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ChooseCard;
