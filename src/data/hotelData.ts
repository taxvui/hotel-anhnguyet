export interface Room {
  id: string;
  name: string;
  category: string;
  pricePerNight: number;
  area: string;
  capacity: string;
  bedType: string;
  image: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'crab' | 'seafood' | 'local' | 'banquet';
  price: string;
  unit: string;
  image: string;
  highlight: string;
  description: string;
  badge?: string;
}

export interface SetMenuPackage {
  id: string;
  pricePerPax: number;
  priceFormatted: string;
  paxTier: string;
  note: string;
  sets: {
    setName: string;
    dishes: string[];
  }[];
}

export interface OriginalMenuScan {
  page: number;
  title: string;
  priceRange: string;
  imageUrl: string;
  fullImageUrl?: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'restaurant' | 'rooms' | 'events' | 'pool' | 'menus';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface HighlightFeature {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface Testimonial {
  name: string;
  title: string;
  stayType: string;
  comment: string;
  rating: number;
  date: string;
}

export const HOTEL_INFO = {
  name: "Nhà hàng & Khách sạn Ánh Nguyệt Cà Mau",
  shortName: "Ánh Nguyệt Hotel & Restaurant",
  tagline: "Đẳng Cấp Nghỉ Dưỡng & Tinh Hoa Ẩm Thực Đất Mũi",
  address: "207 Phan Ngọc Hiển, Phường Tân Thành, Tỉnh Cà Mau",
  hotline: "0290 3567 666",
  phoneMobile: "0918 868 586",
  email: "anhnguyethotel@gmail.com",
  website: "https://anhnguyethotel.com.vn",
  googleMapsUrl: "https://maps.google.com/?q=207+Phan+Ng%E1%BB%8Dc+Hi%E1%BB%83n+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+Th%C3%A0nh+T%E1%BB%89nh+C%C3%A0+Mau",
  checkInTime: "14:00",
  checkOutTime: "12:00",
  coordinates: {
    lat: 9.176882,
    lng: 105.152431,
  },
};

export const ROOMS_DATA: Room[] = [
  {
    id: "superior-room",
    name: "SUPERIOR Room",
    category: "Phòng Tiêu Chuẩn",
    pricePerNight: 590000,
    area: "32 m²",
    capacity: "2 Người lớn",
    bedType: "1 Giường King hoặc 2 Giường Twin",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_122909909_iOS.jpg",
    description: "Phòng nghỉ tiện nghi, sạch sẽ, thiết kế hiện đại tại trung tâm Cà Mau, trang bị đầy đủ máy lạnh, Wi-Fi và truyền hình cáp, rất phù hợp cho kỳ nghỉ dưỡng, công tác và gia đình.",
    features: [
      "Giường ngủ nệm cao su non êm ái",
      "Phòng tắm đứng hiện đại vòi sen nước nóng lạnh",
      "Wi-Fi tốc độ cao & TV LED truyền hình cáp",
      "Miễn phí nước suối, trà thảo mộc & cà phê",
      "Dịch vụ dọn phòng chu đáo hàng ngày",
    ],
    isPopular: false,
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "Phòng Sang Trọng Hướng Phố",
    pricePerNight: 690000,
    area: "40 m²",
    capacity: "2 Người lớn",
    bedType: "King Bed 1.8m x 2.0m",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_123036452_iOS.jpg",
    description: "Không gian thoáng đãng ngập tràn ánh sáng tự nhiên với cửa sổ kính view thành phố Cà Mau, sàn gỗ sang trọng kết hợp bàn làm việc và minibar tiện nghi.",
    features: [
      "Cửa sổ kính cách âm hai lớp view thành phố",
      "Bàn làm việc doanh nhân & Minibar tiện nghi",
      "Phòng tắm đứng vòi sen mưa hiện đại",
      "Miễn phí vé trải nghiệm hồ bơi ngoài trời",
      "Két sắt an toàn điện tử trong phòng",
    ],
    isPopular: false,
  },
  {
    id: "suite-room",
    name: "Suite Room",
    category: "Phòng Suite Cao Cấp",
    pricePerNight: 890000,
    area: "52 m²",
    capacity: "2 Người lớn + 1 Trẻ em",
    bedType: "King Bed 2.0m x 2.0m",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_123712760_iOS-1.jpg",
    description: "Căn phòng Suite cao cấp với khu vực sofa tiếp khách riêng biệt, bồn tắm thư giãn ngắm cảnh và tầm nhìn panorama bao trọn trục đại lộ Phan Ngọc Hiển sầm uất.",
    features: [
      "Khu vực phòng khách với sofa da êm ái",
      "Bồn tắm nằm cao cấp thư giãn ngắm cảnh",
      "Tầm nhìn panorama ôm trọn Phan Ngọc Hiển",
      "Set hoa quả tươi & nước khoáng chào đón",
      "Ưu tiên nhận phòng sớm & trả phòng trễ linh hoạt",
    ],
    isPopular: true,
  },
  {
    id: "vip-room",
    name: "Vip Room",
    category: "Phòng VIP Thượng Lưu",
    pricePerNight: 1200000,
    area: "68 m²",
    capacity: "2 Người lớn + 2 Trẻ em",
    bedType: "Super King Bed 2.2m x 2.0m",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_7093.jpg",
    description: "Hạng phòng VIP đỉnh cao thượng lưu tại Khách sạn Ánh Nguyệt. Thiết kế hoàng gia lộng lẫy với nội thất gỗ sang trọng, bồn sục Jacuzzi hiện đại và dịch vụ đặc quyền riêng biệt.",
    features: [
      "Bồn tắm sục Jacuzzi thủy lực massage thư giãn",
      "Không gian phòng khách và phòng ngủ hoàng gia tách biệt",
      "Bữa sáng VIP phục vụ tận phòng theo yêu cầu",
      "Quản gia riêng phục vụ hỗ trợ 24/7",
      "Hỗ trợ đón tiễn sân bay Cà Mau bằng xe riêng",
    ],
    isPopular: true,
  },
];

export const MENU_SPECIALTIES: MenuItem[] = [
  {
    id: "cua-nam-can-hap-bia",
    name: "Cua Năm Căn Hấp Bia Gừng Tươi",
    category: "crab",
    price: "Theo thời giá",
    unit: "Kg (tươi sống)",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642311742298_b2316eb85f7c6aac385f5c619ac149ee-610x610.jpg",
    highlight: "Đặc sản số 1 Đất Mũi Cà Mau",
    description: "Tuyển chọn cua Năm Căn gạch son đọng đầy, vỏ mỏng thịt chắc ngọt đậm đà, hấp bia gừng giữ trọn vị ngọt biển phù sa trứ danh.",
    badge: "Món Bán Chạy Nhất",
  },
  {
    id: "cua-rang-me-cot-dua",
    name: "Cua Cà Mau Rang Me Cốt Dừa Ánh Nguyệt",
    category: "crab",
    price: "Theo thời giá",
    unit: "Kg",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642315312288_c13ec9f399ad24dae2646a3ea1bc6fb4.jpg",
    highlight: "Công thức gia truyền 20 năm",
    description: "Cua thịt đẫy đà đảo chảo nóng cùng sốt me ngào cốt dừa béo bùi, chua ngọt thanh mát, ăn kèm bánh mì giòn rụm khó quên.",
    badge: "Bếp Trưởng Khuyên Dùng",
  },
  {
    id: "ca-thoi-loi-nuong-muoi-ot",
    name: "Cá Thòi Lòi Nướng Muối Ớt Rừng Đước",
    category: "seafood",
    price: "245.000",
    unit: "Phần (5-6 con)",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    highlight: "Kỳ quan rừng ngập mặn",
    description: "Loài cá kỳ lạ leo cây của Đất Mũi, nướng trên than đước đỏ rực với muối ớt xiêm cay xè, thịt trắng dai ngọt như thịt gà tơ.",
    badge: "Độc Bản Cà Mau",
  },
  {
    id: "ca-loc-nuong-trui",
    name: "Cá Lóc Nướng Trui Cuốn Bánh Tráng Rau Sống",
    category: "local",
    price: "180.000",
    unit: "Phần (Cá đồng lớn)",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642311528167_2a29a424d522e41f54277f7100d2971e-1024x576.jpg",
    highlight: "Hương vị đồng quê Nam Bộ",
    description: "Cá lóc đồng nướng rơm thơm lừng mỡ hành đậu phộng, cuốn bánh tráng, chuối chát, khế chua và chấm mắm me chua ngọt đậm đà.",
    badge: "Món Dân Dã Trứ Danh",
  },
  {
    id: "lau-mam-dong-que",
    name: "Lẩu Mắm Đồng Quê U Minh",
    category: "local",
    price: "380.000",
    unit: "Nồi lẩu lớn (3-4 người)",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    highlight: "Nấu từ mắm cá đồng ủ men truyền thống",
    description: "Nấu từ mắm cá sặc thơm lừng, nhúng cá tươi, tôm sú, thịt ba chỉ cùng đĩa rau đồng bồn bồn, bông súng, điên điển, rau đắng.",
    badge: "Hương Vị Nam Bộ",
  },
  {
    id: "tom-dat-nuong-muoi-ot",
    name: "Tôm Đất Cà Mau Nướng Muối Ớt",
    category: "seafood",
    price: "290.000",
    unit: "Đĩa 400g",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642315047688_f32a23f2cdb0842f914bee7e8ff6d4f2-1024x576.jpg",
    highlight: "Tôm tự nhiên vùng đầm sinh thái",
    description: "Tôm đất thiên nhiên vỏ mỏng giòn rụm, ngọt lịm từ đầu đến đuôi, nướng vừa tới chấm muối tiêu chanh ớt hiểm.",
  },
  {
    id: "bon-bon-xao-vop",
    name: "Bồn Bồn Tươi Xào Vọp Rừng",
    category: "local",
    price: "185.000",
    unit: "Đĩa lớn",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    highlight: "Đặc sản kết hợp xứ Cà Mau",
    description: "Cọng bồn bồn trắng giòn tươi non xào nhanh lửa lớn cùng thịt vọp rừng ngập mặn ngọt đậm, món ăn đặc trưng của Đất Mũi.",
  },
  {
    id: "set-tiec-vip-anh-nguyet",
    name: "Set Bàn Tiệc Hội Nghị & Chiêu Đãi Ánh Nguyệt",
    category: "banquet",
    price: "Từ 110.000đ - 250.000đ",
    unit: "Suất / Khách đoàn",
    image: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642314756400_2c7e6388b24150c3a73e55303357517a-660x913.jpg",
    highlight: "Thực đơn đoàn 2025 phong phú",
    description: "Đa dạng các set menu từ 110k đến 250k/suất cho đoàn từ 8 khách trở lên. Đầy đủ món mặn, món xào, lẩu đặc sản, cơm trắng và tráng miệng trà đá.",
    badge: "Phục Vụ Đoàn Du Lịch",
  },
];

// Dữ liệu bảng giá thực đơn khách đoàn chi tiết từ https://anhnguyethotel.com/our-menus/
export const SET_MENUS_DATA: SetMenuPackage[] = [
  {
    id: "menu-110k",
    pricePerPax: 110000,
    priceFormatted: "110.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Cá lóc kho", "Rau thập cẩm luộc", "Canh mồng tơi nấu thịt bằm", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Thịt heo kho tiêu", "Cải ngọt xào tỏi", "Canh bầu nấu tôm", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 3",
        dishes: ["Rau muống xào tỏi", "Cá rô kho + dưa leo", "Canh khổ qua nấu tôm", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 4",
        dishes: ["Rau cải xào dầu hào", "Gà ram gừng + dưa leo", "Canh cải chua sườn non", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-120k",
    pricePerPax: 120000,
    priceFormatted: "120.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Mực hấp hành gừng", "Rau cải xào tỏi", "Cá lóc kho + dưa leo", "Lẩu cải xanh chả cá", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Gỏi tai heo + bánh phồng", "Giá, hẹ xào đậu hủ", "Sườn ram mặn", "Lẩu cá lóc nấu chua", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-130k",
    pricePerPax: 130000,
    priceFormatted: "130.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Cá lóc nướng + rau sống", "Đậu hủ nhồi thịt sốt cà", "Gà ram gừng", "Bầu luộc + trứng", "Lẩu chua cá ba sa", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Mực hấp hành gừng", "Trứng chiên thịt bằm", "Cá rô kho", "Rau muống luộc", "Canh vịt nấu củ cải muối", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-140k",
    pricePerPax: 140000,
    priceFormatted: "140.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Tôm hấp nước dừa", "Cá rô kho tộ", "Bông cải xào thịt", "Canh chua sườn non", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Cá lóc nướng + Rau sống", "Gỏi tai heo + Bánh phồng", "Mực xào giá, hẹ", "Thịt heo kho tiêu", "Lẩu cá diêu hồng nấu ngót", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-150k",
    pricePerPax: 150000,
    priceFormatted: "150.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Gỏi tai heo + Bánh phồng", "Cá diêu hồng hấp đông cô", "Rau cải xào tôm", "Sườn ram mặn", "Lẩu mắm đồng quê", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Cá lóc nướng + Rau sống", "Mực hấp hành gừng", "Đậu que xào thịt", "Gà ram gừng", "Lẩu cá rô nấu ngót", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-160k",
    pricePerPax: 160000,
    priceFormatted: "160.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Mực hấp hành gừng", "Tôm nướng muối ớt", "Rau cải xào bò", "Gà ram gừng", "Lẩu cá diêu hồng nấu chua", "Cơm trắng", "Trái cây + Trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Gỏi tai heo + Bánh phồng", "Cá diêu hồng hấp đông cô", "Bồn bồn xào vọp", "Cá lóc kho tiêu", "Lẩu gà ta nấu chanh ớt", "Cơm trắng", "Trái cây + Trà đá"]
      }
    ]
  },
  {
    id: "menu-170k",
    pricePerPax: 170000,
    priceFormatted: "170.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Mực hấp hành gừng", "Tôm hấp nước dừa", "Gà xào sả ớt", "Đậu rồng xào bò", "Bầu luộc + trứng", "Lẩu cá ngát nấu chua", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Gỏi tai heo + bánh phồng", "Cá cam nướng muối ớt + rau sống", "Cá rô + thịt kho", "Bồn bồn xào vọp", "Trứng chiên hành", "Lẩu gà ta nấu chanh ớt", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 3",
        dishes: ["Ốc lác hấp sả", "Cá điêu hồng chiên + mắm xoài", "Bồn bồn xào tôm", "Salad dầu giấm", "Gà kho sả ớt", "Lẩu cá lóc nấu mẻ", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 4",
        dishes: ["Cá lóc hấp bầu", "Tôm nướng muối ớt", "Đậu que xào tôm", "Rau thập cẩm luộc", "Thịt heo kho tiêu", "Lẩu chua cá hú", "Cơm trắng", "Trái cây + trà đá"]
      }
    ]
  },
  {
    id: "menu-180k",
    pricePerPax: 180000,
    priceFormatted: "180.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Chả giò Ánh Nguyệt", "Nghêu hấp Thái Lan", "Thịt heo xào đậu que", "Cà tím nướng mỡ hành", "Tôm thịt rim mặn ngọt", "Lẩu cá rô nấu ngọt", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Cá lóc nướng + rau sống", "Thịt ba chỉ luộc - cà pháo - mắm nêm", "Mực xào chua ngọt", "Cải thìa xào dầu hào", "Cá rô kho tộ", "Lẩu chua cá ngát", "Cơm trắng", "Trái cây + trà đá"]
      }
    ]
  },
  {
    id: "menu-200k",
    pricePerPax: 200000,
    priceFormatted: "200.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Mực ống hấp gừng", "Tôm nướng mọi + rau sống", "Nghêu hấp Thái Lan", "Cải thìa xào bò", "Cá ngát kho tộ", "Rau luộc", "Lẩu canh cua đồng rau tập tàng", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Cá lóc nướng + rau sống, bánh tráng", "Ốc len xào dừa", "Vọp nướng mỡ hành", "Bồn bồn xào tôm", "Thịt heo kho tộ", "Salad trộn dầu giấm", "Lẩu chua cá ngát", "Cơm trắng", "Trái cây + trà đá"]
      }
    ]
  },
  {
    id: "menu-220k",
    pricePerPax: 220000,
    priceFormatted: "220.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Cá lóc nướng + rau sống", "Tôm hấp nước dừa", "Mực hấp gừng", "Salad trứng", "Gà kho gừng", "Bồn bồn xào vọp", "Lẩu cá hú nấu chua", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Ốc lác hấp sả", "Rau càng cua trộn thịt bò", "Cá rô nướng mọi + rau sống", "Đậu hủ dồn thịt sốt cà", "Sườn ram mặn", "Cải thìa xào dầu hào", "Lẩu vịt nấu chao + bún", "Cơm trắng", "Trái cây + trà đá"]
      }
    ]
  },
  {
    id: "menu-250k",
    pricePerPax: 250000,
    priceFormatted: "250.000 đ",
    paxTier: "Đoàn từ 8 khách",
    note: "Đoàn dưới 8 khách phụ thu 40.000đ/khách. Giá chưa bao gồm VAT.",
    sets: [
      {
        setName: "Set 1",
        dishes: ["Gà quay + bánh bao", "Tôm nướng muối ớt", "Mực nhồi thịt sốt cà", "Bồn bồn xào vọp", "Cá đối kho dưa cải", "Rau luộc thập cẩm kho quẹt", "Lẩu cua đồng rau tập tàng", "Cơm trắng", "Trái cây + trà đá"]
      },
      {
        setName: "Set 2",
        dishes: ["Gà ta hấp hành + gỏi bắp chuối", "Mực hấp gừng", "Cá lóc nướng + rau sống", "Cải thìa xào bò", "Cá rô kho tộ", "Dưa giá chua", "Cà tím nướng mỡ hành", "Lẩu cá đối nấu khóm", "Cơm trắng", "Trái cây + trà đá"]
      }
    ]
  }
];

// 6 trang Scan thực đơn gốc được đăng tải trên https://anhnguyethotel.com/our-menus/
export const ORIGINAL_MENU_SCANS: OriginalMenuScan[] = [
  {
    page: 1,
    title: "Thực Đơn Khách Đoàn - Trang 1",
    priceRange: "110.000đ - 130.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-0-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-0.jpg",
    description: "Bao gồm các Set 1, 2, 3, 4 giá 110K; Set 1, 2 giá 120K và Set 1, 2 giá 130K. Các món cá lóc kho, canh mồng tơi, mực hấp, lẩu cải xanh."
  },
  {
    page: 2,
    title: "Thực Đơn Khách Đoàn - Trang 2",
    priceRange: "140.000đ - 160.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-1-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-1.jpg",
    description: "Bao gồm các Set menu giá 140K, 150K, 160K với các món tôm hấp nước dừa, lẩu mắm đồng quê, tôm nướng muối ớt, cá diêu hồng hấp đông cô."
  },
  {
    page: 3,
    title: "Thực Đơn Khách Đoàn - Trang 3",
    priceRange: "170.000đ - 180.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-2-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-2.jpg",
    description: "Bao gồm 4 Set menu 170K và 2 Set menu 180K với lẩu cá ngát nấu chua, chả giò, nghêu hấp Thái, cá cam nướng muối ớt, bồn bồn xào vọp."
  },
  {
    page: 4,
    title: "Thực Đơn Khách Đoàn - Trang 4",
    priceRange: "190.000đ - 210.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-3-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-3.jpg",
    description: "Bao gồm 4 Set 190K, 2 Set 200K và 2 Set 210K với ốc len xào dừa, vọp nướng mỡ hành, lẩu canh cua đồng, cá đối kho cải chua."
  },
  {
    page: 5,
    title: "Thực Đơn Khách Đoàn - Trang 5",
    priceRange: "220.000đ - 230.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-4-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-4.jpg",
    description: "Bao gồm các Set 220K và 230K với lẩu vịt nấu chao, rau càng cua trộn bò, tôm đất hấp nước dừa, cá rô kho tộ, mực chiên muối tiêu."
  },
  {
    page: 6,
    title: "Thực Đơn Khách Đoàn - Trang 6",
    priceRange: "240.000đ - 250.000đ / khách",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-5-724x1024.jpg",
    fullImageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-5.jpg",
    description: "Bao gồm các Set 240K và 250K cao cấp nhất với gà quay bánh bao, cá tai tượng chiên xù, lẩu cá chẽm khoai môn, gà ta hấp hành gỏi bắp chuối."
  }
];

// Tất cả hình ảnh thực tế trích xuất từ website https://anhnguyethotel.com
export const HOTEL_GALLERY_IMAGES: GalleryItem[] = [
  // 1. Nhà hàng & Bàn tiệc
  {
    id: "gal-nhahang-1",
    title: "Đại Sảnh Nhà Hàng Ánh Nguyệt",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_7089-1-1024x683.jpg",
    caption: "Không gian ẩm thực sang trọng, bàn ghế gỗ cao cấp, phục vụ đoàn khách và tiệc gia đình chu đáo."
  },
  {
    id: "gal-nhahang-2",
    title: "Phòng Tiệc VIP Tiếp Khách Riêng Tư",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_7097-1024x683.jpg",
    caption: "Phòng ăn VIP máy lạnh biệt lập dành cho các buổi tiếp đãi đối tác, hội họp doanh nghiệp và tiệc sinh nhật."
  },
  {
    id: "gal-nhahang-3",
    title: "Khuôn Viên Sân Vườn Nhà Hàng",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_9592.jpg",
    caption: "Không gian mở thoáng đãng rợp bóng cây xanh, thưởng thức ly cà phê sáng và món ăn miền Tây sông nước."
  },
  {
    id: "gal-nhahang-4",
    title: "Bàn Tiệc Đặc Sản Đất Mũi Cà Mau",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642315312288_c13ec9f399ad24dae2646a3ea1bc6fb4.jpg",
    caption: "Mâm tiệc hải sản đầy ắp đặc sản Cua Năm Căn, tôm đất, cá thòi lòi và các món đồng quê tươi ngon."
  },
  {
    id: "gal-nhahang-5",
    title: "Món Tiệc Khai Vị & Chiêu Đãi Đoàn",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642315047688_f32a23f2cdb0842f914bee7e8ff6d4f2-1024x576.jpg",
    caption: "Các món ăn được chế biến bởi đầu bếp giàu kinh nghiệm 20 năm, bài trí bắt mắt và ngon miệng."
  },
  {
    id: "gal-nhahang-6",
    title: "Ẩm Thực Nam Bộ Đậm Đà Bản Sắc",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642311528167_2a29a424d522e41f54277f7100d2971e-1024x576.jpg",
    caption: "Cá lóc nướng trui, canh chua cá ngát, cá rô kho tộ và rau rừng tươi non mỗi ngày."
  },
  {
    id: "gal-nhahang-7",
    title: "Cua Năm Căn & Hải Sản Tươi Sống",
    category: "restaurant",
    categoryLabel: "Nhà Hàng & Bàn Tiệc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642311742298_b2316eb85f7c6aac385f5c619ac149ee-610x610.jpg",
    caption: "Cua Năm Căn chính gốc gạch son đầy ắp, vỏ mỏng thịt chắc ngọt lịm từ môi trường phù sa ngập mặn."
  },

  // 2. Phòng Nghỉ & Kiến Trúc Khách Sạn
  {
    id: "gal-phong-1",
    title: "Mặt Tiền Khách Sạn & Nhà Hàng Ánh Nguyệt",
    category: "rooms",
    categoryLabel: "Phòng Nghỉ & Kiến Trúc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_9612.jpg",
    caption: "Tọa lạc tại vị trí đắc địa số 207 Phan Ngọc Hiển, Phường Tân Thành, trung tâm TP. Cà Mau."
  },
  {
    id: "gal-phong-2",
    title: "Hạng Phòng SUPERIOR Room (590K)",
    category: "rooms",
    categoryLabel: "Phòng Nghỉ & Kiến Trúc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_122909909_iOS.jpg",
    caption: "Tiện nghi, sạch sẽ, giường êm ái, máy lạnh, TV LED, giá 590.000đ/đêm phù hợp công tác và du lịch."
  },
  {
    id: "gal-phong-3",
    title: "Hạng Phòng Deluxe Room (690K)",
    category: "rooms",
    categoryLabel: "Phòng Nghỉ & Kiến Trúc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_123036452_iOS.jpg",
    caption: "Cửa sổ kính lớn đón ánh sáng tự nhiên hướng phố Phan Ngọc Hiển, bàn làm việc và minibar tiện nghi."
  },
  {
    id: "gal-phong-4",
    title: "Hạng Phòng Suite Room (890K)",
    category: "rooms",
    categoryLabel: "Phòng Nghỉ & Kiến Trúc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/20250314_123712760_iOS-1.jpg",
    caption: "Khu vực tiếp khách riêng biệt với sofa da cao cấp, bồn tắm thư giãn ngắm cảnh trung tâm thành phố."
  },
  {
    id: "gal-phong-5",
    title: "Hạng Phòng Vip Room Thượng Lưu (1.200K)",
    category: "rooms",
    categoryLabel: "Phòng Nghỉ & Kiến Trúc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_7093.jpg",
    caption: "Không gian hoàng gia đẳng cấp bậc nhất tại Cà Mau, bồn sục Jacuzzi massage thư giãn chuẩn VIP."
  },

  // 3. Hội Nghị & Tiệc Cưới
  {
    id: "gal-sukien-1",
    title: "Trung Tâm Hội Nghị & Tiệc Cưới 500 Khách",
    category: "events",
    categoryLabel: "Hội Nghị & Sự Kiện",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_9644-1024x682.jpg",
    caption: "Sảnh tiệc rộng lớn với hệ thống âm thanh, ánh sáng hiện đại và màn hình LED phục vụ sự kiện quy mô lớn."
  },
  {
    id: "gal-sukien-2",
    title: "Bàn Tiệc Hội Nghị Trọng Thể",
    category: "events",
    categoryLabel: "Hội Nghị & Sự Kiện",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642314756400_2c7e6388b24150c3a73e55303357517a-660x913.jpg",
    caption: "Setup tiêu chuẩn sang trọng, khăn trải bàn trang nhã dành cho các đại biểu và doanh nghiệp."
  },
  {
    id: "gal-sukien-3",
    title: "Sảnh Tiệc Hoàng Gia Lộng Lẫy",
    category: "events",
    categoryLabel: "Hội Nghị & Sự Kiện",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/z3642315857014_a8e7f837c017a5352a6bf6c95dfc5e20-767x1024.jpg",
    caption: "Không gian tiệc cưới lãng mạn, ẩm thực đa dạng từ đặc sản miền Tây tới món Á - Âu cao cấp."
  },

  // 4. Hồ Bơi & Tiện Ích
  {
    id: "gal-tienich-1",
    title: "Hồ Bơi Xanh Ngoài Trời Ánh Nguyệt",
    category: "pool",
    categoryLabel: "Hồ Bơi & Tiện Ích",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/IMG_9589.jpg",
    caption: "Làn nước xanh mát thư giãn giữa lòng thành phố, phục vụ miễn phí cho khách lưu trú tại khách sạn."
  },
  {
    id: "gal-tienich-2",
    title: "Khu Spa Massage & Thư Giãn",
    category: "pool",
    categoryLabel: "Hồ Bơi & Tiện Ích",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2018/06/The-Massage-Suite-2048x1365.jpg",
    caption: "Dịch vụ massage xông hơi thảo dược giúp tái tạo năng lượng sau một ngày tham quan Đất Mũi."
  },

  // 5. Thực Đơn Gốc Nhà Hàng
  {
    id: "gal-menu-1",
    title: "Thực Đơn Đoàn Trang 1 (110K - 130K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-0-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 1)."
  },
  {
    id: "gal-menu-2",
    title: "Thực Đơn Đoàn Trang 2 (140K - 160K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-1-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 2)."
  },
  {
    id: "gal-menu-3",
    title: "Thực Đơn Đoàn Trang 3 (170K - 180K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-2-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 3)."
  },
  {
    id: "gal-menu-4",
    title: "Thực Đơn Đoàn Trang 4 (190K - 210K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-3-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 4)."
  },
  {
    id: "gal-menu-5",
    title: "Thực Đơn Đoàn Trang 5 (220K - 230K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-4-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 5)."
  },
  {
    id: "gal-menu-6",
    title: "Thực Đơn Đoàn Trang 6 (240K - 250K)",
    category: "menus",
    categoryLabel: "Thực Đơn Gốc",
    imageUrl: "https://anhnguyethotel.com/wp-content/uploads/2025/07/MENU-hinh-anh-5-724x1024.jpg",
    caption: "Bảng thực đơn khách đoàn niêm yết chính thức năm 2025 của Nhà hàng Ánh Nguyệt (Trang 6)."
  }
];

export const HIGHLIGHTS_DATA: HighlightFeature[] = [
  {
    number: "01",
    title: "Tọa Độ Kim Cương Trung Tâm Cà Mau",
    tagline: "207 Phan Ngọc Hiển - Trục lộ phồn hoa nhất thành phố",
    description: "Chỉ cách Tượng đài Cà Mau, Trung tâm hội nghị tỉnh và bến xe trung tâm chưa đầy 3-5 phút. Dễ dàng di chuyển tới Sân bay Cà Mau và điểm xuất phát tour khám phá Đất Mũi.",
    metric: "03 Phút",
    metricLabel: "Đến Trung Tâm Hành Chính & Quảng Trường",
  },
  {
    number: "02",
    title: "Ẩm Thực Đặc Sản Đạt Chuẩn Nghệ Nhân",
    tagline: "Cua Năm Căn và hải sản ngập mặn tuyển chọn tươi sống",
    description: "Nhà hàng Ánh Nguyệt sở hữu bể hải sản tươi sống trực tiếp từ các vựa lớn nhất Đất Mũi. Không đông lạnh, chế biến ngay khi thực khách gọi món theo tiêu chuẩn vệ sinh khắt khe.",
    metric: "100%",
    metricLabel: "Hải Sản Tươi Sống Tuyển Chọn Hàng Ngày",
  },
  {
    number: "03",
    title: "Không Gian Kính Sang Trọng Chuẩn Boutique",
    tagline: "Hồ bơi sân vườn, sảnh tiệc & phòng nghỉ tiện nghi VIP",
    description: "Khác biệt hoàn toàn với các nhà nghỉ truyền thống, Ánh Nguyệt mang đến quần thể dịch vụ khép kín: hồ bơi ngoài trời xanh mát, phòng nghỉ cách âm tuyệt đối và phòng hội nghị 500 khách.",
    metric: "500+",
    metricLabel: "Sức Chứa Trung Tâm Sự Kiện & Hội Nghị",
  },
  {
    number: "04",
    title: "Lòng Hiếu Khách & Phục Vụ 24/7 Chu Đáo",
    tagline: "Tận tâm như người nhà, chuyên nghiệp chuẩn dịch vụ",
    description: "Đội ngũ nhân sự người bản địa Cà Mau thân thiện, hiếu khách, luôn sẵn sàng hỗ trợ đặt xe, tư vấn lịch trình tham quan U Minh Hạ - Mũi Cà Mau và phục vụ ẩm thực phòng đêm.",
    metric: "24/7",
    metricLabel: "Dịch Vụ Lễ Tân & Phục Vụ Ẩm Thực Tận Phòng",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ông Trần Đăng Khoa",
    title: "Giám đốc Dự án Xây dựng Vinaseed",
    stayType: "Công tác 4 ngày tại Cà Mau",
    comment: "Tôi đi công tác Cà Mau thường xuyên, Ánh Nguyệt là khách sạn ưng ý nhất tại đường Phan Ngọc Hiển. Phòng Suite cực kỳ yên tĩnh, giường nệm cao cấp, ăn sáng có món lẩu cua và bún nước lèo rất ngon.",
    rating: 5,
    date: "Tháng 8/2026",
  },
  {
    name: "Bà Nguyễn Mai Phương",
    title: "Khách Du Lịch Hà Nội",
    stayType: "Kỳ nghỉ gia đình 3 thế hệ",
    comment: "Gia đình tôi 6 người ở phòng Family rất rộng rãi và sạch bong. Cua Cà Mau ở nhà hàng tươi rói, gạch son đầy ắp mà giá niêm yết cực kỳ rõ ràng, không bị chém như các quán ngoài.",
    rating: 5,
    date: "Tháng 9/2026",
  },
  {
    name: "Lê Minh Trí",
    title: "Food & Travel Blogger",
    stayType: "Chuyến trải nghiệm ẩm thực Đất Mũi",
    comment: "Món cá thòi lòi nướng muối ớt và cua rang me ở Ánh Nguyệt xứng đáng điểm 10/10. Kiến trúc kính ánh sáng ban ngày chụp ảnh cực kỳ sang trọng.",
    rating: 5,
    date: "Tháng 9/2026",
  },
];
