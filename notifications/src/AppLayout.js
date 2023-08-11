// AppLayout.js
import React, { useState } from 'react';
import Notification from './notify';


const AppLayout = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, color) => {
    const newNotification = { id: Date.now(), message, color };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div>
      <h1>Your App</h1>
      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            color={notification.color}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      {/* Other components */}
    </div>
  );
};

export default AppLayout;
