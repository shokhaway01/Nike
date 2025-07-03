const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center gap-2 items-center py-4 px-7 border font-montserrat leading-none bg-coral-red text-white text-lg rounded-full">
        {label}
        <img src={iconUrl} alt="arrowRight" className="ml-2 rounded-full w-5 h-5" />
    </button>
)
}

export default Button