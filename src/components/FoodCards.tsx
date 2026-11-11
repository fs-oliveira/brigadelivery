import {
    Text,
    TouchableOpacity,
    View,
}from "react-native";

type FoodCardsProps = {
    name: string;
    price: number;
    emoji: string;
    onAdd: () => void;
};

export default function FoodCards ({
    name,
    price,
    emoji,
    onAdd,
}:FoodCardsProps){
    return(
    <View className="mb-5 w-[48%] rounded-2xl bg-orange-50 p-4">
        <Text className="text-center text-6xl" style={{ lineHeight: 76 }}>
            {emoji}
        </Text>

        <Text className="mt-3 text-lg font-bold">
            {name}
        </Text>

        <Text className="mt-1 font-bold text-orange-500">
            R$ {price.toFixed(2)}
        </Text>
    <TouchableOpacity onPress={onAdd} className="mt-4 items-center rounded-xl bg-orange-500 py-3">
        <Text className="text-center font-bold text-white">
            Adicionar
        </Text>
    </TouchableOpacity>    
    </View>
    )
}
