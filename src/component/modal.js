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
          
           
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
                
            >
                
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff',borderRadius:20}}>
                    <Header style={{backgroundColor:'#3f51b5',borderRadius:20,marginBottom:20,borderColor:"#1a237e"}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 25}}/>
                            </Button>
                        </Left>
                        
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                        
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 25}}/>
                            </Button>
                        </Right>
                    </Header>
                    
                    <Content contentContainerStyle={{height: '100%',}}>
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

export default ModalComponent;
