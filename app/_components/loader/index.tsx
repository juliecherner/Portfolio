'use client'

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex items-center inline-block h-64 w-64 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primaryGreen motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="text-primaryGreen !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}
