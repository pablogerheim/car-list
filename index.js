import express from "express"
import { promises as fs } from "fs"
import { moreModels, lessModels, moreModelsList, lessModelsList, uniqModel } from "./ruleBusiness/rules.js"

const { readFile } = fs

const app = express()
app.use(express.json());

const port = 3000

app.get('/marcas/maisModelos', async (req, res) => {
  try {
    const data = JSON.parse(await readFile("car-list.json"))
    const brand = moreModels(data)
    res.send(JSON.stringify(brand))
  } catch (err) {
    res.send("Fail")
  }

})

app.get('/marcas/menosModelos', async (req, res) => {
  try {
    const data = JSON.parse(await readFile("car-list.json"))
    const brand = lessModels(data)
    res.send(JSON.stringify(brand))
  } catch (err) {
    res.send("Fail")
  }

})

app.get('/marcas/listMaisModelos/:x', async (req, res) => {
  try {
    const data = JSON.parse(await readFile("car-list.json"))
    let number = req.params.x - 1
    const brand = moreModelsList(data, number)

    res.send(JSON.stringify(brand))
  } catch (err) {
    res.send("Fail")
  }

})

app.get('/marcas/listMenosModelos/:x', async (req, res) => {
  try {
    const data = JSON.parse(await readFile("car-list.json"))
    let number = req.params.x - 1
    const brand = lessModelsList(data, number)

    res.send(brand)
  } catch (err) {
    res.send("Fail")
  }

})

app.post('/marcas/listModelos', async (req, res) => {
  try {
    const data = JSON.parse(await readFile("car-list.json"))
    let brandName = req.body.brand
    const brand = uniqModel(data, brandName)
    res.send(brand)
  } catch (err) {
    res.send([])
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})