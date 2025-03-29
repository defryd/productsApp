import { Icon, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native'

interface Props {
    name: string;
    color?: string;
    size?: number;
    white?: boolean;
}

export const MyIcon = ({ name, color, size, white = false }: Props) => {

    const theme = useTheme();

    if (white) {
        color = theme['color-info-100'];
    } else if (!color) {
        color = theme['text-basic-color'];
    }

    return (
        <Icon
            style={styles.icon}
            fill={color}
            name={name}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
})