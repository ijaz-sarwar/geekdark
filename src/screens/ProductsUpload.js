import React, { useState } from 'react'
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

    Button,
    Keyboard
} from 'react-native';
import DataList from "./DataList";
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker'
function ProductsUpload({ navigation }) {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [description, setDescription] = useState()
    const [productcontactinfo, setProductcontactinfo] = useState()
    const [category, setCategory] = useState()
    const [seller, setseller] = useState()
    const [taskItem, setTaskItem] = useState([
        {
            "name": "",
            "price": "",
            "description": "",
            "productcontactinfo": "",
            "category": "",
            "seller": "",
            "stock": "",
        }
    ])

    const HnaleTask = () => {
        Keyboard.dismiss();
        setTaskItem([...taskItem, (name, price, description, productcontactinfo, category, seller, stock)])
        setName(null);
    }


    let options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    const chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
            <Button title={'Pic image'} onPress={chooseImage} />

            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Name'}
                    placeholderTextColor='white'
                    onChangeText={text => setName(text)}
                    name={name}
                    value={name}
                />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Price'}
                    placeholderTextColor='white'
                    onChangeText={text => setPrice(text)}
                    price={price}
                    value={price}

                />

            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Stock'}
                    placeholderTextColor='white'
                    onChangeText={text => setStock(text)}
                    price={stock}
                    value={stock} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Description'}
                    placeholderTextColor='white'
                    onChangeText={text => setDescription(text)}
                    price={description}
                    value={description} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Product Contact Info'}
                    placeholderTextColor='white'
                    onChangeText={text => setProductcontactinfo(text)}
                    price={productcontactinfo}
                    value={productcontactinfo} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Seller'}
                    placeholderTextColor='white'
                    onChangeText={text => setseller(text)}
                    price={seller}
                    value={seller} />
            </View>
            <View style={{ marginTop: 20, width: '20%', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20, borderColor: 'red', borderWidth: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DataList');
                        HnaleTask()
                    }}>
                    <Text style={{ color: 'white' }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductsUpload
