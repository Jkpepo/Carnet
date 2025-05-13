import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; //npm install @react-native-picker/picker
import * as ImagePicker from "expo-image-picker"; //npx expo install expo-image-picker
import AsyncStorage from "@react-native-async-storage/async-storage"; // npm install @react-native-async-storage/async-storage
import Carnet from "../Components/Carnet";

const HomeScreen = () => {
  const [name, setName] = useState("Ingresa tú nombre");
  const [id, setId] = useState("Ingresa tú identificación");
  const [codigo, setCodigo] = useState("");
  const [institution, setInstitution] = useState("Institución");
  const [profession, setProfession] = useState("Carrera");
  const [imageUri, setImageUri] = useState(null);

  // funcion para generar codigo automatico
  const generarCodigoAleatorio = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); //me da un numeor entre 10000 y 900000 y me lo tranforma a string
  };

  // Cargar los datos del carnet desde AsyncStorage al iniciar
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("@carnetData");
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setName(parsedData.name);
          setId(parsedData.id);
          setCodigo(parsedData.codigo || generarCodigoAleatorio()); //obtengo el codigo que ya me creo o me genera uno
          setInstitution(parsedData.institution);
          setProfession(parsedData.profession);
          setImageUri(parsedData.imageUri);
        } else {
          // Si no hay datos guardados, genera un nuevo código
          setCodigo(generarCodigoAleatorio());
        }
      } catch (error) {
        console.error("Error cargando los datos", error);
      }
    };
    loadData();
  }, []);

  // Image picker para seleccioinar imagenes que tenemos en el dispositivo
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Guardar los datos en AsyncStorage
  const saveCardData = async () => {
    const cardData = {
      name,
      id,
      codigo,
      institution,
      profession,
      imageUri,
    };
    try {
      await AsyncStorage.setItem("@carnetData", JSON.stringify(cardData));
      alert("Datos guardados correctamente.");
    } catch (error) {
      console.error("Error guardando los datos", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Carnet
          name={name}
          id={id}
          codigo={codigo}
          institution={institution}
          profession={profession}
          imageUri={imageUri}
        />
      </View>
      <TextInput
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Escribe tu Identificacion"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={institution}
          onValueChange={(itemValue) => setInstitution(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="CENSA" value="CENSA" />
          <Picker.Item label="SENA" value="SENA" />
          <Picker.Item label="ITM" value="ITM" />
          <Picker.Item label="IME" value="IME" />
          <Picker.Item label="U de M" value="U de M" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={profession}
          onValueChange={(itemValue) => setProfession(itemValue)}
          style={styles.picker}
          dropdownIconColor="#003366"
        >
          <Picker.Item
            label="Tecnología en Desarrollo de Software"
            value="Tecnólogo en Desarrollo de Software"
          />
          <Picker.Item label="Diseñador Ix/Ux" value="Diseñador Ix/Ux" />
          <Picker.Item
            label="Ingeniería de Sistemas"
            value="Ingeniería de Sistemas"
          />
          <Picker.Item
            label="Tecnólogo en Obra Civil"
            value="Tecnólogo en Obra Civil"
          />
          <Picker.Item label="Topografía" value="Topografía" />
        </Picker>
      </View>
      {/* botones */}
      <TouchableOpacity style={styles.boton} onPress={pickImage}>
        <Text style={styles.botonTexto}>Cambiar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={saveCardData}>
        <Text style={styles.botonTexto}>Guardar Carnet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 39,
  },
  container2: {
    flex: 1,
    marginBottom: -90,
  },
  input: {
    borderWidth: 1,
    padding: 6,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
  },

  boton: {
    margin: 1,
    backgroundColor: "#2196F3",
    padding: 8,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  botonTexto: {
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginVertical: 3,
    overflow: "hidden",
  },
  picker: {
    height: 51.5,
    paddingHorizontal: 100,
    color: "#333",
  },
});

export default HomeScreen;
