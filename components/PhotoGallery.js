import { FlatList, Image, Text, View, Center, Pressable } from "native-base";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import ModalPhoto from "./ModalPhoto";

const PhotoGallery = ({ photos }) => {
  const [ screenWidth, setScreenWidth ] = useState(Dimensions.get("screen").width);
  const window = useWindowDimensions(); 

  return (
    <View>
      <FlatList
        data={photos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: (window.width / 2) - 24,
              height: (window.width / 2) - 24,
              margin: 8,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              position: 'relative'
            }}
          >
            <Image
              alt={item.download_url}
              source={{
                width: '100%',
                height: '100%',
                uri: item.download_url
              }}
            />
            <Center
              style={styles.Center}
            >
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>{item.author}</Text>
            </Center>
          </View>
        )}
      />
      <ModalPhoto />
    </View>
  );
};

const styles = StyleSheet.create({
  Center: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    width: '100%',
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
});

export default PhotoGallery;
