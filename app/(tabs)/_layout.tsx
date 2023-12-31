import { Tabs } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthProvider } from "../context/AuthContext";
import Toast from 'react-native-toast-message';

export default function TabRoutesLayout() {
  return (
    <GluestackUIProvider config={config}>
      <AuthProvider>
        <Tabs>
          <Tabs.Screen
            name="home"
            options={{
              title: "Início",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="contatos"
            options={{
              title: "Contatos",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-box" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Perfil",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={size} />
              ),
            }}
          />
        </Tabs>
        <Toast />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
