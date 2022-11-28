import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Total = ({ device, counter, counter1, counter2 }) => {
  let totalDevice = counter + counter1 + counter2;
  return <Text>Total Devices On: {totalDevice}</Text>;
};

const RoomDevice = ({ device, counter, setCounter }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{device}</Text>
      <Button
        title="On"
        onPress={() => setCounter((prevCounter) => setCounter(counter + 1))}
      />
      <View style={{ flexDirection: "col" }}></View>
      <Button
        title="Off"
        onPress={() => setCounter((prevCounter) => setCounter(counter - 1))}
      />
    </View>
  );
};

const RoomDevice1 = ({ device, counter1, setCounter1 }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{device}</Text>
      <Button
        title="On"
        onPress={() => setCounter1((prevCounter1) => setCounter1(counter1 + 1))}
      />
      <View style={{ flexDirection: "col" }}></View>
      <Button
        title="Off"
        onPress={() => setCounter1((prevCounter1) => setCounter1(counter1 - 1))}
      />
    </View>
  );
};
const RoomDevice2 = ({ device, counter2, setCounter2 }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{device}</Text>
      <Button
        title="On"
        onPress={() => setCounter2((prevCounter2) => setCounter2(counter2 + 1))}
      />
      <View style={{ flexDirection: "col" }}></View>
      <Button
        title="Off"
        onPress={() => setCounter2((prevCounter2) => setCounter2(counter2 - 1))}
      />
    </View>
  );
};

export default function CreatingCustomComponents() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  device = { Lamp: counter, Heater: counter1, TV: counter2 };

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 70, height: 70, marginLeft: 20 }}
            source={require("./assets/house.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#24AFA2",
              marginLeft: 15,
            }}
          >
            SmartHome
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginLeft: 15,
              marginBottom: 15,
            }}
          >
            Rooms
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginRight: 15,
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 125,
                height: 135,
                backgroundColor: "#24AFA2",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.box}
                source={require("./assets/living-room.png")}
              />
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Living Room
              </Text>
            </View>
            <View
              style={{
                width: 125,
                height: 135,
                backgroundColor: "#24AFA2",
                alignItems: "center",
              }}
            >
              <Image style={styles.box} source={require("./assets/bed.png")} />
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Bedroom
              </Text>
            </View>
            <View
              style={{
                width: 125,
                height: 135,
                backgroundColor: "#24AFA2",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.box}
                source={require("./assets/kitchen.png")}
              />
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Kitchen
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginLeft: 15,
              marginBottom: 15,
            }}
          >
            Devices
          </Text>
        </View>
        {
          <View>
            <View style={styles.device}>
              <RoomDevice
                device="Living Room Lamp"
                counter={counter}
                setCounter={setCounter}
              />
            </View>
            <RoomDevice1
              device="Heater"
              counter1={counter1}
              setCounter1={setCounter1}
            />
            <RoomDevice2
              device="TV"
              counter2={counter2}
              setCounter2={setCounter2}
            />
            <Total counter={counter} counter1={counter1} counter2={counter2} />
          </View>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    width: 90,
    height: 90,
    marginTop: 13,
  },

  device: {
    backgroundColor: "khaki",
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});
