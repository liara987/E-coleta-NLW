import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const Detail = () => {
    const navigation = useNavigation();

    function handleNavigationBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigationBack}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>
                <Image style={styles.pointImage} source={{ uri: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }}></Image>
                <Text style={styles.pointName}>Mercadão do João</Text>
                <Text style={styles.pointItems}>Lâmpada</Text>
                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>
                    <Text style={styles.addressContent}>Rua J</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={() => { }}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>Whatssap</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => { }}>
                    <Icon name="mail" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        paddingTop: 20,
    },

    pointImage: {
        width: "100%",
        height: 120,
        resizeMode: "cover",
        borderRadius: 10,
        marginTop: 32,
    },

    pointName: {
        color: "#34CB79",
        fontSize: 28,
        fontFamily: "Ubuntu_700Bold",
        marginTop: 24,
    },

    pointItems: {
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
        color: "grey",
    },

    address: {
        marginTop: 32,
    },

    addressTitle: {
        color: "#34CB79",
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
    },

    addressContent: {
        fontFamily: "Roboto_400Regular",
        lineHeight: 24,
        marginTop: 8,
        color: 'grey',
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: "#999",
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    button: {
        width: "48%",
        backgroundColor: "#34CB79",
        borderRadius: 10,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        marginLeft: 8,
        color: "#FFF",
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
});

export default Detail;