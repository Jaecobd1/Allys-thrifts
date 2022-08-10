export interface Product {
    image: string;
    images: {
        name: string;
        image: string;
    }
    slug: string;
    brand: string;
    price: number;
    description: string;
    title: string;
    category: string;
    visable: boolean;
    homePage: boolean;
    isAvailable: boolean;
    name: string;

};
export interface Post {
    _id: string;
    title: string;
    author: string;
    content: string;
    image: string;
    visable: boolean;
    slug: string;
    createdAt: string;
};

export interface Production {
    bannerText: string;
    heroText: string;
    heroImg: string;
    homeBlock: string;
    homeImage2: string;
    meta: string;
    footerImg: string;
}