import { type } from "./js/header.js"
import { load_me } from "./js/me_sets.js"
import { SocalCard } from "./js/socal_card.js"
import { load_socals } from "./js/socals.js"

window.customElements.define("socal-card", SocalCard)

window.onload = async () => {
    type()
    load_me()
    load_socals()
}