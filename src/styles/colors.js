const defaultColors = {
    white: '#F1F1F1',
    black: '#101010',

    primary: '#212121',
    secondary: '#444444',

    success: '#56BD8D',
    danger: '#E3495A',
    warning: '#FFB800',

    link: '#5882D8',
    text: '#FFFFFF',
    border: '#F1F1F1'
};

const revertColors = {
    white: defaultColors.black,
    black: defaultColors.white,

    primary: defaultColors.secondary,
    secondary: defaultColors.primary,

    success: defaultColors.secondary,
    danger: defaultColors.secondary,
    warning: defaultColors.secondary,

    link: defaultColors.primary,
    text: defaultColors.primary,
    border: defaultColors.primary,
};

export default {
    default: defaultColors,
    revert: revertColors,

    border: defaultColors.white,

    background: defaultColors.white,

    input: defaultColors.white,
};

