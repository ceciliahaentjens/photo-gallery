import { FlatList, Image, Text, View, Center, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import ModalPhoto from "./ModalPhoto";

const PhotoGallery = ({ photos }) => {
  //! ATTENTION AU TAILLE D'IMAGE https://reactnative.dev/docs/dimensions
  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            alt="test"
            source={{
              width: item.width,
              height: item.height,
              uri: item.download_url,
            }}
          />
        )}
      />
      <ModalPhoto />
    </View>
  );
};

const styles = StyleSheet.create({
  Center: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
});

export default PhotoGallery;
