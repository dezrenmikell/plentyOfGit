import React, {Component} from 'react'
import axios from 'axios'
// import styled from 'styled-components'
import Stuff from './Stuff'
import {Link} from 'react-router-dom'

class StuffPage extends Component{
    state={
        user: {
            userName:""
        },
       stuffs:[]
    }
    componentDidMount=()=>{
        if (this.props.match.params){
            axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res=>{
                this.setState({
                    stuffs: res.data.stuffs,
                    user:{
                        _id:res.data._id,
                        userName: res.data.userName

                    }
                })
            })
        }
    }

    createStuff=()=>{
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/stuff`).then(res=>{
            const newStuff = [...this.state.stuffs]
            newStuff.unshift(res.data)
            this.setState({stuffs: newStuff})
        })
    }

    deleteStuff=(stuff)=>{
        const userId = this.props.match.params.userId
        const stuffId = stuff._id
        axios.delete(`/api/users/${userId}/stuff/${stuffId}`)
        .then(res=>{
            this.setState({stuffs: res.data})
        })
    }

    handleChange=(stuff, event)=>{
        console.log('HANDLE CHANGE')
        const newStuff = [...this.state.stuffs]

        const stuffs = newStuff.map((savedStuff)=>{
            if(savedStuff._id===stuff._id){
                savedStuff[event.target.name]=event.target.value
            }
            return savedStuff
        })
        this.setState({stuffs: stuffs})
    }

    updateStuff=(stuff, e)=>{
        const userId = this.props.match.params.userId
        axios.patch(`/api/users/${userId}/stuff/${stuff._id}`, {stuff}).then(res =>{
            this.setState({stuffs: res.data.stuffs})
        })
    }

    render(){
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to='/api/users'>Local API</Link>
                <h1>Stuff Page</h1>
                <button
                    onClick={this.createStuff}
                    > New Stuff</button>

                    <div>
                        {
                            this.state.stuffs.map(stuff=>{
                                return(
                                    <div>
                                        <Stuff
                                            key={stuff._id}
                                            stuff={stuff}
                                            deleteStuff={this.deleteStuff}
                                            handleChange={this.handleChange}
                                            updateStuff={this.updateStuff}
                                            />
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default StuffPage