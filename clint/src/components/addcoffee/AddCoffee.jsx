import { Link } from 'react-router';
import Swal from 'sweetalert2';
const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;

    const newCoffee = {
      name: form.name.value,
      price: form.price.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };
    fetch('https://server-xi-woad-21.vercel.app/coffes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Coffee Added success',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
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
          Add New Coffee
        </h2>
        <p className="text-center text-gray-500 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
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
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter coffee Price"
                className="input input-bordered w-full"
                required
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
            />
          </div>

          <div className="mt-8">
            <button className="btn btn-block bg-[#D2B48C] hover:bg-[#c2a377] border-none text-gray-800">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
