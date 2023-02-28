
// Why interface and not class or object?
// it assures certain parameters and functions will exist
export interface Pokemon {
    name: string,
    level: number,
    health: number,
    damage: number,
    img: string
}