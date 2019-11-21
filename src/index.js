import React from 'react'
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native'


class newApp extends React.Component {

    //Estado
    state = {
        name: ''
    }

    render() {
        return (
            <React.Fragment>
              <View style={styles.viewBackground}>
                <Text style={styles.Title}>Digite seu nome no campo abaixo</Text>
               
                <View style={styles.textName}>
                    <TextInput
                        placeholder="Seu nome"
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                </View>
                <View>
                <Text>Nome: {this.state.name}</Text>
                </View>
              </View>

            </React.Fragment>
        )
    }

}
const styles = StyleSheet.create({
    viewBackground:{
        backgroundColor: '#4cd2d9',
        flex: 1
    },
    Title:{
        textAlign: 'center',
        fontSize: 32,
    },
    textName:{
        textAlign: 'center',
        fontSize: 20
    }

})

export default newApp