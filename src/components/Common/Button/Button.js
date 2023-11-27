import React from 'react';
import { PlayIcon } from '@heroicons/react/20/solid';
import HistoryIcon from '@mui/icons-material/History';
import classes from './Button.module.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Button = ({
  text = '',
  className = '',
  btnClassName = '',
  isHashPackBtn = false,
  isPlayBtn = false,
  isHistoryBtn = false,
  isTrophyBtn = false,
  disabled = false,
  allowFullWidth = false,
  onClick = () => {}
}) => {
  const limitWidth = 'max-w-[170px] sm:max-w-none';
  const fullWidth = 'max-w-none w-full';

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <div className={`flex-shrink-0 ${className} ${allowFullWidth && 'w-full'}`}>
      <button
        type="button"
        className={`relative inline-flex items-center gap-x-1.5 rounded-md py-2 px-[12px] sm:px-4 sm:py-2 text-xxxs sm:text-xs 
       xl:text-sm text-white shadow-sm  bg-indigo-600 hover:bg-indigo-400 transition-all 
        ease-in duration-100 hover:text-gray-900  ${disabled && 'disable-btn'} whitespace-nowrap 
        ${allowFullWidth ? fullWidth : limitWidth}
        ${btnClassName} `}
        onClick={handleClick}>
        {isPlayBtn && (
          <div className="">
            <PlayIcon className={`text-white ${classes.icon}`} aria-hidden="true" />
          </div>
        )}
        {isHistoryBtn && (
          <div className="">
            <HistoryIcon className={`text-white ${classes.icon}`} aria-hidden="true" />
          </div>
        )}
        {isTrophyBtn && (
          <div className="">
            <EmojiEventsIcon className={`text-white ${classes.icon}`} aria-hidden="true" />
          </div>
        )}

        {text}
        {isHashPackBtn && (
          <div className="ml-[12px] sm:ml-4">
            <img
              src="https://uploads-ssl.webflow.com/61ce2e4bcaa2660da2bb419e/62e14973c65367120073a891_app-icon.webp"
              loading="lazy"
              alt=""
              className="absolute right-[6px] top-[17%] sm:top-[15%] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"></img>
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
