import Formm from "../components/Userform";


const AdminHome = () => {

  return (
    <div className="flex flex-col gap-6">
      <p className="flex justify-center font-bold text-3xl mr-220">Create User Here</p>
      <Formm></Formm>
    </div>
  )
}

export default AdminHome;