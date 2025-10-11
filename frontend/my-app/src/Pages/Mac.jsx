import React from 'react'
import ProductPageLayoutTypeA from '../Components/ProductInformation/ProductLayoutTypeA';
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
      screenSize: 13.6,
      screenInfo: "Màn hình Liquid Retina với độ sáng 500 nit và hỗ trợ 1 tỷ màu",
      price: 26508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg",
      batteryLife: "18 giờ",
      connectionPort: {
        thunderbolt4: 2,
        audioJack: 1,
        magSafe: 1
      },
      weight: 1.24,
      appleIntelligence: true
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
      screenSize: 15.3,
      screenInfo: "Màn hình Liquid Retina với độ sáng 500 nit và hỗ trợ 1 tỷ màu",
      price: 28508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg",
      batteryLife: "18 giờ",
      connectionPort: {
        thunderbolt4: 2,
        audioJack: 1,
        magSafe: 1
      },
      weight: 1.51,
      appleIntelligence: true
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
      screenSize: 14.2,
      screenInfo: "Màn hình Liquid Retina XDR với độ sáng đỉnh lên đến 1600 nit, tỷ lệ tương phản 1.000.000:1 và tốc độ làm mới lên đến 120Hz",
      price: 39271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.and.chip.m4pro.and.chip.m4max.fill_elevated_babed04f2.svg",
      batteryLife: "24 giờ",
      connectionPort: {
        thunderbolt4: 3,
        audioJack: 1,
        magSafe: 1,
        hdmi: 1,
      },
      weight: 1.55,
      appleIntelligence: true
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
      screenSize: 16.2,
      screenInfo: "Màn hình Liquid Retina XDR với độ sáng đỉnh lên đến 1600 nit, tỷ lệ tương phản 1.000.000:1 và tốc độ làm mới lên đến 120Hz",
      price: 45271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.and.chip.m4pro.and.chip.m4max.fill_elevated_babed04f2.svg",
      batteryLife: "24 giờ",
      connectionPort: {
        thunderbolt5: 3,
        audioJack: 1,
        magSafe: 1,
        hdmi: 1,
      },
      weight: 2.15,
      appleIntelligence: true
    },
    {
      categoriesName: "Mac",
      productType: "Máy Tính Xách Tay",
      name: "MacBook",
      macType: "Pro",
      color: "Space Black",
      chip: "M4 Max",
      CPU: "12-Core CPU",
      GPU: "16-Core GPU",
      RAM: "24GB Unified Memory",
      SSD: "512GB SSD Storage",
      screenSize: 16.2,
      screenInfo: "Màn hình Liquid Retina XDR với độ sáng đỉnh lên đến 1600 nit, tỷ lệ tương phản 1.000.000:1 và tốc độ làm mới lên đến 120Hz.",
      price: 45271000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.and.chip.m4pro.and.chip.m4max.fill_elevated_babed04f2.svg",
      batteryLife: "24 giờ",
      connectionPort: {
        thunderbolt5: 3,
        audioJack: 1,
        magSafe: 1,
        hdmi: 1,
      },
      weight: 2.15,
      appleIntelligence: true
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
      screenSize: 24,
      price: 26508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg",
      ramInfo: "16GB Unified Memory",
      storageInfo: "256GB SSD Storage",
      connectionPort: {
        thunderbolt4: 2,
        usbC: 2,
        audioJack: 1
      }
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
      screenSize: 24,
      price: 28508000,
      generalInfo: "Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg",
      ramInfo: "16GB Unified Memory",
      storageInfo: "512GB SSD Storage",
      connectionPort: {
        thunderbolt4: 2,
        usbC: 2,
        audioJack: 1
      }
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
      price: 39271000,
      generalInfo: "Máy tính để bàn chuyên nghiệp với hiệu năng cực mạnh cho các tác vụ nặng.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg",
      ramInfo: "16GB Unified Memory",
      storageInfo: "512GB SSD Storage",
      connectionPort: {
        thunderbolt4: 4,
        usbC: 4,
        audioJack: 1,
        ethernet: 2,
        hdmi: 1
      }
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
      price: 45271000,
      generalInfo: "Máy tính để bàn chuyên nghiệp với hiệu năng cực mạnh cho các tác vụ nặng.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      chipImgSrc: "https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.and.chip.m4pro.and.chip.m4max.fill_elevated_babed04f2.svg",
      ramInfo: "24GB Unified Memory",
      storageInfo: "512GB SSD Storage",
      connectionPort: {
        thunderbolt4: 6,
        usbC: 4,
        audioJack: 1,
        ethernet: 2,
        hdmi: 1
      }
    },
    // Add more Pro models...
  ];

  const ManHinh = [
    {
      categoriesName: "Mac",
      productType: "Màn Hình",
      name: "Studio Display",
      color: "Space Black",
      screenSize: 27,
      resolution: "5K (5120 x 2880)",
      refreshRate: "60Hz",
      panelType: "IPS LCD",
      price: 39271000,
      generalInfo: "Màn hình 27 inch với độ phân giải 5K tuyệt đẹp và âm thanh vòm.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      connectionPort: {
        thunderbolt3: 3,
        usbC: 1
      }
    },
    {
      categoriesName: "Mac",
      productType: "Màn Hình",
      name: "Pro Display XDR",
      color: "Space Black",
      screenSize: 32,
      resolution: "6K (6016 x 3384)",
      refreshRate: "60Hz",
      panelType: "IPS LCD",
      price: 45271000,
      generalInfo: "Màn hình chuyên nghiệp 32 inch với công nghệ XDR tiên tiến.",
      imgSrc: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png",
      connectionPort: {
        thunderbolt3: 1,
        usbC: 3
      }
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
      <ProductPageLayoutTypeA
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