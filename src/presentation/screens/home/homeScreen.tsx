import { Button, Icon, Layout } from '@ui-kitten/components'
import { Text, View } from 'react-native'

export const HomeScreen = () => {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Icon name='facebook' /> */}
            <Button
                accessoryLeft={<Icon name='facebook' />}
            >
                Hola
            </Button>
        </Layout>
    )
}