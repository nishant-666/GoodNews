import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs,Icon,ScrollableTab,TabHeading,Text } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import * as Font from 'expo-font';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';
import Tab7 from './tabs/tab7';
import { FontAwesome } from '@expo/vector-icons';

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
      <>

        <Header>
        
          <Body style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
          <FontAwesome name="newspaper-o" size={24} color="white" style={{marginRight:10}} />
            <Title style={{color:'white',textAlign:"center"}}>GoodNews</Title>
          </Body>
        </Header>
          <Tabs renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab textStyle={{color:'white'}}  heading={ <TabHeading><Icon style={{fontSize:20}} name="keypad" active="true" /><Text style={{fontSize:15}}>All</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#212121'}} activeTabStyle={{backgroundColor:'#212121'}} textStyle={{color:'white'}} heading={ <TabHeading><Icon style={{fontSize:20}} name="paper" active="true" /><Text style={{fontSize:15}}>Buisness</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#212121'}} activeTabStyle={{backgroundColor:'#212121'}} textStyle={{color:'white'}} heading={ <TabHeading><Icon style={{fontSize:20}} name="pulse" active="true" /><Text style={{fontSize:15}}>Health</Text></TabHeading>}>
            <Tab3 />
          </Tab>
          
        </Tabs>
      </>
    );
  }
}