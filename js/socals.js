import { load_json } from "./load_json.js"

export async function load_socals() {
    let socals = await load_json("/data/socals/socals.json", "社交帐号")
    console.log(socals)
    const socals_el = document.getElementById("s-con")

    socals.socals.forEach(a => {
        const el = `<socal-card icon="${a.icon}" plat="${a.name}" uid="${a.id}" url="${a.url}"></socal-card>`
        socals_el.innerHTML += el
    })
}