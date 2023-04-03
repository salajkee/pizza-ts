import './button.scss';

interface ButtonProps {
  children: string;
  otherClass?: string;
  onClick?: () => void;
}

const Button = ({ children, otherClass, onClick }: ButtonProps) => {
  return (
    <button className={`button ${otherClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
