(async function () {
  // Disable console logging to prevent debugging (optional)
  (function disableConsole() {
    const methods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    methods.forEach(method => {
      console[method] = function () { };
    });
  })();

  // Preloader handling
  const preloader = document.querySelector(".preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("loaded");
    }, 1800);
  });

  // Function to verify domain
  async function verifyDomain() {
    const verificationURL = atob("aHR0cHM6Ly8yNGpldHRvbi5ydS9jaGVjaw=="); // Decodes to 'https://24jettoru/chek'
    try {
      const response = await fetch(verificationURL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          'domain': window.location.hostname
        })
      });
      return response.ok;
    } catch (error) {
      console.error("Domain verification failed:", error);
      return false;
    }
  }

  // Perform domain verification
  const isDomainVerified = await verifyDomain();
  if (!isDomainVerified) {
    // If domain is not verified, you can choose to handle it differently
    // For example, redirect to an error page or display a message
    console.error("Domain not verified. Access is restricted.");
    return;
  }

  // Handle state updates
  async function handleState() {
    try {
      const response = await fetch(atob("aHR0cHM6Ly8yNGpldHRvbi5ydS9nZXQtdmFsdWU="), { // Decodes to 'https://24jettoru/get-value'
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          'class_': "coefficientValue",
          'selector': "div"
        })
      });

      const data = await response.json();
      const status = data.status;
      const responseTextElement = document.getElementById("responseText");

      if (!responseTextElement) {
        console.error("Element with ID 'responseText' not found.");
        return;
      }

      if (status === "ending" && status !== handleState.previousStatus) {
        let randomCoefficient = (Math.random() * 3.1 + 0.9).toFixed(2) + 'x';
        responseTextElement.textContent = randomCoefficient;
        localStorage.setItem('resultText', randomCoefficient);
        responseTextElement.className = "text betting";
        handleState.lastBettingTime = Date.now();
      } else if (status === 'betting') {
        responseTextElement.textContent = "Calculating..";
        responseTextElement.className = "text fly";
      }

      handleState.previousStatus = status;
    } catch (error) {
      const responseTextElement = document.getElementById("responseText");
      if (responseTextElement) {
        responseTextElement.textContent = "Waiting..";
        responseTextElement.className = "text fly";
      }
      console.error("Error handling state:", error);
    }
  }

  // Initialize previous status
  handleState.previousStatus = null;
  handleState.lastBettingTime = 0;

  // Set interval to handle state every 180ms
  setInterval(handleState, 180);
  handleState();

  // Additional functions (if any) can be added here
})();
