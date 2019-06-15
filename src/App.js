import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';

const App = () => {
  return (
    <React.Fragment>
      <Typography align="center" variant="h2" gutterBottom>
      To-Do App
      </Typography>

      <Grid container justify="center">
        <Grid item>
          <TodoForm
            
          />
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item md={6}>
          {/*<TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
          />*/}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}



export default App;
