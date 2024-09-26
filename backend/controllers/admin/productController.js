export function addProduct (){
    try {
        
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in addProduct admin controller.", error.message);
    }
}