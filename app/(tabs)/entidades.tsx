import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const entidades = [
  { name: "Hospital", image: require("./assets/hospital.png") },
  { name: "Amigas do bem viver", image: require("./assets/amigas.png") },
  { name: "Pequeno Amor", image: require("./assets/amor.png") },
  { name: "Woman", image: require("./assets/woman.png") },
  { name: "Beit ABBA", image: require("./assets/beit.png") },
  { name: "Afocato", image: require("./assets/afocato.png") },
];

const EntidadesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha uma Entidade</Text>
      <Text style={styles.subtitle}>
        e Doe Sua Nota Para Dobrar Suas Chances
      </Text>
      <View style={styles.entidadesContainer}>
        {entidades.map((entidade, index) => (
          <TouchableOpacity
            key={index}
            style={styles.entidadeButton}
            onPress={() => navigation.navigate("entidade")}
          >
            <Image source={entidade.image} style={styles.entidadeImage} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("index")}
      >
        <Text style={styles.skipButtonText}>Pular</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  entidadesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  entidadeButton: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  entidadeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  skipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  skipButtonText: {
    fontSize: 16,
  },
});

export default EntidadesScreen;
