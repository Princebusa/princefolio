import { ArrowRight  } from 'lucide-react';

const FooterCta = () => {
    return (
        <>
        <div className="relative h-10   dots-bg ">
        <div className="w-full h-full [background:var(--shad-bg)]"></div>
      </div>
      <div className="relative  before:content-[''] before:w-full before:h-[1px] before:left-0 before:top-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="p-4 max-width relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
          <div className="relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
            <div className="shine p-7 relative after:content-[''] after:w-full after:h-[1px] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
           
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--plus)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus absolute top-[-11.5px] left-[-11.5px] z-1 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--plus)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus absolute top-[-11.5px] right-[-11.5px] z-1 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--plus)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus absolute bottom-[-11.5px] left-[-11.5px] z-1 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--plus)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus absolute bottom-[-11.5px] right-[-11.5px] z-1 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>

               <h2 className='m-0 text-center font-semibold text-[30px] text-[var(--forground)]'>Let's work together</h2>
               <p className='mt-2 text-neutral-500 font-[400] text-center'>Have a project in mind? Let's create something amazing.</p>
               <div className='mt-4 text-center flex gap-3 justify-center'>
                <a href="/" className='py-[7px] px-[12px] text-neutral-800 dark:text-neutral-200 text-[14px] leading-normal border border-[var(--edge-line)] hover:bg-gray-100 dark:bg-[#ffffff26]/30'>Email Me</a>
                <a href="/" className='flex justify-center items-center leading-normal text-[14px] gap-[5px] py-[7px] px-[12px] border border-[var(--edge-line)] text-[#e5e5e5] dark:text-[#171717] bg-[#171717] dark:bg-[#e5e5e5] '>Book a Call
                <ArrowRight className='w-4 h-4'/>
                </a>
               </div>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default FooterCta;
