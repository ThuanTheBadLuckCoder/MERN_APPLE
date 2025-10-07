import React from 'react'
import ProductKnowledge from '../Components/ProductInformation/ProductKnowledge'
import ProductIntroduction from '../Components/ProductInformation/ProductIntroduction';
import ProductCategoriesContext from '../Components/ProductInformation/ProductCategoriesContext';

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
  return (
    <ProductCategoriesContext.Provider value={productCategories}>
      <div id="Mac" className='flex w-full justify-center flex-col items-center pt-20'>
        <ProductIntroduction {...sectionObj1} />
        <ProductKnowledge {...sectionObj2} />
      </div>

    </ProductCategoriesContext.Provider>
  )
}

export default Mac