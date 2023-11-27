import { linkToHashScanTxn } from '../../../utils/helperFunctions';
import SearchIcon from '@mui/icons-material/Search';

const SearchTxn = ({ timeStamp }) => {
  const url = linkToHashScanTxn(timeStamp);

  return (
    <a
      className="w-[36px] h-[36px] flex items-center justify-center rounded-full
       hover:bg-indigo-300 cursor-pointer group bg-indigo-600
      transition-all duration-150 ease-in mx-auto"
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <SearchIcon
        className=" group-hover:text-indigo-600 text-white transition-all duration-150 ease-in"
        aria-hidden="true"
      />
    </a>
  );
};

export default SearchTxn;
