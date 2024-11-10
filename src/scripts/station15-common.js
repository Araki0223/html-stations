async function main() {
    const results = await getData();
    // console.log("main - results:", results); // デバッグ用
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
