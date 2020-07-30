import express from "express";
import path from "path";

const app = express();
const PORT = 3000;
// 포트는 3000을 사용해

// 야 app아, 너 pug 써

// 야 app아, 너가 사용할 css나 js파일은 "/assets"에 있어

//  자, 설정이 끝났어 이제 시작해
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "/assets")))

app.get("/", (req, res) => {
    res.render("sadari")
})

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`)
})
