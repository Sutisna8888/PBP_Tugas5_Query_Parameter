const express = require("express");
const app = express();
const port = 3000;

const { LuasPersegi, LuasPersegiPanjang, Segitiga } = require("./Rumus.js");

app.get("/bangun-ruang", (req, res) => {
  const shape = req.query.shape;
  const action = req.query.action;

  if (shape === "persegi") {
    const sisi = parseFloat(req.query.sisi);
    if (action === "luas") {
      res.send(
        `Luas persegi dengan sisi : ${sisi} adalah : ${LuasPersegi(sisi)}`
      );
    } else {
      res.send(`Keliling persegi dengan sisi : ${sisi} adalah : ${4 * sisi}`);
    }
  } else if (shape === "persegipanjang") {
    const panjang = parseFloat(req.query.panjang);
    const lebar = parseFloat(req.query.lebar);
    if (action === "luas") {
      res.send(
        `Luas persegi panjang dengan panjang : ${panjang} <br> lebar : ${lebar} <br> adalah : ${LuasPersegiPanjang(
          panjang,
          lebar
        )}`
      );
    } else {
      res.send(
        `Keliling persegi panjang dengan panjang : ${panjang} <br> lebar : ${lebar} <br> adalah : ${
          2 * panjang + 2 * lebar
        }`
      );
    }
  } else if (shape === "segitiga") {
    const alas = parseFloat(req.query.alas);
    const tinggi = parseFloat(req.query.tinggi);
    res.send(
      `Luas segitiga dengan alas : ${alas} <br> tinggi : ${tinggi} <br> adalah : ${Segitiga.Luas(
        alas,
        tinggi
      )}`
    );
  }
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
