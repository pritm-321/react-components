// Notification.js
import React, { useEffect } from 'react';
import { useNotification } from '../NotificationContext';
import './Notification.css';

const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  useEffect(() => {
    notifications.forEach((notification) => {
      const timer = setTimeout(() => {
        removeNotification(notification.id);
      }, 90000);

      return () => clearTimeout(timer);
    });
  }, [notifications, removeNotification]);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div key={notification.id} className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
