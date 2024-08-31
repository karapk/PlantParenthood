export default function handler(req, res) {
    const plants = [
        {
            id: 1,
            name: "Monstera Deliciosa",
            type: "Indoor",
            care: {
                watering: "Water every 1-2 weeks, allowing soil to dry out between waterings.",
                light: "Thrives in bright to medium indirect light.",
                temperature: "Keep between 60-80°F"
            },
            image_url: ""
        },
        {
            id: 2,
            name: "Fiddle Leaf Fig",
            type: "Indoor",
            care: {
                watering: "Water when the top inch of soil is dry.",
                light: "Prefers bright, indirect light.",
                temperature: "Maintain between 65-75°F"
            },
            image_url: ""
        },
        {
            id: 3,
            name: "Snake Plant",
            type: "Indoor",
            care: {
                watering: "Water every 2-3 weeks, allowing soil to dry out completely between waterings.",
                light: "Can tolerate low light, but grows best in indirect sunlight.",
                temperature: "Best in temperatures between 60-85°F"
            },
            image_url: ""
        },
        {
            id: 4,
            name: "English Ivy",
            type: "Outdoor",
            care: {
                watering: "Keep soil evenly moist during the growing season.",
                light: "Prefers partial to full shade.",
                temperature: "Hardy in zones 4-9"
            },
            image_url: ""
        },
        {
            id: 5,
            name: "Rosemary",
            type: "Outdoor",
            care: {
                watering: "Water every 1-2 weeks, letting soil dry between waterings.",
                light: "Needs full sun to thrive.",
                temperature: "Grows best in temperatures between 55-80°F"
            },
            image_url: ""
        },
        {
            id: 6,
            name: "Aloe Vera",
            type: "Indoor",
            care: {
                watering: "Water every 3 weeks, or when soil is completely dry.",
                light: "Prefers bright, indirect sunlight.",
                temperature: "Keep between 55-80°F"
            },
            image_url: ""
        },
        {
            id: 7,
            name: "Lavender",
            type: "Outdoor",
            care: {
                watering: "Water deeply but infrequently, allowing soil to dry out between waterings.",
                light: "Requires full sun for at least 6 hours a day.",
                temperature: "Best in temperatures between 60-75°F"
            },
            image_url: ""
        },
        {
            id: 8,
            name: "Peace Lily",
            type: "Indoor",
            care: {
                watering: "Water weekly, keeping soil evenly moist.",
                light: "Thrives in low to medium light.",
                temperature: "Best kept between 65-80°F"
            },
            image_url: ""
        },
        {
            id: 9,
            name: "Cactus",
            type: "Indoor",
            care: {
                watering: "Water once every 3-4 weeks.",
                light: "Prefers bright, direct sunlight.",
                temperature: "Best in temperatures between 70-90°F"
            },
            image_url: "cactus.jpg"
        },
        {
            id: 10,
            name: "Hydrangea",
            type: "Outdoor",
            care: {
                watering: "Keep soil consistently moist, especially in hot weather.",
                light: "Prefers morning sun and afternoon shade.",
                temperature: "Grows best in zones 3-7"
            },
            image_url: ""
        },
        {
            id: 11,
            name: "Spider Plant",
            type: "Indoor",
            care: {
                watering: "Water every 1-2 weeks, keeping soil slightly moist.",
                light: "Prefers bright, indirect light.",
                temperature: "Best in temperatures between 55-80°F"
            },
            image_url: ""
        },
        {
            id: 12,
            name: "Basil",
            type: "Outdoor",
            care: {
                watering: "Water regularly, ensuring soil remains moist.",
                light: "Needs full sun for at least 6 hours a day.",
                temperature: "Best in temperatures between 60-85°F"
            },
            image_url: ""
        },
        {
            id: 13,
            name: "Fern",
            type: "Indoor",
            care: {
                watering: "Water regularly to keep soil moist.",
                light: "Prefers indirect sunlight or partial shade.",
                temperature: "Keep between 60-75°F"
            },
            image_url: ""
        },
        {
            id: 14,
            name: "Succulent",
            type: "Indoor",
            care: {
                watering: "Water every 2-3 weeks, allowing soil to dry out between waterings.",
                light: "Needs bright, indirect light.",
                temperature: "Best in temperatures between 60-80°F"
            },
            image_url: ""
        },
        {
            id: 15,
            name: "Mint",
            type: "Outdoor",
            care: {
                watering: "Keep soil consistently moist.",
                light: "Prefers partial shade to full sun.",
                temperature: "Best in temperatures between 55-70°F"
            },
            image_url: ""
        },
        {
            id: 16,
            name: "Orchid",
            type: "Indoor",
            care: {
                watering: "Water weekly, allowing soil to dry slightly between waterings.",
                light: "Prefers bright, indirect light.",
                temperature: "Best in temperatures between 60-75°F"
            },
            image_url: ""
        },
        {
            id: 17,
            name: "Jade Plant",
            type: "Indoor",
            care: {
                watering: "Water every 2-3 weeks, allowing soil to dry out between waterings.",
                light: "Thrives in bright, indirect sunlight.",
                temperature: "Best in temperatures between 65-75°F"
            },
            image_url: ""
        },
        {
            id: 18,
            name: "Bougainvillea",
            type: "Outdoor",
            care: {
                watering: "Water deeply but infrequently.",
                light: "Requires full sun to bloom.",
                temperature: "Best in temperatures between 65-95°F"
            },
            image_url: ""
        },
        {
            id: 19,
            name: "Rubber Plant",
            type: "Indoor",
            care: {
                watering: "Water when the top inch of soil is dry.",
                light: "Prefers bright, indirect light.",
                temperature: "Keep between 60-75°F"
            },
            image_url: ""
        },
        {
            id: 20,
            name: "Thyme",
            type: "Outdoor",
            care: {
                watering: "Water regularly, but allow soil to dry out between waterings.",
                light: "Needs full sun to thrive.",
                temperature: "Grows best in temperatures between 60-75°F"
            },
            image_url: ""
        }
    ];

    res.status(200).json(plants);
}
