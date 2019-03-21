import React from 'react'
import styled from 'styled-components'

function Stuff(props){
    return(
        <div>
            <input
                type="text"
                name="name"
                onChange={(e)=>props.handleChange(props.stuff,e)}
                onMouseOut={(e)=>props.updatedStuff(props.stuff)}
                value={props.stuff.title}
                />
                <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    onChange={(e)=> props.handleChange(props.idea, e)}
                    onMouseOut={(e)=>props.handleChange(props.idea, e)}
                    value={props.stuff.description}
                    />
                    <button
                        onClick={()=> props.deleteStuff(props.stuff)}
                        >Delete Stuff</button>
        </div>
    )
}

export default Stuff