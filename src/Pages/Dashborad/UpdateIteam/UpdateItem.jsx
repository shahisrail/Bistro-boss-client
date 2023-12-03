/* eslint-disable no-unused-vars */
import React from "react";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import UseaxioxPulic from "../../../hooks/UseaxioxPulic";
import Swal from "sweetalert2";

const image_hosting_key = "19163d719edced790060b75a4f9496be";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, recipe, price, category, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = UseAxiosHoks();
  const axiosPublic = UseaxioxPulic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      //  now send the menu item data to the server with the image  ]\

      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show  success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectoinTitale
        heading="Update an Item"
        subHeading="Refresh info"
      ></SectoinTitale>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            {/* category  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={category}>
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="soup">soup</option>
                <option value="Pizza">Pizza</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            {/* price  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* recipe  details  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn">
            Update menu Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
