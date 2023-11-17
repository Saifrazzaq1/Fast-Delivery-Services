import React from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import Button from 'src/Components/Button';
import style from './style';

const Payments = [
    {
        id: 0,
        payment: 52.00,
        Date: 'Nov - 12 - 2023'
    },
    {
        id: 1,
        payment: 52.00,
        Date: 'Nov - 12 - 2023'
    },
    {
        id: 2,
        payment: 52.00,
        Date: 'Nov - 12 - 2023'
    },
];

const AccountRider = ({ navigation, route }) => {
    const card = useSelector(state => state.card.cards);
    const lastCard = card.length > 0 ? card[card.length - 1] : null;
    const hasAccountDetails = lastCard;
    const maskCardNumber = (cardNumber) => {
        return cardNumber.replace(/[^ ](?=.{4,}$)/g, '*');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                backIcon
                loginTitle={'Account'}
                loginbtn
                logintextcolor={'#1C7584'}
                loginmarginleft={'50%'}
                headerbgcolor={'#fff'}
                headerBg
                headerShadow
            />
            {hasAccountDetails ? (
                <View style={style.main}>
                    <View style={style.card}>
                        <Image source={Images.Master} style={style.img} />
                        <View style={{ marginRight: 30 }}>
                            <Text style={style.CardText}>{card && maskCardNumber(lastCard.cardNumber)}</Text>
                            <Text style={style.CardT1}>{card && lastCard.nameOnCard}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('ChooseAccount')}>
                            <Text style={style.CardT2}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.CardText}>Transaction History</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
                            <Text style={style.seeText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={Payments}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={style.Received}>
                                <Image source={Images.Received} />
                                <Text style={style.Rectext}>Received</Text>
                                <View style={{ alignSelf: 'center', marginLeft: 120, }}>
                                    <Text style={style.Rectext}>${item.payment}</Text>
                                    <Text style={style.Rectext1}>{item.Date}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={style.Mainview}>
                        <Image source={Images.Loading} />
                        <Text style={style.text}>Add Your Account</Text>
                        <Text style={style.text1}>Unlock the ease of transactions
                            by adding your account details. Experience hassle-free
                            payments and enjoy the convenience of managing your
                            finances effortlessly.
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                        <Button
                            onPress={() => navigation.navigate('ChooseAccount')}
                            unseen={2}
                            title={'Add Account'}
                            textColor={'#fff'}
                            fontSize={16}
                            justifyContent={'center'}
                            btnColor="#1C7584"
                            buttonStyle={style.btn}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default AccountRider;
