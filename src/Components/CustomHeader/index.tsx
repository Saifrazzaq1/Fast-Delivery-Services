import React from 'react';
import { Image, Platform, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Assets from '../../Assets';

import styles from './style';
import globalStyles from '../../config/globalStyles';
import { useNavigation } from '@react-navigation/native';

interface HeaderTypes {
  title: string;
  title1: string;
  isShowBackIcon?: boolean;
  shareText?: string;
  onPressShare?: () => void;
  onPressFav?: () => void;
  onPressSearch?: () => void;
  onPressBack?: () => void;
  showTitle1?: boolean;
  titleAlignment?: 'left' | 'center' | 'right';
}

const Header = ({
  title,
  title1,
  isShowBackIcon = false,
  shareText,
  onPressShare,
  onPressFav,
  onPressSearch,
  onPressBack,
  showTitle1 = false,
  titleAlignment = 'center',
}: HeaderTypes) => {
  const inset = useSafeAreaInsets();
  const nav = useNavigation();
  const titleStyles = {
    color: '#A0A0A0', // Default text color for title1
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 0,
    textAlign: 'center',
  };
  
  const title1Styles = {
    color: '#1C7584', // Default text color for title
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 0,
    textAlign: 'center',
  };
  
  // Customize text styles based on the titleAlignment prop
  if (titleAlignment === 'left') {
    titleStyles.textAlign = 'left';
    titleStyles.paddingLeft = 10; // Add left padding
    title1Styles.textAlign = 'left';
    title1Styles.paddingLeft = 10; // Add left padding
  } else if (titleAlignment === 'right') {
    titleStyles.textAlign = 'right';
    title1Styles.textAlign = 'right';
  }
  return (
    <View>
      <View style={{ height: inset.top, width: '100%' }} />
      <View
        style={[
          styles.main,
          {
            backgroundColor: globalStyles.Theme.SecondaryColor,
          },
          Platform.OS === 'ios' && styles.iosShadow,
          Platform.OS === 'android' && styles.androidShadow,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: isShowBackIcon ? 'space-between' : 'flex-start',
            alignItems: 'center',
          }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            {isShowBackIcon && (
              <TouchableOpacity
                onPress={() => {
                  nav.goBack();
                }}
                style={{ alignItems: 'center',marginLeft:20}}>
                <Image source={Assets.BackIcon} style={styles.icon2} />
              </TouchableOpacity>
            )}
            {onPressBack && (
              <TouchableOpacity onPress={onPressBack}>
                <Image source={Assets.BackIcon} style={[styles.icon, { tintColor: 'black' }]}/>
              </TouchableOpacity>
            )}
            <View style={{flex:1,}}>
            {showTitle1 && title1 && (
              <Text style={titleStyles}>
                {title1}
              </Text>
            )}
            <Text style={title1Styles}>
              {title}
            </Text>
            </View>
          </View>
          <View style={{flexDirection:'row',}}>
            {onPressSearch && (
              <TouchableOpacity onPress={onPressSearch}>
                <Image source={Assets.search} style={[styles.icon, { tintColor: 'black' }]}/>
              </TouchableOpacity>
            )}
            {onPressFav && (
              <TouchableOpacity onPress={onPressFav}>
                <Image source={Assets.Fav} style={[styles.icon1, { tintColor: 'black' }]}/>
              </TouchableOpacity>
            )}
            {onPressShare && (
              <TouchableOpacity onPress={onPressShare}>
                <Image source={Assets.Share}style={[styles.icon, { tintColor: 'black' }]}/>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
