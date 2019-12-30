import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";
import List from "./components/List";

function Item({ item }) {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
        source={{ uri: item.uri }}
      />
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "GOOD CAT", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <List
        data={[
          { uri: "https://i.imgur.com/6yHmlwT.jpg" },
          { uri: "https://i.imgur.com/J0YbfJG.jpg" },
          { uri: "https://i.imgur.com/oEk5MsE.jpg" },
          { uri: "https://i.imgur.com/6XexEbp.jpg" },
          { uri: "https://i.imgur.com/x2k8yAK.jpg" },
          { uri: "https://i.imgur.com/ZhEIRhO.jpg" },
          { uri: "https://i.imgur.com/kBu2GX0.jpg" },
          { uri: "https://i.imgur.com/ofrjWlJ.jpg" },
          { uri: "https://i.imgur.com/k3yWnMQ.jpg" },
          { uri: "https://i.imgur.com/tfvTMsC.jpg" },
          { uri: "https://i.imgur.com/KldbBdn.jpg" },
          { uri: "https://i.imgur.com/36jOL5O.jpg" }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff"
  }
});
