import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeScreen = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Messages" component={Messagescreen} />
    </Tab.Navigator>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles

    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const FeedScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Details" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

const About = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
    </View>
  );
};

const ExploreScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Explore Screen</Text>
    </View>
  );
};

const NotificationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notification Screen</Text>
    </View>
  );
};

const Messagescreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Message Screen</Text>
    </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const FeedsScreen = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="yellowgreen"
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const Settings = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
