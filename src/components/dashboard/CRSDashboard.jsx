import React from 'react'

const CRSDashboard = () => {
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
                            <div className="column is-4" style={{backgroundColor: 'rgba(194,194,194,0.08)'}}>
                                <h1 className="is-size-5 sub-title">Recent messages <span
                                    className="tag is-warning">0</span></h1>
                            </div>
                            <div className="column" style={{backgroundColor: 'rgba(163,236,163,0.47)'}}>
                                <h2>JIO</h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CRSDashboard
