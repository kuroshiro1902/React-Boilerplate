import { Button } from 'antd';
import { FaPlus } from 'react-icons/fa';
interface props {
  onClick?: () => any;
  title?: string;
}

function Loading({ onClick, title }: props) {
  return (
    <Button className="p-2 inline-flex justify-center items-center" size="small" title={title} onClick={onClick}>
      <FaPlus size={9} title={title} />
    </Button>
  );
}

export default Loading;
