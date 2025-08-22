import { load_json } from "./load_json.js"

export async function load_socials() {
    let socials = await load_json("/data/socals/socials.json", "社交帐号")
    console.log(socials)
    const socials_el = document.getElementById("s-con")

    socials.socials.forEach(a => {
        const el = `<social-card icon="${a.icon}" plat="${a.name}" uid="${a.id}" url="${a.url}"></social-card>`
        socials_el.innerHTML += el
    })
}