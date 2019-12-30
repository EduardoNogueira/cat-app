import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

type DataItems = {
  uri: string;
};

export default function List({ data }: { data: DataItems[] }) {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <ListItem imgURI={item.uri} />}
      keyExtractor={(item, index) => `${item.uri}-${index}`}
    />
  );
}
