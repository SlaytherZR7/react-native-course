import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorBotton} from '../components/CalculatorBotton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    deleteLastNumber,
    toogleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {prevNumber === '0' ? ' ' : prevNumber}
        </Text>
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={clean}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBotton
          onPress={toogleSign}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBotton
          onPress={deleteLastNumber}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBotton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('7')} label="7" />
        <CalculatorBotton onPress={() => buildNumber('8')} label="8" />
        <CalculatorBotton onPress={() => buildNumber('9')} label="9" />
        <CalculatorBotton
          onPress={multiplyOperation}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('4')} label="4" />
        <CalculatorBotton onPress={() => buildNumber('5')} label="5" />
        <CalculatorBotton onPress={() => buildNumber('6')} label="6" />
        <CalculatorBotton
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('1')} label="1" />
        <CalculatorBotton onPress={() => buildNumber('2')} label="2" />
        <CalculatorBotton onPress={() => buildNumber('3')} label="3" />
        <CalculatorBotton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorBotton onPress={() => buildNumber('.')} label="." />
        <CalculatorBotton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
