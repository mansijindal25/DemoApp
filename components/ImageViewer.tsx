import { StyleSheet, Image } from "react-native";

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: any) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  console.log(selectedImage);
  return <Image source={imageSource} style={style.image} />;
}

const style = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
