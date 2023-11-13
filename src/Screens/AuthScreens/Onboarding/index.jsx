import React, {useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Assets from 'src/Assets';
import Button from 'src/Components/Button';
import SkipBtn from 'src/Components/SkipBtn';
import Text from 'src/Components/Text';
import style from './style';

const Onboarding = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const pressHandler = () => {
    console.log('working');
    navigation.navigate('Location');
  };
  const [index, setIndex] = useState(0);
  return (
    <View style={[style.mainView]}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="white-content"
        translucent
      />
      <SkipBtn title={'Skip'} unseen={index} onPress={() => pressHandler()} />
      {index === 0 ? (
        <Image style={style.Onboard1style} source={Assets.Onboarding1} />
      ) : index === 1 ? (
        <Image style={style.Onboard1style} source={Assets.Onboarding2} />
      ) : index >= 2 ? (
        <Image style={style.Onboard1style} source={Assets.Onboarding3} />
      ) : null}

      <View style={style.downView}>
        {index === 0 ? (
          <View>
            <Text style={style.text}>Fast delivery within Abu Dhabi</Text>
            <Text style={style.text2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        ) : index === 1 ? (
          <View>
            <Text style={style.text}>Customized Solutions for all</Text>
            <Text style={style.text2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        ) : index >= 2 ? (
          <View>
            <Text style={style.text}>Dedicated Field Executives</Text>
            <Text style={style.text2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        ) : undefined}
        {index < 10 ? (
          <>
            <Button
              btnColor="#1C7584"
              unseen={index}
              justifyContent="space-between"
              btnheight={55}
              paddingHorizontal={20}
              title={'Next'}
              textColor={'white'}
              onPress={() => {
                setIndex(index + 1);
                if (index >= 2) {
                  pressHandler();
                  console.log(index);
                }
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  style.line1,
                  index === 0 ? {backgroundColor: '#E0281C'} : null,
                ]}
              />
              <View
                style={[
                  style.line2,
                  index === 1 ? {backgroundColor: '#E0281C'} : null,
                ]}
              />
              <View
                style={[
                  style.line3,
                  index >= 2 ? {backgroundColor: '#E0281C'} : null,
                ]}
              />
            </View>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default Onboarding;
