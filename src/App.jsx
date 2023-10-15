import { Link } from "react-router-dom";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quentity = form.quentity.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quentity,
      suplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-6xl text-purple-600">Vite + React</h1>
      <div className="bg-[#F4F3F0] lg:w-full lg:p-24">
        <h1 className=" text-5xl font-extrabold text-center">
          Add a new coffee
        </h1>
        <form onSubmit={handleSubmit}>
          {/* coffee name and quentity*/}
          <div className="flex gap-4 pt-20">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Coffee name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Abilable Quentity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quentity"
                  placeholder="Abilable coffee"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* coffee supliar and taste */}
          <div className="flex gap-4 pt-10">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="suplier"
                  placeholder="Enter coffee suplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* coffee category and details*/}
          <div className="flex gap-4 pt-10">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* coffee photo url */}
          <div className="pt-10">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            className="font-bold bg-[#D2B48C] mt-10 py-4 px-[806px] rounded-md btn"
            type="submit"
            value="Add coffee"
          />
        </form>
      </div>
      <div className="py-5 text-center">
        <Link to={"/showCoffee"}>
          <button className="btn">Coffee</button>
        </Link>
      </div>
    </div>
  );
}

export default App;