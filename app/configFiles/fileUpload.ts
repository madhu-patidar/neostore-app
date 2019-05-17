//Setup for uploading files for user
import  multer from 'multer'               //Importing multer npm package
import path from 'path'                    //Importing path npm package

    //Storing file on disk
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
      cb(null, path.resolve('uploads/'));
   },
    filename: (req, file, cb)=>{
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
  });
  
  const upload = multer({
    storage: storage
  });

  //Exporting upload for other files to use it.
  export default upload;
  
