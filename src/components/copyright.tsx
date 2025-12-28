import React from 'react';

const Copyright = () => {
    return (
        <div className="p-4 max-width relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
            <p className='text-center text-neutral-500 font-[400] text-[14px]'>Designed & Developed by <span className='font-semibold text-neutral-900 dark:text-neutral-400'>Prince</span></p>
            <p className='text-center text-neutral-500 font-[400] text-[14px]'>©2026. All rights reserved.</p>
        </div>
    );
}

export default Copyright;
