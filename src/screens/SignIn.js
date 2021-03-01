import React from 'react'
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
import Styles from '../styles/Styles.js';
// const img = require('../assets/geek.png')
function SignIn({ navigation }) {
    const [userName, onChangeuserName] = React.useState("");
    const [pasword, onChangepasword] = React.useState("");
    return (
        <View style={Styles.container}>
            <Image style={{ height: 200, width: 200, borderRadius: 20, marginBottom: 100 }} source={require('../assets/geek2.jpeg')} />
            <View style={{ width: '80%', borderWidth: 1, marginBottom: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white' }}
                    placeholder={'User Name'}
                    placeholderTextColor='white'
                    onChangeText={text => onChangeuserName(text)}
                    userName={userName}
                    value={userName}
                />

            </View>
            <View style={{ width: '80%', borderWidth: 1, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white' }}
                    placeholder={'Pasword'}
                    placeholderTextColor='white'
                    onChangeText={text => onChangepasword(text)}
                    pasword={pasword}
                    value={pasword}
                />

            </View>
            <View style={{ justifyContent: 'space-between', marginTop: 15, width: '70%', display: 'flex', flexDirection: 'row' }}>
                <View style={{ marginTop: 10, width: '40%', height: 30, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                    <TouchableOpacity

                    >
                        <Text style={Styles.text}>Forgot pasword</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, width: '20%', height: 30, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ProductsUpload');
                        }}
                    >
                        <Text style={Styles.text}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20, width: '30%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('SignUp');
                    }}>
                    <Text style={Styles.textsignup}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn
