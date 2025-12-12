export default function ViewToggleButton ({onClick, children}) {
  return (
    <button onClick={onClick}
    className="bg-white font-bold text-black text-xl hover:bg-gray-300 p-6 rounded-xl shadow-lg"
    >
      {children}
    </button>
  )
}