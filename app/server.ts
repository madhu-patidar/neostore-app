import app from './app'
import {PORT} from './configFiles/environment_variables'
//const PORT=process.env.PORT||5000

//Server is running on PORT 5000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})