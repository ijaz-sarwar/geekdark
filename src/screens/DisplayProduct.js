import React from 'react'
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
function DisplayProduct({ route }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', }}>
            <Image style={{ height: 100, width: 150, alignSelf: 'center', borderRadius: 20, }} source={require('../assets/geek2.jpeg')} />
            <View style={{ width: '80%', alignSelf: 'center', marginTop: 20, borderWidth: 1, borderRadius: 15, borderColor: 'red' }}>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 28, borderWidth: 1, marginTop: 1, borderRadius: 10, borderColor: 'red', alignSelf: 'center' }}>
                    <Text style={{ color: 'white' }}>{route.params.name}</Text>

                </View>
                <Image
                    source={{ uri: route.params.images }}
                    style={{
                        width: '95%',
                        height: 180,
                        borderWidth: 2,
                        borderColor: 'red',
                        resizeMode: 'contain',
                        margin: 5
                    }}
                />

                <View style={{ width: '45%', justifyContent: 'center', alignSelf: 'center', margin: 10, alignItems: 'center', height: 30, borderWidth: 1, marginTop: 1, borderRadius: 20, borderColor: 'red', }}>
                    <Text style={{ color: 'white' }}>{route.params.price}</Text>
                </View>
                <View style={{ width: '80%', justifyContent: 'center', margin: 10, height: 'auto', borderWidth: 1, marginTop: 1, borderRadius: 20, borderColor: 'red', }}>
                    <Text style={{ color: 'white', marginLeft: 10 }}>{route.params.description}</Text>
                </View>
            </View>

        </View>
    )
}

export default DisplayProduct
