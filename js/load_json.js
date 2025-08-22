/**
 * 
 * @param {String} path 
 * @param {String} type 
 */
export async function load_json(path, type) {
    let res = {}
    await fetch(path).then((r) => {
        res = r.json()
    })
    console.log(`成功获取${type}数据`)
    return res
}