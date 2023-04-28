import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

import { colors } from "app/colors";

const FAB = (props: any) => {
    return (
        <Pressable style={styles.container}
            onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    );
};
  
export default FAB;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        position: "absolute",
        bottom: 50,
        right: 40,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
    },
});