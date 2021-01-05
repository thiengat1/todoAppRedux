/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-01-04 19:07:48
 * @LastEditTime: 2021-01-04 23:12:17
 * @LastEditors: Lewis
 */
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";
import {connect} from 'react-redux'
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo = (text) => {
      this.props.dispatch({type:'ADD_TODO',text:text})
      this.setState({text:''})
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="input"
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.buttonStyle}>
            <Icon2 name="plus" size={30} style={{ padding: 10 }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#f2f2e1",
    backgroundColor: "#eaeaea",
    height: 50,
    flex: 1,
    padding: 5,
  },
  buttonStyle: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
