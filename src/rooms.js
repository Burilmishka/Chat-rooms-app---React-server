import React from 'react';
import request from './request';

class Rooms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomsArr: null,
        }
    }

    componentDidMount(){
        request.getData('http://localhost:6060/API')
        .then(roomsObj => {
            this.setState({roomsArr: roomsObj.chats}, () => {
                console.log(this.state.roomsArr);
                });
        }, err =>{
            console.log('error in didMount', err);
        });
    }


    render(){
        let roomsArr;
        if(this.state.roomsArr){
            roomsArr = this.state.roomsArr.map((room, index) => {
                return (<div
                    className ='room'
                    key = {index}
                    onClick = { () => {
                        this.props.setRoom(room.id);
                        // console.log('roomID:', room.id);
                    } }
                >
                    {room.name}
                </div>)
            });
        }
        return(
            <div className='wrapper'>
                {roomsArr}
            </div>
        )
        
    }
}


export default Rooms;