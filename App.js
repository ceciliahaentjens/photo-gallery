import { StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { Heading, NativeBaseProvider, Spinner, View } from "native-base";
import PhotoGallery from "./components/PhotoGallery";
import { getImageList } from "./api/picsum";
import { useReducer, useEffect, useState } from "react";
import { appReducer, initialState } from "./reducer/reducer";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    async function getImagesFromAPI() {
      try {
        dispatch({ type: "CALLING" });
        const photos = await getImageList();
        dispatch({ type: "LOADED", data: photos });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    }
    getImagesFromAPI();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Heading my={2}>PhotoGallery</Heading>
        <PhotoGallery photos={state.photos} />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
});
