import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Foundation,
  FontAwesome,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

function Footer({ navigation }) {
  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity onPress={() => navigation.replace("Home")} style={{marginHorizontal:15}}>
        <Foundation name="home" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="help-circle-outline" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("setting")}>
      <FontAwesome name="user-secret" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
      <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
