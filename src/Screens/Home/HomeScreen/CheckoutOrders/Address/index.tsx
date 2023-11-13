import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import CustomHeader from '../../../../../Components/CustomHeader';
import Assets from '../../../../../Assets';
import Button from '../../../../../Components/Button';
import CategoryItem from '../../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../../config/screenSize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../../../Components/Header';
import CustomTextField from '../../../../../Components/TextField';



const OrderAddress = ({ navigation }: any) => {

    return (
        <View style={styles.cont}>
            <Header title={'Checkout'}  />
            <ScrollView>
            <View style={styles.main}>
                <Text style={styles.text}>Contact details</Text>
                <CustomTextField style={styles.field} title='First name'
                    placeholder='Younas' placeholderColor={'#B7B7B7'}  />
                     <CustomTextField style={styles.field} title='Last name'
                    placeholder='Younas' placeholderColor={'#B7B7B7'}  />
                <CustomTextField style={styles.field} title='Phone Number'
                    placeholder='+923123456789'  placeholderColor={'#B7B7B7'} />
                <CustomTextField style={styles.field} title='Emalandline number'
                    placeholder='landline number (optional)' placeholderColor={'#B7B7B7'} />
                <ImageBackground source={Assets.Locate1} style={styles.img} borderRadius={20} >
                    <Button title={'Change location'} customBackgroundColor={'red'} TouchableStyle={styles.btn}/>
                </ImageBackground>
                <CustomTextField style={styles.field} title='Area'
                    placeholder='Mader City'  placeholderColor={'#B7B7B7'} />
                <CustomTextField style={styles.field} title='Address type'
                    placeholder='Apartment'  placeholderColor={'#B7B7B7'} />
                    <CustomTextField style={styles.field} title='Street'
                    placeholder='Sweihan Road'  placeholderColor={'#B7B7B7'} />
                    <CustomTextField style={styles.field} title='Building'
                    placeholder='Flour'  placeholderColor={'#B7B7B7'} />
                    <CustomTextField style={styles.field} title='Apartment No'
                    placeholder='17'  placeholderColor={'#B7B7B7'} />
                    <CustomTextField style={styles.field} title='Additional Directions'
                    placeholder='Additional Directions (optional)'  placeholderColor={'#B7B7B7'} />
                    <Button title={'Continue'} TouchableStyle={styles.btn1} onPress={() => navigation.navigate('CheckDetails')} />
            </View>
            </ScrollView>
        </View>
    );
};

export default OrderAddress;
