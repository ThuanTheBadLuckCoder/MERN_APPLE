import React from 'react'
import ProductPageLayout from '../Components/ProductInformation/ProductLayoutTypeA';
import { ProductCategoriesContext } from '../Components/ProductInformation/ProductCategoriesContext';

const productCategories = "Mac";

const Mac = () => {
  const sectionObj1 = {
    productSlogan: `Bạn nghĩ được\nlà Mac làm được.`,
    productVideoIntro: "https://www.apple.com/assets-www/en_WW/mac/welcome/x4fa4f3ce9_large.mp4"
  }

  const sectionObj2 = {
    kienThucTongHop: {
      hieuNang: {
        title: "Hiệu Năng Và Thời Lượng Pin",
        subTitle: "Làm tốc độ.\n Suốt nhiều giờ.",
        imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card/xsmall/fc_performance_97f0adc83.jpg",
        allSection: {
          section1: {
            content: `Siêu mạnh mẽ với Apple silicon. 
          Apple silicon mang đến cho máy Mac sức mạnh và tốc độ có khả năng thay đổi cuộc chơi. 
          Máy tích hợp CPU, GPU, Neural Engine vào chỉ một chip tiết kiệm điện, qua đó tăng tốc mọi việc bạn làm. 
          Và điều đó giúp mang lại hiệu năng AI đáng kinh ngạc trên máy Mac để tăng cường khả năng sáng tạo và 
          năng suất của bạn.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_super_bbe2e1643.jpg",
            ref: "Adobe Lightroom, Touch Designer, Cinema 4D, Assassin’s Creed Shadows, Adobe Photoshop1"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      macVaIphone: {
        title: "Mac Và iPhone",
        subTitle: "Đội hình trong mơ.",
        imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card/xsmall/fc_iphone_4cb5d66ac.jpg",
        allSection: {
          section1: {
            content: `Sử dụng iPhone của bạn từ Mac.Với Phản Chiếu iPhone, 
            bạn có thể xem và sử dụng nội dung trên iPhone từ máy Mac mà không cần phải chạm vào điện thoại.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/mac_iphone_7e32cc3f0.jpg",
            ref: "Finder, Unfold"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      khaNangTuongThich: {
        title: "Hiệu Năng Và Thời Lượng Pin",
        subTitle: "Làm tốc độ.\n Suốt nhiều giờ.",
        imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card/xsmall/fc_performance_97f0adc83.jpg",
        allSection: {
          section1: {
            content: `Siêu mạnh mẽ với Apple silicon. 
          Apple silicon mang đến cho máy Mac sức mạnh và tốc độ có khả năng thay đổi cuộc chơi. 
          Máy tích hợp CPU, GPU, Neural Engine vào chỉ một chip tiết kiệm điện, qua đó tăng tốc mọi việc bạn làm. 
          Và điều đó giúp mang lại hiệu năng AI đáng kinh ngạc trên máy Mac để tăng cường khả năng sáng tạo và 
          năng suất của bạn.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_super_bbe2e1643.jpg",
            ref: "Adobe Lightroom, Touch Designer, Cinema 4D, Assassin’s Creed Shadows, Adobe Photoshop1"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      appleIntelligenceVaMacOS: {
        title: "Mac Và iPhone",
        subTitle: "Đội hình trong mơ.",
        imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card/xsmall/fc_iphone_4cb5d66ac.jpg",
        allSection: {
          section1: {
            content: `Sử dụng iPhone của bạn từ Mac.Với Phản Chiếu iPhone, 
            bạn có thể xem và sử dụng nội dung trên iPhone từ máy Mac mà không cần phải chạm vào điện thoại.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/mac_iphone_7e32cc3f0.jpg",
            ref: "Finder, Unfold"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      quyenRiengTu: {
        title: "Hiệu Năng Và Thời Lượng Pin",
        subTitle: "Làm tốc độ.\n Suốt nhiều giờ.",
        imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card/xsmall/fc_performance_97f0adc83.jpg",
        allSection: {
          section1: {
            content: `Siêu mạnh mẽ với Apple silicon. 
          Apple silicon mang đến cho máy Mac sức mạnh và tốc độ có khả năng thay đổi cuộc chơi. 
          Máy tích hợp CPU, GPU, Neural Engine vào chỉ một chip tiết kiệm điện, qua đó tăng tốc mọi việc bạn làm. 
          Và điều đó giúp mang lại hiệu năng AI đáng kinh ngạc trên máy Mac để tăng cường khả năng sáng tạo và 
          năng suất của bạn.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_super_bbe2e1643.jpg",
            ref: "Adobe Lightroom, Touch Designer, Cinema 4D, Assassin’s Creed Shadows, Adobe Photoshop1"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      doBen: {
        title: "Mac Và iPhone",
        subTitle: "Đội hình trong mơ.",
        imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card/xsmall/fc_iphone_4cb5d66ac.jpg",
        allSection: {
          section1: {
            content: `Sử dụng iPhone của bạn từ Mac.Với Phản Chiếu iPhone, 
            bạn có thể xem và sử dụng nội dung trên iPhone từ máy Mac mà không cần phải chạm vào điện thoại.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/mac_iphone_7e32cc3f0.jpg",
            ref: "Finder, Unfold"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
      giaTriCotLoi: {
        title: "Hiệu Năng Và Thời Lượng Pin",
        subTitle: "Làm tốc độ.\n Suốt nhiều giờ.",
        imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card/xsmall/fc_performance_97f0adc83.jpg",
        allSection: {
          section1: {
            content: `Siêu mạnh mẽ với Apple silicon. 
          Apple silicon mang đến cho máy Mac sức mạnh và tốc độ có khả năng thay đổi cuộc chơi. 
          Máy tích hợp CPU, GPU, Neural Engine vào chỉ một chip tiết kiệm điện, qua đó tăng tốc mọi việc bạn làm. 
          Và điều đó giúp mang lại hiệu năng AI đáng kinh ngạc trên máy Mac để tăng cường khả năng sáng tạo và 
          năng suất của bạn.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_super_bbe2e1643.jpg",
            ref: "Adobe Lightroom, Touch Designer, Cinema 4D, Assassin’s Creed Shadows, Adobe Photoshop1"
          },
          section2: {
            content: `Làm việc cả ngày chỉ với một lần sạc.
          Nhờ khả năng tiết kiệm điện của Apple silicon, máy tính xách tay Mac có thời lượng pin lên đến 
          24 giờ cùng hiệu năng đáng kinh ngạc, bất kể bạn có đang cắm sạc hay không.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_charge_b3ac76937.jpg"
          },
          section3: {
            content: `Làm giỏi. Làm nhanh.Từ thiết kế bài thuyết trình tuyệt đẹp cho đến tạo một bảng tính hoành tráng,
            Mac giúp bạn hoàn thành nhiều việc hơn và nhanh chóng hơn, 
            bất kể bạn đang học tập trên lớp hay điều hành doanh nghiệp.`,
            imgSrc: "https://www.apple.com/assets-www/vi_VN/mac/feature_card_boc/large/performance_smart_bbb7d4cb6.jpg",
            ref: "Microsoft Excel, Zoom, Microsoft PowerPoint, Lịch"
          },
          section4: {
            content: `Hễ nghĩ ra là làm xong ngay.Từ thu âm podcast cho đến biên tập bộ phim đầu tay, 
            bạn có thể thỏa sức sáng tạo theo những cách hoàn toàn mới với tốc độ và sức mạnh của máy Mac siêu năng lực này.`,
            imgSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card_boc/large/performance_speed_bb26f35b9.jpg",
            ref: "GarageBand, Adobe Premiere Pro, Affinity Photo 2"
          }
        }
      },
    }
  };

  const macBookAirList = [
    {
      categoriesName: "Mac",
      productType: "Máy Tính Xách Tay",
      name: "MacBook",
      macType: "Air",
      color: "Sky Blue",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "8-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "256GB SSD Storage",
      screenSize: "13",
      price: 26508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    {
      categoriesName: "Mac",
      productType: "Máy Tính Xách Tay",
      name: "MacBook",
      macType: "Air",
      color: "Silver",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "10-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "15",
      price: 28508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    // Add more Air models...
  ];

  const macBookProList = [
    {
      categoriesName: "Mac",
      productType: "Máy Tính Xách Tay",
      name: "MacBook",
      macType: "Pro",
      color: "Space Black",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "10-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "14",
      price: 39271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    {
      categoriesName: "Mac",
      productType: "Máy Tính Xách Tay",
      name: "MacBook",
      macType: "Pro",
      color: "Space Black",
      chip: "M4 Pro",
      CPU: "12-Core CPU",
      GPU: "16-Core GPU",
      RAM: "24GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "16",
      price: 45271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    // Add more Pro models...
  ];

  const iMac = [
    {
      categoriesName: "Mac",
      productType: "Máy Tính Để Bàn",
      name: "iMac",
      color: "Sky Blue",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "8-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "256GB SSD Storage",
      screenSize: "13",
      price: 26508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    {
      categoriesName: "Mac",
      productType: "Máy Tính Để Bàn",
      name: "iMac",
      color: "Silver",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "10-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "15",
      price: 28508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    // Add more Air models...
  ];

  const MacPro = [
    {
      categoriesName: "Mac",
      productType: "Máy Tính Để Bàn",
      name: "Mac Pro",
      color: "Space Black",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "10-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "14",
      price: 39271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    {
      categoriesName: "Mac",
      productType: "Máy Tính Để Bàn",
      name: "Mac Pro",
      color: "Space Black",
      chip: "M4 Pro",
      CPU: "12-Core CPU",
      GPU: "16-Core GPU",
      RAM: "24GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "16",
      price: 45271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    // Add more Pro models...
  ];

  const ManHinh = [
    {
      categoriesName: "Mac",
      productType: "Màn Hình",
      name: "ManHinh",
      color: "Space Black",
      chip: "M4",
      CPU: "10-Core CPU",
      GPU: "10-Core GPU",
      RAM: "16GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "14",
      price: 39271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    {
      categoriesName: "Mac",
      productType: "Màn Hình",
      name: "ManHinh",
      color: "Space Black",
      chip: "M4 Pro",
      CPU: "12-Core CPU",
      GPU: "16-Core GPU",
      RAM: "24GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: "16",
      price: 45271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"
    },
    // Add more Pro models...
  ];

  const sectionObj3 = {
    macBookAirList,
    macBookProList,
    iMac,
    MacPro,
    ManHinh
  };

  return (
    <ProductCategoriesContext.Provider value={productCategories}>
      <ProductPageLayout
        introduction={sectionObj1}
        knowledge={sectionObj2}
        explore={{
          macBookAirList,
          macBookProList,
          iMac,
          MacPro,
          ManHinh
        }}
      />
      
    </ProductCategoriesContext.Provider>
  );
}

export default Mac