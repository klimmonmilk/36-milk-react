import { useState, useEffect } from "react";
import axios from "axios";

const Formm = ({ create, onDelete }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    position: "",
  });
  const backendURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

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

  const handleDelete = async (id) => {
    const isConfirm = confirm("ลบหร๊อ");
    if (!isConfirm) return;
    try {
      const response = await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`)
    fetchData();
    if (onDelete) onDelete();
  } catch {
    console.log("error");
  }}

  return (
    <div>
      <form className="flex gap-12 justify-center" onSubmit={handleSubmit}>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="name" value={formData.name} onChange={handleChange} placeholder="Name"></input>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname"></input>
        <input className="bg-white text-gray-600 px-8 py-4 pr-22 text-lg rounded-xl" name="position" value={formData.position} onChange={handleChange} placeholder="Position"></input>
        <button className="bg-indigo-500 text-white px-6 rounded-xl text-lg" type="submit">Save</button>
      </form>
    
      <div className="flex flex-col items-center mt-10 mb-30">
        <h3 className="text-gray-400 mb-2 text-lg mt-6 flex items-start mr-297">Table 1</h3>
        <table>
          <thead>
            <tr>
              <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Name</th>
              <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Last name</th>
              <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Position</th>
              <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.map((member) => (
            <tr key={member.id}>
              <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.name}</td>
              <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.surname}</td>
              <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.position}</td>
              <td className="border border-gray-300 py-3 font-bold text-center"><button className="text-red-700 font-semibold" onClick={() => handleDelete(member.id)}>Delete</button></td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Formm;