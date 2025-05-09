import { Doc, Id } from "@/convex/_generated/dataModel";

export type ImageWithUrlType = Doc<"gigMedia"> & {
    url: string
};

export type FullGigType = Doc<"gigs"> & {
 _id: Id<"gigs">;
    _creationTime: number;
    published?: boolean;
    title: string;
    sellerId: Id<"users">;
    description: string;
    subcategoryId: Id<"subcategories">;
    clicks: number;
  
    favorited?: boolean;
    storageId?: Id<"_storage"> | undefined;
    seller: Doc<"users">;
    reviews: Doc<"reviews">[];
    offer: Doc<"offers">;
}

export type MessageWithUserType = Doc<"messages"> & {
    user: Doc<"users">
};

export type GigWithImageType = Doc<"gigs"> & {
    images: Doc<"gigMedia">[]
};


export type UserWithCountryType = Doc<"users"> & {
    country: Doc<"countries">
};

export type ReviewFullType = Doc<"reviews"> & {
    author: UserWithCountryType
    image: ImageWithUrlType
    offers: Doc<"offers">[]
    gig: Doc<"gigs">
};

export type CategoriesFullType = Doc<"categories"> & {

};