import React from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    Button,
    TouchableOpacity
} from 'react-native';

const ListScreen = props => {
    return (
        <View>
            <Text style={styles.textStyle}>
                Hello World!
            </Text>
            <Button
                onPress={() => props.navigation.navigate('Components')}
                title="Press me" 
            />
            <TouchableOpacity onPress={() => console.log('Opacity preseed')}>
                <Text>
                    Go to list demo
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        marginLeft: 10
    }
});

export default ListScreen;
