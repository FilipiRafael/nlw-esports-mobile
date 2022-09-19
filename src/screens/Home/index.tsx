import { View, Image, FlatList } from 'react-native';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

import logoImage from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
        <Image
            source={logoImage}
            style={styles.logo}
        />

        <Heading
            title='Encontre seu duo!'
            subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          data={GAMES}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
    </View>
  );
}