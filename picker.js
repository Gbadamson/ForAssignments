const fs = require("fs")
const path = JSON.parse(fs.readFileSync(`${__dirname}/db.json`))

exports.DataG=(req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `this is providing us all our data`,
        activity: "We are fetching some data",
        data : {
            path
        }
    })
    next()
}
exports.DataSg =(req, res, next)=>{
    id = req.params.id *1
    Data = path.find(el=>el.id=== id)
    res.status(200).json({
        success: true,
        msg: `this is getting this ${req.params.id} data`,
        activity: " we are getting a particular data",
        data: {
            Data
        }
    })
    next()
}

exports.DataPo=(req, res, next)=>{
    const newID = path[path.length -1].id + 1
    const newFile = Object.assign({id:newID}, req.body)
    path.push(newFile)
    fs.writeFile(`${__dirname}/db.json`, JSON.stringify(path), err=>{
        res.status(201).json({
            succes:true,
            msg: `we are posting ${req.params.id} to the data base`,
            data: {
                newFile
            }
        })
    })
//     res.status(200).json({
//         success: true,
//         msg: `this is posting this ${req.params.id} data`,
//         activity: " we are posting a particular data"
//     })
//     next()
 }

exports.DataPu=(req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `this is editing this ${req.params.id} data`,
        activity: " we are editing a particular data"
    })
}

exports.DataD =(req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `this is deleting this ${req.params.id} data`,
        activity: " we are deleting a particular data"
    })
}