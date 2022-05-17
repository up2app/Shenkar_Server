import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function Home() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photoURI, setPhotoURI] = useState(null)

    let camera = null;

    const Capture = async () => {
        if (camera === null) {
            alert('Oops');
            return;
        }

        let photo = await camera.takePictureAsync();
        console.log(photo);
        setPhotoURI(photo.uri);
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null)
        return (<View><Text>No Camera Detected</Text></View>);

    if (hasPermission === false)
        return (<View><Text>No Camera Permission</Text></View>);

    return (
        <View style={styles.container}>
            <Camera ref={(r) => { camera = r }} style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <Button title="Take a Picture" onPress={Capture} />
            {
                photoURI !== null ?
                    <View>
                        <Image style={styles.image} source={{ uri: photoURI }} />
                    </View>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        height: 300
    },
    buttonContainer: {
        backgroundColor: 'blue',
        padding: 5
    },
    text: {
        color: '#fff'
    },
    image:{
        height:200
    }

})


