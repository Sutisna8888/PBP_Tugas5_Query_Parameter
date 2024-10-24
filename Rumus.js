const LuasPersegi = (Sisi) => {
  return Sisi * Sisi;
};

const LuasPersegiPanjang = (Panjang, Lebar) => {
  return Panjang * Lebar;
};

const Segitiga = {
  Luas: (Alas, Tinggi) => {
    return (1 / 2) * Alas * Tinggi;
  },
};

module.exports = {
  LuasPersegi,
  LuasPersegiPanjang,
  Segitiga,
};
