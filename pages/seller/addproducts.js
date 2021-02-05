import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";

export default function AddProducts() {
  const { register, handleSubmit } = useForm();
  const addProduct = async (values) => {
    try {
      console.log(values);
      const { data } = await axios.post(
        `${process.env.AXIOS_BASE_URL}/seller/product/add`,
        values
      );
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="control">
          <label>Product name</label>
          <input name="name" id="name" ref={register} />
        </div>
        <div className="control">
          <label>Product description</label>
          <textarea
            row={4}
            name="description"
            id="description"
            ref={register}
          />
        </div>
        <div className="control">
          <label>Publication Type</label>
          <input name="publicationType" id="publicationType" ref={register} />
        </div>
        <div className="control">
          <label>Category</label>
          <input name="category" id="category" ref={register} />
        </div>
        <div className="control">
          <label>Fees</label>
          <input name="fees" id="fees" ref={register} />
        </div>
        <div className="control">
          <label>Warrenty Policy</label>
          <textarea
            row={2}
            name="policy.warrenty"
            id="policy.warrenty"
            ref={register}
          />
        </div>
        <div className="control">
          <label>Return Policy</label>
          <textarea
            row={2}
            name="policy.return"
            id="policy.return"
            ref={register}
          />
        </div>
        <div className="control">
          <label>Shipping</label>
          <input name="shipping" id="shipping" ref={register} />
        </div>
        <div className="control">
          <label>Shipping method</label>
          <input name="shippingmethod" id="shippingmethod" ref={register} />
        </div>
        <div className="control">
          <label>Shipping time</label>
          <input name="shippingtime" id="shippingtime" ref={register} />
        </div>
        <div className="control">
          <label>Shipping cost</label>
          <input name="shippingcost" id="shippingcost" ref={register} />
        </div>
        <div className="control">
          <label>Shipping cost extra</label>
          <input
            name="shippingcostextra"
            id="shippingcostextra"
            ref={register}
          />
        </div>
        <div className="control">
          <button type="submit">Add product</button>
        </div>
      </form>
    </div>
  );
}
