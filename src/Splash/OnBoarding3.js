import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React, { useState, useEffect, useLayoutEffect } from "react";

const OnBoarding3 = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const LoginSignUpForm = () => {
    navigation.navigate("LoginSignUpForm");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.skip} onPress={LoginSignUpForm}>
          {" "}
          Skip
        </Text>
      </SafeAreaView>
      <Image
        source={require("../../assets/onBoardingIcons/thirdBoarding/delivery.png")}
        style={styles.pharmacyImage}
      ></Image>
      <View style={styles.card}>
        <Text style={styles.title}>Discover 24/7 Delivery Nearby </Text>

        <View style={styles.desclocal}>
          <Image
            style={styles.localImg}
            source={require("../../assets/onBoardingIcons/thirdBoarding/scooter.png")}
          />
          <Text style={styles.description}>
            {" "}
            Unlock 24/7 Delivery Options, Always {"\n"} Nearby for You.
          </Text>
        </View>

        <View style={styles.dots}>
          <View style={styles.dot1}></View>
          <View style={styles.dot2}></View>
          <View style={styles.dot3}></View>
        </View>

        <View style={styles.button}>
          <Pressable onPress={LoginSignUpForm}>
            <Image
              style={styles.nextImg}
              source={require("../../assets/onBoardingIcons/next.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  pharmacyImage: {
    width: 336,
    height: 329,
    marginTop: 50,
  },
  card: {
    flex: 1,
    width: 370,
    height: 346,
    backgroundColor:
      "linear-gradient(176deg, rgba(245,247,255,1) 34%, rgba(14,5,100,0) 90%);",
    borderRadius: 20,
    alignItems: "center",
    padding: 0,
  },
  title: {
    color: "#4D4C4C",
    fontSize: 22,
    // fontFamily:'Poppins-bold',
    paddingTop: 39,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
  },

  description: {
    color: "#908F8F",
    // fontFamily:'Poppins-medium',

    fontSize: 16,
    paddingTop: 44,
    fontWeight: "bold",
  },
  desclocal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  localImg: {
    width: 25,
    height: 25,
    marginRight: 15,
    marginTop: 40,
  },
  dots: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 45,
    paddingRight: 280,
    paddingBottom: 113,
    paddingLeft: 17,
    width: 52,
    height: 4.6,
  },
  dot1: {
    backgroundColor: "#c0f2e7",
    width: 14.81,
    height: 4.56,
    borderRadius: 56,
    marginRight: 3.52,
  },
  dot2: {
    backgroundColor: "#c0f2e7",
    width: 14.81,
    height: 4.56,
    borderRadius: 56,
    marginRight: 3.52,
  },
  dot3: {
    backgroundColor: "#209F84",
    width: 14.81,
    height: 4.56,
    borderRadius: 56,
  },
  button: {
    backgroundColor: "#209F84",
    width: 71,
    height: 71,
    borderRadius: 40,
    position: "absolute",
    marginTop: 200,
    right: 12,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  nextImg: {
    width: 50,
    height: 50,
  },
  skip: {
    top: 20,
    left: 150,
    fontSize: 15,
    // fontFamily:'Poppins-medium',
    color: "#A1A8B0",
  },
});
export default OnBoarding3;
