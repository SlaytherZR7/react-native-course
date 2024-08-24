import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorBotton} from '../components/CalculatorBotton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>
      <View style={styles.row}>
        <CalculatorBotton label="C" color={colors.lightGray} blackText />
        <CalculatorBotton label="+/-" color={colors.lightGray} blackText />
        <CalculatorBotton label="del" color={colors.lightGray} blackText />
        <CalculatorBotton label="÷" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorBotton label="7" />
        <CalculatorBotton label="8" />
        <CalculatorBotton label="9" />
        <CalculatorBotton label="×" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorBotton label="4" />
        <CalculatorBotton label="5" />
        <CalculatorBotton label="6" />
        <CalculatorBotton label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorBotton label="1" />
        <CalculatorBotton label="2" />
        <CalculatorBotton label="3" />
        <CalculatorBotton label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorBotton label="0" doubleSize />
        <CalculatorBotton label="." />
        <CalculatorBotton label="=" color={colors.orange} />
      </View>
    </View>
  );
};
