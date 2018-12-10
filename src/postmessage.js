import React from 'react';
import request from './request';

export default class Postmessages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageText: null,
        }
        this.getText = this.getText.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }



    getText({target:{value: messageText}}){
        this.setState({messageText}, () => {
            // console.log(this.state.messageText);
        });
    }

    // sendMessage(){
    //     console.log('message have been sent!');
    // }

    sendMessage(){
        if(this.state.messageText){
            let mesObj = {
                text: this.state.messageText,
                userId: '12345',
                roomId: this.props.roomId,
            }

            request.postData('http://localhost:6060/API/addmessage', JSON.stringify(mesObj))
            .then( () => {
                this.props.setRoom(this.props.roomId);    
            })
        }
    }


    render(){
        return (
            <div className='formcnt'>
                <div className='inputfield'>
                    <input
                        className='inputstyle' 
                        type='text'
                        onChange={this.getText}
                    >
                    </input>
                </div>
                <div 
                    className='okbutton'
                    onClick={this.sendMessage}
                >
                Send</div>            
            </div>
            

        )

    }
       
}


