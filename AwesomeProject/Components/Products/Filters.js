import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Redux/Product/categoriesSlice';
import { categorySelected } from '../../Redux/Product/productSlice';
const Filters = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const dispatch = useDispatch();
    const { categories, status, error } = useSelector((state) => state.categories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    const handleValueChange = (value) => {
        setSelectedCategory(value);
        console.log(`Selected category: ${value}`);
        dispatch(categorySelected(value)); // Dispatch the action to update the state
    };


    let content;

    if (status === 'loading') {
        content = <Text>Loading...</Text>;
    } else if (status === 'succeeded') {
        content = (
            <RNPickerSelect
                onValueChange={handleValueChange}
                items={categories.map((category) => ({ label: category, value: category }))}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                    label: 'Select a category...',
                    value: null,
                }}
            />
        );
    } else if (status === 'failed') {
        content = <Text>{error}</Text>;
    }

    const closeModal = () => {
        if (selectedCategory !== null) {
            setModalVisible(false);
            setSelectedCategory(null);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Filter</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    closeModal();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Filter by Category</Text>
                        {content}
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModal()}
                        >
                            <Text style={styles.textStyle} >Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '30%',
        backgroundColor: '#f4f4f4',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: 'navy',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 16,
        fontWeight: '400',
        textAlign: 'center',
    },
    buttonClose: {
        width: '50%', // Update this value to your desired width
        backgroundColor: 'navy',
    },

    textStyle: {
        color: 'white',
        textAlign: 'center',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 20,
        marginBottom: 20
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
});

export default Filters;
