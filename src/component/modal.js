//import libraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share} from 'react-native';
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
        message = `${title}\n\nRead More @${url}\n\nShared via GoodNews`;
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
          
           
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#2196f3'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 22}}/>
                            </Button>
                        </Left>
                        
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                        
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 22}}/>
                            </Button>
                        </Right>
                    </Header>
                    
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        
                        />
                    </Content>
                  
                </Container>
            </Modal>
          
        );
        } else {
            return null;
        }
    }
}

//make this component available to the app
export default ModalComponent;
