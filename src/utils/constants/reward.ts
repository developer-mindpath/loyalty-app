export interface IRewardsListingType {
  id: string;
  img: string;
  name: string;
  platform?: "facebook" | "twitter" | "tiktok" | "instagram";
  type?: "Store" | "In-Store";
}

export const rewardType: IRewardsListingType[] = [
  {
    id: "referral",
    name: "Complete a Referral",
    img: "/assets/check.png",
    type: "In-Store",
  },
  {
    id: "review",
    name: "Post a product review",
    img: "/assets/star.png",
  },
  {
    id: "sign_up",
    name: "Sign Up",
    img: "/assets/profile.png",
  },
  {
    id: "place_order",
    name: "Place an order",
    img: "/assets/shopping_cart_check.png",
  },
  {
    id: "birthday",
    name: "Celebrate a birthday",
    img: "/assets/cake.png",
  },
  {
    id: "share",
    name: "Share link on Facebook",
    img: "/assets/facebook.png",
    platform: "facebook",
  },
  {
    id: "like",
    name: "Like page on Facebook",
    img: "/assets/facebook.png",
    platform: "facebook",
  },
  {
    id: "follow",
    name: "Follow on Instagram",
    img: "/assets/instagram.png",
    platform: "instagram",
  },
  {
    id: "follow",
    name: "Follow on Twitter",
    img: "/assets/twitter.png",
    platform: "twitter",
  },
  {
    id: "share",
    name: "Share link on Twitter",
    img: "/assets/twitter.png",
    platform: "twitter",
  },
  {
    id: "follow",
    name: "Follow on TikTok",
    img: "/assets/tiktok.png",
    platform: "tiktok",
  },
];

export const earnType: IRewardsListingType[] = [
  {
    id: "discount",
    name: "Amount Discount",
    img: "/assets/amount-discount.png",
    type: "Store",
  },
  {
    id: "percentage-off",
    name: "Percentage Off",
    img: "/assets/percentage-off.png",
    type: "Store",
  },
  {
    id: "free-shipping",
    name: "Free Shipping",
    img: "/assets/free-shipping.png",
    type: "Store",
  },
  {
    id: "free-product",
    name: "Free Porduct",
    img: "/assets/free-product.png",
    type: "Store",
  },
  {
    id: "discount",
    name: "Amount Discount",
    img: "/assets/amount-discount.png",
    type: "In-Store",
  },
  {
    id: "percentage-off",
    name: "Percentage Off",
    img: "/assets/percentage-off.png",
    type: "In-Store",
  },
];
