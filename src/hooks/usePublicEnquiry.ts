import {
    useQuery,
    useMutation
} from "@tanstack/react-query";

import {

    getCities,

    getTruckTypes,

    getCargoTypes,

    createPublicEnquiry

}
from "../api/enquiryApi";

export function useCities() {

    return useQuery({

        queryKey: ["cities"],

        queryFn: getCities

    });
}

export function useTruckTypes() {

    return useQuery({

        queryKey: ["truck-types"],

        queryFn: getTruckTypes

    });
}

export function useCargoTypes() {

    return useQuery({

        queryKey: ["cargo-types"],

        queryFn: getCargoTypes

    });
}

export function useCreatePublicEnquiry() {

    return useMutation({

        mutationFn:
            createPublicEnquiry
    });
}