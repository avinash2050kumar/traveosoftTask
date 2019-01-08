import React, { Component } from "react";
import { View, Text, Dimensions, Button, ScrollView } from "react-native";
import styled from "styled-components";

import travelData from "../data";
import CarousalCard from "../components/CarousalCard";

const Scroll = styled.ScrollView`
  background-color: #e6f0ff;
`;

const ScreenArea = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

const StyledTextInput = styled.TextInput`
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  border-width: 1px;
`;

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home"
    };
  };

  componentWillMount() {
    const { width, height } = Dimensions.get("window");
    this.setState({
      value: {
        width: parseInt(width - 32)
      }
    });
  }

  constructor() {
    super();
    this.state = {
      width: undefined,
      height: undefined,
      error: undefined,
      value: { width: 300, height: 210 }
    };
  }

  _submit = () => {
    const { width, height } = Dimensions.get("window");

    if (this.state.width !== undefined && this.state.height !== undefined) {
      if (this.state.width < width - 32 && this.state.height < height - 32) {
        return this.setState({
          value: {
            width: parseInt(this.state.width),
            height: parseInt(this.state.height)
          },
          error: undefined
        });
      }
      this.setState({ error: "width and height is larger than screen size" });
    }
    this.setState({ error: "Please fill all details" });
  };

  render() {
    const { width, height } = Dimensions.get("window");
    const message = `Your device can support below ${parseInt(
      width - 32
    )}w * ${parseInt(height - 32)}h`;
    return (
      <Scroll>
        <ScreenArea style={{ padding: 16 }}>
          {this.state.value && (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                width: this.state.value.width,
                height: this.state.value.height
              }}
            >
              {travelData.map((data, index) => (
                <CarousalCard
                  key={index}
                  item={data}
                  width={this.state.value.width}
                  height={this.state.value.height}
                />
              ))}
            </ScrollView>
          )}
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10
              }}
            >
              <View style={{ width: "48%" }}>
                <Text>Width</Text>
                <StyledTextInput
                  onChangeText={text => this.setState({ width: text })}
                  value={this.state.text}
                  keyboardType={"numeric"}
                />
              </View>
              <View style={{ width: "48%" }}>
                <Text>Height</Text>
                <StyledTextInput
                  onChangeText={text => this.setState({ height: text })}
                  value={this.state.text}
                  keyboardType={"numeric"}
                />
              </View>
            </View>
            <Button
              onPress={this._submit}
              title="Submit"
              color="#1b4177"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          {this.state.error === undefined ? (
            <Text>{message}</Text>
          ) : (
            <Text>{this.state.error}</Text>
          )}
        </ScreenArea>
      </Scroll>
    );
  }
}
