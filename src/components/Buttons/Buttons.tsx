import './Buttons.scss'

type NavigationButtonProps = {
    label: string;
}

const Buttons = ({ label }: NavigationButtonProps) => {
  return (

    <button className='navigation-button nav-button-border'>
    {label}
    </button>
  )
}

export default Buttons


