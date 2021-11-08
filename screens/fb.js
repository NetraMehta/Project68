import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class fb extends React.Component{
    render(){
        return(
            <View style={styles.constainer}>
                <Text style={styles.text}>FaceBook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    text: {
        fontFamily: 'Impact',
        fontSize: 30
    }

});