import React, {Component} from 'react'
import axios from 'axios'
// import styled from 'styled-components'
import Stuff from './Stuff'

class StuffPage extends Component{
    state={
        user: {
            userName:""
        },
        myStuff:[]
    }
    componentDidMount=()=>{
        if (this.props.match.params){
            axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res=>{
                this.setState({
                    myStuff: res.data.myStuff,
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
            const newStuff = [...this.state.myStuff]
            newStuff.unshift(res.data)
            this.setState({myStuff: newStuff})
        })
    }

    deleteStuff=(stuff)=>{
        const userId = this.props.match.params.userId
        const stuffId = stuff._id
        axios.delete(`/api/users/${userId}/stuff/${stuffId}`)
        .then(res=>{
            this.setState({myStuff: res.data})
        })
    }

    handleChange=(stuff, event)=>{
        console.log('HANDLE CHANGE')
        const newStuff = [this.state.myStuff]

        const myStuff = newStuff.map((savedStuff)=>{
            if(savedStuff._id===stuff._id){
                savedStuff[event.target.name]=event.target.value
            }
            return savedStuff
        })
        this.setState({myStuff: myStuff})
    }

    updateStuff=(stuff, e)=>{
        const userId = this.props.match.params.userId
        axios.patch(`/api/users/${userId}/stuff/${stuff._id}`, {stuff}).then(res =>{
            this.setState({myStuff: res.data.myStuff})
        })
    }

    render(){
        return (
            <div>
                <h1>Stuff Page</h1>
                <button
                    onClick={this.createStuff}
                    > New Stuff</button>

                    <div>
                        {
                            this.state.myStuff.map(stuff=>{
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