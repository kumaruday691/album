import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumProp }) => {
    const { title, artist, thumbnail_image, image, url } = albumProp;
    const {
        textContainerStyle,
        imageStyle,
        imageContainerStyle,
        textStyle,
        albumImageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={imageStyle} />
                </View>

                <View style={textContainerStyle}>
                    <Text style={textStyle}>{title} </Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }} style={albumImageStyle} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} text={'Buy Now !'} />
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    textStyle: {
        fontSize: 20
    },

    imageStyle: {
        height: 50,
        width: 50,
    },

    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },

    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default  AlbumDetail;
