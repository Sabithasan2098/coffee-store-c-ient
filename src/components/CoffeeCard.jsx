import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
  console.log(coffee);
  const { _id, name, quentity, suplier, taste, category, details, photo } =
    coffee;
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-xl p-20">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between pr-10 pl-10">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quentity}</p>
            <p>{suplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-primary">View</button>
              <Link to={`/Updatecoffee/${_id}`}>
                {" "}
                <button className="btn btn-secondary">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
