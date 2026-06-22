export interface EnquiryResponse {

    id: number;

    customerName: string;

    phoneNumber: string;

    email: string;

    city: string;

    truckType: string;

    cargoType: string;

    message: string;

    status: string;

    assignedAdminId: number | null;

    createdAt: string;
}

export interface PageResponse<T> {

    content: T[];

    totalElements: number;

    totalPages: number;

    size: number;

    number: number;

    first: boolean;

    last: boolean;

    empty: boolean;
}

export interface CreateEnquiryRequest {

    customerName: string;

    phoneNumber: string;

    email: string;

    cityId: number;

    truckTypeId: number;

    cargoTypeId: number;

    message: string;
}

export interface City {

    id: number;

    cityName: string;
}

export interface TruckType {

    id: number;

    truckName: string;
}

export interface CargoType {

    id: number;

    cargoName: string;
}