import LogoPerro from '../assets/PerritologoBlanco.png'

const Logo = () => {
  return (
    <div className='mt-7 flex justify-center items-center'>
      <img alt='Logo' src={LogoPerro} className='w-full max-w-[150px]'/>
    </div>
  )
}

export default Logo
