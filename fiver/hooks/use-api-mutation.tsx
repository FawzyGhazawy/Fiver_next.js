"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { set } from "react-hook-form";


export const useApiMutation = ( mutationFunction : any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = ( payload: any) => {
        setPending(true);
        return apiMutation(payload)
        .finally(() => setPending(false))
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.error("Error in API mutation:", error);
            throw error; // Rethrow the error to handle it in the calling component if needed
        });
    }

    return {
        mutate,
        pending,
    }




};

