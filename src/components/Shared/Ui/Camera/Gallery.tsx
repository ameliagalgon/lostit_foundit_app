import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

interface Props {
    captures: any[];
}

const Gallery: React.FunctionComponent<Props> = ({ captures }) => (
    <ScrollView
        horizontal={true}
        style={[styles.galleryContainer]}
    >
        {captures.map(({ uri }, i) => (
            <View style={styles.galleryImageContainer} key={i}>
                <Text>{uri}</Text>
                <Image source={{ uri }} style={styles.galleryImage}/>
            </View>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    galleryContainer: {
        bottom: 100
    },
    galleryImageContainer: {
        width: 75,
        height: 75,
        marginRight: 5
    },
    galleryImage: {
        width: 75,
        height: 75
    }
});

export default Gallery;