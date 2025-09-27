import React from 'react'

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center">
      <div className='w-full max-w-[2560px]'>
        <section className="flex flex-col bg-black items-center justify-start pt-12 pb-0">
          <div className="text-center">
            <h2 className="text-white text-6xl md:text-7xl font-bold mb-4 mt-4">iPhone 17 Pro</h2>
            <p className="text-white text-2xl md:text-3xl font-normal mb-6">Pro đỉnh cao.</p>
            <div className="flex flex-row justify-center gap-4 mb-8">
              <a
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full px-8 py-3 transition-colors duration-200"
                href="/vn/iphone-17-pro/"
                target="_self"
                rel="follow"
                aria-label="Tìm hiểu thêm, iPhone 17 Pro"
              >
                Tìm hiểu thêm
              </a>
              <a
                className="border border-blue-500 hover:bg-blue-900/20 text-blue-400 text-lg font-medium rounded-full px-8 py-3 transition-colors duration-200"
                href="/vn/shop/goto/buy_iphone/iphone_17_pro"
                target="_self"
                rel="follow"
                aria-label="Mua, iPhone 17 Pro"
              >
                Mua
              </a>
            </div>
          </div>
          <div className="flex justify-center w-full overflow-hidden" style={{ height: '340px' }}>
            <img
              src="https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-camera-close-up-250909-960x640.jpg"
              alt="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash"
              className="mx-auto w-full max-w-4xl object-cover object-top"
              draggable="false"
              style={{ height: '100%' }}
            />
          </div>
        </section>

        {/* SOLUTION 3: Using an actual img element for more control */}
        <section className="flex flex-col bg-gray-50 items-center justify-start pt-12 pb-0 relative overflow-hidden">
          {/* Background image as img element */}
          <img
            src="https://www.apple.com/v/iphone-air/b/images/overview/welcome/hero__pkj0eg4w6ki2_xlarge.jpg"
            alt=""
            className="absolute top-0 right-0 w-1/2 h-1/2 object-contain opacity-80"
            style={{
              transform: 'translateX(25%) translateY(15%)', // More predictable positioning
              minWidth: '100%',
              minHeight: '100%'
            }}
          />
          
          <div className="text-center relative z-10">
            <h2 className="text-black text-6xl md:text-7xl font-bold mb-4 mt-[60px]">iPhone Air</h2>
            <p className="text-gray-700 text-xl md:text-2xl font-normal mb-6 max-w-md mx-auto leading-tight">
              iPhone mỏng nhất từng có.<br />
              Với sức mạnh pro bên trong.
            </p>
            <div className="flex flex-row justify-center gap-4 mb-8">
              <a
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full px-8 py-3 transition-colors duration-200"
                href="/vn/iphone-air/"
                target="_self"
                rel="follow"
                aria-label="Tìm hiểu thêm, iPhone Air"
              >
                Tìm hiểu thêm
              </a>
              <a
                className="border border-blue-600 hover:bg-blue-50 text-blue-600 text-lg font-medium rounded-full px-8 py-3 transition-colors duration-200"
                href="/vn/shop/goto/buy_iphone/iphone_air"
                target="_self"
                rel="follow"
                aria-label="Mua, iPhone Air"
              >
                Mua
              </a>
            </div>
          </div>
          <div className="flex justify-center w-full mt-8" style={{ height: '400px' }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent opacity-30 rounded-t-3xl"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home