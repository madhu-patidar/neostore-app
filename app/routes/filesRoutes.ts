import postFilesinPostgreSQL from '../controllers/files/postFiles/postFiles(PostgreSQL)'
import getAllFiles from '../controllers/files/getFiles/getAllFiles(PostgreSQL)'
import postFileInMongo from '../controllers/files/postFiles/postFiles(MongoDB)'
import getAllFilesFromMongo from '../controllers/files/getFiles/getAllFiles(MongoDB)'
import deleteAllFiles from '../controllers/files/deleteFiles/deleteFiles(PostgreSQl)'
import deleteAllFilesFromMongo from '../controllers/files/deleteFiles/deleteFiles(MongoDB)'
import upload from '../configFiles/fileUpload'

export class FilesRoutes{

    public routes(app:any):void{

         app.route('/files')
        .post(upload.array('multiple_files',12),postFilesinPostgreSQL)

        app.route('/filesInMongo')
        .post(upload.array('multiple_files',12),postFileInMongo)

        app.route('/getFiles')
        .get(getAllFiles)

        app.route('/getFilesFromMongo')
        .get(getAllFilesFromMongo)

        app.route('/deleteAllFiles')
        .delete(deleteAllFiles)

        app.route('/deleteAllFilesFromMongo')
        .delete(deleteAllFilesFromMongo)
    }
}