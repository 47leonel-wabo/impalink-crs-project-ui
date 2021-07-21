import React from 'react'

export default ({messageObject}) => (
    <div className="columns is-centered">
        {
            messageObject !== null ? (
                    <div className="column">
                        <section className="section">
                            <h1 className="title is-size-4">{messageObject.title}</h1>
                            <p>{messageObject.content}</p>
                        </section>
                    </div>
                ) :
                (<div className="column">
                    <section className="section" style={{color: 'rgb(186,186,186)'}}>
                        <h1 className="is-size-1">No content to show!</h1>
                        <p className="is-size-5">Please select a message into the list at your right</p>
                    </section>
                </div>)
        }
    </div>
)
