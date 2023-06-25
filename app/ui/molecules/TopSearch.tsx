import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import InputWithIcon from '../atoms/InputWithIcon';

export default function TopSearch() {
  const inputParams: IInput = {
    class: 'topSearch',
    additionalClasses: 'hidden lg:block',
    placeholder: 'search here...',
    rightIcon: {
      objectName: faMagnifyingGlass,
      className: 'fa-xl fa-solid fa-magnifying-glass',
      testId: 'searchButton'
    }
  };
  return (
    <>
      <InputWithIcon {...inputParams} />
    </>
  );
}