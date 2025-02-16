import { Dimensions, StyleSheet, TextInput } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({

    container: { 
        flex: 1,      
        alignItems: 'center', 
    },
    boxTop: {
        width: '100%',
        height: Dimensions.get('window').height * 0.3,
        justifyContent: 'center', 
        backgroundColor: themes.colors.primary,    
    },
    boxLogo: {     
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,   
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: themes.colors.white,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    boxMid: { 
        width: '100%',  
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: themes.colors.white, 
        gap: 10, 
    },
    titleInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.colors.tertiary, 
    },
    boxInput: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20, 
        borderRadius: 10,
        backgroundColor: themes.colors.white,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        marginVertical: 10,
    },
    textInput: {   
        fontSize: 18,
    },
    iconInput: {
        fontSize: 24,
        color: themes.colors.grey,
    },
    boxBottom: { 
        width: '100%', 
        height: 100,
        alignItems: 'center',  
        backgroundColor: themes.colors.white,
    },
    button: {
        width: 200,
        height: 50,   
        backgroundColor: themes.colors.primary,  
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.colors.white,
    },
    textBottom: {
        fontSize: 16,
        color: themes.colors.tertiary,
    },
    textBottomCreate: { 
        color: themes.colors.primary,
    },
    boxBottomCreate: { 
        width: '100%', 
        height: Dimensions.get('window').height * 0.3,
        alignItems: 'center',  
        backgroundColor: themes.colors.white,
    },


});
