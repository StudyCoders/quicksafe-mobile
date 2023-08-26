import { Tabs } from "expo-router";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { MaterialIcons } from '@expo/vector-icons';

export default function TabRoutesLayout() {
    return (
        <GluestackUIProvider config={config.theme}>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Início",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="home" color={color} size={size} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Perfil",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name='person' color={color} size={size} />
                        )
                    }}
                />
            </Tabs>
        </GluestackUIProvider>
    )
}