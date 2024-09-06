import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const HomeHeader = () => {
    function pressed(){
        console.log('ANSELEVANDERAS')
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity hitSlop={{top: 200, bottom: 20, left: 50, right: 50}} onPressIn ={pressed}><Bars3BottomLeftIcon strokeWidth={2} size={30} color="white" /></TouchableOpacity>
            <Text style={{color: "white",fontSize: 18,flex:1,fontWeight: 'bold',textAlign:'center',}}><Text style={styles.headerText}>M</Text >ovies</Text>
            <TouchableOpacity onPress={pressed}><MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/></TouchableOpacity>
        </View>
    );
};

const SampleHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Header</Text>
        </View>
    )
}

const Header = (props: { screen: string; }) => {
let SelectedHeader;

switch(props.screen){
    case "Home":
        SelectedHeader =  HomeHeader;
        break;
    default:
        SelectedHeader = SampleHeader;
}

return <SelectedHeader/>;
}
const styles = StyleSheet.create({
    headerContainer: {
        height: 64,
        backgroundColor: "black",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent:'space-between'
    },
    headerText: {
        textAlign:'center',
        color: "yellow",
        fontSize: 18,
        flex:1,
        fontWeight: 'bold',
    },
});

export default Header;
