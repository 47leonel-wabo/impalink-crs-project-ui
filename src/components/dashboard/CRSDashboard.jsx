import React from 'react'
import MessageDetails from "../details/MessageDetails";

const CRSDashboard = () => {

    const [showModal, setShowModal] = React.useState(false)
    const [messageList, setMessageList] = React.useState([])
    const [messageObject, setMessageObject] = React.useState({subject: '', content: ''})

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleSaveMessage = (evt) => {
        if (!messageObject.subject || !messageObject.content){
            alert('Please provide Subject and Message content')
            return;
        }
        alert(JSON.stringify(messageObject))
        setShowModal(false)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div className="container is-mobile">
            <div className="columns is-centered">
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <div className="card" style={{backgroundColor: 'rgba(179,177,175,0.47)'}}>
                                <div className="card-content">
                                    <p className="title is-size-2" style={{color: '#FFA900'}}>
                                        03
                                    </p>
                                    <p className="subtitle" style={{color: 'rgb(92,92,92)'}}>
                                        Messages
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card" style={{backgroundColor: 'rgba(248,127,3,0.47)'}}>
                                <div className="card-content">
                                    <p className="title is-size-2" style={{color: 'rgb(92,92,92)'}}>
                                        12
                                    </p>
                                    <p className="subtitle" style={{color: 'rgb(92,92,92)'}}>
                                        Requests
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card" style={{backgroundColor: 'rgb(2,209,178)'}}>
                                <div className="card-content">
                                    <p className="title is-size-2" style={{color: 'rgb(255,255,255)'}}>
                                        0
                                    </p>
                                    <p className="subtitle" style={{color: 'rgb(92,92,92)'}}>
                                        Services
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title is-size-2">
                                        0
                                    </p>
                                    <p className="subtitle">
                                        Pending
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="columns">
                <div className="column">
                    <section className="section">
                        <div className="columns">
                            {/* This column shows hold message list objects, as well as their numbers and a button for message creation */}
                            <div className="column is-4" style={{backgroundColor: 'rgba(194,194,194,0.08)'}}>
                                <h1 className="is-size-5 sub-title">Recent messages <span
                                    className="tag is-warning">0</span>
                                    <button
                                        onClick={() => handleShowModal()}
                                        className="button is-info is-outlined is-rounded is-small"
                                        style={{marginLeft: '16px'}}>
                                        <span className="icon is-small" style={{marginRight: '8px'}}>
                                          <i className="fas fa-plus"/>
                                        </span>
                                        New
                                    </button>
                                </h1>
                                <div className="columns is-centered">
                                    <div className="section">
                                        <span className="is-size-4" style={{color: 'rgb(186,186,186)'}}>No data</span>
                                    </div>
                                </div>

                            </div>
                            {/* This column is the one at the center, design to show message content */}
                            <div className="column">
                                <div className="columns">
                                    <div className="column">
                                        {
                                            showModal &&
                                            <div className={showModal ? "modal is-active" : "modal"}>
                                                <div className="modal-background"/>
                                                <div className="modal-card">
                                                    <header className="modal-card-head">
                                                        <p className="modal-card-title">New message</p>
                                                        <button
                                                            onClick={() => handleCloseModal(false)}
                                                            className="delete"
                                                            aria-label="close"
                                                        />
                                                    </header>
                                                    <section className="modal-card-body">

                                                        <div className="field">
                                                            <label className="label">Subject</label>
                                                            <div className="control">
                                                                <input className="input"
                                                                       type="text"
                                                                       value={messageObject.subject}
                                                                       onChange={e => setMessageObject({
                                                                           ...messageObject,
                                                                           subject: e.target.value
                                                                       })}
                                                                       placeholder="Text input"/>
                                                            </div>
                                                        </div>

                                                        <div className="field">
                                                            <label className="label">Your message</label>
                                                            <textarea className="textarea"
                                                                      value={messageObject.content}
                                                                      onChange={event => setMessageObject({
                                                                          ...messageObject,
                                                                          content: event.target.value
                                                                      })}
                                                                      placeholder="e.g. Hello world"/>
                                                        </div>

                                                    </section>

                                                    <footer className="modal-card-foot">
                                                        <button className="button is-success"
                                                                onClick={handleSaveMessage}>Save message
                                                        </button>
                                                    </footer>
                                                </div>
                                            </div>
                                        }
                                        {
                                            messageList.length === 0 &&
                                            <MessageDetails messageObject={[]}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CRSDashboard
