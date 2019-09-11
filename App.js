import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  FlatList
} from "react-native";

export default function App() {
  const [result, setResult] = React.useState(0);
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [data, setData] = React.useState([]);

  const buttonPlus = () => {
    const sum = number1 + number2;
    const text = "" + number1 + " + " + number2 + " = " + sum;
    setResult(number1 + number2);
    setData([...data, { key: text }]);
  };

  const buttonMinus = () => {
    const sub = number1 - number2;
    const text = "" + number1 + " - " + number2 + " = " + sub;
    setResult(number1 - number2);
    setData([...data, { key: text }]);
  };

  return (
    <View styles={styles}>
      <Text>Result: {result}</Text>
      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={number1 => setNumber1(Number(number1))}
        value={String(number1)}
      />
      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={number2 => setNumber2(Number(number2))}
        value={String(number2)}
      />
      <View
        styles={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button onPress={buttonPlus} title="+" />
        <Button onPress={buttonMinus} title="-" />
      </View>
      <Text>History</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key} </Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
