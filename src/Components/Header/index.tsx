import React from 'react';
import { Image, Platform, View,Text, TouchableOpacity, Pressable, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Assets from '../../Assets';

import styles from './style';
import globalStyles from '../../config/globalStyles';
import { useNavigation } from '@react-navigation/native';

interface HeaderTypes {
  title: string;
  isShowBackIcon?: boolean;
  shareText?: string;
  onPressShare?: () => void;
  onPressText?: () => void;
}

const Header = ({
  title,
  isShowBackIcon = true,
  shareText,
  onPressShare,
  onPressText,
}: HeaderTypes) => {
  const inset = useSafeAreaInsets();
  const nav = useNavigation();

  return (
    
    <View>
      <View style={{ height: inset.top, width:'100%'}}  />
      <View
        style={[
          styles.main,
          {
            backgroundColor: globalStyles.Theme.SecondaryColor,
          },
          Platform.OS === 'ios' && styles.iosShadow, // Apply iOS shadow style
          Platform.OS === 'android' && styles.androidShadow, // Apply Android shadow style
          
        ]}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: isShowBackIcon ? 'space-between' : 'flex-start',
            alignItems: 'center',
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            {isShowBackIcon && (
              <TouchableOpacity
                onPress={() => {
                  nav.goBack();
                }}>
                <Image source={Assets.BackIcon} style={styles.icon2} />
              </TouchableOpacity>
            )}

            <Text
              style={{
                color: '#1C7584',
                fontSize: 16,
                fontWeight: '600',
                // fontFamily:
                //   Platform.OS === 'android'
                //     ? 'Fraunces_9pt-Soft-SemiBold'
                //     : 'Fraunces 9pt Soft SemiBold',
                flex:1,
                paddingLeft:20,
                textAlign:'center'
              }}>
              {title}
            </Text>
          </View>

          {onPressShare && (
            <TouchableOpacity onPress={onPressShare}>
              <Image source={Assets.Search} style={styles.icon} />
            </TouchableOpacity>
          )}

          {shareText && (
            <Pressable onPress={onPressText}>
            <Text
              style={{
                color: '#E0281C',
                fontSize: 16,
                fontWeight: '600',
              }}>
              {shareText}
            </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
