import { StyleSheet, Text, View } from 'react-native';

export default function Heading() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        To Dos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    fontWeight: '100',
  }
});
