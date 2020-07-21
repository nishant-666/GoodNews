import React, { Component } from 'react';
import { Alert, View, StatusBar } from 'react-native';
import { Container, Content, List, Text, Spinner, Header } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import DataItem from '../component/dataItem';
import Modal from '../component/modal';
import * as Font from 'expo-font';
import { getArticles } from '../service/news';

let customFonts = {
  'Sacramento': require('../../assets/fonts/Sacramento-Regular.ttf'),
  'Roboto': require('../../assets/fonts/Roboto-Black.ttf'),
  
};


export default class ListThumbnailExample extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    this._loadFontsAsync();
    getArticles('general').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:20}}>
          <StatusBar   
           translucent = {true}
            barStyle = "dark-content"
            hidden = {true}   
          />  
         <Spinner color='#ef5350' />
      <Text children="Please wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
            return (
              <DataItem onPress={this.handleItemDataOnPress} data={item} />
            )
        }} />
    )

    return (
      <Container transparent>
         <StatusBar   
           transparent = {true}
            barStyle = "dark-content"
            hidden = {true}   
          />  
        <Header style={{backgroundColor:"#212121",marginBottom:30}}>    
          <Text style={{color:"#ef5350",backgroundColor:"#212121", fontSize:50,marginTop:14, marginBottom:-15,fontFamily: 'Sacramento'}}>GoodNews</Text>
        </Header>
          <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}