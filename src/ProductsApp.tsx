import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigation/StackNavigatior'

export const ProductsApp = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}