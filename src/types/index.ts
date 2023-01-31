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

export interface IText {
    children?: ReactNode
    className?: string
    customContainerStyle?: string
    onClick?: () => void
}

export interface IHeading {
    children?: ReactNode
    className?: string
    customContainerStyle?: string
}

export interface IButton {
    onClick?: () => void
    icon?: ReactElement<any>
    text: string
    bgColor?: string
    textColor?: string
    custonStyle?: string
}