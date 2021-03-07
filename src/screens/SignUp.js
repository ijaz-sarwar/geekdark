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
import Styles from '../styles/Styles.js';
function SignUp({ navigation }) {
    const [userName, onChangeuserName] = React.useState();
    const [pasword, onChangepasword] = React.useState();
    const [checkpasword, checkonChangepasword] = React.useState();
    const [contact, onChangeContact] = React.useState();
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
            <View style={{ width: '80%', borderWidth: 1, marginBottom: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white' }}
                    placeholder={'Pasword'}
                    placeholderTextColor='white'
                    onChangeText={text => onChangepasword(text)}
                    pasword={pasword}
                    value={pasword}
                />

            </View>
            <View style={{ width: '80%', borderWidth: 1, marginBottom: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white' }}
                    placeholder={'Confirm Pasword'}
                    placeholderTextColor='white'
                    onChangeText={text => checkonChangepasword(text)}
                    pasword={checkpasword}
                    value={checkpasword}
                />

            </View>
            <View style={{ width: '80%', borderWidth: 1, marginBottom: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white' }}
                    placeholder={'Contact No'}
                    placeholderTextColor='white'
                    onChangeText={text => onChangeContact(text)}
                    contact={contact}
                    value={contact}
                />

            </View>

            <View style={{ marginTop: 20, width: '30%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                <TouchableOpacity>
                    <Text style={Styles.textsignup}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp
