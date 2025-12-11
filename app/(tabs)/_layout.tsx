import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'react-native'
import { images } from '@/constants/images'
import { Image } from 'react-native'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, icon}: any) => {
    if (focused) {
        return (
            <ImageBackground 
                source={images.highlight} 
                className='flex flex-row w-full flex-1 min-w-[50px] 
                min-h-[50px] mt-[19px] justify-center items-center rounded-full overflow-hidden'
            >
                <Image 
                    source={icon} 
                    className="size-8"
                />
            </ImageBackground>
            )
    } else {
        return (
            <View className='size-full justify-center items-center mt-4 rounded-full'> 
                <Image
                    source={icon} 
                    className="size-8"
                />
            </View>
        )
    }
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: "#0f0D23",
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 60,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 0,
                borderColor: '#0f0D23',
            },
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{ 
                title: 'Accueil',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.home} 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="lots"
            options={{ 
                title: 'Lots',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_lots} 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="sechoir"
            options={{ 
                title: 'Séchoir',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_sechoir} 
                    />
                ) 
            }}
        />
        <Tabs.Screen 
            name="expeditions"
            options={{ 
                title: 'Expéditions',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_expeditions} 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="producteurs"
            options={{ 
                title: 'Producteurs',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_producteurs} 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="acheteurs"
            options={{ 
                title: 'Acheteurs',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_acheteurs} 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="stocks"
            options={{ 
                title: 'Stocks',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.logo_stocks} 
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout