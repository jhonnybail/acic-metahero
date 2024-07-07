import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const DonationConfirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("./assets/hospital.png")} style={styles.image} />
        <Text style={styles.entityName}>HOSPITAL</Text>
        <Text style={styles.entityTitle}>UOPECCAN</Text>
      </View>
      <Text style={styles.confirmationText}>Sua Doação Foi Registrada</Text>
      <Text style={styles.thankYouText}>A Entidade</Text>
      <Text style={styles.thankYouText}>Agradece</Text>
      <Text style={styles.doubleChanceText}>Suas Chances Foram Dobradas</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("index")}
      >
        <Text style={styles.backButtonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  entityName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  entityTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  confirmationText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  thankYouText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  doubleChanceText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DonationConfirmation;
