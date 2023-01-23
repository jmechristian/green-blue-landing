/* This example requires Tailwind CSS v3.0+ */
export default function CTA() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      <div className='py-24 px-6 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold tracking-tight text-white'>
            Save up to 30% with a <br />
            GreenBlue Membership.
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg lg:text-xl leading-8 text-gray-300'>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-white px-3.5 py-1.5 text-lg font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Get started
            </a>
            <a href='#' className='text-lg font-semibold leading-7 text-white'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1024 1024'
        className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
        aria-hidden='true'
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient
            id='8d958450-c69f-4251-94bc-4e091a323369'
            cx={0}
            cy={0}
            r={1}
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(512 512) rotate(90) scale(512)'
          >
            <stop stopColor='#7775D6' />
            <stop offset={1} stopColor='#E935C1' stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
