import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from "react-native";
const { height, width } = Dimensions.get('window')
class Trips extends Component {
    handleClickImage = () => {
        Alert.alert('b')
    }
    render() {
        return (
            <ScrollView>
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
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                ពិបាកចិត្តណាស់មែនទេ? ចង់ដើរលេង ប៉ុន្តែមិនដឹងទៅណា! ឥឡូវអាចមើលជាមួយ កញ្ចប់សេវាកម្មរបស់យើង
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
            <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={require('../assets/tour.jpg')}
                />
            </View>
           
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
        </ScrollView>
        );
    }
}
export default Trips;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});