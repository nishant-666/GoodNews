import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button, Icon } from 'native-base';
import TimeAgo from './time';
import * as Font from 'expo-font';


let customFonts = {
  'Sacramento': require('../../assets/fonts/Sacramento-Regular.ttf'),
  'Roboto': require('../../assets/fonts/Roboto-Black.ttf'),
  'Lato': require('../../assets/fonts/Lato-Regular.ttf'),
  'Monsterrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
};

class DataItem extends Component {

  state = {
    fontsLoaded: false,
  };


  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
      
        return(
            <ListItem thumbnail onPress={this.handlePress}>
              <Left>
                <Thumbnail square style ={{width:120,height:90,marginTop:8}} source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'Lato' }} numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2} style={{marginTop:4,fontFamily:"Lato"}}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8 }}>
                    <Text note style={{fontFamily:"Lato",marginTop:2}}>{this.data.source.name}</Text>
                    <TimeAgo style={{fontFamily:"Lato"}} time={this.data.publishedAt}/>
                </View>
              </Body>
            </ListItem>
        );
    }
}

export default DataItem;