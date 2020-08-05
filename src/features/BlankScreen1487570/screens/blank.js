import React from "react";
import { View, Image, ImageBackground, StyleSheet, Text, ScrollView, Button } from "react-native";
import { withStyles, Text, Button, CheckBox, Radio, Toggle, Icon, Input, Datepicker } from 'react-native-ui-kitten';
import Slider from '@react-native-community/slider';
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    };
  };

  state = { }

  render = () =>  (   
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
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "System",
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
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "System",
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
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
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
              width: "88%",
              height: "97%",
              marginLeft: "6%",
              marginRight: "6%",
              marginTop: "3%",
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
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
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
                width: "15%",
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
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                }}
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
                  paddingBottom: "12%",
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
                  fontFamily: "System"
                }}
              />
            </View>
            <View
              style={{
                width: "59%",
                height: "98%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: "2%",
                marginBottom: 0,
                paddingLeft: "3%",
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      paddingTop: "10%",
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 22,
                      color: "#000000",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontFamily: "System",
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
                    Christina Smith
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
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 14,
                      color: "#fd6f80",
                      fontStyle: "italic",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                    Reviews
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "8%",
                height: "92%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: "8%",
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#fd6f80",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/rectangle.png"
                }}
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
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  fontFamily: "System"
                }}
              />
            </View>
            <View
              style={{
                width: "17%",
                height: "91%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: "9%",
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
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  overflow: "visible",
                  textAlign: "center",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                4.7/5
              </Text>
            </View>
          </View>
        </View>



        <ScrollView
        contentContainerStyle={{flexGrow:1}}>
        <View
          style={{
            width: "84%",
            height: 500,
            marginLeft: "8%",
            marginRight: "8%",
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            backgroundColor: "#ffffff",
            fontSize: 20,
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "System",
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
            borderRadius: 14,
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
              //backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "System",
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
                height: 100,
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
                //backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  //backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    width: "25%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "3%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                        "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                    }}
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
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontFamily: "System"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
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
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      //backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                        height: 15,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 10,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontFamily: "System",
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
                        GREAT PRODUCTS
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          paddingTop: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontFamily: "System",
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
                        She is a such a good seller all her products always
                        arrive in time and are perfect!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
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
                //backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  //backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    width: "25%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "3%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                        "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                    }}
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
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontFamily: "System"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
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
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      //backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                        height: 15,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 10,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontFamily: "System",
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
                        GREAT PRODUCTS
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          paddingTop: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontFamily: "System",
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
                        She is a such a good seller all her products always
                        arrive in time and are perfect!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
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
                //backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  //backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    width: "25%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "3%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                        "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                    }}
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
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontFamily: "System"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
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
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      //backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                        height: 15,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 10,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontFamily: "System",
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
                        GREAT PRODUCTS
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          paddingTop: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontFamily: "System",
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
                        She is a such a good seller all her products always
                        arrive in time and are perfect!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
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
                //backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  //backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    width: "25%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "3%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                        "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                    }}
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
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontFamily: "System"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
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
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      //backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                        height: 15,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 10,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontFamily: "System",
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
                        GREAT PRODUCTS
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          paddingTop: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontFamily: "System",
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
                        She is a such a good seller all her products always
                        arrive in time and are perfect!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
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
                //backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "System",
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
                  //backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "System",
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
                    width: "25%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "3%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                        "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/woman-icon-plain-in-circle.png"
                    }}
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
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontFamily: "System"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
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
                    //backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "System",
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
                      //backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontFamily: "System",
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
                        height: 15,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 10,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontFamily: "System",
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
                        GREAT PRODUCTS
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
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
                        //backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: "System",
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
                          paddingTop: 0,
                          overflow: "visible",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          fontSize: 14,
                          color: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontFamily: "System",
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
                        She is a such a good seller all her products always
                        arrive in time and are perfect!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>

        <View
            style={{
              width: "100%",
              height: 100,
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
              fontStyle: "normal",
              fontWeight: "normal",
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
              backgroundColor: "#ffffff",
              backgroundSize: "auto"
            }}
            >
                <View
            style={{
              width: "100%",
              height: 100,
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
              fontStyle: "normal",
              fontWeight: "normal",
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
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 0,
                paddingTop: 10,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
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
                  backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
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
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
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
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
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
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/browser_1.png"
                        }}
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
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
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
                        fontSize: 16,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                          width: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          verticalAlign: "text-top",
                          fontSize: 6,
                          color: "#000000",
                          backgroundColor: "#fd6f80",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Explore!")}
                        title='EXPLORE'
                      >
                        EXPLORE
                      </Button>
                    </View>
                  </View>
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
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
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
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
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
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/heart_1.png"
                        }}
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
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
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
                        fontSize: 16,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                          width: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          verticalAlign: "text-top",
                          fontSize: 6,
                          color: "#000000",
                          backgroundColor: "#5d5f5d",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Saved!")}
                        title='SAVED'
                      >
                        SAVED
                      </Button>
                    </View>
                  </View>
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
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
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
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
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
                        backgroundColor: "#fd6f80",
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                        borderRadius: 20,
                        backgroundSize: "auto"
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={{
                          uri:
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/camera_1_WE7MQCt.png"
                        }}
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
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
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
                        fontSize: 16,
                        color: "#ffffff",
                        backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                          width: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          verticalAlign: "text-top",
                          fontSize: 6,
                          color: "#000000",
                          backgroundColor: "#000000",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Sell!")}
                        title='SELL'
                      >
                        SELL
                      </Button>
                    </View>
                  </View>
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
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
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
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
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
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/comment_AKVpR1r.png"
                        }}
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
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
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
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                          width: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          verticalAlign: "text-top",
                          fontSize: 6,
                          color: "#000000",
                          backgroundColor: "#6d6f6d",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Inbox!")}
                        title='INBOX'
                      >
                        INBOX
                      </Button>
                    </View>
                  </View>
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
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
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
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
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
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/user_2FQEJWw.png"
                        }}
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
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
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
                        fontSize: 16,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "normal",
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
                          width: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          verticalAlign: "text-top",
                          fontSize: 6,
                          color: "#000000",
                          backgroundColor: "#6D6F6D",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                        onPress={() => alert("Profile!")}
                        title='PROFILE'
                      >
                        PROFILE
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </View>

      </View>
    </View>;
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}));
