import { useState, useEffect} from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';

import logoImage from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  };

  useEffect(() => {
    fetch('http://192.168.1.14:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <Image
              source={logoImage}
              style={styles.logo}
          />

          <Heading
              title='Encontre seu duo!'
              subtitle='Selecione o game que deseja jogar...'
          />

          <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <GameCard
                data={item}
                onPress={() => handleOpenGame(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
      </SafeAreaView>
    </Background>
  );
}