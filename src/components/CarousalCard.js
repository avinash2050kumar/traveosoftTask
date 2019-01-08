import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components";
import CardItem from "./CardItem";

const ScreenArea = styled.View`
  flex: 1;
  flex-wrap: wrap;
  background-color: #fff;
  flex-direction: column;
  border-radius: 7px;
`;

const Area = styled.View`
  padding: 16px;
`;

export default class CarousalCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ScreenArea
        style={[
          styles.container,
          { width: this.props.width, height: this.props.height }
        ]}
      >
        <View style={styles.container2}>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: 5
            }}
          >
            {item.modeOfTravel}
          </Text>
        </View>
        <Area>
          <View style={styles.container3}>
            <CardItem
              title={"Depart"}
              data={item.fromCity}
              color={"#1b4177"}
              fontWeight={"bold"}
              dataFontSize={22}
            />
            <CardItem
              title={"Arriving"}
              data={item.toCity}
              color={"#1b4177"}
              fontWeight={"bold"}
              dataFontSize={22}
            />
          </View>

          <View style={styles.container3}>
            <CardItem
              title={"DATE"}
              data={item.tavelDate}
              color={"#4191ff"}
              dataFontSize={14}
              titleFontSize={14}
              fontWeight={"bold"}
            />
            <CardItem
              title={"PNR"}
              data={item.PNR.toUpperCase()}
              color={"#4191ff"}
              titleFontSize={14}
              dataFontSize={14}
              fontWeight={"bold"}
            />
          </View>
        </Area>
      </ScreenArea>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2
  },
  container2: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b4177"
  },

  container3: {
    marginBottom: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
