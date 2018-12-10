import React from 'react';
import Rooms from './rooms';
import Messages from './messages';
import Postmessages from './postmessage';

export default class ChatRooms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomsArr: null,
            roomId: null,
        }

        this.setRoom = this.setRoom.bind(this);
    }

    setRoom(roomId){
        this.setState({roomId}, () => {
            console.log(this.state.roomId)
        });
    }


    render(){
        
        return (                
            <div className='maincnt'>
                <div className='roomscnt'>                    
                    <Rooms setRoom={this.setRoom}/>
                </div>
                
                <div className='messagescnt'>
                    <div className='wrapper'>
                        <div className='messages'>
                            <Messages roomId={this.state.roomId}/>
                        </div>
                        <Postmessages 
                            roomId={this.state.roomId}
                            setRoom={this.setRoom}
                            />
                    </div>
                    
                </div>
            </div>
        )
    }
}