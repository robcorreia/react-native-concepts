import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existente', 'Já existe um participante na lista com esse nome.')
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {


    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter((participant) => participant !== name))

      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.contaier}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={handleParticipantAdd}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
        </Text>)}
      />

    </View>
  );
}