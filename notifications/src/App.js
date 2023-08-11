import "./App.css";

import { useNotification } from "./NotificationContext";
import Notification from "./notify";

function App() {
  const { addNotification } = useNotification();

  const handleButtonClick = () => {
    addNotification('API response received!', 'info');
  };
  return (
    <div>
      <Notification />
      <button onClick={handleButtonClick}>Show Notification</button>
      {/* Other content */}
    </div>
  );
}

export default App;
