import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigatior';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {};

export const LoginScreen = ({ navigation }: Props ) => {

    const { height } = useWindowDimensions();

    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout style={{ paddingTop: height * 0.35 }}>
                    <Text category='h1'>Ingresar</Text>
                    <Text category='p2'>Por favor, ingrese para continuar</Text>
                </Layout>

                {/* {inputs} */}
                <Layout style={{ marginTop: 20 }}>
                    <Input
                        accessoryLeft={ <MyIcon name="email-outline" /> }
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={{ marginBottom: 10 }}
                    />

                    <Input
                        accessoryLeft={ <MyIcon name="lock-outline" /> }
                        placeholder='Contraseña'
                        autoCapitalize='none'
                        secureTextEntry
                        style={{ marginBottom: 10 }}
                    />

                    {/* space */}
                    <Layout style={{ height: 20}}/>

                    {/* button */}
                    <Layout>
                        <Button
                            accessoryRight={ <MyIcon name="arrow-forward-outline" white />}
                            onPress={() => console.log('Login')}
                            // appearance='ghost'
                        >
                            Ingresar
                        </Button>
                    </Layout>

                    {/* info, crear nueva cuenta */}
                    {/* space */}
                    <Layout style={{ height: 50}}/>

                    <Layout style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>
                            ¿No tienes una cuenta?{' '}
                            <Text
                                style={{ fontWeight: 'bold' }}
                                onPress={() => navigation.navigate('RegisterScreen')}
                                status='primary'
                                category='s1'
                            >
                                Crear cuenta
                            </Text>
                        </Text>
                    </Layout>

                </Layout>
            </ScrollView>
        </Layout>
    )
}