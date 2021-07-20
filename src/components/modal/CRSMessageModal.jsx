import React from 'react'

const CRSMessageModal = ({modalVisibility}) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    React.useEffect(() => {
        setIsModalVisible(v => !v)
    }, [])
    return (
        <div className={isModalVisible ? "modal is-active" : "modal"}>
            <div className="modal-background"/>
            <div className="modal-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptas?
            </div>
            <button
                onClick={() => setIsModalVisible(false)}
                className="modal-close is-large"
                aria-label="close"
            />
        </div>
    )
}

export default CRSMessageModal
