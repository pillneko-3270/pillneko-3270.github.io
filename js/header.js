const header_text = "你好！我叫药丸猫，是个爱画画的，这是我的个人网站！"
const header = document.getElementById("hello")
let idx = 0

export function type() {
    if (idx < header_text.length) {
        header.innerText += header_text.charAt(idx)
        idx++
        setTimeout(type, 100)
    }
}
