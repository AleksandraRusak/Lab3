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

const RoomDevice = ({ device, counter, setCounter }) => {
  const [squareColor, setSquareColor] = useState("red");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ width: 18, height: 18, backgroundColor: squareColor }}
      ></View>
      <Text>{device}</Text>
      <View style={styles.buttons}>
        <Button
          title="On"
          onPress={() => {
            setSquareColor("green");
            if (squareColor !== "green") {
              setCounter((prevCounter) => prevCounter + 1);
            }
          }}
        />
        <Button
          title="Off"
          onPress={() => {
            setSquareColor("red");
            if (squareColor !== "red") {
              setCounter((prevCounter) => prevCounter - 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default function CreatingCustomComponents() {
  const [counterLamp, setLampCounter] = useState(0);
  const [counterHeater, setHeaterCounter] = useState(0);
  const [counterTv, setTvCounter] = useState(0);
  const [devices, setDevices] = useState({
    Lamp: 0,
    Heater: 0,
    TV: 0,
  });

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
                counter={counterLamp}
                setCounter={setLampCounter}
              />
            </View>

            <View style={styles.device}>
              <RoomDevice
                device="Heater"
                counter={counterHeater}
                setCounter={setHeaterCounter}
              />
            </View>
            <View style={styles.device}>
              <RoomDevice
                device="TV"
                counter={counterTv}
                setCounter={setTvCounter}
              />
            </View>

            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 15 }}>
              Total Devices On:{counterLamp + counterHeater + counterTv}
            </Text>
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
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },

  buttons: {
    //flexDirection: "column",
    backgroundColor: "white",
    //alignItems: "flex-end",
  },
});
