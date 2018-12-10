import React from 'react';
import request from './request';

export default class Messages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messagesArr: null,
            // roomsArr: null,
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(`http://localhost:6060/API/${nextProps.roomId}/messages`);
        request.getData(`http://localhost:6060/API/${nextProps.roomId}/messages`)
        .then( messagesArr => {
            // console.log(messagesArr);
            this.setState({messagesArr}, () => {
                console.log(this.state.messagesArr);
            });
        }, err =>{
            console.log('error in compwillreceiveProps', err);
        }
        )
    }



    render(){
        let messages;
        if(this.state.messagesArr){
            messages = this.state.messagesArr.map( (item, index) => {
                return (
                    <div
                        className='messageitem'
                        key={index}
                    >
                    {item.text}</div>
                )
            })
        }
        

        return (
            <div className='wrapper'>
                {messages}
            </div>
        )

    }
       
}


