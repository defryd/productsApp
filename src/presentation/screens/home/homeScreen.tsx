import { Button, Icon, Layout } from '@ui-kitten/components'
import { Text, View } from 'react-native'
import { useAuthStore } from '../../store/auth/useAuthStore';

export const HomeScreen = () => {

    const { logout } = useAuthStore();
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Icon name='facebook' /> */}
            <Button
                accessoryLeft={<Icon name='log-out-outline' />}
                onPress={logout}
            >
                Hola
            </Button>
        </Layout>
    )
}