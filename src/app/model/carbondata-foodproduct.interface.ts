import { Ifootprint } from "./footprint.interface";

export interface ICarbonDataFoodProduct {
    agriModelDependencies: string
    footprintBreakdown: Ifootprint
    gate: object
    gtin: null
    imageUrl: string
    market: string
    orgInfo: object
    producedIn: null
    productDependencies: Array<object>
    productName: string
    publishDate: string
    publishedReports: object
    reportUrl: string
    totalFootprint: number
}