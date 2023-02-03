import { Text, TouchableHighlight, Image, View } from "react-native";

import chooseCardStyles from "../style/components/chooseCard.scss";

const ChooseCard = ({ link, title, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={"#4c67de"}
      style={chooseCardStyles.touchableCard}
    >
      <View style={chooseCardStyles.chooseCard}>
        <Image style={chooseCardStyles.image} source={link} />

        <Text style={chooseCardStyles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ChooseCard;
