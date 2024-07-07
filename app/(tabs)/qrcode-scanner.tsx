import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import {
  BarcodeScanningResult,
  Camera,
  CameraType,
  CameraView,
} from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { useNavigation } from "@/hooks/useNavigation";
import { useFocusEffect } from "@react-navigation/native";

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [type] = useState<CameraType>("back");
  const [flash, setFlash] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setScanned(false);

      return () => {
        setScanned(true);
      };
    }, [])
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate("entidades");
    }
  };

  const handleBarCodeScanned = ({ type, data }: BarcodeScanningResult) => {
    setScanned(true);

    Alert.alert("A nota informada possui CPF?", undefined, [
      {
        text: "Sim",
        onPress: () => {
          setScanned(false);
        },
      },
      {
        text: "Não",
        onPress: () => {
          navigation.navigate("entidades");
        },
      },
    ]);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={type}
        enableTorch={flash}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.topOverlay}>
            <TouchableOpacity>
              <Ionicons name="help-circle" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Scanear QR Code</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.middleOverlay}></View>
          <View style={styles.bottomOverlay}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Ionicons name="document" size={32} color="white" />
              <Text style={styles.buttonText}>Arquivo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="barcode" size={32} color="white" />
              <Text style={styles.buttonText}>Digitar Código</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setFlash(!flash)}
            >
              <Ionicons name="flashlight" size={32} color="white" />
              <Text style={styles.buttonText}>Lanterna</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  topOverlay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  middleOverlay: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomOverlay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
});

export default QRCodeScanner;
