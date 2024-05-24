import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div>
        <img
          alt="logo"
          className="food-logo"
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"
        ></img>
      </div>
      <div className="nav-div">
        <ul className="nav-items">
          <li>
            {" "}
            <h2>Home</h2>
          </li>
          <li>
            <h2>Login</h2>
          </li>
          <li>
            <h2>Orders</h2>
          </li>
          <li>
            <h2>Cart</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

const resCards = [
  {
    info: {
      id: "815877",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId: "e2f14174ab6bcffe5297399ae66ca996",
      locality: "Perumbakkam",
      areaName: "St.Thomas Mount Block",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-perumbakkam-st-thomas-mount-block-chennai-815877",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67801",
      name: "Chai Kings",
      cloudinaryImageId: "hea70vpxjbymdzaauyfd",
      locality: "Thuraipakkam",
      areaName: "Sri Sowdeswari Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Bakery"],
      avgRating: 4.4,
      parentId: "2627",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹70",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-kings-thuraipakkam-sri-sowdeswari-nagar-chennai-67801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "77199",
      name: "Meat And Eat",
      cloudinaryImageId: "yphm2lwmcfbrstpc4wfg",
      locality: "Purasavakkam",
      areaName: "OMR-Perungudi",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 4.2,
      parentId: "632",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/meat-and-eat-purasavakkam-omr-perungudi-chennai-77199",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "815878",
      name: "Crusto's - Gourmet Cheese Burst Pizza",
      cloudinaryImageId: "c77fe42b7997c566f491e84b540701ca",
      locality: "Perumbakkam",
      areaName: "St.Thomas Mount Block",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.5,
      parentId: "268955",
      avgRatingString: "4.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-perumbakkam-st-thomas-mount-block-chennai-815878",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834030",
      name: "Seoul Mate Korean Burgers",
      cloudinaryImageId: "ec627a34e0ccad391e3166db108cf977",
      locality: "Pillayarkovil Street",
      areaName: "Thoraipakkam",
      costForTwo: "₹200 for two",
      cuisines: ["Korean", "Burgers", "Beverages", "Fast Food"],
      avgRating: 3.9,
      parentId: "372969",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-pillayarkovil-street-thoraipakkam-chennai-834030",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "317861",
      name: "Kebabistaan",
      cloudinaryImageId: "2b93b3b52a307c3ae0a45a869876998a",
      locality: "Bazaar Main Road",
      areaName: "Madipakkam",
      costForTwo: "₹300 for two",
      cuisines: [
        "Beverages",
        "Chinese",
        "Kebabs",
        "Tandoor",
        "Grill",
        "Biryani",
        "Mughlai",
        "Arabian",
        "Lebanese",
        "North Indian",
        "Salads",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "8877",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 11.6,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kebabistaan-bazaar-main-road-madipakkam-chennai-317861",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834029",
      name: "Boba Bhai",
      cloudinaryImageId: "fa6a4c0e97fa0a57e3aeb60efebbaa23",
      locality: "Pillayarkovil Street",
      areaName: "Thoraipakkam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bubble Tea",
        "Beverages",
        "Fast Food",
        "Snacks",
        "Burgers",
        "Korean",
        "American",
      ],
      avgRating: 4,
      parentId: "361235",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/boba-bhai-pillayarkovil-street-thoraipakkam-chennai-834029",
      type: "WEBLINK",
    },
},
{
    info: {
      id: "58162",
      name: "Roll Baby Roll",
      cloudinaryImageId: "uokfd61wpfknjqjfqzrk",
      locality: "GANDHI 2ND\r\nSTREET",
      areaName: "Sholinganallur",
      costForTwo: "₹250 for two",
      cuisines: [
        "Indian",
        "Rolls & Wraps",
        "Fast Food",
        "Street Food",
        "Snacks",
        "Beverages",
        "Juices",
      ],
      avgRating: 4.3,
      parentId: "4228",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 03:51:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/roll-baby-roll-gandhi-2nd-street-sholinganallur-chennai-58162",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25881",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Shollinganalur",
      areaName: "Sholinganallur",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-shollinganalur-sholinganallur-chennai-25881",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "815877",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId: "e2f14174ab6bcffe5297399ae66ca996",
      locality: "Perumbakkam",
      areaName: "St.Thomas Mount Block",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-perumbakkam-st-thomas-mount-block-chennai-815877",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67801",
      name: "Chai Kings",
      cloudinaryImageId: "hea70vpxjbymdzaauyfd",
      locality: "Thuraipakkam",
      areaName: "Sri Sowdeswari Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Bakery"],
      avgRating: 4.4,
      parentId: "2627",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹70",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-kings-thuraipakkam-sri-sowdeswari-nagar-chennai-67801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "77199",
      name: "Meat And Eat",
      cloudinaryImageId: "yphm2lwmcfbrstpc4wfg",
      locality: "Purasavakkam",
      areaName: "OMR-Perungudi",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 4.2,
      parentId: "632",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/meat-and-eat-purasavakkam-omr-perungudi-chennai-77199",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "815878",
      name: "Crusto's - Gourmet Cheese Burst Pizza",
      cloudinaryImageId: "c77fe42b7997c566f491e84b540701ca",
      locality: "Perumbakkam",
      areaName: "St.Thomas Mount Block",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.5,
      parentId: "268955",
      avgRatingString: "4.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-perumbakkam-st-thomas-mount-block-chennai-815878",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834030",
      name: "Seoul Mate Korean Burgers",
      cloudinaryImageId: "ec627a34e0ccad391e3166db108cf977",
      locality: "Pillayarkovil Street",
      areaName: "Thoraipakkam",
      costForTwo: "₹200 for two",
      cuisines: ["Korean", "Burgers", "Beverages", "Fast Food"],
      avgRating: 3.9,
      parentId: "372969",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-pillayarkovil-street-thoraipakkam-chennai-834030",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "317861",
      name: "Kebabistaan",
      cloudinaryImageId: "2b93b3b52a307c3ae0a45a869876998a",
      locality: "Bazaar Main Road",
      areaName: "Madipakkam",
      costForTwo: "₹300 for two",
      cuisines: [
        "Beverages",
        "Chinese",
        "Kebabs",
        "Tandoor",
        "Grill",
        "Biryani",
        "Mughlai",
        "Arabian",
        "Lebanese",
        "North Indian",
        "Salads",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "8877",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 11.6,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kebabistaan-bazaar-main-road-madipakkam-chennai-317861",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834029",
      name: "Boba Bhai",
      cloudinaryImageId: "fa6a4c0e97fa0a57e3aeb60efebbaa23",
      locality: "Pillayarkovil Street",
      areaName: "Thoraipakkam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bubble Tea",
        "Beverages",
        "Fast Food",
        "Snacks",
        "Burgers",
        "Korean",
        "American",
      ],
      avgRating: 4,
      parentId: "361235",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/boba-bhai-pillayarkovil-street-thoraipakkam-chennai-834029",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="food-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="card-details">
        <h2 className="food-info">{name}</h2>
        <h4 className="food-info">{cuisines.join(", ")}</h4>
        <h4 className="food-info">{avgRating} ⭐</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      
        {resCards.map((restaurant,index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <Body />
    {/* <Footer/> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
