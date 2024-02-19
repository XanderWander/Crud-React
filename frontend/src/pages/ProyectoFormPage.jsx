import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { creacionProyecto, eliminarProyecto, getProyecto ,updateProyecto } from "../api/proyecto.api"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function ProyectoFormPage() {
  const { 
    register, 
    handleSubmit,        //Esta const es para poder registrar, manejar los datos y detectar los errores al momento de mandarlo por el Form
    formState:{ errors },
    setValue
   } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => { //Aqui recibe los datos ingresado en el formulario ya sea actualizacion o registro
    if(params.id) {
      await updateProyecto(params.id, data) 
      toast.success('Proyecto Actualizado',{  //En caso de modificacion se tomara en cuenta es condicion
        position: "top-right",
        style: {
          background: "#9DE795",
          color: "#000000"
        }
      })
    } else{
      await creacionProyecto(data); //En caso de registrar un registro se tomara en cuenta esta condicion
      toast.success('Proyecto registrado',{
        position: "top-right",
        style: {
          background: "#9DE795",
          color: "#000000"
        }
      })
    }

    navigate("/proyecto");
  });

  useEffect(() => {
    async function loadProyecto() { //Esta funcion nos mostrara los datos en el formulario donde se modificaran los datos.
      if (params.id) {
       const {
        data: { nomProyecto, nomCliente, ubicacion, estatus },
       } = await getProyecto(params.id);
       setValue("nomProyecto", nomProyecto)
       setValue("nomCliente", nomCliente)
       setValue("ubicacion", ubicacion)
       setValue("estatus", estatus)
      }
    }
    loadProyecto();
  }, []);
  

    return (
      <div className="container col-sm-6 col-md-6 col-lg-6" >
        <h1>Ingrese su Proyecto</h1>
        <form onSubmit={onSubmit}> {/* El Submit recibiera los datos y los mandara a la const onSubmit*/}
          
          <div className="form-group">
            <label className="form-label">Nombre del Proyecto</label>
            <input 
              className="form-control"
              type="text" 
              placeholder="Proyecto"
              {...register("nomProyecto", { required: true })} 
              />

            {errors.nomProyecto && <span>Campo requerido</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Nombre del Cliente</label>
            <input 
              className="form-control"
              type="text" 
              placeholder="Cliente" 
              {...register("nomCliente", { required: true })} 
              />

            {errors.nomCliente && <span>Campo requerido</span>}
          </div>

        <div className="form-group">
          <label className="form-label">Ubicacion</label>
          <input 
          className="form-control"
            type="text" 
            placeholder="Ubicacion"
            {...register("ubicacion", { required: true })} 
            />

          {errors.ubicacion && <span>Campo requerido</span>}

        </div>

        <div className="form-group">
          <label className="form-laber">Estatus del Proyecto</label>
          <select 
          className="form-select" aria-label="Default select example"
          {...register("estatus", { required: true })}>
            <option value="">Seleccione el Estatus</option>
            <option value="En Curso">En Curso</option>
            <option value="Stand By">Stand By</option>
            <option value="Terminado">Terminado</option>
          </select>

          <button className="btn btn-outline-success">Guardar</button>
        </div>
          
          
        </form>

        {params.id && 
        <button 
          onClick={async () => {
            const acepto = window.confirm('Estas Seguro de eliminar este proyecto?');
              if (acepto) {
                await eliminarProyecto(params.id);
                toast.success('Proyecto Eliminado',{ //En caso eliminar el proyecto, se tomara en cuenta esta funcion se mostrara el boton de Eliminar si existe los datos.
                  position: "top-right",    //Esta funcion aparece cuando va modificar el registro.
                  style: {
                    background: "#9DE795",
                    color: "#000000"
                  },
          });
          navigate("/proyecto");
        }
        }}
        className="btn btn-outline-danger"
        >
        Eliminar</button>}
      </div>
    )
  }
  