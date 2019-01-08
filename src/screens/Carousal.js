import React, { Component } from "react";
import { Animated, View, StyleSheet, ScrollView } from "react-native";
import travelData from "../data";
import CarousalCard from "../components/CarousalCard";

export default class Carousal extends Component {
  animVal = new Animated.Value(0);

  render() {
    let componentArray = [];

    travelData.map((data, index) => {
      const thisComponent = (
        <CarousalCard
          key={index}
          item={data}
          width={this.props.width}
          height={this.props.height}
        />
      );
      componentArray.push(thisComponent);
    });

    return (
      <View
        style={[
          styles.container,
          { width: this.props.width, height: this.props.height }
        ]}
        flex={1}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.animVal } } }
          ])}
        >
          {componentArray}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});
