
enum FileType {
    NONE,
    PT_AUDIO,
    PCP_AUDIO,
    DO_PDF,
    CN_PDF,
    SNS_FILE
}
enum FileFormat {
    AUDIO,
    PDF,
    TEXT,
    HTML
}

enum Action {
    NONE,
    READ,
    WRITE,
    DOWNLOAD,
    UPLOAD,
    METADETA
}


interface FileInterface {
    name: string
    location: string
    type: FileType,
    format: FileFormat
}

interface ActionResult {
    status: string,
    message?: string,
    data?: object
}


abstract class FileHandler {
    abstract action(file: FileInterface, action: Action) : ActionResult
}

class FileReaders extends FileHandler {
    
    read(file: FileInterface) : ActionResult {
        try{

            //Check File existence
            if(!file.location) return {status: 'error', message:'File does not exists'}

            switch(file.format){
                case FileFormat.AUDIO : {
                    return {status: 'success', message:'File is now Playing'}
                }
                case FileFormat.PDF : {
                    return {status: 'success', message:'File is now Viewing'}
                }
                default : return {status: 'error', message:'Invalid File'}
            }
        }
        catch(error){
            throw new Error("Something(s) went wrong while File reading")
        }
    }

    action(file: FileInterface, action: Action): ActionResult {

        try{
            
            switch(action){
                case Action.READ: return this.read(file) 
                case Action.METADETA: return {status:'success', message:'Now you are viewing meta-data'}
                default : return {status: 'error', message:'Invalid Action'} ;
            }
        }
        catch(error: any){
            return {status: 'error', message: error.message}
        }
    }

}
class FileDownloader extends FileHandler {
    
    download(file: FileInterface) : ActionResult {
        try{

            //Check File existence
            if(!file.location) return {status: 'error', message:'File does not exists'}

            switch(file.format){
                case FileFormat.AUDIO : {
                    return {status: 'success', message:'Audio is now Downloading...'}
                }
                case FileFormat.PDF : {
                    return {status: 'success', message:'PDF is now Downloading...'}
                }
                default : return {status: 'error', message:'Invalid File'}
            }
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }

    action(file: FileInterface, action: Action): ActionResult {

        try{
            
            switch(action){
                case Action.DOWNLOAD: return this.download(file) 
                case Action.METADETA: return {status:'success', message:'Now you are downloading meta-data'}
                default : return {status: 'error', message:'Invalid Action'} ;
            }
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
}
class FileUploader extends FileHandler {
    upload(file: FileInterface) : ActionResult {
        try{

            //Check File existence
            if(!file.location) return {status: 'error', message:'File does not exists'}

            switch(file.format){
                case FileFormat.AUDIO : {
                    return {status: 'success', message:'Audio is now Uploading...'}
                }
                case FileFormat.PDF : {
                    return {status: 'success', message:'PDF is now Uploading...'}
                }
                default : return {status: 'error', message:'Invalid File'}
            }
        }
        catch(error){
            throw new Error("Something(s) went wrong while File reading")
        }
    }

    action(file: FileInterface, action: Action): ActionResult {

        try{
            
            switch(action){
                case Action.UPLOAD: return this.upload(file) 
                case Action.METADETA: return {status:'success', message:'Now you are uploading meta-data'}
                default : return {status: 'error', message:'Invalid Action'} ;
            }
        }
        catch(error: any){
            throw new Error(error.message)
        }
    }
}

const Files = {
    [Action.READ]: new FileReaders(),
    [Action.DOWNLOAD]: new FileDownloader(),
    [Action.UPLOAD]: new FileUploader(),
}



const audioFiles = Files[Action.READ]

try{

    console.log(
        audioFiles.action({
            name:"Patient Audio",
            location:"E:/PT/1.mp3",
            type: FileType.DO_PDF,
            format: FileFormat.PDF
        }, Action.READ)
    )
}
catch(error: any){
    console.log(error)
}





// const audioFiles = new FileDownloader()

// try{

//     console.log(
//         audioFiles.action({
//             name:"Patient Audio",
//             location:"E:/PT/1.mp3",
//             type: FileType.DO_PDF
//         }, Action.DOWNLOAD)
//     )
// }
// catch(error: any){
//     console.log(error)
// }
