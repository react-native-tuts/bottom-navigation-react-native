import React, { Component } from 'react'
import {TextInput, Text, View, StyleSheet} from 'react-native';

export default class GetText extends Component {
    constructor(){
        super()
        this.state = {
            value: "Edit Me!"
        }
        // this.handleChangeText = this.handleChangeText.bind(this)
    }
    handleChangeText = (newText) =>{
        this.setState({
            value: newText
        })
    }
    handleChangeTextChhaya = (c) =>{
        this.setState({
            value: c
        })
    }
    render() {
        return (
            <View styles={style.container}>
                <TextInput 
                    defaultValue="smey"
                    onChangeText={this.handleChangeText}
                />
                <TextInput 
                    defaultValue="chhaya"
                    underlineColorAndroid="transparent"
                    onChangeText={this.handleChangeTextChhaya}
                />
                <Text>You are editing {this.state.value}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
