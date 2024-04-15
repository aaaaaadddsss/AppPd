import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox} />
      <View style={styles.lowerBox} />
      <View style={styles.textContainer}>
        <Text style={styles.NumberCycle}>1.8 Ah</Text>
        <Text style={styles.RemainingUse}>Remaining Capacity</Text>
      </View>
      <View style={styles.Boxes}>
        <View style={styles.SOHBox}>
          <View style={styles.TextContainerSOH}>
            <Text style={styles.SOHText}> Original Capacity </Text>
            <View style={styles.Line} />
            <Text style={styles.SOHPercentage}> 2 Ah </Text>
          </View>
        </View>
        <View style={styles.BattStatusBox}>
          <View style={styles.TextContainerBattStat}>
            <Text style={styles.BattStatText}> Remaining Uses </Text>
            <View style={styles.Line} />
            <Text style={styles.BattStatResult}> 40 to 50 </Text>
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
    backgroundColor: "#1F9753",
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
    top: "10%",
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
    height: 150,
    borderRadius: 20,
    marginBottom: 40,
    borderColor: "#F2F2F2",
    borderWidth: 5,
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
    paddingRight: 60,
    paddingBottom: 10,
  },
  SOHPercentage: {
    paddingTop: 5,
    paddingLeft: 130,
    fontSize: 55,
    fontFamily: "asap",
    color: "#374353",
  },
  BattStatusBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 150,
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 5,
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
    paddingRight: 75,
    paddingBottom: 10,
  },
  BattStatResult: {
    paddingTop: 5,
    paddingLeft: 65,
    fontSize: 50,
    fontFamily: "asap",
    color: "#374353",
  },
  Line: {
    width: "95%",
    height: 3,
    backgroundColor: "#1F9753",
  },
});
