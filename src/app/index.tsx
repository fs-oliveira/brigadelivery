import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FoodCards from "../components/FoodCards";
import { foods } from "../constants/foods";
export default function HomeScreen() {
  return (
    <ScrollView
    className="flex-1 bg-white px-5"
    showsVerticalScrollIndicator={false}>
  <View className="mb-6 mt-8">
  <Text className="text-base text-gray-500">
    Olá! 👋
  </Text>

  <Text className="mt-1 text-3xl font-bold">
    O que deseja comer hoje?
  </Text>
</View>

<View className="rounded-3xl bg-orange-500 p-6">
  <Text className="text-sm font-bold text-white">
    OFERTA ESPECIAL
  </Text>

  <Text className="mt-2 text-3xl font-bold text-white">
    Hambúrger + Bebida
  </Text>

  <Text className="mt-2 text-base text-white">
    Uma combinação perfeita para o seu pedido
  </Text>

  <TouchableOpacity className="mt-5 self-start rounded-xl bg-white px-5 py-3">
    <Text className="font-bold text-orange-500">
      Peça Agora!!!
    </Text>

  </TouchableOpacity>
</View>

<Text className="mb-4 mt-8 text-2xl font-bold">
  Categorias
</Text>

<View className="flex-row justify-between">

<TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-4">

<Text className="text-4xl">
  🍔
</Text>

<Text className="mt-2">
  Burger
</Text>

</TouchableOpacity>

<TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-4">

<Text className="text-4xl">
  🍕
</Text>

<Text className="mt-2">
  Pizza
</Text>

</TouchableOpacity>

<TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-4">

<Text className="text-4xl">
  🥤
</Text>

<Text className="mt-2">
  Bebida
</Text>

</TouchableOpacity>


</View>

<Text className="mb-4 mt-8 text-2xl font-bold">
  Mais pedidos
</Text>

<View className="flex-row flex-wrap justify-between">
  {foods.map((food) => (
    <FoodCards
      key={food.id}
      name={food.name}
      price={food.price}
      emoji={food.emoji}
    />
  ))}
</View>

</ScrollView>
  )
}
