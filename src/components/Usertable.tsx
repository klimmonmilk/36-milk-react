import axios from "axios";
import { useEffect, useState } from "react";

const UserTable = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const backendURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(backendURL)
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mb-30">
      <table>
        <thead>
          <tr>
            <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Name</th>
            <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Last name</th>
            <th className="border bg-gray-100 border-gray-300 py-3 px-32 font-bold">Position</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.map((member) => (
          <tr key={member.id}>
            <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.name}</td>
            <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.surname}</td>
            <td className="border text-gray-500 border-gray-300 py-3 font-bold text-center">{member.position}</td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default UserTable;