export type User = {
    firstName: string | null,
    lastName: string | null,

}

export type Segment = {
    segmentId: number,
    configId: number,
    departureAirportRef:
    {
        name: string,
        code: string,
        latitude: string,
        longitude: string,
        city: string,
        country: string,
        isoCode: string
    },
    arrivalAirportRef: {
        name: string,
        code: string,
        latitude: string,
        longitude: string,
        city: string,
        country: string,
        isoCode: string
    }
}

export type Portlet = {
    position: string,
    imagePath: string,
    message: string,
    title: string,
    description: string,
    pageName: string,
    imageDisplayingOrder: number,
    p_segmentRef_Id: number
}

export type Item = {
    label: string,
    value: string
}

export type DefaultConfiguration = {
    nbrFlight: number,
    delay: number,
    dayToDeparture: number,
    price: number
}

export type baseConfig = {
    nbrFlights: number,
    percentage: number,
    configId: number
}

export type delay = {
    nbrMonths: number,
    percentage: number,
    configId: number
}


export type dayToDeparture = {
    nbrDays: number,
    percentage: number,
    configId: number
}

export type config = {
    nbrFlights: number,delay: number,dayToDeparture: number,segmentId:number}