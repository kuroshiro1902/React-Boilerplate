import s from './Loading.module.scss';
import loadingImg from '../../assets/loading.gif';
interface props {
  size?: number;
}

function Loading({ size }: props) {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <img src={loadingImg} width={size ?? 120} height={size ?? 120} />
    </div>
  );
}

export default Loading;
