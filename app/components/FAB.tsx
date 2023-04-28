import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// styles
import { colors } from "app/colors";

const FAB = (props: any) => {
    return (
        <Pressable style={styles.container}
            onPress={props.onPress}>
            <Icon name='account-plus' size={30} color={'#fff'}></Icon>
        </Pressable>
    );
};
  
export default FAB;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        position: "absolute",
        bottom: 20,
        right: 16,
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