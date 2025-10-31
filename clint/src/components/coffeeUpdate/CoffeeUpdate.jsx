import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeUpdate = () => {
  const data = useLoaderData();
  const { _id, name, price, supplier, taste, category, details, photo } = data;
  console.log(data);
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;

    //big from control //way 1
    // const formData = new FormData(form);
    // const coffeeData = Object.fromEntries(formData.entries());
    // console.log(coffeeData);

    //way 2
    const newCoffee = {
      name: form.name.value,
      price: form.price.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };
    //send coffee data update the server
    fetch(
      `https://server-afpaqt6g0-habibes-projects-f154a520.vercel.app/coffes/${_id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          let timerInterval;
          Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector('b');
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then(result => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
        }
      });
    console.log(newCoffee);
    // You can send this data to backend using fetch/axios
    // fetch('https://your-server-url/coffee', { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(newCoffee)})
  };
  return (
    <div className="min-h-screen  p-10">
      <div className="max-w-4xl mx-auto bg-[#F4F3F0] shadow-xl rounded-xl p-8">
        <Link
          to="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back to home
        </Link>

        <h2 className="text-3xl font-bold text-center mt-4 mb-2 text-gray-700">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-gray-500 mb-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                defaultValue={name}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
                required
                defaultValue={price}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
                required
                defaultValue={supplier}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
                required
                defaultValue={taste}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                required
                defaultValue={category}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                required
                defaultValue={details}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
              defaultValue={photo}
            />
          </div>

          <div className="mt-8">
            <button className="btn btn-block bg-[#D2B48C] hover:bg-[#c2a377] border-none text-gray-800">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoffeeUpdate;
