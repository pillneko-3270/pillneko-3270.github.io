import { type } from "./js/header.js"
import { load_me } from "./js/me_sets.js"
import { SocialCard } from "./js/social_card.js"
import { load_socials } from "./js/socials.js"

window.customElements.define("social-card", SocialCard)

window.onload = async () => {
    type()
    load_me()
    load_socials()
}