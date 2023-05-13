import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            'body': {
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'crimsonRed.500',
                    borderRadius: '24px',
                },
            }
        }
    },

    colors: {
        // addToCard: {
        //     500: '#f4f4f4', // Bg Color
        //     600: '#e12a27', // Hover Color
        //     700: '#16181d', // Active Bg
        // },
        codGray: { // black
            500: '#181818'
        },
        sharkGray: {
            500: '#22252a'
        },
        crimsonRed: { // red
            50: '#fef2f2',
            500: '#e12a27'
        },
        scarpaGray: {
            500: '#5b5b5f'
        },
        dustyGray: {
            500: '#999999'
        },
        wildGray: {
            500: '#f4f4f4'
        },
        stoneBlue: {
            500: '#14213d'
        }
    }
});