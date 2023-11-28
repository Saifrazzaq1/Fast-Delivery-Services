import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from 'src/Components/Button';
import Textfield from 'src/Components/Textfield';
import Images from '../../Assets';
import style from './style';

const PayWith = ({setShowModal, showModal, radio, price}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, borderRadius: 10}}>
      <View style={style.view11}>
        <Text style={style.oshatext}>Pay with</Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setradioActive(radio);
            }}
            style={{flexDirection: 'row'}}>
            <View
              style={[
                {
                  height: 25,
                  width: 25,
                  borderRadius: 15,
                  borderWidth: 1,
                },
                {
                  borderColor: 'black',
                },
              ]}
            />
            <View
              style={{
                height: 25,
                width: 22.5,
                marginLeft: -22.5,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  marginTop: 2.5,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              />
            </View>
            <Image
              style={[
                {width: 25, height: 25, marginLeft: 10},
                {tintColor: 'black'},
              ]}
              source={Images.ccard}
            />

            {radio === 1 ? (
              <Text style={[style.radioText, {color: 'black'}]}>
                Credit Card
              </Text>
            ) : radio === 2 ? (
              <Text style={[style.radioText, {color: 'black'}]}>Cash</Text>
            ) : null}

            {/* <Image
                style={{width: 35, height: 35, marginTop: 5}}
                source={Images.check}
              /> */}
          </TouchableOpacity>
          <Text style={style.text}>Name on card</Text>
          <Textfield
            paddingVertical={0}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            placeholder={'Ex: Younus'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
          />
          <Text style={style.text}>Card Number</Text>
          <Textfield
            paddingVertical={0}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            placeholder={'0000 0000 0000 '}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
          />
        </View>
        <View style={style.view1}>
          <Text style={style.oshatext}>Payment Summary</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Subtotal</Text>
          <Text style={style.deltextnext}>AED {price}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Service Fee</Text>
          <Text style={style.deltextnext}> AED 20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Delivery fee</Text>
          <Text style={style.deltextnext}>AED 75</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Rider Tip</Text>
          <Text style={style.deltextnext}>AED 50</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textanyT}>Total amount</Text>
          <Text style={style.deltextnextT}>AED {price}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 100,
            paddingBottom: 20,
          }}>
          <Button
            btnheight={55}
            unseen={2}
            showtitle2={false}
            title={'Place Order'}
            justifyContent={'center'}
            buttonStyle={{marginTop: -40, width: '100%', alignItems: 'center'}}
            btnColor="#1C7584"
            textColor={'#fff'}
            textStyle={{marginHorizontal: 20}}
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default PayWith;
