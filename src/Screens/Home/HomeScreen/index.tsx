import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './style';
import CustomHeader from '../../../Components/CustomHeader';
import Assets from '../../../Assets';
import Button from '../../../Components/Button';
import CategoryItem from '../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../config/screenSize';
import CustomIcons from '../../../Components/IconWithText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PopularRest, imageArray } from './Lists';
import { Categories, Items, subCategory, } from '../../../Redux/Reducers/Auth/actions';

const HomeScreen = ({ navigation }: any) => {
    useEffect(() => {

        Categories((res: any) => {
            if (res.success) {
                console.log("Categories", { res })
                setData(res.Categories);
            }
        });
        Items((res: any) => {
            if (res.success) {
                console.log("Items", { res })
            }
        });
        subCategory((res: any) => {
            if (res.success) {
                console.log("Sub-Categories", { res })
            }
        });
    }, []);

    const [data, setData] = useState([
        {
            _id: '1',
            name: 'Loading...'
        },

    ]);

    return (
        <View style={styles.cont}>
            <CustomHeader title='Johar Town, Lahore' title1={'Delivering to'} showTitle1={true} titleAlignment='left' />
            <ScrollView  >
                <View style={styles.banner}>
                    <View>
                        <Text style={styles.text}>
                            Stores
                        </Text>
                        <Text style={styles.text1}>Explore discount sales before next visit!</Text>
                        <Button title='Login/signup' customBackgroundColor={'rgba(255, 255, 255, 0.25)'}
                            TouchableStyle={styles.btn} textStyle={{ fontSize: 12, fontWeight: "500" }} />
                    </View>
                    <Image source={Assets.Store} style={styles.img} />
                </View>
                <Text style={styles.t1}>Hay Good Morning</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity >
                            <CategoryItem imageSource={Assets.Logo} text={item.name} backgroundColor="#FFFFFF"
                                onPress={() => navigation.navigate('DetailScreen')} />
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.fds}>
                    <Image source={Assets.FDS} style={{
                        marginLeft: 10 * widthRef, height: 60 * heightRef,
                        width: 100 * widthRef
                    }} />
                    <View style={{ flexDirection: 'column', margin: 8 }}>
                        <Text style={{ fontSize: 18 * fontRef, color: 'black', fontWeight: '600' }}>Get a code ? </Text>
                        <Text style={{ color: 'dimgray' }}>Add your code and save on your order</Text>
                    </View>
                </View>
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <CustomIcons imageSource={Assets.Past} text='Past Order' />
                    <CustomIcons imageSource={Assets.Super} text='Super Savor' />
                    <CustomIcons imageSource={Assets.Game} text='Game day Deals' />
                    <CustomIcons imageSource={Assets.Give} text='Give back' />
                </View>
                <Text style={styles.t1}>Popular restaurants nearby</Text>
                <FlatList
                    data={PopularRest}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.PopCard}>
                                <Image source={item.imageSource} style={styles.popimg} />
                                <Text style={styles.poptext}>{item.text}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon size={16} name='clock-time-four-outline' color={'black'} />
                                    <Text style={styles.popt1}>{item.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <FlatList
                    data={imageArray}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Image source={item.imageSource} style={styles.offerImg} />
                        </TouchableOpacity>
                    )}
                />

            </ScrollView>
        </View>
    );
};

export default HomeScreen;
