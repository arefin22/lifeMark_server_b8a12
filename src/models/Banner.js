const { Schema, default: mongoose } = require('mongoose')

// const {_id, bannerName, bannerImg, bannerTitle, couponCodeName, couponRate, isActive, bannerDescription } = banner
const BannerSchema = new Schema({
    bannerName: {
        type:String,
        required :true
    },
    bannerImg : {
        type:String,
        required:true
    },
    bannerTitle : {
        type:String,
        required: true
    },
    couponCodeName:{
        type: String,
        required:true
    },
    couponRate:{
        type:Number,
        required:true
    },
    bannerDescription:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        enum: ["true", "false"],
        required:true
    },
})

const Banner = mongoose.model('Banner', BannerSchema)

module.exports = Banner;