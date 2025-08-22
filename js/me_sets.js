import { load_json } from "./load_json.js"

export async function load_me() {
    // 加载自设设定
    let me_set = await load_json("/data/me_settings/me.json", "自设设定")
    console.log(me_set)

    const name = document.getElementById("name")
    const gender = document.getElementById("gender")
    const age = document.getElementById("age")
    const nature = document.getElementById("nature")
    const fav_food = document.getElementById("fav_food")
    const excel = document.getElementById("excel")
    const height = document.getElementById("height")
    const weight = document.getElementById("weight")
    const background = document.getElementById("background")

    name.innerText = `名称：${me_set.name}`
    gender.innerText = `性别: ${me_set.gender}`
    age.innerText = `年龄：${me_set.age}`
    nature.innerText = `性格：${me_set.excel}`
    fav_food.innerText = `喜欢的食物：${me_set.fav_food}`
    excel.innerText = `擅长：${me_set.excel}`
    height.innerText = `身高：${me_set.height}`
    weight.innerText = `体重：${me_set.weight}`
    background.innerText = `背景故事：${me_set.background}`
}