import { StyleSheet, Text, TextInput, View } from "react-native";

const Campo = ({label, value, mudaValue, msg}) => {

    
    
    return (
        <View>
            <Text style={styles.texto}> {label} </Text>
            <TextInput style={styles.campo}
                value={value}
                onChangeText={t => mudaValue(t)}
                keyboardType="numeric"
                placeholder={msg}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    campo:{
        fontSize: 20,
        padding: 8,
        borderWidth:1,
        borderRadius: 10,
        backgroundColor: '#eeeeee'
    },
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }  

})

export default Campo;