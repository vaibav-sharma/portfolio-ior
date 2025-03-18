// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    //  || this.createChatBotMessage("Hello there!")
    this.setState = setStateFunc;
    this.baseURL = process.env.REACT_APP_BASEURL;

  }
  handleHello() {
    const message = this.createChatBotMessage("Hello there!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleApiCall = async (userInput) => {
    try {
      let token = localStorage.getItem("authToken");
      let bodyContent = JSON.stringify({
        "prompt": `${userInput}`
      });
      let headersList = {
        "Accept": "*/*",
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
       }
      // const response = await fetch(`${this.baseURL}/api/summary?query=${encodeURIComponent(userInput)}`); // Replace with your API endpoint
      const response = await fetch(`${this.baseURL}/api/summary`, {
          method: "POST",
          body: bodyContent,
          headers: headersList
      }); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data)
      const message = this.createChatBotMessage(data.message); // Assuming your API returns { response: "..." }
      this.updateChatbotState(message);
    } catch (error) {
      console.error('API call failed:', error);
      const errorMessage = this.createChatBotMessage('Sorry, I encountered an error while fetching data.');
      this.updateChatbotState(errorMessage);
    }
  };

  updateChatbotState(message) {
    // console.log(message)
    // const message = this.createChatBotMessage("Hello there!");
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;