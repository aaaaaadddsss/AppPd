import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox} />
      <View style={styles.lowerBox} />
      <View style={styles.textContainer}>
        <Text style={styles.NumberCycle}>56</Text>
        <Text style={styles.RemainingUse}>Remaining Uses</Text>
      </View>
      <View style={styles.Boxes}>
        <View style={styles.SOHBox}>
          <View style={styles.TextContainerSOH}>
            <Text style={styles.SOHText}> State of Health (SOH) </Text>
            <Text style={styles.SOHPercentage}> 95% </Text>
          </View>
        </View>
        <View style={styles.BattStatusBox}>
          <View style={styles.TextContainerBattStat}>
            <Text style={styles.BattStatText}> Battery Health Status </Text>
            <Text style={styles.BattStatResult}> Healthy </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  upperBox: {
    backgroundColor: "#FACC43",
    flex: 1,
  },
  lowerBox: {
    backgroundColor: "#DDE1E1",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  NumberCycle: {
    color: "white",
    fontFamily: "asap",
    fontSize: 100,
  },
  RemainingUse: {
    color: "white",
    fontFamily: "asap",
    fontSize: 40,
  },
  Boxes: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  SOHBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 180,
    borderRadius: 20,
    marginBottom: 40,
  },
  TextContainerSOH: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SOHText: {
    fontSize: 25,
    fontFamily: "asap",
    color: "#374353",
    borderBottomColor: "#DDE1E1",
    borderBottomWidth: 3,
  },
  SOHPercentage: {
    top: "10%",
    right: "-25%",
    fontSize: 60,
    fontFamily: "asap",
    color: "#374353",
  },
  BattStatusBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 180,
    borderRadius: 20,
  },
  TextContainerBattStat: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BattStatText: {
    fontSize: 25,
    fontFamily: "asap",
    color: "#374353",
    borderBottomColor: "#DDE1E1",
    borderBottomWidth: 3,
  },
  BattStatResult: {
    top: "10%",
    right: "-13%",
    fontSize: 50,
    fontFamily: "asap",
    color: "#374353",
  },
});
