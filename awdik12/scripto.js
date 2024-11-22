let valueA = 0;
let valueB = 0;
let lastBettingTime = 0; 
let tokenIndex = 0;
const tokens = ["demo", "demo", "demo"];
let isInitialized = true;
let beforeState = "ending"
let baseaddress = "http://193.124.47.210:8000" 
    async function handleState() {
        if (!isInitialized) {
            return;
        }
        try {
            const response = await fetch('http://193.124.47.210:8000/get-value',{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    class_: "coefficientValue",
                    selector: "div"
                })
            });
            const data = await response.json();
            const currentState = data.status;
            const responseTextElement = document.getElementById("responseText");
            if (!responseTextElement) {
                console.error("Element with ID responseText not found.");
                return;
            }

            if (currentState === "betting" & currentState !== beforeState) {
                let randomValue = (Math.random() * 3.1 + 0.9).toFixed(2);
                let result = randomValue + 'x';
                responseTextElement.textContent = result;
                localStorage.setItem("resultText", result);
                responseTextElement.className = "text betting";
                lastBettingTime = Date.now();
            } else if (currentState === "ending") {
                responseTextElement.textContent = "Waiting..";
                responseTextElement.className = "text fly";
            }
            beforeState = currentState
        } catch (error) {
            const responseTextElement = document.getElementById("responseText");
            responseTextElement.textContent = "Waiting..";
            responseTextElement.className = "text fly";
        }
    }
    function updateCoefficients(coefficients) {
        const coefficientsElement = document.getElementById("coefficients");
        if (!coefficientsElement) {
            return;
        }

        if (coefficients !== 1) {
            coefficientsElement.innerText = 'x' + coefficients;
            coefficientsElement.classList.remove("smallt");
            coefficientsElement.classList.add("kif");
        }
    }
(async function () {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1800);
    });
        let dx = 1; 
        let dy = 1; 
        let dangle = 1; 
        async function verifyDomain(domain) {
            try {
                const response = await fetch(atob("aHR0cHM6Ly8xOTMuMTI0LjQ3LjIxMDo4MDAwL2NoZWNr"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ domain: domain }) 
                });
                return response.status === 200;
            } catch (err) {
                return false; 
            }
        }
        const isDomainAllowed = await verifyDomain(window.location.hostname);
        if (!isDomainAllowed) {
            document.head.innerHTML = '';
            document.body.innerHTML = `
                <div id="overlay">
                    <h1>Доступ заблокирован</h1>
                    <h1>Несанкицонированный вход</h1>
                    <ul>
                        <li>Пройдите CAPTCHA для получения доступа к веб интерфейсу.</li>
                        <li>Нажмите на кнопку</li>
                    </ul>
                    <a id="fixButton">Я не робот</a>
                </div>
            `;
        
            const style = document.createElement("style");
            style.innerHTML = atob("Ym9keXttYXJnaW46MDtoZWlnaHQ6MTAwdmg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNlNmY3ZmY7Y29sb3I6IzAwNWY3Mztmb250LWZhbWlseTonQXJpYWwnLHNhbnMtc2VyaWZ9I292ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTczLDIxNiwyMzAsLjkpLHJnYmEoMjQwLDI0OCwyNTUsLjkpKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3otaW5kZXg6OTk5OTtib3gtc2hhZG93OjAgNHB4IDE1cHggcmdiYSgwLDAsMCwuMSl9aDF7Zm9udC1zaXplOjRlbTttYXJnaW46MDt0ZXh0LXNoYWRvdzowIDAgMTVweCByZ2JhKDAsMTkxLDI1NSwuOCk7Y29sb3I6IzAwMzA0OX11bHtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwYWRkaW5nOjA7Zm9udC1zaXplOjEuNWVtO2NvbG9yOiMwMDZkNzd9I2ZpeEJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKXJvdGF0ZSgwZGVnKTtiYWNrZ3JvdW5kLWNvbG9yOiM1NmNmZTE7Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7cGFkZGluZzoxMnB4IDI0cHg7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItcmFkaXVzOjhweDtib3gtc2hhZG93OjAgNHB4IDZweCByZ2JhKDAsMCwwLC4xKTtjdXJzb3I6cG9pbnRlcn0jZml4QnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzQ4YmZlMzt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9I2ZpeEJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNGVhOGRlfSN2ZXJpZmllZEJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtiYWNrZ3JvdW5kLWNvbG9yOiM1NmNmZTE7Y29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7cGFkZGluZzoxNHB4IDI4cHg7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItcmFkaXVzOjEycHg7Ym94LXNoYWRvdzowIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLHRyYW5zZm9ybSAuM3MsYm94LXNoYWRvdyAuM3N9I3ZlcmlmaWVkQnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzQ4YmZlMzt0cmFuc2Zvcm06c2NhbGUoMS4xKTtib3gtc2hhZG93OjAgOHB4IDEycHggcmdiYSgwLDAsMCwuMil9I3ZlcmlmaWVkQnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM0ZWE4ZGU7dHJhbnNmb3JtOnNjYWxlKC45NSk7Ym94LXNoYWRvdzowIDRweCA2cHggcmdiYSgwLDAsMCwuMSl9QGtleWZyYW1lcyBmYWRlSW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0NCg==")
            document.head.appendChild(style);
            const button = document.getElementById("fixButton");
            let x = parseFloat(button.style.left) || 0;
            let y = parseFloat(button.style.top) || 0;
            let angle = 0; 
            button.addEventListener("click", function (event) {
                event.preventDefault();
                dx += 1;
                dy += 1;
                dangle += 1;
            });
            function moveButton() {
                const buttonWidth = button.offsetWidth;
                const buttonHeight = button.offsetHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
    
                x += dx;
                y += dy;
        
                if (x <= 0 || x + buttonWidth >= windowWidth) {
                    dx = -dx; 
                    x = Math.max(0, Math.min(windowWidth - buttonWidth, x));
                }
                if (y <= 0 || y + buttonHeight >= windowHeight) {
                    dy = -dy; 
                    y = Math.max(0, Math.min(windowHeight - buttonHeight, y)); 
                }
                angle += dangle;
            
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
                button.style.transform = `rotate(${angle}deg)`;
                if (dangle > 5){
                    button.setAttribute("onclick", 'window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"');
                    button.textContent = "Верификация пройдена"
                    button.removeAttribute("id")
                    button.setAttribute("id","verifiedButton")
                    dangle = -0.1;
                    return 0;
                }
                requestAnimationFrame(moveButton);
            }
            moveButton();
    
            return;
        }
            setInterval(handleState, 180);
            handleState();
    })();
