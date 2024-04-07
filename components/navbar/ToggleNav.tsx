import { TbMenuDeep } from "react-icons/tb";

type ToggleNavProps = {
  handleToggle: () => void;
};

const ToggleNav = ({ handleToggle }: ToggleNavProps) => {
  return (
    <button
      onClick={handleToggle}
      className="btn btn-white bg-gradient lg:hidden block"
    >
      <TbMenuDeep className="text-2xl" />
    </button>
  );
};

export default ToggleNav;
