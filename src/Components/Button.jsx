const Button = ({ label, iconUrl, backgroundColor,borderColor,textColor,fullWidth }) => {
  return (
    <button className={`flex justify-center gap-2 items-center py-4 px-7 border font-montserrat leading-none
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'
    }
    ${ fullWidth && 'w-full' }text-lg rounded-full`}>
        {label}
        {iconUrl && <img src={iconUrl} alt="arrowRight" className={`ml-2 rounded-full w-5 h-5`} />}
    </button>
)
}

export default Button