import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#f4f5f9",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          fontFamily: "Roboto-Regular",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "15%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontFamily: "Roboto-Regular",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              fontFamily: "Roboto-Regular",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontFamily: "Roboto-Regular",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle_55Fm5Z3.png"
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: "0%",
                  marginRight: "0%",
                  marginTop: "0%",
                  marginBottom: "0%",
                  paddingLeft: "6%",
                  paddingRight: "6%",
                  paddingTop: "4%",
                  paddingBottom: "4%",
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  fontFamily: "Roboto-Regular"
                }}
              />
            </View>
            <View
              style={{
                width: "60%",
                height: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontFamily: "Roboto-Regular",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingLeft: "10%",
                      paddingRight: 0,
                      paddingTop: "10%",
                      paddingBottom: 0,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      fontFamily: "Roboto-Regular",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                  >
                    Christina S.
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      fontFamily: "Roboto-Regular",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      backgroundSize: "auto"
                    }}
                  >
                    <View
                      style={{
                        width: "080%",
                        height: "100%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        textAlign: "left",
                        verticalAlign: "baseline",
                        fontSize: 20,
                        color: "#000000",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <Button
                        style={{
                          width: "80%",
                          marginLeft: "10%",
                          marginRight: 0,
                          marginTop: 15,
                          marginBottom: 5,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 5,
                          paddingBottom: 5,
                          overflow: "visible",
                          textAlign: "center",
                          verticalAlign: "baseline",
                          fontSize: 16,
                          color: "#ffffff",
                          backgroundColor: "#fd6f80",
                          fontFamily: "Roboto-Regular",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Pressed!")}
                      >
                        Edit Profile
                      </Button>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        height: "100%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        textAlign: "left",
                        verticalAlign: "baseline",
                        fontSize: 20,
                        color: "#000000",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <Icon
                        iconFont="Eva Design Icons"
                        name="home"
                        width={19}
                        height={19}
                        style={{
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 10,
                          marginBottom: 5,
                          paddingLeft: 5,
                          paddingRight: 5,
                          paddingTop: 5,
                          paddingBottom: 5,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          fontSize: 19,
                          color: "#fd6f80",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular"
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "3%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontFamily: "Roboto-Regular",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              width: "40%",
              marginLeft: "60%",
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "right",
              verticalAlign: "baseline",
              fontSize: 10,
              color: "#000000",
              backgroundColor: "#f4f5f9",
              fontFamily: "Roboto-Regular",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              textDecorationLine: "none",
              textTransform: "none",
              lineHeight: 12,
              letterSpacing: 0
            }}
          >
            See Privacy Policy
          </Text>
        </View>
        <View
          style={{
            width: "92%",
            height: "60%",
            marginLeft: "4%",
            marginRight: "4%",
            marginTop: "4%",
            marginBottom: "4%",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontFamily: "Roboto-Regular",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "50%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontFamily: "Roboto-Regular",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "100%",
                height: "12%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#c3c1c1",
                    borderStyle: "solid",
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 10,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "center",
                      verticalAlign: "baseline",
                      fontSize: 16,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontFamily: "Roboto-Regular",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                  >
                    My Purchases
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#fd6f80",
                    borderStyle: "solid",
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 10,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "center",
                      verticalAlign: "baseline",
                      fontSize: 16,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontFamily: "Roboto-Regular",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                  >
                    My Listings
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "085%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 12,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "60%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 12,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 12,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontFamily: "Roboto-Regular",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      backgroundSize: "auto"
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: "100%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        textAlign: "left",
                        verticalAlign: "baseline",
                        fontSize: 12,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "50%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 12,
                          color: "#000000",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          alignContent: "stretch",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          backgroundSize: "auto"
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "visible",
                            textAlign: "left",
                            verticalAlign: "baseline",
                            fontSize: 12,
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            fontFamily: "Roboto-Regular",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            borderColor: "#000000",
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderRadius: 0,
                            backgroundSize: "auto"
                          }}
                        >
                          <Image
                            resizeMode="contain"
                            source={{
                              uri:
                                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/shirt.png"
                            }}
                            style={{
                              width: "100%",
                              height: 200,
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: "0%",
                              paddingBottom: "80%",
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              fontFamily: "Roboto-Regular"
                            }}
                          />
                        </View>
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "visible",
                            textAlign: "left",
                            verticalAlign: "baseline",
                            fontSize: 12,
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            fontFamily: "Roboto-Regular",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            borderColor: "#000000",
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderRadius: 0,
                            backgroundSize: "auto"
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: "100%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        textAlign: "left",
                        verticalAlign: "baseline",
                        fontSize: 12,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "50%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 12,
                          color: "#000000",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          alignContent: "stretch",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          backgroundSize: "auto"
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "visible",
                            textAlign: "left",
                            verticalAlign: "baseline",
                            fontSize: 12,
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            fontFamily: "Roboto-Regular",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            borderColor: "#000000",
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderRadius: 0,
                            backgroundSize: "auto"
                          }}
                        >
                          <Image
                            resizeMode="contain"
                            source={{
                              uri:
                                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/beads.png"
                            }}
                            style={{
                              width: "100%",
                              height: 200,
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: "80%",
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              fontFamily: "Roboto-Regular"
                            }}
                          />
                        </View>
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "visible",
                            textAlign: "left",
                            verticalAlign: "baseline",
                            fontSize: 12,
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            fontFamily: "Roboto-Regular",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            borderColor: "#000000",
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderRadius: 0,
                            backgroundSize: "auto"
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "40%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 12,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "10%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "Roboto-Regular",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        />
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
