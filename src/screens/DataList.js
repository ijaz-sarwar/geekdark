import React, { useState } from 'react'
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
    Button,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
function DataList({ navigation }) {
    const [data, setData] = useState([
        {

            "name": "Cup tea",
            "price": "45.90",
            "description": "this is an sflkjasfhaslkfhaskfhashfaskjshfqkjfhaskjhfaksjhfaskjhfksjahfsjkkasdsadhsahdaskjdhasjkdhdhaksdasjkdsajdhsajdhsajhdjasdhkasjdsakjhdaskjhdsajkdjaskdhaskjdaskjdsakjdsakjdaskjdsakjhahfsjkfaskjhfsakjfaskjfsdkjdfhsdkjfsdkjfsdkjdfhdskjfhskdjfhskjfhskj product",
            "productcontactinfo": " this is an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },
        {

            "name": "Jug",
            "price": "45.90",
            "description": "this is an amazing product",
            "productcontactinfo": " this is an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },
        {

            "name": "Glass",
            "price": "45.90",
            "description": "this is an amagerhgiegheriugheiughiuerhgiuerhgiuehgiuhergoiheglruighelirhulihiuzing product",
            "productcontactinfo": " this iioihwiurhwiufhewiufhwkefjn iufhweiufhiwuehfi eufhwieaufhiwueaf hiwuefh wiaeufhweiufhui fhewius an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },
        {

            "name": "spon",
            "price": "45.90",
            "description": "this is an amazing product",
            "productcontactinfo": " this is an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },

        {

            "name": "fruit",
            "price": "45.90",
            "description": "this is an amazing product",
            "productcontactinfo": " this is an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },
        {

            "name": "vagetable",
            "price": "45.90",
            "description": "this is an amazing product",
            "productcontactinfo": " this is an amazing product",
            "images": "https://inertiaspeaks.com/wp-content/uploads/2016/06/P1040422-1024x768.jpg"
            ,
            "category": "Electronics",
            "seller": "EBAY",
            "stock": 50,
        },





    ])
    return (
        <SafeAreaView style={styles.scroll}>
            <Image style={{ height: 100, width: 150, alignSelf: 'center', borderRadius: 20, }} source={require('../assets/geek2.jpeg')} />
            <View style={{ width: '80%', marginBottom: 20, flexDirection: 'row', height: 40, borderColor: 'red', justifyContent: 'space-between', borderRadius: 20, borderWidth: 1, alignSelf: 'center' }}>
                <TextInput placeholder="Search" placeholderTextColor='red' style={{ color: 'white', width: '90%' }} />
                <TouchableOpacity>
                    <Icon style={{ margin: 10, alignSelf: 'center' }} name="search1" size={20} color="red" />
                </TouchableOpacity>
            </View>
            <FlatList
                numColumns={2}
                style={styles.list}
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ width: '45%', margin: 10 }}
                        onPress={() => {
                            navigation.navigate('DisplayProduct', item);
                        }}
                    >
                        <View style={{
                            alignItems: 'center', borderColor: 'red',
                            borderWidth: 1,
                            width: '100%',
                            alignSelf: 'center',
                            margin: 10,
                            borderRadius: 20, justifyContent: 'center', padding: 5
                        }}>

                            <View style={{ display: 'flex', flex: 1, width: 'auto', }}>
                                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 28, borderWidth: 1, marginTop: 1, borderRadius: 10, borderColor: 'red', alignSelf: 'center' }}>
                                    <Text style={{ color: 'white' }}>{item.name}</Text>

                                </View>

                            </View>

                            <Image
                                source={{ uri: item.images }}
                                style={{
                                    width: '85%',
                                    height: 180,
                                    borderWidth: 2,
                                    borderColor: 'red',
                                    resizeMode: 'contain',
                                    margin: 5
                                }}
                            />

                            <View style={{ width: '45%', justifyContent: 'center', alignItems: 'center', height: 30, borderWidth: 1, marginTop: 1, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                                <Text style={{ color: 'white' }} numberOfLines={20} ellipsizeMode='tail'>{item.price}</Text>
                            </View>




                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default DataList
const styles = StyleSheet.create({
    scroll: {
        flex: 1,

        backgroundColor: "black",
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

