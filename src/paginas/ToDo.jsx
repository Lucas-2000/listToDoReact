import { Card, CardContent, CardHeader, Container, Grid, IconButton, InputBase, Typography } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState, useEffect } from 'react'

const useStyles = makeStyles({
    input: {
        borderStyle: 'solid',
        borderRadius: '10px',
        borderColor: 'violet',
        width: '400px',
        '&:hover': {
            backgroundColor: 'violet'
        }
    },
    card: {
        minWidth: '500px',
        marginTop: '50px',
        backgroundColor: 'khaki'
    },
    typo: {
        marginTop: '20px',
        borderBottom: 'solid'
    }
})

const ToDo = () => {
    const classes = useStyles()

    const [tarefaList, setTarefaList] = useState([])

    const [tarefa, setTarefa] = useState('')

    {/* const handleAdd = () => {
        setTarefa([...tarefa, { name: tarefa , id: Math.random() }])
    }*/}

    const handleAdd = () => {
        setTarefaList([tarefa].concat(tarefaList))
        setTarefa('')
    }

    return (
        <Container>
            <Grid container justifyContent="center">
                <Card elevation={10} className={classes.card}>
                    <Grid container justifyContent="center">
                        <CardHeader
                            title="Lista de coisas para fazer"
                            subheader="Insira e controle a baixo sua lista de coisas"
                        />
                    </Grid>
                    <Grid container justifyContent="center">
                        <CardContent>
                            <InputBase
                                placeholder="Insira alguma tarefa"
                                autoFocus="true"
                                value={tarefa}
                                className={classes.input}
                                onChange={e => setTarefa(e.target.value)}
                                startAdornment={
                                    <IconButton onClick={handleAdd}>
                                        <Add />
                                    </IconButton>
                                }
                            />
                            {tarefaList.map((tarefas) => (

                                <Typography variant="h5" className={classes.typo}>
                                    {tarefas}
                                </Typography>

                            ))}
                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        </Container>
    )
}

export default ToDo
