import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Info1 from '../pages/Info1';
import Info2 from '../pages/Info2';
import Info3 from '../pages/Info3';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator InitialRouteName="Home"
    screenOptions={{tabBarActiveTintColor:"#9400d3", 
    tabBarInactiveTintColor: "#000",
    tabBarStyle: {
        backgroundColor: '#e8e0ff', // Altere para a cor desejada de fundo
      },
    }}>
      <TabBottom.Screen name="Home" component={Home}
      options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='home'/>);
             }
             return(
                <Ionicons size={size} color={color} name='home-outline'/>
             )
            }
        }} />
      <TabBottom.Screen name="Feed" component={Feed} 
      options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='newspaper'/>);
             }
             return(
                <Ionicons size={size} color={color} name='newspaper-outline'/>
             )
            }
        }} />
      <TabBottom.Screen name="About" component={About}
       options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='information-circle'/>);
             }
             return(
                <Ionicons size={size} color={color} name='information-circle-outline'/>
             )
            }
        }} />
    </TabBottom.Navigator>

  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#9400d3', // Cor de fundo do cabeçalho
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do cabeçalho
            },
            drawerStyle: {
                backgroundColor: '#e8e0ff', // Cor de fundo do drawer
              },
              drawerLabelStyle: {
                color: '#46295a', // Cor do texto do drawer
              },
              drawerActiveTintColor: '#9400d3', // Cor do ícone ativo do drawer
          }}>
            <Drawer.Screen 
            name='Inicio'
            component={TabBottomRoutes}
            options={{
                drawerLabel: 'Inicio',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='home' />
                )
            }}/>
            <Drawer.Screen 
            name='Blog'
            component={StackRoutes}
            options={{
                drawerLabel: 'Blog',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='archive' />
                )
            }}/>
        </Drawer.Navigator>     
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Blog' component={Blog}/>
            <Stack.Screen name='Info1' component={Info1}/>
            <Stack.Screen name='Info2' component={Info2}/>
            <Stack.Screen name='Info3' component={Info3}/>
        </Stack.Navigator>
    );
}