import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs,Icon } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import { FontAwesome } from '@expo/vector-icons';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
export default class TabsExample extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Container >
        <Header style={{backgroundColor:'#2196f3'}} hasTabs>
        
          <Body style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
          <FontAwesome name="newspaper-o" size={24} color="white" style={{marginRight:10}} />
            <Title style={{color:'white',textAlign:"center"}}>GoodNews</Title>
          </Body>
          
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#2196f3'}} activeTabStyle={{backgroundColor:'#2196f3'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#2196f3'}} activeTabStyle={{backgroundColor:'#2196f3'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#2196f3'}} activeTabStyle={{backgroundColor:'#2196f3'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#2196f3'}} activeTabStyle={{backgroundColor:'#2196f3'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Sports">
            <Tab4 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#2196f3'}} activeTabStyle={{backgroundColor:'#2196f3'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Entertainment">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}