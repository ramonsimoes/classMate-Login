import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/classmate_icon.png";
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');






    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <View style={styles.boxLogo}>
                    <Text style={styles.title}>ClassMate</Text>
                    <Image style={styles.logo} source={Logo} />
                </View>
            </View>
            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>E-mail:</Text>
                <View style={styles.boxInput}>
                    <TextInput style={styles.textInput}></TextInput>
                    <MaterialIcons name="email" style={styles.iconInput} />
                </View>
                <Text style={styles.titleInput}>Senha:</Text>
                <View style={styles.boxInput}>
                    <TextInput></TextInput>
                    <MaterialIcons name="visibility" style={styles.iconInput} />
                </View>
            </View>

            <View style={styles.boxBottom}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </View>
            </View>

            <View style={styles.boxBottomCreate}>
            <Text style={styles.textBottom}>Não tem conta? <Text style={styles.textBottomCreate}>Clique aqui.</Text></Text>
            </View>
        </View>
    );
} 
