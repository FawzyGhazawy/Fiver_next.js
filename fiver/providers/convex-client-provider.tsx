"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexProviderWithAuth, ConvexReactClient, Unauthenticated } from "convex/react";
import React from "react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import { Loading } from "@/components/auth/loading";


interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convesUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convesUrl);

export const ConvexClientProvider: React.FC<ConvexClientProviderProps> = ({ children }) => {

    return(
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} 
            client={convex}>
                <Unauthenticated>
                    {children}
                </Unauthenticated>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading />
                </AuthLoading>

            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}