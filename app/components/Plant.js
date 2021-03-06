import React from "react";
import { Image } from "react-native";
import { Text, Title, Card, CardItem, Body, View } from "native-base";
import moment from "moment";

export default function Plant(props) {
  return (
    <Body
      style={{
        marginBottom: 10,
      }}
    >
      <Card
        style={{
          backgroundColor: "#B4CDD1",
          width: 300,
          height: 310,
          borderRadius: 0,
        }}
      >
        <CardItem
          cardBody
          button
          onPress={() =>
            props.nav.navigate("PlantDetail", { plant: props.plant })
          }
        >
          <View
            style={{
              height: 250,
              width: 300,
              borderRadius: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#B4CDD1",
            }}
          >
            <Image
              source={{
                uri: props.plant.image,
              }}
              style={{ height: 220, width: 270 }}
            />
          </View>
        </CardItem>

        <CardItem style={{ backgroundColor: "transparent" }}>
          <Body
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: -15,
            }}
          >
            <Title>{props.plant.description.plant_name}</Title>
          </Body>
        </CardItem>

        <CardItem style={{ backgroundColor: "transparent" }}>
          <Body style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                marginTop: -20,
              }}
            >
              {moment(props.plant.date_added).format("l")}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Body>
  );
}
