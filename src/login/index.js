import React, { useState } from "react"
import { Image, ImageBackground, Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native"

const Login = ({ navigation }) => {
    const [value, setValue] = useState('')
    const nextScreen = () => {
        if (!isNaN(parseInt(value))) {
            navigation.navigate('Screen', { number: value })
        } else { alert(' Mời bạn nhập lại') }
        setValue('')
    }
    return (
        <View>
            <ImageBackground
                resizeMode='stretch'
                source={require('../login/anh/photo.png')}
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.9, backgroundColor: '#E5E5E5' }}>
                <View style={{ flex: 1, backgroundColor: '#rgba(0,0,0,0.3)' }}>
                    <View style={{ flex: 6, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                            <Image source={require('../login/anh/dogdom.png')}
                                resizeMode="contain" />
                        </View>
                        <TextInput style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.25)', fontSize: 25, fontWeight: '500', marginBottom: 30, width: "100%", padding: 10 }}
                            placeholder=" + 86 v "
                            placeholderTextColor={'white'}
                            value={value}
                            onChangeText={(value) => {
                                setValue(value)
                            }} />
                        <TouchableOpacity
                            onPress={(value) => { nextScreen(value) }}
                            style={{ borderRadius: 20, backgroundColor: '#FA6650', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: '500', padding: 10}}>Get Number</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '400',marginVertical: 10 }}>Password to Login</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '400' }}>By signing in, you agree to the User Agreement</Text>
                        <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '400' }}>and Privacy Terms.</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login