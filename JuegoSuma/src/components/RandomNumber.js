import React from 'react';

import PropTypes from 'prop-types';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class RandomNumber extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => {
        if (this.props.isDisabled) return;
        this.props.onPress(this.props.id);
    };
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.isDisabled]}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#aaa',
        width: 100,
        fontSize: 35,
        marginVertical: 30,
        marginHorizontal: 25,
        textAlign: 'center',
    },
    isDisabled: {
        opacity: 0.3,
    },
});

export default RandomNumber;