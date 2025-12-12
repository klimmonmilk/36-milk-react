import { useState, useEffect } from "react";
import axios from "axios";

const Formm = ({ create, onDelete }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    position: "",
  });
  const backendURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  const [view, setView] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(backendURL);

    const fetchData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendURL, formData);
      console.log(formData, response.data);

      setFormData({
        name: "",
        surname: "",
        position: "",
      });

      fetchData();

      if (create) {
        create();
      }
    } catch (error) {
      console.log("ERROR HELPP!", error);
    }
  }

  // const handleDelete = async (id) => {
  //   const isConfirm = confirm("ลบหร๊อ");
  //   if (!isConfirm) return;
  //   const response = await axios.delete()
  //   onDelete();
  // }

  return (
    <div>
      <form className="flex gap-12 justify-center" onSubmit={handleSubmit}>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="name" value={formData.name} onChange={handleChange} placeholder="Name"></input>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname"></input>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="position" value={formData.position} onChange={handleChange} placeholder="Position"></input>
        <button className="bg-indigo-500 text-white px-6 rounded-xl text-lg" type="submit">Save</button>
      </form>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-gray-400 mb-2 text-lg mt-6">Table 1</h3>
        <ul className="bg-white flex justify-center m-16">
          {data.map((member) => (
            <li key={member.id}>
              {member.name} {member.surname} - {member.position}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Formm;