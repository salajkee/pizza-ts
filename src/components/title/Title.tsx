import './title.scss';

interface TitleProps {
  text: string;
  otherClass: string;
}

const Title = ({ text, otherClass }: TitleProps) => {
  return <h2 className={`title ${otherClass}`}>{text}</h2>;
};

export default Title;
