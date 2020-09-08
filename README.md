## 这个小项目是用来学习react-redux的基本用法。
> 1.  使用官方脚手架`create-react-app`构建。  
> 2. 使用react-redux要先安装依赖`react-redux`、`redux`。    
> 3. 项目主文件使用`react-redux`的 `Provider`组件：import { Provider } from 'react-redux' ：然后使用Provider组件包装TodoLIst组件，并将store传入。  
> 4. 然后在包装的TodoList组件中引入`react-redux`的`connent` 方法：import { connect } from 'react-redux'   
> > 关于这个connect方法关键的一行代码是：export defaut connent(mapStateToProps,mapDispatchToProps)(TodoList)    
> 5. 最后就是关于store的文件拆分管理，首先在store主文件中需要引入`redux`中的`createStore`方法：import  { createStore } from 'redux'。其次这个createStore需要传入一个reducer，reducer中的内容是通过一些处理返回的state。 
