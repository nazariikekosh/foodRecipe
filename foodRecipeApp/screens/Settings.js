import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {
  const navigateToEditProfile = () => {
    console.log('EditProfile');
  };
  const navigateToSecurity = () => {
    console.log('Security function');
  };
  const navigateToNotifications = () => {
    console.log('Notifications function');
  };
  const navigateToPrivacy = () => {
    console.log('Privacy function');
  };
  const navigateToSubscription = () => {
    console.log('Subscription function');
  };
  const navigateToSupport = () => {
    console.log('Support function');
  };
  const navigateToTermsAndPolicies = () => {
    console.log('Terms and Policies function');
  };
  const navigateToFreeSpace = () => {
    console.log('Free Space function');
  };
  const navigateToDataSaver = () => {
    console.log('Data Saver function');
  };
  const navigateToReporyProblem = () => {
    console.log('Report a problem function');
  };
  const addAccount = () => {
    console.log('Add Account function');
  };
  const logout = () => {
    console.log('Logout function');
  };

  const accountItems = [
    {
      icon: 'person-outline',
      text: 'Edit Profile',
      action: navigateToEditProfile,
    },
    {icon: 'security', text: 'Security', action: navigateToSecurity},
    {
      icon: 'notifications-none',
      text: 'Notifications',
      action: navigateToNotifications,
    },
    {icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy},
  ];

  const supportItems = [
    {
      icon: 'credit-card',
      text: 'My Subscribtion',
      action: navigateToSubscription,
    },
    {icon: 'help-outline', text: 'Help & Support', action: navigateToSupport},
    {
      icon: 'info-outline',
      text: 'Terms and Policies',
      action: navigateToTermsAndPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: 'delete-outline',
      text: 'Free up space',
      action: navigateToFreeSpace,
    },
    {icon: 'save-alt', text: 'Data Saver', action: navigateToDataSaver},
  ];

  const actionsItems = [
    {
      icon: 'outlined-flag',
      text: 'Report a problem',
      action: navigateToReporyProblem,
    },
    {icon: 'people-outline', text: 'add Account', action: addAccount},
    {icon: 'logout', text: 'Log out', action: logout},
  ];

  const renderSettingsItem = ({icon, text, action}) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
      }}>
      <MaterialIcons name={icon} size={30} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: 600,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 0}}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: 'Inter',
          }}>
          Settings
        </Text>
      </View>

      <ScrollView style={{marginHorizontal: 12}}>
        
        {/* Account Seting*/}

        <View style={{marginBottom: 12, marginHorizontal: 20}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              marginVertical: 10,
            }}>
            Account
          </Text>
          <View style={{borderRadius: 6, backgroundColor: COLORS.gray}}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Suport and About settings */}

        <View style={{marginBottom: 12, marginHorizontal: 20}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              marginVertical: 10,
            }}>
            Support & About
          </Text>
          <View style={{borderRadius: 12, backgroundColor: COLORS.gray }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Cache and Cellular */}

        <View style={{marginBottom: 12, marginHorizontal: 20}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              marginVertical: 10,
            }}>
            Cache & Cellular
          </Text>
          <View style={{borderRadius: 12, backgroundColor: COLORS.gray}}>
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Action Settings */}

        <View style={{marginBottom: 80, marginHorizontal: 20}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Inter',
              marginVertical: 10,
            }}>
            Actions
          </Text>
          <View style={{borderRadius: 12, backgroundColor: COLORS.gray }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;