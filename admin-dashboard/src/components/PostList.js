import React  from 'react'
import {List,Datagrid,DateField ,TextField,DeleteButton,EditButton} from 'react-admin'
//import TextField from '@material-ui/core/TextField';

const PostList = (props) => {

    return (
        
      <List {...props}>
      <Datagrid>
      <TextField  source = "id" />
      <TextField  source = "title" />
      <DateField  source = "publishedAt" />
      <EditButton basepath= "/posts"/>
      <DeleteButton  basepath= "/posts"/>
     
</Datagrid > 

        </List>
    )
}
export default PostList;