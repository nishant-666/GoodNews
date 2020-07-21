//import libraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share, View, StatusBar} from 'react-native';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
import { WebView } from 'react-native-webview';
const webViewHeight = Dimensions.get('window').height ;

// create a component
class ModalComponent extends Component {
    

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        const message = `${title}\n\n${url}\n\nDownload the GoodNews App: https://drive.google.com/drive/folders/1hi-SVArjC2eyl1v9d3wYqfSKiqc5pRvl?usp=sharing`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
          <View>  
           <StatusBar   
           translucent = {true}
            barStyle = "dark-content"
            hidden = {true}   
          />  
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={this.handleClose}
                fullScreen={true}
                
                
            >
                
                <Container transparent>
                  
                    <Header style={{backgroundColor:"#212121"}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: '#eeeeee', fontSize: 25}}/>
                            </Button>
                        </Left>
                        
                        <Body>
                            <Title children={articleData.title} style={{color: '#eeeeee'}}/>
                        </Body>
                        <Right>
                        
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: '#eeeeee', fontSize: 25}}/>
                            </Button>
                        </Right>
                    </Header>
                    
                    <Content contentContainerStyle={{height: '100%'}}>
                        <WebView source={{uri:url}}
                        onError={this.handleClose} 
                        startInLoadingState
                        
                        />
                    </Content>
                  
                </Container>
            </Modal>
          </View>
        );
        } else {
            return null;
        }
    }
}

export default ModalComponent;
