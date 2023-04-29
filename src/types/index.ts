import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'

export interface ITab {
    children?: ReactNode
    active: number
    index: number
    setOpenTab: Dispatch<SetStateAction<number>>
}

export interface ITabPanel {
    children?: ReactNode
    openTab: number
    index: number
}