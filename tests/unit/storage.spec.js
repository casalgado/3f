import { restaurant } from "../../src/storage/restaurant";
import { market } from "../../src/storage/market";
import { catering } from "../../src/storage/catering";

const content = [restaurant, market, catering];

describe("Content Sructure", () => {
  it("contains all properties of correct type", () => {
    for (let i = 0; i < content.length; i++) {
      expect(content[i].landing_img).toEqual(expect.any(String));
      expect(content[i].landing_txt).toEqual(expect.any(String));
      expect(content[i].intro_txt).toEqual(expect.any(String));
      expect(content[i].collections).toEqual(expect.any(Array));
    }
  });
});

describe("Collections Object Sructure", () => {
  it("contains all properties of correct type", () => {
    for (let i = 0; i < content.length; i++) {
      let collections = content[i].collections;
      for (let j = 0; j < collections.length; j++) {
        expect(collections[j].name).toEqual(expect.any(String));
        expect(collections[j].products).toEqual(expect.any(Array));
      }
    }
  });
});

describe("Products Object Sructure", () => {
  it("contains all properties of correct type", () => {
    for (let i = 0; i < content.length; i++) {
      let collections = content[i].collections;
      for (let j = 0; j < collections.length; j++) {
        let products = collections[j].products;
        for (let k = 0; k < products.length; k++) {
          console.log(products[k].id);
          expect(isNaN(products[k].id)).toEqual(false); //checks if stirng is a number
          expect(products[k].img).toEqual(expect.any(String));
          expect(isNaN(products[k].price)).toEqual(false); //checks if string is a number
          expect(products[k].description).toEqual(expect.any(String));
        }
      }
    }
  });
});
