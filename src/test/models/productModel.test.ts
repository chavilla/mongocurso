import mongoose from "mongoose";
import Product from "../../models/ProductModel";
import { v4 as uuidv4 } from 'uuid';

/* beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/practicas');
});

afterAll(async () => {
    await mongoose.disconnect();
  }); */


  /* describe('Product Model', () => {
    it('should create and save a product', async () => {
        
      let saved: any;
      
      try {

        const product = new Product({ _id: uuidv4(), description: "Testing", price: 123 });
        saved = await product.save();

        // Verify that the fields exist
        expect(saved.description).toBeDefined();
        expect(saved.description).toBeDefined();
        expect(saved.description).toBeDefined();

        // Verify the data TYPE
        expect(typeof product.description).toBe("string");
        expect(typeof product.price).toBe('number');

        // verify data into DB
        expect(saved._id).toBeDefined();
        expect(saved.description).toBe('Testing');
        expect(saved.price).toBe(123)

      } catch (error) {

        // if the product already has been saved, then it'll be deleted
        if (saved?._id) {
          await Product.deleteOne({ _id: saved._id });
        }

        // --- Lanzamos el error para que Jest marque el test como fallido ---
        throw error;

      }
    });
  }); */

  /* it('should throw validation error if required field is missing', async () => {
    const product = new Product({ _id: uuidv4(), price: 123, description: "Hola2"}); // missing "description"
    
    let err;
    try {
      await product.save();
    } catch (error: any) {
      err = error;
    }

    console.log("--> ", err);
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  expect(err.errors.description).toBeDefined();

  }); */
/* 
  it('Should validate that the document was saved', async ()=> {

      const product = new Product({
        _id: uuidv4(),
        price: 123500,
        description: 'Hola'
      })

      const saved = await product.save()
      expect(saved.isNew).toBe(false); // ya no es nuevo → fue guardado
      // Validate type _id
      //console.log("--> ", mongoose.Types.ObjectId.isValid(saved._id));
      //expect(mongoose.Types.ObjectId.isValid(saved._id)).toBe(true);
      
  }); */

  it('Message' , ()=> {
    let sayHello = 'Hola'
    expect(sayHello).toBe('Hola');
  })