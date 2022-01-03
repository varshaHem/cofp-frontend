export interface ICarbonDataFoodItem {
    ch4RiceCultivation: number
    co2Drying: number
    co2FertilizerProduction: number
    co2Irrigation: number
    co2LandUseChange: number
    co2LimingAndUrea: number
    co2Machinery: number
    co2OrganicSoils: number
    co2PesticideProduction: number
    continent: string
    itemCategories: Array<string>
    location: string
    locationCode: string
    n2oDirectEmissions: number
    n2oFertilizerProduction: number
    n2oIndirectEmissions: number
    n2oOrganicSoils: number
    productName: string
    production: number
    subcontinent: string
    totalCh4ClimateFootprint: number
    totalClimateFootprint: number
    totalCo2ClimateFootprint: number
    totalN2oClimateFootprint: number
}

