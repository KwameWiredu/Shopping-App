import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import { Input } from "react-native-elements";
import bgImage from "../assets/image/login.jpg"




const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
      <TouchableWithoutFeedback>
    <ImageBackground source={bgImage} style={styles.container}>
      <View style={styles.InputContainer}>
        <Input
          style={styles.textInput}
          value={email}
          placeholder="Enter Email"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </View>

      <View style={styles.InputContainer}>
        <Input
          value={password}
          placeholder="Password"
          // placeholderTextColor={""}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" onPress={() =>navigation.navigate("Home")} />
      <View style={{ height: 20 }} />
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>New on #KGY..? Click here to SignUp</Text>
      <View style={{ height: 10 }} />
      
    </ ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:null,
    height:null
  },
  text: {
    fontSize: 30,
  },
  InputContainer: {
    width: 310,
  },
});
