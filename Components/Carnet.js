import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";
import QRCode from "react-native-qrcode-svg";

const Carnet = ({ name, id, codigo, institution, profession, imageUri }) => {
  return (
    <FlipCard
      // style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      removeClippedSubviews={false}
    >
      {/* Cara frontal del carnet los datos principales */}
      <View style={styles.card}>
        <Image
          resizeMode="stretch"
          source={require("../assets/borde-superior.png")}
          style={styles.imageSuper}
        />
        <Image
          resizeMode="stretch"
          source={require("../assets/borde-inferior.png")}
          style={styles.imageinfe}
        />
        <View style={styles.header}>
          <Text style={styles.institution}>{institution}</Text>
        </View>

        <Image
          source={imageUri ? { uri: imageUri } : require("../assets/user.png")}
          style={styles.image}
        />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>CC: {id}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <Text style={styles.codigo}>Número matrícula: {codigo}</Text>
      </View>
      {/* cara trasera eel carnet qr y  otros */}
      <View style={styles.card}>
        <Image
          resizeMode="stretch"
          source={require("../assets/borde-superior.png")}
          style={styles.imageSuper}
        />
        <Image
          resizeMode="stretch"
          source={require("../assets/borde-inferior.png")}
          style={styles.imageinfe}
        />
        <View style={{ marginTop: 25 }}>
          {/* esto es de qrcode-svg basicamente lo que hace es que me genera un qr con el nombre que ingrese y el id
            este qr funcioan si lo escaneo me muestra el nombre y el id */}
          <QRCode value={`${name}-${id}`} size={150} />
        </View>

        <View style={styles.separator} />

        <Text style={styles.backTitle}>¡IMPORTANTE!</Text>
        <Text style={styles.backText}>
          "Este carnet pertenece a {institution} y es personal e intransferible.
          Su uso está sujeto a los términos y condiciones establecidos por la
          institución."
        </Text>
        <Text style={styles.backValid}>
          Este carnet es válido hasta: 05/10/2026{" "}
        </Text>
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#003366 ",
    borderRadius: 17,
    height: "80%",
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#003366", // esta prop solo en iphone
    shadowOffset: { width: 0, height: 2 }, // esta prop solo en iphone
    shadowOpacity: 0.2, // esta prop solo en iphone
    shadowRadius: 4, // esta prop solo en iphone
    elevation: 15, // esta seria la sombra para android
    overflow: "hidden",
  },

  institution: {
    color: "#003366",
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",

    color: "#003366",
    textTransform: "uppercase",
    textAlign: "center",
  },
  id: {
    fontSize: 16,
    marginTop: 25,
  },
  codigo: {
    marginTop: 35,
  },
  profession: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003366",
    textTransform: "uppercase",
    marginTop: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#003366",
    marginVertical: 15,
  },
  imageSuper: {
    position: "absolute",
    top: -50,
    left: 0,
    width: "120%",
    height: "80%",
    zIndex: -1,
    borderRadius: 10,
  },
  imageinfe: {
    position: "absolute",
    bottom: -60,
    left: 0,
    width: "120%",
    height: "80%",
    zIndex: -1,
    borderRadius: 10,
  },
  backTitle: {
    marginBottom: 10,
  },
  backText: {
    padding: 10,
    textAlign: "center",
  },
  backValid: {
    marginTop: 15,
    fontWeight: "bold",
  },
  separator: {
    height: 2,
    backgroundColor: "#003366",
    marginVertical: 10,

    width: "90%",
  },
});

export default Carnet;
