// STRETCH
const cars = [
    {
        vin: '22222222222222222',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmisson: 'manual',
    },
    {
        vin: '33333333333333333',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '44444444444444444',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    }) 
}