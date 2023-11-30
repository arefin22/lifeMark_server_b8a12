const { Schema, default: mongoose } = require('mongoose')

// const {_id, bannerName, bannerImg, bannerTitle, couponCodeName, couponRate, isActive, bannerDescription } = banner
const BannerSchema = new Schema({
    bannerName: {
        type:String,
    },
    bannerImg : {
        type:String,
    },
    bannerTitle : {
        type:String,
    },
    couponCodeName:{
        type: String,
    },
    couponRate:{
        type:Number,
    },
    bannerDescription:{
        type:String,
    },
    isActive:{
        type:String,
    },
})

const Banner = mongoose.model('Banner', BannerSchema)

module.exports = Banner;