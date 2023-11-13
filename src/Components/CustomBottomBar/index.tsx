import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Assets from '../../Assets';
import styles from './style';

const CustomBottomTabBar = ({ state, navigation, tabItems }: any) => {
  return (
    <View style={styles.tabBar}>
      {tabItems.map((tabItem: any, index: any) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={tabItem.name}
            style={styles.tabBarItem}
            onPress={() => {
              navigation.navigate(tabItem.name);
            }}
          >
            <Image
              source={tabItem.icon}
              style={[
                styles.tabBarIcon,
                { tintColor: isFocused ? '#E0281C' : 'gray' },
                tabItem.imageStyle // Apply custom image style here
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;
