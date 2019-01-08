import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default class CardItem extends React.Component {
  render() {
    const {
      data,
      title,
      titleFontSize,
      dataFontSize,
      color,
      fontWeight
    } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: titleFontSize ? titleFontSize : 16,
              color: "#b8c4d7"
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: dataFontSize ? dataFontSize : 22,
              color: color,
              fontWeight: fontWeight
            }}
          >
            {data}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
