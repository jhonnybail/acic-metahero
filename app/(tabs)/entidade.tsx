import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const EntityDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.navigate("entidades")}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("./assets/hospital.png")} style={styles.image} />
        <Text style={styles.entityName}>HOSPITAL</Text>
        <Text style={styles.entityTitle}>UOPECCAN</Text>
      </View>
      <Text style={styles.contactText}>Fale Conosco</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Realizamos atendimentos particulares, com Operadoras de Plano de Saúde
          e pelo SUS (Sistema Único de Saúde), que só em 2022, totalizou 98% dos
          nossos atendimentos. A Uopeccan é referência para atendimento
          oncológico para uma população de 2.774.742 habitantes, que considera
          diferentes cidades do estado.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => navigation.navigate("confirmacao")}
      >
        <Text style={styles.donateButtonText}>DOAR PARA ESSA ENTIDADE</Text>
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
  contactText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  descriptionContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
  },
  donateButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EntityDetail;
