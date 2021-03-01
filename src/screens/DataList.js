import React from 'react'
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
function DataList() {
    return (
        <SafeAreaView style={styles.scroll}>
            <FlatList
                data={this.props.lap}
                renderItem={({ item, index }) => <Text key={index} style={styles.item}>{`#${index + 1}           ${item.textInputValue} `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default DataList
const styles = StyleSheet.create({
    scroll: {
        maxHeight: "63%",
        backgroundColor: "#C89933",
    },

    item: {
        padding: 10,
        marginTop: 5,
        fontSize: 22,
        height: 54,
        color: "#5C415D",
        textAlign: "center",
        backgroundColor: "#fff",
        marginBottom: 1
    },
})

