import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<{ "qrcode-scanner": undefined }>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/acit.png")} style={styles.image} />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Suporte</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Bilhetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Prêmios</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Parceiros/Entidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("qrcode-scanner")}
          >
            Scanear QR Code
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image source={{ uri: "link_to_meta_hero_logo" }} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubText: {
    fontSize: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  image: {
    width: 306,
    height: 121,
    resizeMode: "contain",
  },
});

export default Home;
