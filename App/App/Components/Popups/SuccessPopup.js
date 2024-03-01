import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SuccessPopup = ({ isVisible, message, onClose, duration = 2000 }) => {
    const [modalVisible, setModalVisible] = useState(isVisible);

    useEffect(() => {
        setModalVisible(isVisible);
        if (isVisible) {
            setTimeout(() => {
                setModalVisible(false);
                onClose();
            }, duration);
        }
    }, [isVisible]);

    return (
        <Modal visible={modalVisible} transparent>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <FontAwesomeIcon icon={faTimes} size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>{message}</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%', // Reduce width of the modal
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        color: 'black'
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default SuccessPopup;
