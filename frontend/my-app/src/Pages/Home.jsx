import React from 'react'

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <section className="flex flex-col items-center justify-start pt-12 pb-0">
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
        <div className="flex justify-center w-full overflow-hidden" style={{height: '340px'}}>
          <img
            src="https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-camera-close-up-250909-960x640.jpg"
            alt="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash"
            className="mx-auto w-full max-w-4xl object-cover object-top"
            draggable="false"
            style={{height: '100%'}}
          />
        </div>
      </section>
    </div>
  )
}

export default Home