import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from "react-native";
import Category from './Category'

const { height, width } = Dimensions.get('window')

class Explore extends Component {
    handleClickImage = () => {
        Alert.alert('b')
    }
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'ios') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 60, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            marginTop: Platform.OS == 'android' ? 5 : null
                        }}>
                           
                            <View>
                            
                                <TextInput  placeholder="ត្រូវការដឹងពីអ្វីដែរបងប្អូន? 😂" style={styles.textInput} />
                            </View>
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>

                            <View style={styles.mainCategory}>
                            <Image
                                source={require('../assets/restaurant.png')}
                            />
                            <Text style={{marginLeft: 5}}>
                                    រមណីយដ្ឋាន
                            </Text>
                            </View>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/koh.jpg')}
                                        name="កោះ"
                                    />
                                    <Category imageUri={require('../assets/beach.jpg')}
                                        name="ឆ្នេរ"
                                    />
                                    <Category imageUri={require('../assets/angkor.jpg')}
                                        name="ប្រាសាទ"
                                    />
                                    <Category imageUri={require('../assets/house.jpg')}
                                        name="ផ្ទះស្នាក់"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="សណ្ឋាគារ"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="បឹងហ្គាឡូ"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="សមុទ្រ"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="បុណ្យ"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="បឹងហ្គាឡូ"
                                    />
                                </ScrollView>
                            </View>
                           
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <View style={styles.mainCategory}>
                            <Image
                                source={require('../assets/restaurant.png')}
                            />
                            <Text style={{marginLeft: 5}}>
                                    កន្លែងបរិភោគ
                            </Text>
                            </View>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/home.jpg')}
                                        name="ភោជនីយដ្ឋាន"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="ហាងកាហ្វេ"
                                    />
                                    <Category imageUri={require('../assets/beach.jpg')}
                                        name="ម៉ាត"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="អារហារតាមផ្លូវ"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="ម្ហូបបរទេស"
                                    />
                                    <Category imageUri={require('../assets/angkor.jpg')}
                                        name="ហាងប័រហ្គើ"
                                    />
                                    <Category imageUri={require('../assets/koh.jpg')}
                                        name="ផ្ទះបាយចិន"
                                    />
                                    <Category imageUri={require('../assets/house.jpg')}
                                        name="ម្ហូបបែបថៃ"
                                    />
                                    <Category imageUri={require('../assets/beach.jpg')}
                                        name="បូហ្វេ"
                                    />
                                </ScrollView>
                            </View>
                            <TouchableOpacity 
                                onPress={this.handleClickImage}
                                activeOpacity = { .5 }
                            >
                             <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    ការណែនាំពី កញ្ចប់ដំណើរកំសាន្ត
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/tour.jpg')}
                                    />

                                </View>
                            </View>
                            </TouchableOpacity>
                           
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput:{
        borderColor:'lightgrey',
        backgroundColor:'white',
        width:'auto',
        height: 'auto',
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 25,
        shadowOpacity: 0.2,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        },
    mainCategory: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5
    }
});
