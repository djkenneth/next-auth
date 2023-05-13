export interface NavItem {
    label: string;
    children?: Array<NavItem>;
    href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'PLAYSTATION',
        children: [
            {
                label: 'Play Station | Console',
                href: '#',
                children: [
                    {
                        label: 'Playstation 4',
                        href: '#'
                    },
                    {
                        label: 'Playstation 5',
                        href: '#'
                    },
                ]
            },
            {
                label: 'PS4 Games',
                href: '#',
                children: [
                    {
                        label: 'Action',
                        href: '#'
                    },
                    {
                        label: 'Adventure',
                        href: '#'
                    },
                    {
                        label: 'Fighting',
                        href: '#'
                    },
                    {
                        label: 'Racing',
                        href: '#'
                    },
                    {
                        label: 'Role Playing',
                        href: '#'
                    },
                    {
                        label: 'Simulation',
                        href: '#'
                    },
                    {
                        label: 'Shooter',
                        href: '#'
                    },
                    {
                        label: 'Sports',
                        href: '#'
                    },
                    {
                        label: 'Strategy',
                        href: '#'
                    },
                    {
                        label: 'Others',
                        href: '#'
                    },
                ]
            },
            {
                label: 'PS5 Games',
                href: '#',
                children: [
                    {
                        label: 'Action',
                        href: '#'
                    },
                    {
                        label: 'Adventure',
                        href: '#'
                    },
                    {
                        label: 'Fighting',
                        href: '#'
                    },
                    {
                        label: 'Racing',
                        href: '#'
                    },
                    {
                        label: 'Role Playing',
                        href: '#'
                    },
                    {
                        label: 'Simulation',
                        href: '#'
                    },
                    {
                        label: 'Shooter',
                        href: '#'
                    },
                    {
                        label: 'Sports',
                        href: '#'
                    },
                    {
                        label: 'Strategy',
                        href: '#'
                    },
                    {
                        label: 'Others',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Play Station | Accessories',
                href: '#',
                children: [
                    {
                        label: 'PS4 Accessories',
                        href: '#'
                    },
                    {
                        label: 'PS5 Accessories',
                        href: '#'
                    },
                    {
                        label: 'PSN Card',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Play Station | Others',
                href: '#',
                children: [
                    {
                        label: 'Collectibles',
                        href: '#'
                    },
                    {
                        label: 'Merchandise',
                        href: '#'
                    },
                ]
            },
        ],
    },
    {
        label: 'XBOX',
        children: [
            {
                label: 'Xbox | Console',
                href: '#',
                children: [
                    {
                        label: 'Xbox Series S | X',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Xbox | Games',
                href: '#',
                children: [
                    {
                        label: 'Xbox One Games',
                        href: '#'
                    },
                    {
                        label: 'Xbox Series X Games',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Xbox | Accessories',
                href: '#',
                children: [
                    {
                        label: 'Xbox One',
                        href: '#'
                    },
                    {
                        label: 'Xbox Series X | S',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Xbox Live Cards',
                href: '#',
            },
        ],
    },
    {
        label: 'NINTENDO',
        children: [
            {
                label: 'Console | Handheld',
                href: '#',
                children: [
                    {
                        label: 'Nintendo Switch',
                        href: '#'
                    },
                    {
                        label: 'Nintendo Switch Lite',
                        href: '#'
                    },
                    {
                        label: 'Retro',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Nintendo | Games',
                href: '#',
                children: [
                    {
                        label: 'Switch Games | Action',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Adventure',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Fighting',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Racing',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Role Playing',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Simulation',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Shooter',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Sports',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Strategy',
                        href: '#'
                    },
                    {
                        label: 'Switch Games | Others',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Nintendo | Accessories',
                href: '#',
                children: [
                    {
                        label: 'Switch OLED',
                        href: '#'
                    },
                    {
                        label: 'Switch',
                        href: '#'
                    },
                    {
                        label: 'Switch Lite',
                        href: '#'
                    },
                    {
                        label: 'Omiibo',
                        href: '#'
                    },
                    {
                        label: 'Nintendo 3DS | 3DS XL',
                        href: '#'
                    },
                    {
                        label: 'Nintendo 2DS | 2DS XL',
                        href: '#'
                    },
                    {
                        label: 'NES | SNES',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Eshop Wallet',
                href: '#',
            },
            {
                label: 'Nintendo | Others',
                href: '#',
                children: [
                    {
                        label: 'Collectibles',
                        href: '#'
                    },
                ]
            },
        ],
    },
    {
        label: 'SMART DEVICES',
        children: [
            {
                label: 'Handheld | Tablet',
                href: '#',
            },
            {
                label: 'Smartphone',
                href: '#',
            },
            {
                label: 'Smart TV',
                href: '#',
            },
            {
                label: 'Smart Devices | Accessories',
                href: '#',
            },
        ],
    },
    {
        label: 'LAPTOP',
        children: [
            {
                label: 'Gaming Laptop',
                href: '#',
            },
            {
                label: 'Laptop',
                href: '#',
            },
            {
                label: 'Laptop | Accessories',
                href: '#',
            },
        ],
    },
    {
        label: 'PC PERIPHERALS',
        children: [
            {
                label: 'Audio',
                href: '#',
                children: [
                    {
                        label: 'Gaming Headset',
                        href: '#'
                    },
                    {
                        label: 'Speaker',
                        href: '#'
                    },
                    {
                        label: 'Accessories',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Capture Card',
                href: '#',
                children: [
                    {
                        label: 'Lighting',
                        href: '#'
                    },
                    {
                        label: 'Multi-mount',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Controller',
                href: '#',
                children: [
                    {
                        label: 'Flight Stick',
                        href: '#'
                    },
                    {
                        label: 'Racing Wheel',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Keyboard',
                href: '#',
                children: [
                    {
                        label: 'Gaming',
                        href: '#'
                    },
                    {
                        label: 'Barebone',
                        href: '#'
                    },
                    {
                        label: 'Key Caps and Switches',
                        href: '#'
                    },
                    {
                        label: 'Tools and Parts',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Mouse',
                href: '#',
                children: [
                    {
                        label: 'Gaming Wireless',
                        href: '#'
                    },
                    {
                        label: 'Gaming Wired',
                        href: '#'
                    },
                    {
                        label: 'Mouse Pad and Accessories',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Memory',
                href: '#',
                children: [
                    {
                        label: 'Memory Cards',
                        href: '#'
                    },
                    {
                        label: 'Flash Drive',
                        href: '#'
                    },
                    {
                        label: 'External SSD',
                        href: '#'
                    },
                    {
                        label: 'External HDD',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Productivity',
                href: '#',
                children: [
                    {
                        label: 'Headset',
                        href: '#'
                    },
                    {
                        label: 'Keyboard',
                        href: '#'
                    },
                    {
                        label: 'Mouse',
                        href: '#'
                    },
                    {
                        label: 'Mouse Pad',
                        href: '#'
                    },
                    {
                        label: 'Combo - Keyboard and mouse',
                        href: '#'
                    },
                ]
            },
            {
                label: 'PC Peripherals | Others',
                href: '#',
                children: [
                    {
                        label: 'Drawing Tablet',
                        href: '#'
                    },
                    {
                        label: 'Microphone',
                        href: '#'
                    },
                    {
                        label: 'Table and Gaming Chair',
                        href: '#'
                    },
                    {
                        label: 'Webcam',
                        href: '#'
                    },
                ]
            },
        ],
    },
    {
        label: 'Computer Parts',
        children: [
            {
                label: 'Cables',
                href: '#',
            },
            {
                label: 'Chasis',
                href: '#',
                children: [
                    {
                        label: 'ATX',
                        href: '#'
                    },
                    {
                        label: 'MID ATX',
                        href: '#'
                    },
                    {
                        label: 'ITX',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Fan and PC Cooling',
                href: '#',
                children: [
                    {
                        label: 'AIO',
                        href: '#'
                    },
                    {
                        label: 'Chasis Fan',
                        href: '#'
                    },
                    {
                        label: 'CPU Fan',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Graphics Card',
                href: '#',
                children: [
                    {
                        label: 'GT | GTX GPU',
                        href: '#'
                    },
                    {
                        label: 'RTX GPU',
                        href: '#'
                    },
                    {
                        label: 'Radeon',
                        href: '#'
                    },
                    {
                        label: 'GPU Accessories',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Monitor',
                href: '#',
                children: [
                    {
                        label: 'Sizes',
                        href: '#'
                    },
                    {
                        label: 'Refresh Rate',
                        href: '#'
                    },
                    {
                        label: 'Mount',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Motherboard',
                href: '#',
                children: [
                    {
                        label: 'AMD',
                        href: '#'
                    },
                    {
                        label: 'Intel',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Ram',
                href: '#',
                children: [
                    {
                        label: 'Desktop',
                        href: '#'
                    },
                    {
                        label: 'Laptop',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Storage',
                href: '#',
                children: [
                    {
                        label: 'HDD',
                        href: '#'
                    },
                    {
                        label: 'SSD',
                        href: '#'
                    },
                ]
            },
            {
                label: 'Power Supply and Backup',
                href: '#',
            },
            {
                label: 'Pre-build PC',
                href: '#',
            },
        ],
    }
];