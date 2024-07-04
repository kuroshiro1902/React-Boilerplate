import s from './ErrorMessage.module.scss'
interface props{
  children: any
};

function ErrorMessage({children}: props){
  return (
    <p className={s.ErrorMessage}>
      {children}
    </p>
  )
};

export default ErrorMessage;
