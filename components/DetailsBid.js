import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
const DetailsBids = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.small - 2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBids;
