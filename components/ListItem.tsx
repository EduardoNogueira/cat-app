import React from "react";
import { TouchableOpacity, Image } from "react-native";

export default function ListItem({ imgURI }: { imgURI: string }) {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
        source={{ uri: imgURI }}
      />
    </TouchableOpacity>
  );
}
