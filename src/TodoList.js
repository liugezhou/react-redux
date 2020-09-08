import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as creators from './store/actionCreator';

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;
  return (
<Fragment>
      <div>
          <input 
              value = {inputValue}
              onChange = {changeInputValue}
          />
          <button onClick = {handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item,index) =>{
            return (
              <li 
                  key={index}
                  onClick={()=>{handleDelete(index)}}
              >
                {item}
            </li>
            )
        })}
      </ul>
      </Fragment>
      )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeInputValue(e){
      const action = creators.changeInputValue(e.target.value);
      dispatch(action)
    },
    handleClick(){
      const action = creators.changelistValue();
      dispatch(action)
    },
    handleDelete(index){
      const action = creators.deleteitem(index);
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);