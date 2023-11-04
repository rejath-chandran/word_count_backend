
import insight from './insights.js' 


const addRoutes=(app)=>{
    app.use('/v1',insight)
}

export default addRoutes