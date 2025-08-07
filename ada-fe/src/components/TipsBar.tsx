import React from 'react';

type TipsBarProps = {
message: string;
type?: 'info' | 'success' | 'warning' | 'error';
position?: 'top' | 'bottom';
};

const typeStyles = {
info: 'bg-blue-100 text-blue-800 border-blue-300',
success: 'bg-green-100 text-green-800 border-green-300',
warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
error: 'bg-red-100 text-red-800 border-red-300',
};

export const TipsBar: React.FC<TipsBarProps> = ({
    message,
    type = 'info',
    position = 'top',
    }) => {
    return (
    <div className={`w-[70%] mx-auto mr-9 justify-center text-center border px-2 items-center py-2 text-sm shadow-md fixed rounded-[5px] z-40 ${
        typeStyles[type] } ${position === 'top' ? 'top-14' : 'bottom-0' }`}>
        <div className="flex gap-1 justify-center items-center w-full">
            <span className="text-3xl">☺</span> 
            <span className='text-xl'>|</span>
            <p className="text-justify text-xs">{message}</p>
        </div>
    </div>

    );
    };
