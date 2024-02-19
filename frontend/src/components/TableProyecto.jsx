import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const styles= makeStyles({
    tablaEstilo: {
        maxWidth: 900,
        justifyItems:"center",
        marginLeft:"30px",
        width: "900px",
        borderBottom: "10px s",
        
    }
})

export function TableProyecto({ proyecto }) {

    const classes= styles();
    const navigate = useNavigate()

  return (

        <div>
            <div style={{ textAlign: "center"}}>
                <h1>Lista de Proyectos</h1>
                <p>Para poder modificar o eliminar algun proyecto. Dele click encima del nombre del proyecto!</p>
            </div>
            
            <Grid container style={{ justifyContent: "center" }}>
                <Grid  item xs={12} md={8}>
                <TableContainer>
                <Table className={classes.tablaEstilo}>
                <TableHead>
                    <TableRow>
                        <TableCell>Proyecto</TableCell>
                        <TableCell>Cliente</TableCell>
                        <TableCell>Ubicación</TableCell>
                        <TableCell>Estatus</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {proyecto.map((proyecto) => (
                        <TableRow key={proyecto.id}
                        
                        onClick={() => {
                            navigate(`/proyecto/${proyecto.id}`) //Este evento nos permite ir al formulario donde sera modificado o eliminado el registro.
                        }}
                        >
                        <TableCell>{proyecto.nomProyecto}</TableCell>
                        <TableCell>{proyecto.nomCliente}</TableCell>
                        <TableCell>{proyecto.ubicacion}</TableCell>
                        <TableCell>{proyecto.estatus}</TableCell>
                    </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Grid>
           
            </Grid>
        </div>
        );
}

