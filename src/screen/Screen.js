import React from "react"
import { Text, View } from "react-native"

const Screen = ({navigation, route}) => {
    return(
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize: 25, color:'red', fontWeight:'500'}}>{`Number : ${route.params.number}`}</Text>

      </View>  
    )
}

export default Screen