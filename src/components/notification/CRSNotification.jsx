import React from 'react'
import {notification} from 'antd';


const CRSNotification = ({title, description}) => {
        return notification.open({
            message: {title},
            description: {description},
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }

export default CRSNotification
