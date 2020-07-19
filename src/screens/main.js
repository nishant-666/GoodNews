import React, { Component } from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import All from './All'
import { StyleSheet, Text, View } from "react-native";
import Business from './Business'
import Health from './Health'
import Sports from './Sports'
import Entertainment from './Entertainment'
import Science from './Science'
import Tech from './Tech'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const AppTabNavigator = createBottomTabNavigator({
    All: {
        screen: All,
        
        navigationOptions:{
            tabBarIcon:({tintColor})=><MaterialIcons name="grid-on" size={24} color={tintColor} />
        }
    },
    Business: {
        screen: Business,
        navigationOptions:{
            tabBarIcon:({tintColor})=><MaterialCommunityIcons name="newspaper" size={24} color={tintColor} />
        }
    },
    Health: {
        screen: Health,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name = "md-pulse" size={24} color={tintColor}></Ionicons>
        }
    },
    Sports: {
        screen: Sports,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Ionicons name = "ios-baseball" size={24} color={tintColor}></Ionicons>
        }
    },
    Entertainment: {
        screen: Entertainment,
        navigationOptions:{
            tabBarIcon:({tintColor})=><MaterialCommunityIcons name="filmstrip" size={24} color={tintColor}/>
        }
    },
    Science: {
        screen: Science,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Entypo name="light-bulb" size={24} color={tintColor}/>
        }
    },
    Tech: {
        screen: Tech,
        navigationOptions:{
            tabBarIcon:({tintColor})=><AntDesign name="apple-o" size={24} color={tintColor}/>
        }
    }
},
{
    tabBarOptions:{
        activeTintColor:'#ef5350',
        inactiveTintColor:'#616161',
        showLabel:true
        
    }
}

)


export default createAppContainer(
    createSwitchNavigator(
        {
            App:AppTabNavigator,
    
        }
    )
)
