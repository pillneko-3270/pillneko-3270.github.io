export class SocalCard extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'closed' })

        shadow.innerHTML = `
            <style>
            .socals {
                width: 300px;
                background-color: var(--card-bg);
                border: 1px solid var(--card-border);
                box-shadow: 0px 0px 10px var(--card-border);
                display: flex;
                padding: 15px;
                border-radius: 15px;
                cursor: pointer;
                transition-duration: 0.3s;
                animation: up 0.8s ease-out;
                margin: 10px;
                .plat {
                    font-size: 1.3rem;
                    position: relative;
                    left: 10px;
                    top: 13px;
                }
                .id {
                    font-size: 1rem;
                    position: relative;
                    left: 10px;
                    top: 11px;
                }
                &:hover {
                    scale: 1.05;
                }
            }
            
            @keyframes up {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
            </style>
        `

        const template = document.getElementById("socal-card-template")
        const content = template.content.cloneNode(true)
        content.querySelector("img").setAttribute("src", this.getAttribute("icon"))
        content.querySelector(".plat").innerText = this.getAttribute("plat")
        content.querySelector(".id").innerText = this.getAttribute("uid")

        shadow.appendChild(content)

        shadow.querySelector(".socals").addEventListener("click", () => {
            window.location.href = this.getAttribute("url")
        })
    }
}