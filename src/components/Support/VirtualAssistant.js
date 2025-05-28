import '../../styles/VirtualAssistant.css';

const VirtualAssistant = ({ onClose }) => {
  return (
    <div className="virtual-assistant-overlay">
      <div className="virtual-assistant">
        {/* Header */}
        <div className="assistant-header">
        <div className="header-spacer"></div> {/* Empty spacer */}
          <h3>Chat</h3>
          <span className="close" onClick={onClose}>×</span>
        </div>

        <div className="assistant-scrollable-content">
            {/* Logo */}
            <img src="/Images/logoRelaxio.png" alt="Relaxio" className="assistant-logo" />

            {/* Welcome Message */}
            <div className="assistant-welcome">
            Hello, welcome to <strong>relaxio</strong> virtual assistant!
            </div>

            {/* Options with Elipse */}
            <div className="assistant-options-wrapper">
            <img src="/Images/elipse.png" alt="User Icon" className="assistant-elipse" />
            <div className="assistant-options">
                <p>Please choose an option:</p>
                <button>Problem with my order</button>
                <button>Cancel my order</button>
                <button>Start a return</button>
                <button>Request a refund</button>
                <button>Resend order email</button>
                <button>Resend receipt</button>
                <button>Something else</button>
            </div>
            
            </div>

        </div>
        {/* Input */}
        <div className="assistant-input-container">
          <div className="assistant-input">
            <button>＋</button>
            <input type="text" placeholder="Type your message" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="assistant-footer"></div>
      </div>
    </div>
  );
};

export default VirtualAssistant;


